
let celeplayagainbtn=document.getElementById("celeplayagainbtn");
let celerulesbtn=document.getElementById("celerulesbtn");
let rulesopener=document.getElementById("rulesboard");
let rulescloser=document.getElementById("rulesclose");
function celetoindex()
{
    if(rulesopener.style.display==='block')
    {
        localStorage.setItem("rulesopen","1");
    }
    else
    {
        localStorage.setItem("rulesopen","0");
    }
    window.open('http://127.0.0.1:5500/index.html', '_self');
}
function openrules()
{
    localStorage.setItem("rulesopen","1");
    if(rulesopener.style.display!='block')
    {
        rulesopener.style.display='block';
    }
    
   
};

function closerules()
{
   localStorage.setItem("rulesopen","0");
    if(rulesopener.style.display!='none')
    {
        rulesopener.style.display='none';
    } 
}
celeplayagainbtn.addEventListener('click', celetoindex);
celerulesbtn.addEventListener('click', openrules);
rulescloser.addEventListener('click',closerules);
if(localStorage.length===3)
{
    if(localStorage.getItem("rulesopen")==="1")
    {
        openrules();
    }
}


