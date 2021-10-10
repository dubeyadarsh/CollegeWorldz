import React from 'react'
import img from "../../img/logo2.png"
import "./header.css"
export const Header = () => {
    return (
        <React.Fragment>
            <nav class="navbar mb-3 np navbar-expand-lg navbar-dark bg-dark">
  <div class="">
    <div className="">
      <img src= {img} className=" logo "></img>
      <h1 className="title text-white">CollegeWorldz</h1>
    </div>

    
    
    
    
    
      
    
  </div>
</nav>
        </React.Fragment>
    )
}
