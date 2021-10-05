/*document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){

    alert("I got Clicked");
}*/

/* above first basic event listner 
 we don't need parantheses after fuction

 Rule --- select element then do action what you want 

*/


// ============================================================
//  another approach by annonmous function 



/*
document.querySelector("button").addEventListener("click",function(){
    alert ("I got Clicked")
})

*/

// ==========================challange to add all button event==========


/*
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i=0;i<numberOfDrumButtons;i++)

{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        alert("I got clicked")
    })

}
*/

// ===========================================================

// -----------------PLAYING SOUND---------------------
//  Detecting Button Press
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i=0;i<numberOfDrumButtons;i++)

{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     
/*  let audio = new Audio("sounds/tom-1.mp3") // this is the basic method to add sound 
audio.play(); */

// console.log(this.innerHTML);  // to target inner html

// console.log(this.style.color="white"); // to change color of text 



// logic for make posible
let buttonInnerHTML = this.innerHTML;
 makeSound(buttonInnerHTML);
 buttonAnimation(buttonInnerHTML);

// switch (buttonInnerHTML) {
//     case "w":

//       let tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//         break;
//         case "a" :
//         let tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;
//         case "s":
//             let tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play();
//             break;

//             case "d":
//                 let tom4 = new Audio("sounds/tom-4.mp3");
//                 tom4.play();
//                 break;
    
//                 case "j":
//                     let tom5 = new Audio("sounds/snare.mp3");
//                     tom5.play();
//                     break;

//                     case "k":
//                         let tom6 = new Audio("sounds/crash.mp3");
//                         tom6.play();
//                         break;

//                         case "l":
//                             let tom7 = new Audio("sounds/kick-bass.mp3");
//                             tom7.play();
//                             break;
                
            
        



//     default: console.log(buttonInnerHTML);
//         break;
// }


    });

}
// Detection Keyboard Press
document.addEventListener("keypress",function(event){

makeSound(event.key);

buttonAnimation(event.key);
});


// next step

function makeSound(key){

    switch (key) {
        case "w":
    
          let tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
            break;
            case "a" :
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            case "s":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
    
                case "d":
                    let tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
        
                    case "j":
                        let tom5 = new Audio("sounds/snare.mp3");
                        tom5.play();
                        break;
    
                        case "k":
                            let tom6 = new Audio("sounds/crash.mp3");
                            tom6.play();
                            break;
    
                            case "l":
                                let tom7 = new Audio("sounds/kick-bass.mp3");
                                tom7.play();
                                break;
                    
                
            
    
    
    
        default: console.log(buttonInnerHTML);
            break;
    }
    
}


// ============Animation===============
function buttonAnimation (currentKey){

  let activeButton = document.querySelector("." + currentKey) 
activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed") ; 
},100);
}