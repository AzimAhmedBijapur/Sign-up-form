var regexName=new RegExp('[a-zA-Z]');

var submit = document.querySelector('form');

var buttonSubmit= document.querySelector('#create-acc');

buttonSubmit.addEventListener('click',()=>{

    var valid=submit.checkValidity();
    
    if( valid==true)
        {
            submit.submit();
        }
    
    
});

function validName(){
    
    var fname_label=document.querySelector('#fname-label');

    fname_label.innerHTML='Yes';

    console.log('yes');
    
}