const request=require("request")
const cheerio=require("cheerio")
const express=require("express");
const app=express();
const path =require('path');
require("dotenv").config();
const port = process.env.PORT || 3001;
const cors=require("cors");
console.log(path.join("./build","index.html"))
// app.use(express.static(path.join(__dirname,"./frontend/build")))
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// .facetContent 
app.get("/det",async(req,res)=>{
  const url="https://engineering.careers360.com/colleges/list-of-engineering-colleges-in-india"
   request(url,cb);
  let list=[]
  let cinlist=0;
 let logo;
  function cb(err,response,html){
  if(err){
      // console.log(err)
  }else{
     extractHtml(html);
    //  console.log(list)
    // res.send(list)
  //    console.log(html);
 
  }

 

}
 function extractHtml(html){

let $=cheerio.load(html);


let clgArr=$(".facetContent .cardBlk");

let i=0;
 for(;i<clgArr.length;i++){
  
  if($(clgArr[i]).hasClass("featured")){
  // Don't want to show this to user
  }
  else{

   let name= $(clgArr[i]).find(".content").find(".blockHeading").text()
   
 
   let detarr=[]
  $(clgArr[i]).find(".rank li").each(function(i, elm) {
     detarr.push($(this)) // for testing do text() 
     //console.log(detarr[i].text())
  });
  // console.log(detarr[detarr.length-2].text());
   if(name.includes("Polytechnic"))
   {
           // Don't want to show this to user
   }
   else{
    // getMore($(clgArr[i]).find(".content").find(".blockHeading").find("a").attr("href"))
  list.push({
    url:$(clgArr[i]).find(".content").find(".blockHeading").find("a").attr("href"),
    name:name, 
    rating:$(clgArr[i]).find(".ratingThumb .rating span").text(),
    img:$(clgArr[i]).find(".ratingThumb .thumb img").attr("src"),
    add:detarr[0]!=null?detarr[0].text():"",
    type:detarr[1]!=null?detarr[1].text():"",
    fees:detarr[detarr.length-2]!=null && detarr[detarr.length-2].text().includes("Fees") ?detarr[detarr.length-2].text():"",
    // logo:logo
  });
  
  
   

  }
}
}


  res.send(list);


 
}





});
app.get("/imp",async(req,res)=>{
    const location=req.query.location;
    console.log("Location is :",location)
  
    let more=false;
   const url=`https://engineering.careers360.com/colleges/list-of-engineering-colleges-in-${location}`
    await request(url,cb);
    let list=[]
        function cb(err,response,html){
        if(err){
            console.log(err)
        }else{
           extractHtml(html);
        //    console.log(html);
       
        }
      
       

    }
    function extractHtml(html){

      let $=cheerio.load(html);
      let links=[];
      let isPagination=$(".pagination .pagiInn .page-link");
      if(isPagination!=null){
        console.log("length is:",isPagination.length);
       
        for(let i=0;i<isPagination.length;i++){
          links.push(url+$(isPagination[i]).attr("href"));
         
        }
        console.log(links);
      }
      
    let clgArr=$(".facetContent .cardBlk");
    
    console.log(typeof(clgArr));
       for(let i=0;i<clgArr.length;i++){
        if($(clgArr[i]).hasClass("featured")){
        // Don't want to show this to user
        }
        else{
   
         let name= $(clgArr[i]).find(".content").find(".blockHeading").text()
         let detarr=[]
         $(clgArr[i]).find(".rank li").each(function(i, elm) {
            detarr.push($(this)) // for testing do text() 
            //console.log(detarr[i].text())
         });
        
         if(name.includes("Polytechnic"))
         {
                 // Don't want to show this to user
         }
         else{
        list.push({
          url:$(clgArr[i]).find(".content").find(".blockHeading").find("a").attr("href"),
          name:name, 
          rating:$(clgArr[i]).find(".ratingThumb .rating span").text(),
          img:$(clgArr[i]).find(".ratingThumb .thumb img").attr("src"),
          add:detarr[0]!=null?detarr[0].text():"",
          type:detarr[1]!=null?detarr[1].text():"",
          fees:detarr[detarr.length-2]!=null && detarr[detarr.length-2].text().includes("Fees") ?detarr[detarr.length-2].text():"",

        });
       
        }
    }
    }
        let j=0;
        for(;j<links.length;j++){
          more=true;
          getMore(links[j],j,links.length);
        }
        if(!more) {
          console.log(list[0])
          res.send(list);
        }
      //  console.log(list)
       
    }
    function getMore(url,j,n){
      request(url, cb);
      function cb (err, response, html) {
        if (err) {

        } else {
            extractMore(html,j,n);
        }
    }
    }
   function extractMore(html,j,n){
      let $=cheerio.load(html);
      let moreArr=$(".facetContent .cardBlk");
    
      //    console.log(cityArr);
      for(let i=0;i<moreArr.length;i++){
        if($(moreArr[i]).hasClass("featured")){
        // Don't want to show this to user
        }
        else{
   
         let name= $(moreArr[i]).find(".content").find(".blockHeading").text()
         let detarr=[]
         $(moreArr[i]).find(".rank li").each(function(i, elm) {
            detarr.push($(this)) // for testing do text() 
            //console.log(detarr[i].text())
         });
        
         if(name.includes("Polytechnic"))
         {
                 // Don't want to show this to user
         }
         else{
        list.push({
          url:$(moreArr[i]).find(".content").find(".blockHeading").find("a").attr("href"),
          name:name, 
          rating:$(moreArr[i]).find(".ratingThumb .rating span").text(),
          img:$(moreArr[i]).find(".ratingThumb .thumb img").attr("src"),
          add:detarr[0]!=null?detarr[0].text():"",
          type:detarr[1]!=null?detarr[1].text():"",
          fees:detarr[detarr.length-2]!=null && detarr[detarr.length-2].text().includes("Fees") ?detarr[detarr.length-2].text():"",

        });
       
        }
    }
    }
         if(j==n-1){
          console.log(list)
          res.send(list);
         }
        
    }

  
    
})
app.get("/extras",async(req,res)=>{
  const url=req.query.url;
  // console.log("already running url/:",url);
 
  request(url,cb);
  function cb(err,response,html){
    if(err){
      // console.log(err)
  }else{
     extractHtml(html);
     
 
  }
   }
  function extractHtml(html){
    let $=cheerio.load(html);
    // console.log($(".thumb").find("img").attr("src"))
    let b=($(".thumb").find("img").attr("src"));
    res.send(b);
  }
});
app.use(express.static(path.join(__dirname,"build")))
app.get("*",(req,res)=>{
  console.log("its been hit")
  res.sendFile(path.join(__dirname,"build","index.html"))
  
});

app.listen(port,()=>{
        console.log("Server running at port 3001");
});
