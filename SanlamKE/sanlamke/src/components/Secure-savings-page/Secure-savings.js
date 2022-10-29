import React from "react";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import { Icon } from 'semantic-ui-react';

const SecureSavings = () =>{

    const termsCheckbox = () =>{
        if(document.getElementById('termsCheckbox').checked) { 
            console.log("Agreed to our terms and services.");
            setcheckPath("/Securefamily");
        } 
        else{
            alert("Please agree to our Terms and Services");
            checkPath = "/Secure-savings";
        }
    }
    

    function ValidateEmail(inputText)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.value.match(mailformat))
        {   //The pop up alert for a valid email address
            document.kyc.email.focus();
            return true;
        }
        else
        {
        alert("Please input a correct Email address!");    //The pop up alert for an invalid email address
        
        document.kyc.email.focus();
        checkPath="/Secure-savings";
        return false;
        }
    }

    const handleClickac = () => {
        document.getElementById('s-cardac').style.display='flex';
        document.getElementById('s-cardac').style.zIndex='1';
   };

   const handleClick4 = () =>{
    document.getElementById('s-cardac').style.display='none';
    document.getElementById('s-cardac').style.zIndex='-1';
  }

    const onLinkClick = () =>{
        fetch('/Brochure/Flexi Hela Collateral Key Facts - 1.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '/Brochure/Flexi Hela Collateral Key Facts - 1.pdf';
                alink.click();
            })
        })
    }

    const [checkPath, setcheckPath] = useState();

    const [value, setValue] = React.useState('Question');

    const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [inputValue, setInputValue] = useState();

    let onChange = (event) =>{
     const newValue = event.target.value;
     setInputValue(newValue);
    };

    const [inputValue1, setInputValue1] = useState();

    let onChange1 = (event) =>{
     const newValue = event.target.value;
     setInputValue1(newValue);
    };

    const [inputValue2, setInputValue2] = useState();

    let onChange2 = (event) =>{
     const newValue = event.target.value;
     setInputValue2(newValue);
    };

    const [inputValue3, setInputValue3] = useState();

    let onChange3 = (event) =>{
        const newValue = event.target.value;
        setInputValue3(newValue);
       };

    const [inputValue4, setInputValue4] = useState();

    let onChange4 = (event) =>{
        const newValue = event.target.value;
        setInputValue4(newValue);
       };

const handleClick = () => {
   
    if (inputValue == null || inputValue1 == null || inputValue2 == null || inputValue3 == null || inputValue4 == null) {
        alert("Fill in the fields appropriately!");
        setcheckPath("/Secure-savings");
     }
    else{
        ValidateEmail(document.kyc.email);
        termsCheckbox();
    }
  };

  var imgr1 = process.env.PUBLIC_URL+"Assets/Profile-img.png";
  var clientName = "Anne Nonymous";
  var review = "I started my journey last year and now i'm only two months away from reaching my goal";

  const [dataChange, setdataChange] = useState(0);
  useEffect(() => {
    const reviewdataChange = setInterval(() => {
      setdataChange((t) => t + 1);
    }, 6500);
    return () => {
      clearInterval(reviewdataChange);
    };
  }, []);

  console.log(dataChange);

    if(dataChange==1){
        imgr1 = process.env.PUBLIC_URL+"Assets/Profile-img.png";
        clientName = "Mark Kinoti";
        review = "Flexi Hela has enabled me achieve my dreams via their savings capability.";
        }
    else if(dataChange==2){
        imgr1 = process.env.PUBLIC_URL+"Assets/Profile-img.png";
        clientName = "John Kipkorir";
        review = "Saving with flexi Hela is the way to achieve your dreams.";
    }

    else if(dataChange==3){
        imgr1 = process.env.PUBLIC_URL+"Assets/Profile-img.png";
        clientName = "Esther Muriuki";
        review = "Saving has never been this easy";
    }

    else if(dataChange==4){
        imgr1 = process.env.PUBLIC_URL+"Assets/Profile-img.png";
        clientName = "Villa Josephat";
        review = "Flexi Hela has amazing offers suited for everyone.";
    }

    else if(dataChange==5){
        imgr1 = process.env.PUBLIC_URL+"Assets/Profile-img.png";
        clientName = "Mark Kinoti";
        review = "Your are assured of security when it comes to saving with Flexi Hela.";
    }
    else {

    }


    return(
    <div class="container-fluid "  id="c-bg2">
        <div class="container fadeInUp">
            <nav class="navbar navbar-expand-lg navbar-light">
                <Link class="navbar-brand" to="/"><img src={process.env.PUBLIC_URL+"Assets/sanlam.png"}/></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class=" col-xl-8">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">About</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../Brochure/Flexi Hela Collateral Key Facts - 1.pdf" target={"_blank"}>Brochure</a>
                        </li>
                    </ul>
                    </div>
                    <div class="col-xl-4 d-flex flex-row s-c">
                        <form class="" action="/action_page.php" method="POST" id="search-form">
                            <input type="text" placeholder="Search..." name="search" class="search-field"/>
                            <button type="submit" class="search-icon"><img src={process.env.PUBLIC_URL+"Assets/search-icon.png"}/></button>
                        </form>
                        <a href="#" class="mr-sm-2" onClick={handleClickac}><img src={process.env.PUBLIC_URL+"Assets/account-icon.png"}/></a>
                    </div>
                </div>
            </nav>
        </div>    
        <div class="container breadcrumb">
            <p class="d-flex justify-content-start">Get started {'>'} Almost there</p>
        </div>
        <div class="container  fadeInUp">
            <div class="row">
                <div class="col">
                    <h1 class="Pitch" id="pitch2">Secure your savings</h1>
                    <p class="Pitch-p2">Life is indeed full of uncertainities. Choose a life plan that best suits your needs.</p>
                    <h4 class="benefits-h">Benefits</h4>
                    <span class="benefit">Funeral Cover<br/>Monthly premium 500/=</span>
                    <div class="card" id="review-card">
                        <span class="client d-flex"><img class="client-img" src={imgr1}/>
                         <p>{clientName}</p>
                        </span>
                        <p>{review}</p>
                    </div>
                </div>
                <div class="col" id="form2col">
                    <h4 class="form-heading" id="profile-h">Create your profile</h4>
                    <form class="form-2nd" name="kyc" action="./action_handler.php">
                        <div class="row">
                            <div class="col">
                                <h3>First name</h3>
                                    <label class="" for="Target-amount1">
                                        <input class="input-space2" type="text" onChange={onChange} placeholder="Enter your first name" id="Target-amount1" required/>
                                    </label>
                            </div>
                            <div class="col">
                                <h3>Last name</h3>
                                    <label class="" for="Target-amount2">
                                        <input class="input-space2" type="text" onChange={onChange1} placeholder="Enter your last name" id="Target-amount2" required/>
                                    </label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h3>Phone number</h3>
                                    <label class="" for="Target-amount3">
                                        <input class="input-space2" type="number" onChange={onChange2}placeholder="Enter your phone number" id="Target-amount3" required/>
                                    </label>
                            </div>
                            <div class="col">
                                <h3>Date of Birth</h3>
                                    <label class="" for="Target-amount4">
                                        <input class="input-space2" type="date" onChange={onChange3} placeholder="Enter your date of birth" id="Target-amount4" required/>
                                    </label>
                            </div>
                        </div>
                        <h3>Email</h3>
                        <label class="" for="Target-amount5">
                            <input class="input-space-2" type="email" name="email" onChange={onChange4} placeholder="Enter your email address" id="Target-amount5" required/>
                        </label>
                        <h3>Protection Benefit</h3>
                            <label class="saving-frequency" for="Target-amount6">
                               
                                <select class="save-dropdown s-dropdown" value={value}  id="Target-amount6" onChange={handleChange}>
                                    document.write("e");
                                    <option id="question" value="Question"><b >KSH 100, 000</b></option>
                                    <option value="125,000">KSH 125, 000</option>
                                    <option value="150,000">KSH 150, 000</option>  
                                    <option value="175, 000">KSH 175, 000</option>
                                    <option value="200, 000">KSH 200, 000</option>
                                    <option value="250, 000">KSH 250, 000</option>
                                    <option value="300, 000">KSH 300, 000</option>
                                    <option value="325, 000">KSH 325, 000</option>
                                    <option value="350, 000">KSH 350, 000</option>
                                    <option value="375, 000">KSH 375, 000</option>
                                    <option value="400, 000">KSH 400, 000</option>
                                    <option value="425, 000">KSH 425, 000</option>
                                    <option value="450, 000">KSH 450, 000</option>
                                    <option value="475, 000">KSH 475, 000</option>
                                    <option value="500, 000">KSH 500, 000</option>
                                </select>
                            </label>
                    </form>
                </div>
                <div class="col">
                    <div class="card summary-card">
                        <span class="text-center s-ry"><span class="s-ry">Summary</span><img class="img-fluid summary-img" src={process.env.PUBLIC_URL+"Assets/cover-icon.png"}/></span>
                        <hr align="center"class="detail-separator"/>
                        <span class="text-center s-ry" id="set-goals">Benefit Limit: <b>Ksh 10000<span></span></b></span>
                        <hr align="center"class="detail-separator"/>
                        <span class="text-center s-ry" id="set-goals">Monthly Premium: <b>Ksh 500</b></span>
                        <hr align="center"class="detail-separator"/>
                        <span class="text-center s-ry" id="set-goals">Total Savings: <b>Ksh 10,500</b></span>
                        <hr align="center"class="detail-separator"/>
                        <form action="action_handler.php" method="POST">
                            <span class="text-center s-ry agreement-chkbx" id="set-goals"><input type="checkbox" name="agreement" id="termsCheckbox" class="agreement-checkbox"/><span class="agreement-txt">I have read the </span><a href="https://www.sanlam.com/terms-of-use.php" id="terms-n-c" target={"_blank"}>terms and conditions</a></span>
                        </form>
                    </div>           
                </div>
            </div>
        </div>
        <div class="container div-next next-btn">
            <Link to={checkPath} onClick={handleClick} class="btn btn-primary next">NEXT</Link>
        </div>

        <div class="modal container-fluid " id="s-cardac">
                <div class="card success-card fadeInUp" id="card">
                    <div>
                        <form action='handler.php'>
                            <span class="d-flex justify-content-end"><a href="#" onClick={handleClick4}><Icon name='close' /></a></span><br/>
                            <h1>Login</h1>
                            <label for="nameInputField">
                                <span>Email</span> <br/><input name="email" type="email" className='Input' id="nameInputField" placeholder='Email'/>
                            </label>
                            <br/>
                            <label for="emailInputField">
                                <span>Password</span> <br/><input name="pswd" type="password" className='Input' id="emailInputField" placeholder='Password'/>
                            </label>
                            <br/>
                            <button class="btn btn-primary c-b-contact" onClick={SubmitEvent}>Login</button>
                            <br/>
                            <br/>
                            <span>Don't have an account?</span>&nbsp;&nbsp;&nbsp;<span><Link to="/Goal">Start Journey</Link></span>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default SecureSavings;