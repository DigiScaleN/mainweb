window.addEventListener("scroll", () => {
    let header = document.getElementById("navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Social Links toggle
const social_links = document.querySelector(".social_links");
const close_btn = document.querySelector("i.close_btn");


window.onload = () => {
    setTimeout(() => {
        social_links.classList.add("open");
    }, 3000);
};

close_btn.addEventListener("click", () => {
    if (social_links.classList.contains("open") && close_btn.classList.contains("fa-xmark")) {
        social_links.classList.remove("open");
        close_btn.classList.remove("fa-xmark");
        close_btn.classList.add("fa-left");
    }
    else {
        social_links.classList.add("open");
        close_btn.classList.remove("fa-left");
        close_btn.classList.add("fa-xmark");
    }
});

// Navigation toggle 
const hamburger = document.querySelector(".fa-bars");
const clost_nav_btn = document.querySelector(".close_nav");
const nav_list = document.getElementById("nav_list");

hamburger.addEventListener("click", () => {
    nav_list.classList.toggle("open_nav");
});

clost_nav_btn.addEventListener("click", () => {
    nav_list.classList.remove("open_nav");
});