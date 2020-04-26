function validation(){


    //dealing with the mandatory fields not be empty
    
    if(document.registrationForm.firstName.value == ""){
    alert("please enter the First Name");
    document.registrationForm.firstName.focus();
    return false;
    }
    
    if(document.registrationForm.LastName.value == ""){
    alert("please enter the Last Name");
    document.registrationForm.LastName.focus();
    return false;
    }
    
    if(document.registrationForm.email.value == ""){
    alert("please enter your email-id");
    document.registrationForm.email.focus();
    return false;
    }
    
    if(document.registrationForm.address.value == "" || document.registrationForm.address.value == "Permanent Address" ){
        alert("please enter your permanent-address");
        document.registrationForm.address.focus();
        return false;
        }
    
    if(document.registrationForm.age.value == ""){
        alert("please enter your Age");
        document.registrationForm.age.focus();
        return false;
        }
        
    
    if((document.registrationForm.gender[0].checked==false) && (document.registrationForm.gender[1].checked==false)){
        alert("Choose you GENDER");
        return false;
    
    }
    
    if(document.registrationForm.mobnumber.value == ""){
        alert("please enter your MOBILE NUMBER");
        document.registrationForm.mobnumber.focus();
        return false;
        }
    
    if(document.registrationForm.Engineering.value=="-1"){
        alert("Choose you Specialization!");
        document.registrationForm.Engineering.focus();
        return false;
    }
    
    if( document.registrationForm.dob.value == "" )
    {
     alert( "Please provide your Date of Birth!" );
     document.registrationForm.dob.focus() ;
     return false;
    }
    
    if( document.registrationForm.yop.value == "" )
    {
     alert( "Please provide your Year of passing!" );
     document.registrationForm.yop.focus() ;
     return false;
    }
    
    if ( ( registrationForm.tech1.checked == false ) && ( registrationForm.tech2.checked == false ) && ( registrationForm.tech3.checked == false )&& ( registrationForm.tech4.checked == false )){
    alert ( "Please choose atleast one Technical Skill" );
    return false;
    }
    if(document.registrationForm.sslc.value == ""){
        alert("minimum Graduation level is class X: please enter you SSLC marks")
        return false;
    }
    

    //dealing with the conditionals

    var emal = document.registrationForm.email.value;
    atPos = emal.indexOf("@");
    dotPos = emal.lastIndexOf(".");
    
    if(emal == "" || atPos<1 || (dotPos-atPos<2)){
        alert("Please enter correct email ID")
         document.registrationForm.email.focus() ;
         return false;
    }
    
    
    
    if(isNaN( document.registrationForm.mobnumber.value) || document.registrationForm.mobnumber.value.length != 10 ){
         alert( "Please provide 10 digit Mobile Number" );
         document.registrationForm.mobnumber.focus() ;
         return false;
    }
    
    
    
    
    alert("Successful");
    return( true );
    }