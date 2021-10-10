import React,{useState,useEffect} from 'react'
import { Header } from '../../tools/header/header'
import { Footer } from '../../tools/footer/footer'
import "./main.css"
import Axios from 'axios';
import img from "../../img/vcet.jpg"
import img1 from "../../img/filter.png"
import ReactLoading from "react-loading";
export const Main = () => {
    const [list,setList]=useState([]);
    const [location, setLocation] = useState("");
    const [branch, setBranch] = useState("");
    const [rank, setRank]= useState("");
    const [type, setType]= useState("");
    const [rate, setRate]= useState("");
    const [isSubmit,setsubmit]= useState(false);
    const [isCheck,setCheck]= useState(false);

    useEffect(()=>{
   
        Axios.get("/det").then((response)=>{
          setList(response.data);
          console.log(response.data);
         
          
        });
        
    },[]);

    function submit(e){
        e.preventDefault();
        setsubmit(true);
        console.log(location,branch,rank);
        Axios.get("/imp",{
      params:{
        location:location
      }
    }).then((response)=>{
      setList(response.data);
     setsubmit(false);
     setCheck(true);
    
    });
        // setBranch("");
        //  setLocation("");
        // setRank("");
        
    }

    return (
        
        <React.Fragment>
            {/* {console.log(list)} */}
            <div className="">
            <div>
                <Header />
            </div>
            {isSubmit? <div className="loader">
                <ReactLoading  type={"spin"} color={"#66dd11"} height={200} width={200}/>
            </div>
            :null}
            <div className=" w-100 h-50">
                <div className="th">

                    {/* <--Filter--> */}
                    <div className="t1 ">
                        <img src= {img1} className=" ico mb-3 "></img>
                        <h1 className="st pr">Filters</h1>
                        <hr></hr>
                        <form className=" mx-auto" onSubmit={submit}>
                            <div className="row">
                                <div className=" col-lg-4 col-md-4 col-sm-6">
                                <div class=" form-group">
                                <label for="exampleInput"><h5 className="st med">Location<span className="text-danger">*</span></h5></label>
                                <input type="text" required value={location} class="form-control mb-3 border-dark" onChange={(e)=>setLocation(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a location"/>
                            </div>
                                </div>
                                <div className=" col-lg-4 col-md-4 col-sm-6">
                                <div className="form-group">
                                <label for="exampleInput"><h5 className="st med">Type</h5></label>
                                <div class="input-group  mb-3">
                                {isCheck?
                                <select class=" form-select w-100 border-dark rounded" data-size="10" value={type} onChange={(e)=>setType(e.target.value)}  id="inputGroupSelect02">
                                <option value="" selected>Select Type...</option>
                                <option value="Private">Private</option>
                                <option value="Public/Government">Public/Government</option>
                            </select>:
                            <select class=" form-select w-100 rounded"data-size="10" disabled value={type} onChange={(e)=>setType(e.target.value)}  id="inputGroupSelect02">
                            <option value="" selected>Select Type...</option>
                            <option value="Private">Private</option>
                            <option value="Public/Government">Public/Government</option>
                        </select>
                            }
                            </div>
                            </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="form-group">
                                <label for="exampleInput"><h5 className="st med">Rating</h5></label>
                                <div class="input-group  mb-3">
                                {isCheck?
                                <select class="form-select w-100 border-dark rounded" value={rate} onChange={(e)=>setRate(e.target.value)}  id="inputGroupSelect02">
                                <option selected>Select Rating...</option>
                                <option value="AAA+ (Good)">AAA+</option>
                                <option value="AAAA (Very Good)">AAAA</option>
                                <option value="AAAA+ (Outstanding)">AAAA+</option>
                                <option value="AAAAA (Exceptional)">AAAAA</option>
                            </select>:

                                <select class="form-select w-100 rounded"  disabled value={rate} onChange={(e)=>setRate(e.target.value)}  id="inputGroupSelect02">
                                    <option selected>Select Rating...</option>
                                    <option value="AAA+ (Good)">AAA+</option>
                                    <option value="AAAA (Very Good)">AAAA</option>
                                    <option value="AAAA+ (Outstanding)">AAAA+</option>
                                    <option value="AAAAA (Exceptional)">AAAAA</option>
                                </select>
                                }
                            </div>
                            </div>
                                </div>
                                {/* <div className="col-lg-3 col-md-3 col-sm-6">
                                <div class="form-group">
                                <label f><h5 className="st">Your Rank</h5></label>
                                <input type="text" value={rank} class="form-control mb-3 border-dark" onChange={(e)=>setRank(e.target.value)} id="exampleInputEmail1" placeholder="JEE Rank"/>
                            </div>
                                </div> */}
                            </div>
  
                            <button type="" class="btn btn-warning">Submit</button>
                        </form>
                    </div>

                    {/* <--Recommendations--> */}
                    <div className="mt-5">
                        <h1 className="st pi">Recommendation</h1>
                        <hr></hr>
                        <div>
                            <div className="row m-3 ">
                                {/* <h1>{list[1].fees}</h1> */}
                            {list.map((val,key)=>{
                                if(type==="" && rate===""){
                                    return(
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="bd m-4 p-1">
                                            <div>
                                                <img src= {val.img==null?img:val.img} className="clgimg"></img>
                                            </div>
                                            <div>
                                                {/* <h6 className="">Vidyavardhini College of Engineering and Technology</h6> */}
                                                <h6 className="st bl">{val.name==""?"Loading":val.name}</h6>
                                            </div>
                                            <div>
                                                <p className="st med">{val.add==""?"loading":val.add}</p>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-6">
                                                    <p className="st med">{val.type==""?"loading":val.type}</p>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-6">
                                                    <p className="st rat med">{val.rating==""?"loading":val.rating}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-6">
                                                    <p className="st med">B.E/B.Tech</p>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-6">
                                                    <p className="st med">{val.fees==""?"loading":val.fees}</p>
                                                </div>
                                            </div>
                                        </div>
                
                                    </div>
                                        ); 
                                }
                                else{
                                    if(rate!=null && type==null){
                                        if(rate==val.rating){
                                            return(
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="bd m-4 p-1">
                                                    <div>
                                                        <img src= {val.img==null?img:val.img} className="clgimg"></img>
                                                    </div>
                                                    <div>
                                                        {/* <h6 className="">Vidyavardhini College of Engineering and Technology</h6> */}
                                                        <h6 className="st bl">{val.name==""?"Loading":val.name}</h6>
                                                    </div>
                                                    <div>
                                                        <p className="st">{val.add==""?"loading":val.add}</p>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <p className="st">{val.type==""?"loading":val.type}</p>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <p className="st bl">{val.rating==""?"loading":val.rating}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <p className="st">B.E/B.Tech</p>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <p className="st">{val.fees==""?"loading":val.fees}</p>
                                                        </div>
                                                    </div>
                                                </div>
                        
                                            </div>
                                                );
                                        }else{
                                            return null;
                                        }
                                        
                                    }
                                    else if(type!=null && rate==null){
                                        if(val.type==type){
                                            return(
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="bd m-4 p-1">
                                                    <div>
                                                        <img src= {val.img==null?img:val.img} className="clgimg"></img>
                                                    </div>
                                                    <div>
                                                        {/* <h6 className="">Vidyavardhini College of Engineering and Technology</h6> */}
                                                        <h6 className="st bl">{val.name==""?"Loading":val.name}</h6>
                                                    </div>
                                                    <div>
                                                        <p className="st">{val.add==""?"loading":val.add}</p>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <p className="st">{val.type==""?"loading":val.type}</p>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <p className="st bl">{val.rating==""?"loading":val.rating}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <p className="st">B.E/B.Tech</p>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <p className="st">{val.fees==""?"loading":val.fees}</p>
                                                        </div>
                                                    </div>
                                                </div>
                        
                                            </div>
                                                );
                                        }
                                         else{
                                             return null;
                                         }   
                                    }
                                    else{
                                        if(val.type==type && val.rating==rate){
                                            return(
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="bd m-4 p-1">
                                                    <div>
                                                        <img src= {val.img==null?img:val.img} className="clgimg"></img>
                                                    </div>
                                                    <div>
                                                        {/* <h6 className="">Vidyavardhini College of Engineering and Technology</h6> */}
                                                        <h6 className="st bl">{val.name==""?"Loading":val.name}</h6>
                                                    </div>
                                                    <div>
                                                        <p className="st">{val.add==""?"loading":val.add}</p>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <p className="st">{val.type==""?"loading":val.type}</p>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <p className="st bl">{val.rating==""?"loading":val.rating}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <p className="st">B.E/B.Tech</p>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <p className="st">{val.fees==""?"loading":val.fees}</p>
                                                        </div>
                                                    </div>
                                                </div>
                        
                                            </div>
                                                );
                                        }else{
                                            return null;
                                        }
                                    }
                                }
                                
             
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>

            </div>
        </React.Fragment>
        
    )
}