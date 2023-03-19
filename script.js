let rulesindexp=document.getElementById("btn1");
let rulesopener=document.getElementById("rulesboard");
let rulescloser=document.getElementById("rulesclose");
let rock_pressed=document.getElementById("rockbtn");
let scissor_pressed=document.getElementById("scissorbtn");
let paper_pressed=document.getElementById("paperbtn");
let human_score=document.getElementById("hscore");
let comp_score=document.getElementById("cscore");
let winpagerulesbtn=document.getElementById("winprulebtn");
let winpagerulesclosebtn=document.getElementById("rulesclose");
let winpnextbtn=document.getElementById("winpnextbtn");
let indexpbottom=document.getElementById("indexpbottom");
let winpage=document.getElementById("winpage");

let winpwborder=document.getElementById("winpwborder");
let winplborder=document.getElementById("winplborder");
let winpwr=document.getElementById("winpwr");
let winpwp=document.getElementById("winpwp");
let winpws=document.getElementById("winpws");
let winplr=document.getElementById("winplr");
let winplp=document.getElementById("winplp");
let winpls=document.getElementById("winpls");

let losepwborder=document.getElementById("losepwborder");
let loseplborder=document.getElementById("loseplborder");
let loseplr=document.getElementById("loseplr");
let loseplp=document.getElementById("loseplp");
let losepls=document.getElementById("losepls");
let losepwr=document.getElementById("losepwr");
let losepwp=document.getElementById("losepwp");
let losepws=document.getElementById("losepws");

let tiepypborder=document.getElementById("tiepypborder");
let tieppcpborder=document.getElementById("tieppcpborder");
let tiepypr=document.getElementById("tiepypr");
let tiepyps=document.getElementById("tiepyps");
let tiepypp=document.getElementById("tiepypp");
let tieppcpr=document.getElementById("tieppcpr");
let tieppcps=document.getElementById("tieppcps");
let tieppcpp=document.getElementById("tieppcpp");

let winplayagain=document.getElementById("wplayagain");
let loseprulesbtn=document.getElementById("lprulesbtn");
let loseprulesclosebtn=document.getElementById("rulesclose");
let losepplayagainbtn=document.getElementById("losepplayagainbtn");
let losep=document.getElementById("losep");
let ruleboardwinp=document.getElementById("winpruleslist");
let ruleboardlosep=document.getElementById("losepruleslist");
let tiep=document.getElementById("tiep");
let tieprulesbtn=document.getElementById("tieprulesbtn");
let tieprulesclosebtn=document.getElementById("rulesclose");
let replaybtn=document.getElementById("replaybtn");

let Your_Score="0";
let Computer_Score="0";
if(localStorage.length!=0)
{
    human_score.innerHTML = localStorage.getItem("Human Score");
    comp_score.innerHTML = localStorage.getItem("Computer Score");
}
if(localStorage.length==0)
{
    localStorage.setItem("Human Score", "0");
    localStorage.setItem("Computer Score", "0");
}
function fnrpress()
{
   
    indexpbottom.style.display='none';
    
    let compchoice=0;
    function compselect()
    {
        compchoice = Math.floor(Math.random()*3)+1;
        
        if(compchoice==1)
        {
            tiepypborder.style.border='16px solid #0074B6';
            tieppcpborder.style.border='16px solid #0074B6';
            indexpbottom.style.display='none';
            tiep.style.display='block';
            tiepypr.style.display='block';
            tiepyps.style.display='none';
            tiepypp.style.display='none';
            tieppcpr.style.display='block';
            tieppcps.style.display='none';
            tieppcpp.style.display='none';
            
        }
        else if(compchoice==2)
        {
            winpwborder.style.border='16px solid #0074B6';
            winplborder.style.border='16px solid #BD00FF';
            winpage.style.display='flex';
            winpwr.style.display='block';
            winpws.style.display='none';
            winpwp.style.display='none';
            winplr.style.display='none';
            winpls.style.display='block';
            winplp.style.display='none';
            human_score.innerHTML=Number(localStorage.getItem("Human Score"))+1;
        }
        else
        {
            loseplborder.style.border ='16px solid #0074B6';
            losepwborder.style.border ='16px solid #FFA943';
            losep.style.display='flex'
            loseplr.style.display='block';
            losepls.style.display='none';
            loseplp.style.display='none';
            losepwr.style.display='none';
            losepws.style.display='none';
            losepwp.style.display='block';
            comp_score.innerHTML=Number(localStorage.getItem("Computer Score"))+1;
        }
       
        Your_Score=human_score.innerHTML;
        Computer_Score=comp_score.innerHTML;
        localStorage.setItem("Human Score",Your_Score);
        localStorage.setItem("Computer Score", Computer_Score);
    }
    compselect();
   

};
function fnspress()
{
   
    indexpbottom.style.display='none';
    let compchoice=0;
    function compselect()
    {
        compchoice = Math.floor(Math.random()*3)+1;
        
        if(compchoice==1)
        {
            loseplborder.style.border='16px solid #BD00FF';
            losepwborder.style.border='16px solid #0074B6';
            losep.style.display='flex'
            loseplr.style.display='none';
            losepls.style.display='block';
            loseplp.style.display='none';
            losepwr.style.display='block';
            losepws.style.display='none';
            losepwp.style.display='none';
            comp_score.innerHTML=Number(localStorage.getItem("Computer Score"))+1;
        }
        else if(compchoice==2)
        {
            tiepypborder.style.border='16px solid #BD00FF';
            tieppcpborder.style.border='16px solid #BD00FF';
            indexpbottom.style.display='none';
            tiep.style.display='block';
            tiepypr.style.display='none';
            tiepyps.style.display='block';
            tiepypp.style.display='none';
            tieppcpr.style.display='none';
            tieppcps.style.display='block';
            tieppcpp.style.display='none';
           
        }
        else
        {
            winpwborder.style.border='16px solid #BD00FF';
            winplborder.style.border='16px solid #FFA943';
            winpage.style.display='flex';
            winpwr.style.display='none';
            winpws.style.display='block';
            winpwp.style.display='none';
            winplr.style.display='none';
            winpls.style.display='none';
            winplp.style.display='block';
            human_score.innerHTML=Number(localStorage.getItem("Human Score"))+1;
        }
        Your_Score=human_score.innerHTML;
        Computer_Score=comp_score.innerHTML;
        localStorage.setItem("Human Score",Your_Score);
        localStorage.setItem("Computer Score", Computer_Score);
        
    }
    compselect();
   

};
function fnppress()
{
    
    indexpbottom.style.display='none';
    let compchoice=0;
    indexpbottom.style.display='none';
    function compselect()
    {
        compchoice = Math.floor(Math.random()*3)+1;
        if(compchoice==1)
        {
           
            winpwborder.style.border='16px solid #FFA943';
            winplborder.style.border='16px solid #0074B6';
            winpage.style.display='flex';
            winpwr.style.display='none';
            winpws.style.display='none';
            winpwp.style.display='block';
            winplr.style.display='block';
            winpls.style.display='none';
            winplp.style.display='none';
            human_score.innerHTML=Number(localStorage.getItem("Human Score"))+1;
        }
        else if(compchoice==2)
        {
            loseplborder.style.border='16px solid #FFA943';
            losepwborder.style.border='16px solid #BD00FF';
            losep.style.display='flex'
            loseplr.style.display='none';
            losepls.style.display='none';
            loseplp.style.display='block';
            losepwr.style.display='none';
            losepws.style.display='block';
            losepwp.style.display='none';
            comp_score.innerHTML=Number(localStorage.getItem("Computer Score"))+1;
        }
        else
        {
            tiepypborder.style.border='16px solid #FFA943';
            tieppcpborder.style.border='16px solid #FFA943';
            indexpbottom.style.display='none';
            tiep.style.display='block';
            tiepypr.style.display='none';
            tiepyps.style.display='none';
            tiepypp.style.display='block';
            tieppcpr.style.display='none';
            tieppcps.style.display='none';
            tieppcpp.style.display='block';
            
        }
        Your_Score=human_score.innerHTML;
        Computer_Score=comp_score.innerHTML;
        localStorage.setItem("Human Score",Your_Score);
        localStorage.setItem("Computer Score", Computer_Score);
   
    }
    compselect();
};
function openrules()
{localStorage.setItem("rulesopen","1");
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
function celebrationp()
{   

    if(rulesopener.style.display==='block')
    {
        localStorage.setItem("rulesopen","1");
    }
    else
    {
        localStorage.setItem("rulesopen","0");
    }
    
    window.open('http://127.0.0.1:5500/page2.html', '_self');
}
function wtaketoindex()
{
    winpage.style.display='none';
    indexpbottom.style.display='flex';
}

function ltaketoindex()
{
    
    losep.style.display='none'
    indexpbottom.style.display='flex';
}
function ttaketoindex()
{
    tiep.style.display='none';
    indexpbottom.style.display='flex';
}

rulesindexp.addEventListener('click', openrules);
rulescloser.addEventListener('click', closerules);
rock_pressed.addEventListener('click',fnrpress);
scissor_pressed.addEventListener('click',fnspress);
paper_pressed.addEventListener('click',fnppress);
winpagerulesbtn.addEventListener('click' , openrules);
winpagerulesclosebtn.addEventListener('click', closerules);
winpnextbtn.addEventListener('click',celebrationp);
winplayagain.addEventListener('click',wtaketoindex);
loseprulesbtn.addEventListener('click',openrules);
loseprulesclosebtn.addEventListener('click', closerules);
losepplayagainbtn.addEventListener('click', ltaketoindex);
replaybtn.addEventListener('click', ttaketoindex);
tieprulesbtn.addEventListener('click', openrules);
tieprulesclosebtn.addEventListener('click', closerules);
if(localStorage.length==3)
{
    if(localStorage.getItem("rulesopen")==="1")
{
    openrules();
}
}