var submit = document.querySelector('form');

var buttonSubmit= document.querySelector('#create-acc');

buttonSubmit.addEventListener('click',()=>{

    var valid=submit.checkValidity();
    var password=validatePassword();
    
    if( valid==true && password==true)
        {
            submit.submit();
        }
    else{
        document.getElementById('pw').value='';
        document.getElementById('cpw').value='';
    }
    
});

function validatePassword(){
    
    var pw=document.getElementById('pw').value;
    var cpw=document.getElementById('cpw').value;
    var reg=new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$');

    if(pw==cpw && reg.test(pw)){
        return true
    }
    else
    {
        if(reg.test(pw)==false && pw!='' && cpw!='')
        {
            document.querySelector('.error-msg').textContent='*Password must contain uppercase, numeric and special character';
        }
        else{
            document.querySelector('.error-msg').textContent='*Passwords does not match';
        }
        return false;
    }
    
    
}