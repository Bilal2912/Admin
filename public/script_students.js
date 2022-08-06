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
let ele_yes = Array.from(document.getElementsByClassName('btn-yes'));
ele_yes.forEach(e=>{
    e.addEventListener('click',()=>{
        e.parentElement.parentElement.classList.add('hidden');
        let i = e.parentElement.parentElement.id;
        document.getElementById(`approve-${i}`).classList.remove('hidden');
        setTimeout(() => {
            document.getElementById(`approve-${i}`).classList.add('hidden');
        }, 1500);
    })
})