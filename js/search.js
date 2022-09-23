const facebookbtn=document.querySelector(".facebook-btn");
const twitterbtn=document.querySelector(".twitter-btn");
const whatsappbtn=document.querySelector(".whatsapp-btn");
const linkedinbtn=document.querySelector(".linkedin-btn");
const pinterestbtn=document.querySelector(".pinterest-btn");
function init(){
    let postUrl=encodeURI(document.location.href);
    let postTitle=encodeURI("check this out!");
    // let postImg=encodeURI(pinterestImg.src);
    facebookbtn.setAttribute(
        "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
    twitterbtn.setAttribute(
        "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
    );
    whatsappbtn.setAttribute(
        "href",
    // `https://api.whatsapp.com/send?text =${postTitle} ${postUrl}`
    `https://api.whatsapp.com/send?text=${postTitle}${postUrl}`
   
    );
    linkedinbtn.setAttribute(
        "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );
    pinterestbtn.setAttribute(
        "href",
    `https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=${postUrl}&description=${postTitle}`
    );
}
init();