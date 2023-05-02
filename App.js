
import React from 'react'
import {BsFillCartCheckFill} from "react-icons/bs";
import './App.css';


const App = () => {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
        <div class="card mb-3" >
  <div class="row no-gutters ">
    <div class="col-lg-7 col-md-12 col-sm-12 col-xm-12">
      <img src="Images\chanel.jpg" alt="..."/>
    </div>
    <div class="col-lg-5 col-md-12 col-sm-12 col-xm-12">
      <div class="card-body">
        <h5 class="card-title">PERFUME</h5>
        <p class="card-text1">Gabrielle <br/>
        Essence Eau <br/>
         De Parfum .</p>
        <p class="card-text2"><small class="text-muted"> A floral, solar and voluptuous  <br/>interpretation composed by<br/>
         Olivier Polge,
         Perfumer-Creator<br/>
          for the House of CHANEL</small></p>
         <div className='Price'>
         <h1>$149.99 </h1>
         <h5>$169.99</h5>
         </div>
         <div className='btn-Cart'>
         <button>Add to Cart</button>
         <div className='icon'><BsFillCartCheckFill/></div>
        
         </div>
         
         
      </div>
    </div>
  </div>
</div>














        </div>








      </div>

    </div>



  
   </>
  )
}

export default App
