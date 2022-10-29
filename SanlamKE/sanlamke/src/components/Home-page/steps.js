import React, { Component } from 'react';
import $ from 'jquery';

class Steps extends Component{
    render(){
        return(
           <section class="steps-section">
                <div class="container">
                    <h1 class="d-flex justify-content-center steps-heading">How to Flexi Hela</h1>
                    <div class="row r1">
                        <div class="col p-1 fadeInUp">
                            <img class="d-flex justify-content-center" src={process.env.PUBLIC_URL+"Assets/select target Pixel 4 XL 6.png"}/>
                            <h3>Select goal</h3>
                            <p>If you do not aim at something, you will hit nothing</p>
                        </div>
                        <div class="col p-2 fadeInUp">
                            <img class="d-flex justify-content-center" src={process.env.PUBLIC_URL+"Assets/select target Pixel 4 XL 9.png"}/>
                            <h3>Create profile</h3>
                            <p>If you do not aim at something, you will hit nothing</p>
                        </div>
                        <div class="col p-3 fadeInUp">
                            <img class="d-flex justify-content-center" src={process.env.PUBLIC_URL+"Assets/select target Pixel 4 XL 10.png"}/>
                            <h3>Make payment</h3>
                            <p>If you do not aim at something, you will hit nothing</p>
                        </div>
                    </div> 
                    <div class="row r2">
                        <div class="col p-4 fadeInUp">
                            <img class="d-flex justify-content-center" src={process.env.PUBLIC_URL+"Assets/select target Pixel 4 XL 7.png"}/>
                            <h3>Add beneficiary</h3>
                            <p>If you do not aim at something, you will hit nothing</p>
                        </div>
                        <div class="col p-5 fadeInUp">
                            <img class=" d-flex justify-content-center" src={process.env.PUBLIC_URL+"Assets/select target Pixel 4 XL 8.png"}/>
                            <h3>OTP verification</h3>
                            <p>If you do not aim at something, you will hit nothing</p>
                        </div>
                    </div> 
                </div>        
           </section>
        );
    }
    
   
}
export default Steps;

function checkElementLocation() {
    var $window = $(window);
    var bottom_of_window = $window.scrollTop() + $window.height();
  
    $('.p-1, .p-2, .p-3, .p-4, .p-5').each(function(i) {
      var $that = $(this);
      var bottom_of_object = $that.position().top + $that.outerHeight();
  
      //if element is in viewport, add the animate class
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('fadeInUp');
      }
    });
  }
  // if in viewport, show the animation
  checkElementLocation();
  
  $(window).on('scroll', function() {
    checkElementLocation();
  });