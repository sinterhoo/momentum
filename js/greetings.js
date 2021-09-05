const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAEM = "hidden";
const USERNAME_KEY = "userName";

function onClickLoginButton(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAEM);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(userName);
}

function paintGreeting(userName){
    greeting.innerText = "Hello " + userName;
    greeting.classList.remove(HIDDEN_CLASSNAEM);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAEM);
    loginButton.addEventListener("click", onClickLoginButton);
}
else{
    paintGreeting(savedUserName);
}