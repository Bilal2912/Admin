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

let ele_no = Array.from(document.getElementsByClassName('btn-no'));
let index = -1;
ele_no.forEach(e=>{
    e.addEventListener('click',()=>{
        document.getElementById('contained').classList.add('hidden');
        document.getElementById('modalwindow').classList.remove('hidden');
        document.getElementById('close').classList.remove('hidden');
        document.getElementById('thebody').classList.add('bg-gray-500');
        document.getElementById('navbar').classList.add('hidden');
        document.getElementById('heading').classList.add('hidden');
        index = e.parentElement.parentElement.id; 
    })
    
})
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username : "bilalsani2912@gmail.com",
        Password : "bilalsani@2912",
        To : 'bilalsani2912@gmail.com',
        From : "bilalsani2912@gmail.com",
        Subject : "Order Approval",
        Body : "Congratulations. Your Order has been approved.",
    })
    .then(function(message){
        if(message=='OK'){
            alert("Confirmation mail has been sent successfully");
        }
        else{
            console.log(message);
            alert("There is some error in sending mail");
        }
    });
}

let items = document.getElementsByClassName('nav-link');
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', printDetails);
}

function printDetails(e) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains("active")) {
      items[i].classList.toggle("active");
    }
  }
  this.classList.add("active");
}

let ele_yes = Array.from(document.getElementsByClassName('btn-yes'));
ele_yes.forEach(e=>{
    e.addEventListener('click',()=>{
        e.parentElement.parentElement.classList.add('hidden');
        let i = e.parentElement.parentElement.id;
        document.getElementById(`approve-${i}`).classList.remove('hidden');
        // alert("You will be redirected to your email client website");
        // window.open(`mailto:bilalsani1011@gmail.com?subject=Order Approval&body=Dear Bilal, Your Issue is Valid. Come to the College at the earliest to return the product.`); 
        // if(confirm("Have you sent the email")==true){
        //     document.getElementById(`${i}`).classList.add('hidden');
        //     document.getElementById(`approve-${i}`).classList.remove('hidden');
        //     setTimeout(() => {
        //         document.getElementById(`approve-${i}`).classList.add('hidden');
        //     },1500);
        // }
        setTimeout(() => {
            document.getElementById(`approve-${i}`).classList.add('hidden');
            alert("You will be redirected to your email client website");
            window.open(`mailto:bilalsani1011@gmail.com?subject=Issue Approval&body=Dear Bilal, Your Issue is Valid. Come to the College at the earliest to return the product.`); 
        }, 1500);
    })
})
let con = true;
document.getElementById('theemail').addEventListener('click',()=>{
    let content = document.getElementById('msg').value;
    // console.log(content);
    document.getElementById('contained').classList.remove('hidden');
    document.getElementById('modalwindow').classList.add('hidden');
    document.getElementById('close').classList.add('hidden');
    document.getElementById('thebody').classList.remove('bg-gray-500');
    document.getElementById('navbar').classList.remove('hidden');
    document.getElementById('heading').classList.remove('hidden');
    if(content!=''){
        alert("You will be redirected to your email client website");
        window.open(`mailto:bilalsani1011@gmail.com?subject=Issue Approval&body=${content}`); 
        // Need to change mailto email id when student database is ready
        con = true;
    }
    else{
        alert("Cannot Send Empty Mail");
        con = false;
    }
    document.getElementById('msg').value = '';
    if(con){
        if(confirm("Have you sent the email")==true){
            document.getElementById(`${index}`).classList.add('hidden');
            document.getElementById(`reject-${index}`).classList.remove('hidden');
            setTimeout(() => {
                document.getElementById(`reject-${index}`).classList.add('hidden');
            },1500);
        }
        else{
            document.getElementById(`${index}`).classList.add('hidden');
            document.getElementById(`unreject-${index}`).classList.remove('hidden');
            setTimeout(() => {
                document.getElementById(`unreject-${index}`).classList.add('hidden');
            },1500);
            setTimeout(() => {
                document.getElementById(`${index}`).classList.remove('hidden');
            },1500);
        }
        con = false;
    }
})
document.getElementById('close').addEventListener('click',()=>{
    document.getElementById('contained').classList.remove('hidden');
    document.getElementById('modalwindow').classList.add('hidden');
    document.getElementById('close').classList.add('hidden');
    document.getElementById('thebody').classList.remove('bg-gray-500');
    document.getElementById('navbar').classList.remove('hidden');
    document.getElementById('heading').classList.remove('hidden');
    document.getElementById('msg').value = '';
})