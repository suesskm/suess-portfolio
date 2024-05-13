
// let images = ['../media/images/robot.png','../media/images/swordgirl.png','../media/images/bear.png'];

// // / 2. create an event listener for the button

// document.getElementById("clickButton").addEventListener("click", displayImage);


// // 3. create a function that will display a random image

// function displayImage(){

//     let image = document.getElementById('robot');
//     let random = Math.floor(Math.random() * images.length);
//     image.src = images[random];
// }


// // //create an event listener for the button
// // document.getElementById('submit').addEventListener('click', function(event){

// //     event.preventDefault();
// //     handleFormSubmit();

// // });

// // function handleFormSubmit() {
// //     let name = document.getElementById('name').value;
// //     let lastname = document.getElementById('lastname').value;
// //     let message = document.getElementById('message').value;
// //         // Display the variable name as an h1 element on the page
// //         let h1Element = document.createElement('h1');
// //         h1Element.textContent = name;
// //         document.body.appendChild(h1Element);

// //     //     let checkValue = document.getElementById('yes').checked;
// //     //     if (checkValue) {
// //     //         //change the background color of the body to green
// //     //         document.body.style.backgroundColor = 'green';
// //     //     }

// //     // else{
// //     //     document.body.style.backgroundColor = 'red';
// //     // }
// //     //    document.getElementById('form-container').reset()
// //     // }



// // const button = document.getElementById('submit');
// // // Add a click event listener to the button
// // button.addEventListener('click', () => {
// //   // Run your animation code here
// //   console.log('button clicked');
// //   // For example, you can use CSS animations or a JavaScript animation library
// //   button.classList.add('bg-anim');
// //   console.log('button clicked');
// //   //add text to document
// //     let text = document.createElement('p');
// // text.textContent = 'thank you!';
// //     document.body.appendChild(text);
    
// //   //add animation to bodgy
// //     // Remove the animation class after the animation ends
// //     button.addEventListener('animationend', () => {
// //         button.classList.remove('bg-anim');
// //         console.log('Animation ended');
// //     });
// // });
// // document.addEventListener('keydown',(event) => {
// //     if(event.key === 'a'){
// //         button.classList.add('bg-anim');
// //         // remove the animation
// //         button.addEventListener('animationend', () => {
// //             button.classList.remove('bg-anim');
// //         });
// //     }
// // } );
// // }



// const button = document.getElementById('myButton');
// // Add a click event listener to the button
// button.addEventListener('click', () => {
//   // Run your animation code here
//   // For example, you can use CSS animations or a JavaScript animation library
//   button.classList.add('bg-anim');
//   console.log('Button clicked');
//     // Remove the animation class after the animation ends
//     button.addEventListener('animationend', () => {
//         button.classList.remove('bg-anim');
//         console.log('Animation ended');
//     });
// });
// document.addEventListener('keydown',(event) => {
//     if(event.key === 'a'){
//         button.classList.add('bg-anim');
//         // remove the animation
//         button.addEventListener('animationend', () => {
//             button.classList.remove('bg-anim');
//         });
//     }
// } );


//create an event listener for the button
document.getElementById('submit').addEventListener('click', function(event){

    event.preventDefault();
    handleFormSubmit();

});

function handleFormSubmit() {
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let message = document.getElementById('message').value;
        // Display the variable name as an h1 element on the page
        let h1Element = document.createElement('h1');
        h1Element.textContent = name;
        document.body.appendChild(h1Element);

        let checkValue = document.getElementById('yes').checked;
        if (checkValue) {
            //change the background color of the body to green
            document.body.style.backgroundColor = 'green';
        }

    else{
        document.body.style.backgroundColor = 'red';
    }
       document.getElementById('form-container').reset()
    }

 












