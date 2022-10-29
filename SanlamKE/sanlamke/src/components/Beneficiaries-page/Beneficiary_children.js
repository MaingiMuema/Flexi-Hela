import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import $ from 'jquery';
import { Icon } from 'semantic-ui-react'

const Beneficiary_children = () =>{

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

    const [inputValue1, setInputValue] = useState();

    let onChange = (event) =>{
     const newValue = event.target.value;
     setInputValue(newValue);
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

    const [value, setValue] = React.useState('Amount');

    const handleChange = (event) => {
    const newValue=event.target.value;
    setValue(newValue);
  };


    return(
    <div class="container-fluid "  id="c-bg3">
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
                            <Link class="nav-link" to="/About">About</Link>
                        </li>
                        <li class="nav-item">
                            <a href="../Brochure/Flexi Hela Collateral Key Facts - 1.pdf" class="nav-link" target={"_blank"}>Brochure</a>
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
        <div class="container breadcrumb d-flex justify-content-end">
            <p class="d-flex justify-content-start skipButton"><Link to="/Payment"><b>Skip</b></Link><Icon name="arrow"/></p>
        </div>
        <div class="container   fadeInUp">
            <div class="row beneficiaries-row">
                <div class="col">
                        <p class="Pitch-p">You have made the<br/> right decision.</p>
                        <span>You selected<img class="img-fluid" src={process.env.PUBLIC_URL+"Assets/childrenblue.png"}/></span>
                        <div class="card" id="b-card">
                            <span class="client d-flex"><img class="client-img" src={process.env.PUBLIC_URL+"Assets/Profile-img.png"}/>
                             <p>Anne Nonymous</p>
                            </span>
                            <p>“I started my journey last year and now i{"'"}m only two months away from reaching my goal”</p>
                        </div>
                </div>
                <div class="col" id="form2col">
                    <h4 class="form-heading" id="profile-h">Secure your family members</h4>
                    <form class="form-2nd" action="./action_handler.php">
                        <div class="row">
                            <div class="col">
                                <h3>First name</h3>
                                    <label class="" for="Target-amount1">
                                        <input class="input-space2" type="text" onChange={onChange} placeholder="Enter your first name" id="Target-amount1"/>
                                    </label>
                            </div>
                            <div class="col">
                                <h3>Last name</h3>
                                    <label class="" for="Target-amount2">
                                        <input class="input-space2" type="text" onChange={onChange2} placeholder="Enter your last name" id="Target-amount2"/>
                                    </label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h3>Date of Birth</h3>
                                    <label class="" for="Target-amount3">
                                        <input class="input-space2" type="date" onChange={onChange3} placeholder="Enter your date of birth" id="Target-amount3"/>
                                    </label>
                            </div>
                            <div class="col">
                                    <h3>Phone number</h3>
                                    <label class="saving-frequency" for="Target-amount4">
                                            <input class="input-space2" type="number" onChange={handleChange} placeholder="Enter number" id="Target-amount4"/>
                                    </label>
                            </div>
                            <h4 class="add-beneficiary" id=""><Link to="/Securefamily">Add Beneficiary</Link></h4>
                        </div>
                    </form>
                    
                </div>
                <div class="col">
                    <div class="card summary-card" id="b-s-card">
                        <span class="text-center s-ry beneficiary-card-heading"><span class="s-ry">Child</span><img class="img-fluid summary-img" src={process.env.PUBLIC_URL+"Assets/children grey.png"}/></span>
                       
                        <span class="text-center s-ry" id="set-goals">Relationship: <b>Child</b></span>
                        <hr align="center"class="detail-separator"/>
                        <span class="text-center s-ry" id="set-goals">Full name: <b>{inputValue1} &nbsp; {inputValue2}</b></span>
                        <hr align="center"class="detail-separator"/>
                        <span class="text-center s-ry" id="set-goals">Phone: <b>Ksh {value}</b></span>
                        <hr align="center"class="detail-separator"/>
                        <span class="text-center s-ry" id="set-goals">Date of birth: <b>{inputValue3}</b></span>
                        <hr align="center"class="detail-separator"/>
                    </div>           
                </div>
            </div>
            <div class="container goal-dets-btns">
                <div class="row n-p-btn">
                    <div class="col">
                        <Link to='/Securefamily' class="btn btn-primary previous">PREVIOUS</Link>
                    </div>
                    <div class="col div-next">
                        <Link to="/Payment" class="btn btn-primary next" >NEXT</Link>
                    </div>
                </div>
            </div>
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

export default Beneficiary_children;