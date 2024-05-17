import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Hero from './Hero'
import ChartComp from './ChartComp'


const Home = () => {
  return (
    <div>
    <div className="container-fluid sidebar">
        <div className="row">
            <div className="col-md-1">
            <Sidebar/>

            </div>
            <div className="col-md-11 main">
                <Navbar/>
                    <ul class="nav pt-5 pr nav-underline">
                    <li class="nav-item">
                        <a class="nav-link active mx-3" aria-current="page" href="#">Market Analysis</a>
                    </li>
                    <li class="">
                        <a class="nav-link text-black" href="#">Performance</a>
                    </li>
                    
                    </ul>
               <Hero/>
           
            </div>

        </div>
    </div>
      
    </div>
  )
}

export default Home
