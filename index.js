const searchbar = document.querySelector("#search");
searchbar.addEventListener("click",()=>{
    searchbar.style.borderWidth = "2px";
    searchbar.style.borderColor = "#f0f0f0"
});
const notifications = document.querySelector("#notification");
const disPlan= document.querySelector(".a-sector");
notifications.addEventListener("click",()=>{
   notifications.style.backgroundColor = "#616161"
   const disPlan= document.querySelector(".a-sector")
   if(disPlan.style.display ==="none"){
        disPlan.style.display ="block";
        disPlan.style.visibility="visible";
    }else{disPlan.style.display="none"}
    if(perpend.style.display==="block"){
        perpend.style.display= "none";
    }
    else{}
})
const menu = document.querySelector(".full");
const perpend= document.querySelector(".b-sector")
menu.addEventListener("click",()=>{
   if(perpend.style.display ==="none"){
        perpend.style.display ="block";
        perpend.style.visibility="visible";
    }else{perpend.style.display="none"}
    if(disPlan.style.display==="block"){
        disPlan.style.display= "none";
    }
    else{}
})

const dismiss = document.querySelector(".cancel-btn");
dismiss.addEventListener("click",()=>{
    const alertMessage = document.querySelector(".alert");
    alertMessage.style.display = "none";
})
const setup = document.querySelector(".dropdown");
setup.addEventListener("click",()=>{
    const drop= document.querySelector(".minimize");
    if( drop.style.display === "none"){
        drop.style.display = "block";
        drop.style.visibility="visible";
        setup.innerHTML=`<svg class="menu-up" width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#000"/> </svg>`
    }else{
        drop.style.display = "none"
        setup.innerHTML=`<svg width="20" height="30" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#000"/>
        </svg>`
    }
})
const contents = document.querySelector(".sub-noteA");
const suspend = document.querySelector(".words")
contents.addEventListener("click",()=>{
   if(suspend.style.display ==="none"){
        suspend.style.display ="block";
        suspend.style.visibility="visible";
    }else{suspend.style.display="none"}
    if( suspendE.style.display==="block"||suspendB.style.display==="block"|| suspendC.style.display==="block" || suspendD.style.display==="block"){
        suspendE.style.display="none";
        suspendB.style.display="none";
        suspendC.style.display="none";
        suspendD.style.display="none";
    }
    else{}
})
const contentB = document.querySelector(".sub-noteB");
const suspendB = document.querySelector(".wordsB")
contentB.addEventListener("click", ()=>{
    if(suspendB.style.display ==="none"){
        suspendB.style.display ="block";
        suspendB.style.visibility="visible";
     }else{suspendB.style.display="none"}
     if( suspend.style.display==="block"||suspendE.style.display==="block"|| suspendC.style.display==="block" || suspendD.style.display==="block"){
        suspend.style.display="none";
        suspendE.style.display="none";
        suspendC.style.display="none";
        suspendD.style.display="none";
     }
      else{}
})
const contentC = document.querySelector(".sub-noteC");
const suspendC = document.querySelector(".wordsC")
contentC.addEventListener("click", ()=>{
    if(suspendC.style.display ==="none"){
        suspendC.style.display ="block";
        suspendC.style.visibility="visible";
     }else{suspendC.style.display="none"}
     if( suspend.style.display==="block"||suspendB.style.display==="block"|| suspendE.style.display==="block" || suspendD.style.display==="block"){
        suspend.style.display="none";
        suspendB.style.display="none";
        suspendE.style.display="none";
        suspendD.style.display="none";
      }
      else{}
})
const contentD = document.querySelector(".sub-noteD");
const suspendD = document.querySelector(".wordsD")
contentD.addEventListener("click", ()=>{
    if(suspendD.style.display ==="none"){
        suspendD.style.display ="block";
        suspendD.style.visibility="visible";
     }else{suspendD.style.display="none"}
     if( suspend.style.display==="block"||suspendB.style.display==="block"|| suspendC.style.display==="block" || suspendE.style.display==="block"){
        suspend.style.display="none";
        suspendB.style.display="none";
        suspendC.style.display="none";
        suspendE.style.display="none";
      }
      else{}
})
const contentE = document.querySelector(".sub-noteE");
const suspendE = document.querySelector(".wordsE")
contentE.addEventListener("click", ()=>{
    if(suspendE.style.display ==="none"){
        suspendE.style.display ="block";
        suspendE.style.visibility="visible";
     }else{suspendE.style.display="none"}
     if( suspend.style.display==="block"||suspendB.style.display==="block"|| suspendC.style.display==="block" || suspendD.style.display==="block"){
       suspend.style.display="none";
       suspendB.style.display="none";
       suspendC.style.display="none";
       suspendD.style.display="none";
     }
     else{}
})
const checkBox = document.querySelector(".empty");
    const loadingAnimate = document.querySelector(".mins");
    const loaded = document.querySelector(".after")
    checkBox.addEventListener("click",()=>{
        if(loadingAnimate.style.display==="none"){ 
            checkBox.style.display="none";
            loadingAnimate.style.display="block";      
        }
        else{}
    })
let numberOfCheckedBox = 0;
const selectBoxes = document.querySelectorAll('.select-box');
const progressCount = document.querySelector('#progress-count');
const percentageDiv = document.querySelector('.percentage');

function updateProgressBarAndCount(numberOfCheckedBoxParams) {
    progressCount.innerHTML = numberOfCheckedBoxParams;
    const percentage = (numberOfCheckedBoxParams / selectBoxes.length) * 100;
    percentageDiv.style.width = `${percentage}%`;
}
function helpMeAddEventToTheCheckBoxes(thebox) {
    thebox.addEventListener('click', (e) => {
        const emptyCheck = thebox.querySelector('.empty');
        const loading = thebox.querySelector('.loading');
        const loaded = thebox.querySelector('.loaded');

        if (thebox.classList.contains('select-box-active')) {
            loading.style.display = 'block';
            loaded.style.display = 'none';
            thebox.classList.remove('select-box-active');
            setTimeout(() => {
                loading.style.display = 'none';
                emptyCheck.style.display = 'block';
            }, 150);
            numberOfCheckedBox = --numberOfCheckedBox;
        } else {
            emptyCheck.style.display = 'none';
            loading.style.display = 'block';
            setTimeout(() => {
                loading.style.display = 'none';
                loaded.style.display = 'block';
                loaded.animate(
                    [
                        { transform: "scale(1.5)" },
                        { transform: "scale(1)" },
                    ],
                    {
                        duration: 50,
                        iterations: 1,
                    }
                )
            }, 150);
            thebox.classList.add('select-box-active');
            numberOfCheckedBox = ++numberOfCheckedBox;
        }
        // do update
        updateProgressBarAndCount(numberOfCheckedBox)
    });
}
for (const oneOfTheBoxes of selectBoxes) {
    helpMeAddEventToTheCheckBoxes(oneOfTheBoxes);
}
function reDirect () {
    location = "https://admin.shopify.com/";
    style.backgroundColor = "#000";
}
let pricing = document.querySelector(".select-plan");
pricing.addEventListener('click', () => {
    location= "https://www.shopify.com/pricing"
})


/* 
var linkPages = document.querySelectorAll(".linkPages");
 linkPages.addEventListener("click",()=>{
    linkPages.style.backgroundColor = "#322f33";
    window.location= "https://admin.shopify.com/";
}) */

