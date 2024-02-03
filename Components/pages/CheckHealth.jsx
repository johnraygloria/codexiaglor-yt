import React from 'react';
import '../pages/CheckHealth.css';

import dominique from '../Assets/brgy1.png'
// import brgytwoagain from '../assets/brgy2.png'
// import brgythird from '../assets/brgy3.png';

import { Link } from 'react-router-dom';


import Nav from '../Navbar/navbartwo'

function Type () {
  return(
    <>
    <div className="Homepage">
        <Nav />
        </div>
       
    <div className='container_type'>
    <div className="second_search">
    <h1>Search again:</h1>
    <div className="third_search">
   <Link><input className="typemoko_second" type="text" placeholder="Type your healthcare center here." name="search2" /></Link>
    </div> 
    
    <p className="fourth_para">Let us take a look at what we have found:</p>


    <div className="tow_container">
      <div className="image_wrapper">

        <div className="column">
        <img className="brgy_mo" src={ dominique } alt="" />
        </div>

        <div className="column">
          <div className="location">
            <span className="title">Brgy. Matarin Healthcare Center</span>
            <div className="details">
              <div className="div_4">Location: Brgy. Matarin, Olongapo City, Zambales, Philippines</div>
              <div className="div_5">Offers: Counseling, Family Planning Methods, etc..</div>
            </div>
          </div>
        </div>
      </div>
  </div>


  <div className="third_container">
      <div className="image_wrapper_two">

        <div className="column">
        {/* <img className="brgy_mo_two" src={brgytwoagain} alt="" /> */}
        </div>

        <div className="column_tow">
          <div className="location_two">
            <span className="title_two">Brgy. Gordon Heights </span>
            <div className="details_two">
              <div className="div_4_two">Location: Brgy. Matarin, Olongapo City, Zambales, Philippines</div>
              <div className="div_5_two">Offers: Counseling, Family Planning Methods, etc..</div>
            </div>
          </div>
        </div>
      </div>
  </div>

  <div className="main_container_bahala">
     
  {/* <img className="brgy_mo_third" src={brgythird } alt="" /> */}

      <div className="center_name_haha">Brgy. Matarin Healthcare Center</div>
      <div className="location_bhala">
        Location: Brgy. Matarin, Olongapo City, Zambales, Philippines
      </div>
      <div className="offers_kay">
        Offers: Counseling, Family Planning Methods, etc..
      </div>
      <div className="number_kay">(63) 0912 010 2023</div>
      <div className="appointment_kay">Request an Appointment</div>
    </div>





</div>
</div>



</>
  );
}

export default Type;