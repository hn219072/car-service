const nameError=document.getElementById("name-error")
const lnameError=document.getElementById("lname-error")
const phoneError=document.getElementById("phone-error")
const pwdError=document.getElementById("pwd-error")
const aadharError=document.getElementById("aadhar-error")
const AgeError=document.getElementById("age-error")
const AddressError=document.getElementById("address-error")

function FormValidation(){
    if( NameValidation() & PhoneValidation() & AgeValidation() &AddressValidation()){
        return true;
    }
    if(LnameValidation() & PasswordValidation() & AadharValidation()){
        return true;
    }
    return false;
}

function NameValidation(){
    const name=document.getElementById("inputName").value;

    if(name.length <3){
        nameError.innerHTML='<i class="fa-solid fa-circle-xmark mx-1" style="color: #e60a0a;"></i>name should contain 3-20 letters'
        return false;
    }
    if(name.length >20){
        nameError.innerHTML='<i class="fa-solid fa-circle-xmark mx-1" style="color: #e60a0a;"></i>name should contain 3-20 letters'
        return false;
    }
    else{
        nameError.innerHTML='<i class="fa-solid fa-circle-check mx-1" style="color: #00e30d;"></i>'
        return true;
    }
}

function LnameValidation(){
    const lname=document.getElementById("inputname").value;

    if(lname.length <3){
        lnameError.innerHTML='<i class="fa-solid fa-circle-xmark mx-1" style="color: #e60a0a;"></i>name should contain 3-20 letters'
        return false;
    }
    if(lname.length >20){
        lnameError.innerHTML='<i class="fa-solid fa-circle-xmark mx-1" style="color: #e60a0a;"></i>name should contain 3-20 letters'
        return false;
    }
    else{
        lnameError.innerHTML='<i class="fa-solid fa-circle-check mx-1" style="color: #00e30d;"></i>'
        return true;
    }
}

function PhoneValidation(){
    const phone=document.getElementById("inputPhone").value;

    if(phone.length>10){
        phoneError.innerHTML='<i class="fa-solid fa-circle-xmark mx-1" style="color: #e60a0a;"></i>Enter 10 digit mobile number '
        return false;
    }
    if(!phone.match(/[6-9]{1}[0-9]{9}/)){
        phoneError.innerHTML='<i class="fa-solid fa-circle-xmark mx-1" style="color: #e60a0a;"></i>Enter 10 digit mobile number'
        return false;
    }
    else{
        phoneError.innerHTML='<i class="fa-solid fa-circle-check mx-1" style="color: #00e30d;"></i>'
        return true;
    }
}

function PasswordValidation(){
    const password=document.getElementById("inputPassword").value;

    if(password.length<8){
        pwdError.innerHTML='<i class="fa-solid fa-circle-xmark mx-1" style="color: #e60a0a;"></i>password must be of 8 digits '
        return false;
    }
    if(!password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)){
        pwdError.innerHTML='<i class="fa-solid fa-circle-xmark mx-1" style="color: #e60a0a;"></i>password must be a combination of 8 alphanumeric values, '
        return false;
    }
    else{
        pwdError.innerHTML='<i class="fa-solid fa-circle-check mx-1" style="color: #00e30d;"></i>'
        return true;
    }
}

function AadharValidation(){
    const Aadhar=document.getElementById("inputAadhar").value;

    if(!Aadhar.match(/^\d{12}$/)){
        aadharError.innerHTML='<i class="fa-solid fa-circle-xmark mx-1" style="color: #e60a0a;"></i>Check your aadhar details, '
        return false;
    }
    else{
        aadharError.innerHTML='<i class="fa-solid fa-circle-check mx-1" style="color: #00e30d;"></i>'
        return true;
    }
}

function AgeValidation(){
    const age=document.getElementById("inputage").value;

    if(age<18){
        AgeError.innerHTML='<i class="fa-solid fa-circle-xmark mx-1" style="color: #e60a0a;"></i>age must be above 18 '
        return false;
    }
    else{
        AgeError.innerHTML='<i class="fa-solid fa-circle-check mx-1" style="color: #00e30d;"></i>'
        return true;
    }
}

function AddressValidation(){
    const address=document.getElementById("inputAddress").value;

    if(address.length<15){
        AddressError.innerHTML='<i class="fa-solid fa-circle-xmark mx-1" style="color: #e60a0a;"></i> Enter main details of address'
        return false;
    }
    else{
        AddressError.innerHTML='<i class="fa-solid fa-circle-check mx-1" style="color: #00e30d;"></i>'
        return true;
    }
}
