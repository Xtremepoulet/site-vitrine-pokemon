const navigation = document.querySelector(".nav");

// with adding_button, they count each iteration and put object in cart
const item_in_cart = document.querySelector(".items-in-cart"); 
let i = 1;
const adding_button = document.querySelectorAll(".adding-button").forEach( adding_btn => {
    adding_btn.addEventListener("click", event => {
        item_in_cart.innerText = `${i}`;
        i++;
    })
})



const main_img1 = document.querySelector("#main-img1");
const main_img2 = document.querySelector("#main-img2");
const main_img3 = document.querySelector("#main-img3");



const navigation_ul = document.querySelector(".navigation-items");
const menu_btn = document.querySelector(".menu-btn");

const image_container = document.querySelector(".image-container");



const cart = document.querySelector(".cart::before");




window.addEventListener("scroll", () => {
    console.log(scrollY);
    if(window.scrollY > 300) {
        navigation.classList.add("scrollY");
    } else if (window.scrollY < 300) {
        navigation.classList.remove("scrollY");
    }
})



menu_btn.addEventListener("click", event => {
    navigation_ul.classList.toggle('btn-active');
})



//main gestion with image scrolling (en attendant de faire un parrallex scrolling)
let is_transformed = 0;
setInterval(() => {
    if(is_transformed === 0) {
        main_img1.style.transition = "transform 3s ease-in-out";
        main_img1.style.transform = "translateX(100%)";

        main_img2.style.transition = "transform 3s ease-in-out";
        main_img2.style.transform = "translateX(0%)";


        main_img3.style.transition = "transform 3s ease-in-out";
        main_img3.style.transform = "translateX(-100%)";
        is_transformed++

    } else if (is_transformed === 1){
        main_img1.style.transition = "transform 3s ease-in-out";
        main_img1.style.transform = "translateX(200%)";

        main_img2.style.transition = "transform 3s ease-in-out";
        main_img2.style.transform = "translateX(100%)";

        main_img3.style.transition = "transform 3s ease-in-out";
        main_img3.style.transform = "translateX(0%)";
        is_transformed++
    }
    else if (is_transformed === 2) {
        main_img1.style.transition = "transform 3s ease-in-out";
        main_img1.style.transform = "translateX(100%)";

        main_img2.style.transition = "transform 3s ease-in-out";
        main_img2.style.transform = "translateX(0%)";

        main_img3.style.transition = "transform 3s ease-in-out";
        main_img3.style.transform = "translateX(-100%)";
        is_transformed++

    }     else if (is_transformed === 3) {
        main_img1.style.transition = "transform 3s ease-in-out";
        main_img1.style.transform = "translateX(0%)";

        main_img2.style.transition = "transform 3s ease-in-out";
        main_img2.style.transform = "translateX(-100%)";

        main_img3.style.transition = "transform 3s ease-in-out";
        main_img3.style.transform = "translateX(-200%)";
        is_transformed = 0;
    } 


}, 5000);




