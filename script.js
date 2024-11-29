let img1 = document.querySelector("#sliderImage");

let back = document.querySelector("#back");
let next = document.querySelector("#next");

let count = 1;

back.addEventListener("click",() => {
    if (count === 1) {
        img1.setAttribute("src","img/sliders/slider3.jpg");

        count = 3;
    }
    else if (count === 3) {
        img1.setAttribute("src","img/sliders/slider2.jpg");

        count = 2;
    }
    else{
        img1.setAttribute("src","img/sliders/slider.jpg");

        count = 1;
    }
});

next.addEventListener("click",() => {
    if (count === 1) {
        img1.setAttribute("src","img/sliders/slider2.jpg");

        count = 2;
    }
    else if (count === 2) {
        img1.setAttribute("src","img/sliders/slider3.jpg");

        count = 3;
    }
    else{
        img1.setAttribute("src","img/sliders/slider.jpg");

        count = 1;
    }
});


let emergency = document.querySelector("#emergency");
let treatment = document.querySelector("#treatment");
let pharmacy = document.querySelector("#pharmacy");
let emergencyImg = document.querySelector("#emergencyImg");
let treatmentImg = document.querySelector("#treatmentImg");
let pharmacyImg = document.querySelector("#pharmacyImg");

emergency.addEventListener("mouseover",() =>{
    emergencyImg.setAttribute("src","img/services/emrBlue.jpg");
});
emergency.addEventListener("mouseout",() =>{
    emergencyImg.setAttribute("src","img/services/emergency.jpg");
});


treatment.addEventListener("mouseover",() =>{
    treatmentImg.setAttribute("src","img/services/treatBlue.jpg");
});
treatment.addEventListener("mouseout",() =>{
    treatmentImg.setAttribute("src","img/services/treatment.jpg");
});


pharmacy.addEventListener("mouseover",() =>{
    pharmacyImg.setAttribute("src","img/services/pharmBlue.jpg");
});
pharmacy.addEventListener("mouseout",() =>{
    pharmacyImg.setAttribute("src","img/services/pharmacy.jpg");
});


let hospitalImg = document.querySelector("#hospitalImg");
let doctorImg = document.querySelector("#doctorImg");
let happyImg = document.querySelector("#happyImg");
let expImg = document.querySelector("#expImg");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let third = document.querySelector("#third");
let fourth = document.querySelector("#fourth");

one.onmouseover = () => {
    hospitalImg.setAttribute("src","img/breads/hospitalWhite.jpg");
}
one.onmouseout = () => {
    hospitalImg.setAttribute("src","img/breads/hospital.jpg");
}


two.onmouseover = () => {
    doctorImg.setAttribute("src","img/breads/docWhite.jpg");
}
two.onmouseout = () => {
    doctorImg.setAttribute("src","img/breads/doctors.jpg");
}


third.onmouseover = () => {
    happyImg.setAttribute("src","img/breads/happyWhite.jpg");
}
third.onmouseout = () => {
    happyImg.setAttribute("src","img/breads/happy.jpg");
}


fourth.onmouseover = () => {
    expImg.setAttribute("src","img/breads/exWhite.jpg");
}
fourth.onmouseout = () => {
    expImg.setAttribute("src","img/breads/experience.jpg");
}
