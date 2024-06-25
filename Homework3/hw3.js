/* 
 Name: Vivian Hoang
 File: homework1.js
 Date Created: 2024-06-14
 Date Updated: 2024-06-23
 Purpose: JavaScript for MIS 3371 Homework 2
 
*/
// Adjustments in progress
function setup()
  {
    var error_flag = 0;
    console.log(error_flag);
  }
/* date */ 
    const d = new Date();
    let text = d.toLocaleDateString();
    document.getElementById("today").innerHTML = text;
/* slider */
  function getrangedata() 
  {
  var slider = document.getElementById("feeling");
  document.getElementById("rangedisplay").value = slider;
  }

/* This version gets the data from the form explicitely by field name. 
function getdata2()
*/

/* These are the subroutines to check inidivudial fields  */
function checkfirstname()
    {
        x = document.getElementById("firstname").value;
        if( x.length<1) { 
              document.getElementById("name_message").innerHTML = "First name is too short";  
              error_flag = 1;
        }
        else {
            if (x.match(/[a-zA-Z3-5'-]+$/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "First Name is Invalid. Use letters only";
              error_flag = 1;
              }
        }
    }
function checkmiddle()
    {
        x = document.getElementById("middleinit").value;
        if(x.length>0) { 
              if (x.match(/[a-zA-Z ]/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Middle Name is Invalid. Use letters only";
              error_flag = 1;
              }
        }
    }
function checklastname()
    {
        x = document.getElementById("lastname").value;
        if( x.length<1) { 
              document.getElementById("name_message").innerHTML = "Invalid name... too short.";
              error_flag = 1;  
        }
        else {
            if (x.match(/[a-zA-Z3-5'-]+$/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Last Name is Invalid. Use letters only";
              error_flag = 1;
              }
        }
    }
//Validate SSN 
function checksocialsecurity() {
  socialsecurity = document.getElementById("socialsecurity").value;
  var socialsecurityPattern = /^(?!000|666)[0-9]{3}([ -]?)(?!00)[0-9]{2}\1(?!0000)[0-9]{4}$/;

  if(socialsecurity == ""){
    document.getElementById("socialsecurity_text").innerHTML = "Please enter your Social Security";
    error_flag = 1;
  } 
  else {
      if (socialsecurity.match(socialsecurityPattern)){
        document.getElementById("socialsecurity_text").innerHTML = ""
      }
      else  {
        document.getElementById("socialsecurity_text").innerHTML = "Social Security Invalid"
        error_flag = 1;
      }
  }
}
//Validate Email
function checkEmail() {
  email = document.getElementById("email").value;
  var emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/;

  if(email == ""){
    document.getElementById("phone_text").innerHTML = "Please enter your Email";
    error_flag = 1;
  } 
  else {
      if (email.match(emailPattern)){
        document.getElementById("phone_text").innerHTML = ""
      }
      else  {
        document.getElementById("phone_text").innerHTML = "Email Invalid"
        error_flag = 1;
      }
  }
}

//Validate Phone 
function checkPhone() {
  phone = document.getElementById("phone").value;
  var phonePattern = /\(?[0-9]{3}\)?[- .]?[0-9]{3}[- .]?[0-9]{4}/;

  if(phone == ""){
    document.getElementById("phone_text").innerHTML = "Please enter your Phone Number";
    error_flag = 1;
  } 
  else {
      if (phone.match(phonePattern)){
        document.getElementById("phone_text").innerHTML = ""
      }
      else  {
        document.getElementById("phone_text").innerHTML = "Phone Number Invalid"
        error_flag = 1;
      }
  }
}

//Validate City 
function checkcity() {
         if (document.getElementById("city").value.match(/^[ a-zA-Z3-5'-]+$/)) {
              document.getElementById("city_message").innerHTML = "";  
            }
            else  {
              document.getElementById("city_message").innerHTML = "City Invalid";
              error_flag = 1;
              }
}

//Validate State 
function checkstate() {
        z=document.getElementById("state").value;
        if(z=="") { 
              document.getElementById("state_message").innerHTML = "Please select your Address State";  
              error_flag = 1;
        }
        else {
          document.getElementById("state_message").innerHTML = ""; 
        }
}
//Validate Zip Code
function checkZip() {
  zip = document.getElementById("zip").value;
  var zipPattern = /^\d{5}(?:[-\s]\d{4})?$/;

  if(zip == ""){
    document.getElementById("zip_message").innerHTML = "Please enter your Zip Code";
    error_flag = 1;
  } 
  else {
      if (zip.match(zipPattern)){
        document.getElementById("zip_message").innerHTML = ""
      }
      else  {
        document.getElementById("zip_message").innerHTML = "Invalid Zip"
        error_flag = 1;
      }
  }
}

//Validate Address
function checkaddr1() {
    x = document.getElementById("addr1").value;
    console.log(x.value);
    console.log(x.length);
    if (x.length < 5 ) {  
      document.getElementById("addr1_message").innerHTML = "Address is too short";  
      error_flag = 1; 
      console.log(error_flag);
      }
      else { 
          document.getElementById("addr1_message").innerHTML = "";  
      }
      console.log(addr1_message);
}
function checkaddr2() {}
    x = document.getElementById("addr2").value;
    console.log(x.value);
    console.log(x.length);
      if(x.length>0) {
        if (x.match(/^[a-zA-Z0-9\s,.'-]{3,}$/)) {
        document.getElementById("name_message").innerHTML = "";  
      }
      else  {
        document.getElementById("name_message").innerHTML = "Invalid characters in name.";
        error_flag = 1;
        }
    }
    if (addr2 == addr1) {  
      document.getElementById("addr2_message").innerHTML = "Same address cannot be entered twice";  
      error_flag = 1; 
      console.log(error_flag);
      }
      else { 
          document.getElementById("addr2_message").innerHTML = "";  
      }
      console.log(addr2_message);

//Validate Username
function checkUsername() {
  userid = document.getElementById("userid").value;
  var useridPattern = /[A-Za-z]+[A-Za-z0-9-_]/;
  if(userid.length<5)
  {
    document.getElementById("userid_text").innerHTML = "Username is too short";
    error_flag = 1;
  }
  else{
    if(phone == ""){
      document.getElementById("userid_text").innerHTML = "Please create your Username";
      error_flag = 1;
    } 
    else {
        if (userid.match(useridPattern)){
          document.getElementById("userid_text").innerHTML = ""
        }
        else  {
          document.getElementById("userid_text").innerHTML = "Invalid Username"
          error_flag = 1;
        }
    }
}
}
// Deal with password    
function checkPassword() 
    {
    var passwordoutput;
    var passwordinput = document.getElementById("password1").value;
    console.log(passwordinput);
    // Validate length
    if(passwordinput.length < 8) {
      passwordoutput = "Enter a minimum of 8 characters";
      error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("password_message1").innerHTML = passwordoutput;
    
    // Validate lowercase letters
    if(passwordinput.search(/[a-z]/) < 0 ) {
      passwordoutput = "Enter at least 1 lower case letter";
      error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("password_message2").innerHTML = passwordoutput;
    
    // Validate capital letters
    if(passwordinput.search(/[A-Z]/)< 0)  {  
      passwordoutput = "Enter at least 1 upper case letter";
      error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("password_message3").innerHTML = passwordoutput;
    
    // Validate numbers
    if(passwordinput.search(/[0-9]/)<0 ) {   
    passwordoutput = "Enter at least 1 number";
    error_flag = 1;
    } else {
    passwordoutput = "";
    }
    document.getElementById("password_message4").innerHTML = passwordoutput;
    
    // Validate special chars
    if(passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) {   
    passwordoutput = "Enter at least 1 special character";
    error_flag = 1;
    } else {
    passwordoutput = "";
    }
    document.getElementById("password_message5").innerHTML = passwordoutput;
  }

// Check that both passwords match
function checkPassword2() {
    x=document.getElementById("password1").value;
    y=document.getElementById("password2").value;
    if ( x==y ) 
    {
      document.getElementById("password2_text").innerHTML = "Password match!";
    } else  
      {
         document.getElementById("password2_text").innerHTML = "Password DOES NOT match!";
         error_flag = 1;
      }
    }

//    if (document.getElementById("state").length = 0 ) {  error_flag = 1; }

// Check everything
    function checkform() 
      {
        error_flag = "0";
        checkfirstname();
        checkmiddle();
        checklastname();
        checksocialsecurity();
        checkEmail();
        checkPhone();
        checkZip();
        checkUsername();
        checkaddr1();
        checkaddr2();
        checkcity();
        checkstate();
        checkPassword();
        checkPassword2();
        console.log("Error flag: "+error_flag);
        if (error_flag == "1")
        {
          alert("Please fix the indicated errors!");
        }
        else {
          document.getElementById("submit").enabled = true;
        }
      }

function removedata1() {
  document.getElementById("outputformdata").innerHTML = "Data has been Cleared";
}

function getdata1() {
  var formcontents = document.getElementById("signup");
  var formoutput;
  var datatype;
  var i;
  formoutput = "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
  for (i = 0; i < formcontents.length; i++) {
            console.log("item: "+i+" "+formcontents.elements[i].name+" = "+formcontents.elements[i].value);
            //if (formcontents.elements[i].value !="") {
              datatype = formcontents.elements[i].type;
              switch (datatype) {
                case "checkbox":
                  if (formcontents.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                    formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                    formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
                  }
                  break;
               case "radio":
                    if (formcontents.elements[i].checked) {
                      formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                      formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                      formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                    }
                  break;
                case "button": case "submit": case "reset":
                  formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                  break;
                default:
                  formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                }
        

  }

   if (formoutput.length>0) { 
      formoutput = formoutput + "</table>";
      document.getElementById("outputformdata").innerHTML = formoutput;
   }
}
    /* End of document: homework2.js */