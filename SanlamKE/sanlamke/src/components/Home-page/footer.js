import React, { Component } from "react";
import $ from 'jquery';
import { IconName } from "react-icons/fa";
import { BsTelephone} from 'react-icons/bs';
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'
import {createContext} from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {

    var bannerimgs=process.env.PUBLIC_URL+"Assets/banner1.jpg";

    const [dataChange, setdataChange] = useState(0);
  useEffect(() => {
    const reviewdataChange = setInterval(() => {
      setdataChange((t) => t + 1);
    }, 5000);
    return () => {
      clearInterval(reviewdataChange);
    };
  }, []);

  console.log(dataChange);

  if(dataChange == 1){
    bannerimgs = process.env.PUBLIC_URL+"Assets/banner1.jpg";
  }
  else if(dataChange == 2){
    bannerimgs = process.env.PUBLIC_URL+"Assets/banner2.jpg";
  }
  else if(dataChange == 3){
    bannerimgs = process.env.PUBLIC_URL+"Assets/banner3.jpg";
  }
  else if(dataChange == 4){
    bannerimgs = process.env.PUBLIC_URL+"Assets/banner4.jpg";
  }
  else if(dataChange == 5){
    bannerimgs = process.env.PUBLIC_URL+"Assets/banner1.jpg";
  }
  else if(dataChange == 6){
    bannerimgs = process.env.PUBLIC_URL+"Assets/banner2.jpg";
  }
  else if(dataChange == 7){
    bannerimgs = process.env.PUBLIC_URL+"Assets/banner3.jpg";
  }
  else{
    bannerimgs = process.env.PUBLIC_URL+"Assets/banner4.jpg";
  }

        return (
            <section class="footer">
                
                <div class="container">
                    <div class="row f-row" id="footer-row">
                        <div class="col f-col1">
                            <a href="#"><img class="img-fluid footer-logo d-flex justify-content-start" src={process.env.PUBLIC_URL+"Assets/sanlam-logo-footer.png"}/></a><br/>
                            <span class="phone-no  f-nav-item"><Icon name='phone' />0860726526</span><br/><br/>
                            <a href="mailto:info.sanlam.ac.ke"><span class="email  f-nav-item"><Icon name='mail' />Email Us</span><br/><br/></a>
                            <span class="address  f-nav-item"><Icon name='location arrow' />Sanlam Head Office<br/> 2 Strand Road, Bellville</span><br/><br/> 
                            <span class=" f-nav-item"><Icon name='globe' />WorldWide</span> 
                        </div>
                        <div class="col" id="partner-col">
                            <span class="f-nav-item f-link"><h3>Partners</h3></span>
                            <hr class="hr-nav-item" />
                            <span class="phone-no  f-nav-item" ><Icon name='phone' />0787654321</span><br/><br/>
                            <span class="email  f-nav-item"><Icon name='mail' />Email</span><br/><br/>
                            <span class="address  f-nav-item"><Icon name='whatsapp' />0712345678</span><br/><br/> 
                        </div>
                        <div class="col-8">
                            <div className="banner-img">
                                <img class="img-fluid banner" src={bannerimgs}/>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
}

export default Footer;

function checkElementLocation() {
    var $window = $(window);
    var bottom_of_window = $window.scrollTop() + $window.height();
  
    $('.footer.container').each(function(i) {
      var $that = $(this);
      var bottom_of_object = $that.position().top + $that.outerHeight();
  
      //if element is in viewport, add the animate class
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('fadeInUp');
      }
    });
  }