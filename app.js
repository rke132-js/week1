const usernameField = document.querySelector('#userName');
const clickBtn = document.querySelector('#clickBtn');
const greetingContainer = document.querySelector('#greeting');

clickBtn.addEventListener('click', ()=> {
    
    let userName = usernameField.value;
    let greetByName = `Hello, ${userName}!`;

    greetingContainer.innerHTML = greetByName; 
});

