/*
"use strict";
document.addEventListener("DOMContentLoaded", init);

let activeShields = [];

function init() {
    document.querySelector("button").addEventListener("click", sendForm);
}

function showClickedItem(e){
    e.preventDefault();
    const status = e.target.getAttribute("data-status");
    if(activeShields.includes("all")) {
        messageAll();
    }else if(activeShields.includes(status)){
        messageOther();
    }else{
        window.location.href = e.target.href;
    }
}

function messageOther(){
    document.querySelector(".content-box").innerHTML = `<h2>An attack was intercepted</h2>
        <p>One of your active shields intercepted the attack. You are safe!</p>
        <a href="#" class="close">I understand</a>`;
    show();
}

function messageAll(){
    document.querySelector(".content-box").innerHTML = `<h2>All outgoing traffic blocked</h2>
        <p>You have blocked all outgoing traffic, so even though you can't browse the web, you'll still be kept safe
            from harm. Good, right?</p>
        <a href="#" class="close">I understand</a>`;
    show();
}

function show(){
    document.querySelector("#overlay").classList.remove("hidden");
    document.querySelector("#overlay").classList.add("active");
    document.querySelector(".close").addEventListener("click", close);
}
function close(evt){
    evt.preventDefault();
    document.querySelector("#overlay").classList.remove("active");
    document.querySelector("#overlay").classList.add("hidden");
}

function sendForm(evt) {
    evt.preventDefault();
    activeShields = [];
    const $fishy = document.querySelector("#fishy");
    if($fishy.checked){
        activeShields.push("fishy");
    }

    const $malishy = document.querySelector("#malishy");
    if($malishy.checked){
        activeShields.push("malishy");
    }

    const $all = document.querySelector("#all");
    if($all.checked){
        activeShields.push("all");

    }
    showStatus();


    const $listItem = document.querySelectorAll("#link-list a");
    $listItem.forEach((item) => {
        item.addEventListener("click", showClickedItem);
    });
}

function showStatus(){

    const status = document.querySelector(".statusmessage");
    status.textContent = "Shields active for: ";
    status.textContent += activeShields.join(" & ");

    /*
    if(activeShields != []){
        for(const i in activeShields){
            status.textContent += activeShields[i];
            if(activeShields.length > 1){
                status.textContent += " & ";
            }
        }
    }


}

 */
