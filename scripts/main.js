const myHeading = document.querySelector('h1');
myHeading.textContent = 'Welcome to my site!';
/* comments */


/*let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
} */

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

/*document.querySelector('html').addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});   */

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sodium.jpg') {
      myImage.setAttribute('src','images/sodium2.jpg');
    } else {
      myImage.setAttribute('src','images/sodium.jpg');/*../subdirectory/another-subdirectory/my-image.jpg*/
    }
}

let mybutton = document.querySelector('button');
let myheading = document.querySelector('h1');
function setUserName() {
  	let myName = prompt('Please enter your name.');
  	if(!myName) setUserName();
  	else myHeading.textContent = 'Welcome to my site, ' + myName;
  	
			
		}
mybutton.onclick= function(){setUserName();}









