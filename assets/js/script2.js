"use strict";

//Determine whether the user send a form
//Save selected shields into an array
    //check whether the first checkbox was selected
    //Check whether all checkboxes are checked
    // put them in an array


//Intercept click events on links
//Block links
    //Block all links
    //Determine what kind of a linked was clicked
    //Block only those that user has chosen to block
//Show overlay
    //Adjust the test of a pop-up
//Increase usability by displaying status

document.addEventListener("DOMContentLoaded", init);

let shields = [];

const _ALLLINKSBLOCKEDHEADER = "All outgoing traffic was intercepted";
const _ALLLINKSBLOCKEDCONTENT = "You have blocked all outgoing traffic";

const _SOMELINKSBLOCKEDHEADER = "An attack was intercepted";
const _SOMELINKSBLOCKEDCONTENT = "You have blocked some outgoing traffic";

const _PLEASECHOOSE = "choose the shields";

function processForm(e){
    e.preventDefault();

    shields = [];
    const $checkboxes = document.querySelectorAll("input[type=checkbox]");
    $checkboxes.forEach($checkbox => {
        if($checkbox.checked) shields.push($checkbox.id);

    });
    if (shields.length === 0 ){
        document.querySelector(".statusmessage").textContent = _PLEASECHOOSE;
    }else{
        document.querySelector(".statusmessage").textContent = shields.join(" & ");
    }

}

function shouldLinkBeBlocked(typeOfLink){
    return shields.includes("all") || shields.includes(typeOfLink);

}

function showOverlay(){
    const $overlay = document.querySelector("#overlay");
    $overlay.classList.add("active");


    if(shields.includes("all")){
        document.querySelector("#overlay h2").textContent = _ALLLINKSBLOCKEDHEADER;
        document.querySelector("#overlay p").textContent = _ALLLINKSBLOCKEDCONTENT;
    }else{
        document.querySelector("#overlay h2").textContent = _SOMELINKSBLOCKEDHEADER;
        document.querySelector("#overlay p").textContent = _SOMELINKSBLOCKEDCONTENT;
    }
}

function clickedLink(e){
    e.preventDefault();
    const typeOfLink = e.target.dataset.status;
    const shouldBlock = shouldLinkBeBlocked(typeOfLink);
    if(shouldBlock){
        showOverlay();
    }else{
        window.location.href = e.target.href;
    }
}

function closeOverlay(e){
    e.preventDefault();
    document.querySelector("#overlay").classList.remove("active");
}

function init() {
    const $formElement = document.querySelector("form");
    $formElement.addEventListener("submit", processForm);


    document.querySelectorAll("#link-list a").forEach($link => {
        $link.addEventListener("click", clickedLink);
    });

    document.querySelector(".close").addEventListener("click", closeOverlay);
}