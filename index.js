
const messageElements = document.querySelectorAll(".message");
messageElements.forEach(function (Element) {
  Element.addEventListener("click", function () {
    let profile = Element.querySelector(".msg-profile img").src;
    document.querySelector(".content-right .img-profile img").src = profile;
    let messageName = Element.querySelector(".msg-name p").textContent;
    document.querySelector(".content-right .img-profile p").textContent = messageName;
  });
});
let searchIcon = document.querySelectorAll('.searchIcon')
searchIcon.forEach(function (searchIcon) {
  let searchInput = searchIcon.nextElementSibling;

  let originalColor = searchIcon.style.color;
  let originalSize = searchIcon.style.fontSize;

  searchInput.addEventListener("focus", function () {
    searchIcon.innerHTML = "&#xf063";
    searchIcon.style.color = "#00A884";
    searchIcon.style.fontSize = "24px";
    searchIcon.style.transform = "rotate(90deg)";
    searchIcon.style.transition = "transform 0.1s ease-out, color 0.2s ease-out";
  });

  searchInput.addEventListener("blur", function () {
    searchIcon.innerHTML = "&#xf002";
    searchIcon.style.color = originalColor;
    searchIcon.style.fontSize = originalSize;
    searchIcon.style.transform = "rotate(0deg)";
    searchIcon.style.transition = "transform 0.2s ease-out, color 0.2s ease-out";
  });
});

let imgProfile = document.querySelector(".img-profile");
let profile = document.querySelector(".profile");
let profileImageChange = profile.querySelector(".profile-image-change img");

let communitiesIcon = document.querySelector(".option-other i:nth-child(1)");
let communities = document.querySelector(".communities");
let boxCommunity = communities.querySelector(".box-community");
 
let statusIcon = document.querySelector(".option-other i:nth-child(2)");
let status = document.querySelector(".status");

let channelsIcon = document.querySelector(".option-other i:nth-child(3)");
let channels = document.querySelector(".channels");

let newchatIcon = document.querySelector(".option-other i:nth-child(4)");
let newchat = document.querySelector(".newchat");

function visibility(icon, element) {
  icon.addEventListener("click", function () {
    element.style.width = "100%";
    if(element == profile ){
      profileImageChange.style.width = "250px";
      profileImageChange.style.height = "250px";
    }
    else if(element == communities){
      boxCommunity.style.height = "100%";
      boxCommunity.style.opacity = "1";
    }
  });
  element.querySelector(".header-account .fas").addEventListener("click", function () {
    element.style.width = "0";
    if(element == profile ){
      element.style.transition ="width 0.1s ease,height 0.1s ease";
      profileImageChange.style.width = "0px";
      profileImageChange.style.height = "0px";
    }
    else if(element == communities){
      boxCommunity.style.height = "0";
      boxCommunity.style.opacity = "0";
    }
  });
}

visibility(imgProfile,profile)
visibility(communitiesIcon,communities)
visibility(statusIcon,status)
visibility(channelsIcon,channels)
visibility(newchatIcon,newchat)

