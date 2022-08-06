function preventBack() {
    window.history.forward(); 
}
  
setTimeout("preventBack()", 0);
  
window.onunload = function () { null };

document.getElementsByClassName('hamburger')[0].addEventListener('click',()=>{
    if(document.getElementById('navlist').classList.contains('hidden')){
        document.getElementById('navlist').classList.remove('hidden');
    }
    else{
        document.getElementById('navlist').classList.add('hidden');
    }
})
document.getElementsByClassName('icon')[0].addEventListener('click',()=>{
    console.log(document.getElementById('log').classList);
    if(document.getElementById('log').classList.contains('hidden')){
        document.getElementById('log').classList.remove('hidden');
    }
    else{
        document.getElementById('log').classList.add('hidden');
    }
})
