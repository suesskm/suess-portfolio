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

 

