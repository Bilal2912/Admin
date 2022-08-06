function preventBack() {
    window.history.forward(); 
}
  
setTimeout("preventBack()", 0);
  
window.onunload = function () { null };

const selectElement = document.querySelector('.hello');
let idx = 0;
let elem = Array.from(document.getElementsByClassName('space'));
let url = null;
let flag = false;
selectElement.addEventListener('change',(e)=>{
    flag = true;
    url = e.target.value; 
    async function fetching(){   
        const response = await fetch(url);
        const resp = await response.json();
        return resp;
    }
    fetching().then((data)=>{
        if(data.lcd=="Ok"){
            arr[0] = 0;
            dec[0] = 1;
            elem[0].children[0].classList.remove('hidden');
            elem[0].children[1].classList.add('hidden');
            elem[0].children[2].classList.add('hidden');
            elem[0].children[3].classList.add('hidden');
        }
        else{
            brr[0] = 0;
            dec[0] = 0;
            elem[0].children[1].classList.remove('hidden');
            elem[0].children[0].classList.add('hidden');
            elem[0].children[2].classList.add('hidden');
            elem[0].children[3].classList.add('hidden');
        }
        if(data.ad9833=="Ok"){
            arr[1] = 0;
            dec[1] = 1;
            elem[1].children[0].classList.remove('hidden');
            elem[1].children[1].classList.add('hidden');
            elem[1].children[2].classList.add('hidden');
            elem[1].children[3].classList.add('hidden');
        }
        else{
            brr[1] = 0;
            dec[1] = 0;
            elem[1].children[1].classList.remove('hidden');
            elem[1].children[0].classList.add('hidden');
            elem[1].children[2].classList.add('hidden');
            elem[1].children[3].classList.add('hidden');
        }
        if(data.triplefive=="Ok"){
            arr[2] = 0;
            dec[2] = 1;
            elem[2].children[0].classList.remove('hidden');
            elem[2].children[1].classList.add('hidden');
            elem[2].children[2].classList.add('hidden');
            elem[2].children[3].classList.add('hidden');
        }
        else{
            brr[2] = 0;
            dec[2] = 0;
            elem[2].children[1].classList.remove('hidden');
            elem[2].children[0].classList.add('hidden');
            elem[2].children[2].classList.add('hidden');
            elem[2].children[3].classList.add('hidden');
        }
        if(data.plus15V=="Ok"){
            arr[3] = 0;
            dec[3] = 1
            elem[3].children[0].classList.remove('hidden');
            elem[3].children[1].classList.add('hidden');
            elem[3].children[2].classList.add('hidden');
            elem[3].children[3].classList.add('hidden');
        }
        else{
            brr[3] = 0;
            dec[3] = 0;
            elem[3].children[1].classList.remove('hidden');
            elem[3].children[0].classList.add('hidden');
            elem[3].children[2].classList.add('hidden');
            elem[3].children[3].classList.add('hidden');
        }
        if(data.minus15V=="Ok"){
            arr[4] = 0;
            dec[4] = 1;
            elem[4].children[0].classList.remove('hidden');
            elem[4].children[1].classList.add('hidden');
            elem[4].children[2].classList.add('hidden');
            elem[4].children[3].classList.add('hidden');
        }
        else{
            brr[4] = 0;
            dec[4] = 0;
            elem[4].children[1].classList.remove('hidden');
            elem[4].children[0].classList.add('hidden');
            elem[4].children[2].classList.add('hidden');
            elem[4].children[3].classList.add('hidden');
        }
        if(data.plus5V=="Ok"){
            arr[5] = 0;
            dec[5] = 1;
            elem[5].children[0].classList.remove('hidden');
            elem[5].children[1].classList.add('hidden');
            elem[5].children[2].classList.add('hidden');
            elem[5].children[3].classList.add('hidden');
        }
        else{
            brr[5] = 0;
            dec[5] = 0;
            elem[5].children[1].classList.remove('hidden');
            elem[5].children[0].classList.add('hidden');
            elem[5].children[2].classList.add('hidden');
            elem[5].children[3].classList.add('hidden');
        }
        if(data.plus3point3V=="Ok"){
            arr[6] = 0;
            dec[6] = 1;
            elem[6].children[0].classList.remove('hidden');
            elem[6].children[1].classList.add('hidden');
            elem[6].children[2].classList.add('hidden');
            elem[6].children[3].classList.add('hidden');
        }
        else{
            brr[6] = 0;
            dec[6] = 0;
            elem[6].children[1].classList.remove('hidden');
            elem[6].children[0].classList.add('hidden');
            elem[6].children[2].classList.add('hidden');
            elem[6].children[3].classList.add('hidden');
        }
        if(data.varDC=="Ok"){
            arr[7] = 0;
            dec[7] = 1;
            elem[7].children[0].classList.remove('hidden');
            elem[7].children[1].classList.add('hidden');
            elem[7].children[2].classList.add('hidden');
            elem[7].children[3].classList.add('hidden');
        }
        else{
            brr[7] = 0;
            dec[7] = 0;
            elem[7].children[1].classList.remove('hidden');
            elem[7].children[0].classList.add('hidden');
            elem[7].children[2].classList.add('hidden');
            elem[7].children[3].classList.add('hidden');
        }
        if(data.ccled=="Ok"){
            arr[8] = 0;
            dec[8] = 1;
            elem[8].children[0].classList.remove('hidden');
            elem[8].children[1].classList.add('hidden');
            elem[8].children[2].classList.add('hidden');
            elem[8].children[3].classList.add('hidden');
        }
        else{
            brr[8] = 0;
            dec[8] = 0;
            elem[8].children[1].classList.remove('hidden');
            elem[8].children[0].classList.add('hidden');
            elem[8].children[2].classList.add('hidden');
            elem[8].children[3].classList.add('hidden');
        }
        if(data.caled=="Ok"){
            arr[9] = 0;
            dec[9] = 1;
            elem[9].children[0].classList.remove('hidden');
            elem[9].children[1].classList.add('hidden');
            elem[9].children[2].classList.add('hidden');
            elem[9].children[3].classList.add('hidden');
        }
        else{
            brr[9] = 0;
            dec[9] = 0;
            elem[9].children[1].classList.remove('hidden');
            elem[9].children[0].classList.add('hidden');
            elem[9].children[2].classList.add('hidden');
            elem[9].children[3].classList.add('hidden');
        }
        if(data.sevensegmentone=="Ok"){
            arr[10] = 0;
            dec[10] = 1;
            elem[10].children[0].classList.remove('hidden');
            elem[10].children[1].classList.add('hidden');
            elem[10].children[2].classList.add('hidden');
            elem[10].children[3].classList.add('hidden');
        }
        else{
            brr[10] = 0;
            dec[10] = 0;
            elem[10].children[1].classList.remove('hidden');
            elem[10].children[0].classList.add('hidden');
            elem[10].children[2].classList.add('hidden');
            elem[10].children[3].classList.add('hidden');
        }
        if(data.sevensegmenttwo=="Ok"){
            arr[11] = 0;
            dec[11] = 1;
            elem[11].children[0].classList.remove('hidden');
            elem[11].children[1].classList.add('hidden');
            elem[11].children[2].classList.add('hidden');
            elem[11].children[3].classList.add('hidden');
        }
        else{
            brr[11] = 0;
            dec[11] = 0;
            elem[11].children[1].classList.remove('hidden');
            elem[11].children[0].classList.add('hidden');
            elem[11].children[2].classList.add('hidden');
            elem[11].children[3].classList.add('hidden');
        }
        document.getElementById('para').innerHTML = data.remark;

    })
})

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
let arr = [];
let brr = [];
let dec = [];
let len = 11;
for(let i=0;i<len;i++){
    arr[i] = -1;
    brr[i] = -1;
    dec[i] = -1;
}
elem.forEach(element => {
    element.addEventListener('mouseenter',(e)=>{
        idx = e.target.id;
        let changedElement = "null";
        if(idx==0){
            changedElement = "lcd"
        }
        else if(idx==1){
            changedElement = "ad9833"
        }
        else if(idx==2){
            changedElement = "triplefive"
        }
        else if(idx==3){
            changedElement = "plus15V"
        }
        else if(idx==4){
            changedElement = "minus15V"
        }
        else if(idx==5){
            changedElement = "plus5V"
        }
        else if(idx==6){
            changedElement = "plus3point3V"
        }
        else if(idx==7){
            changedElement = "varDC"
        }
        else if(idx==8){
            changedElement = "ccled"
        }
        else if(idx==9){
            changedElement = "caled"
        }
        else if(idx==10){
            changedElement = "sevensegmentone"
        }
        else if(idx==11){
            changedElement = "sevensegmenttwo"
        }
        // console.log(idx);
        elem[idx].children[2].addEventListener('click',()=>{
            fetch(url,{
                method:"PATCH",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    [changedElement]:"Ok"
                })
            })
        })
        elem[idx].children[3].addEventListener('click',()=>{
            fetch(url,{
                method:"PATCH",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    [changedElement]:"Not Ok"
                })
            })
        })

        let func = function(){
            dec[idx] = 1;
            arr[idx] = 0;
            e.target.children[4].classList.remove('hidden');
            e.target.children[2].classList.add('hidden');
            e.target.children[3].classList.add('hidden');
        }
        let func1 = function(){
            dec[idx] = 0;
            brr[idx] = 0;
            e.target.children[4].classList.remove('hidden');
            e.target.children[2].classList.add('hidden');
            e.target.children[3].classList.add('hidden');
        }

        elem[idx].children[2].onclick = func;
        elem[idx].children[3].onclick = func1;

        if(e.target.classList.contains('bg-white')){
            e.target.classList.remove('bg-white');
            e.target.classList.add('bg-blue-900');
            e.target.style.transition = "background-color 0.3s ease-in";
            e.target.children[0].classList.add('hidden');
            e.target.children[1].classList.add('hidden');
            e.target.children[2].classList.remove('hidden');
            e.target.children[3].classList.remove('hidden');
            e.target.children[4].classList.add('hidden');
        }
    })
    element.addEventListener('mouseleave',(e)=>{
        idx = e.target.id;
        if(!e.target.classList.contains('bg-white')){
            e.target.classList.add('bg-white');
            e.target.classList.remove('bg-blue-900');
            e.target.children[2].classList.add('hidden');
            e.target.children[3].classList.add('hidden');
            e.target.children[4].classList.add('hidden');
        }
        if(arr[idx]==0 && dec[idx]==1){
            e.target.children[0].classList.remove('hidden');
            e.target.children[1].classList.add('hidden');
        }
        if(brr[idx]==0 && dec[idx]==0){
            e.target.children[0].classList.add('hidden');
            e.target.children[1].classList.remove('hidden');
        }
    })
});
