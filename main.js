let tabLinkElem=document.getElementsByClassName('tab-links');
let tabContentElem=document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(tablink of tabLinkElem){
      tablink.classList.remove("active-link")
    }
    for(tabContent of tabContentElem){
        tabContent.classList.remove("active-tab")
      }
      event.currentTarget.classList.add('active-link');
      document.getElementById(tabname).classList.add('active-tab');
}

// Dyanmic text Code
const dynamicContent=document.getElementById('dynamic-text');
const phrases=["Web Developer..","A Learner...","Web 3.0 Enthusiast..","A Student"];
let phraseIndex=0;
let letterIndex=0;
function typeLetters(phrase){
    if(letterIndex==phrase.length){
        deleteLetters();
    }
    else if(letterIndex<phrase.length){
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex+=1;
        setTimeout(function (){
            typeLetters(phrase)
        },300);
    }
}
function deleteLetters(){
    if(letterIndex==-1){
        phraseIndex=(phraseIndex+1)%phrases.length;
        letterIndex=0;
        typeLetters(phrases[phraseIndex]);
    }
    else if(letterIndex>-1){
        let updatedPhrase="#";
        for(let index=0;index<letterIndex;index++){
            updatedPhrase+=phrases[phraseIndex].charAt(index);
        }
        dynamicContent.textContent=updatedPhrase;
        letterIndex-=1;
        setTimeout(deleteLetters,200);
    }
}
typeLetters(phrases[phraseIndex])
   
//  sidemenu
var sideMenu=document.getElementById("sidemenu");
function openmenu(){
    sideMenu.style.right="0";
}
function closemenu(){
    sideMenu.style.right="-200px";
}
