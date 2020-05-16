const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".greeting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

const saveNAme = (text) => {
    localStorage.setItem(USER_LS, text)
}

const handleSubmit = (event) => {
    //submit 일어나면 값을 다른곳으로 날리고 특정 페이지르 호출하는 로직임
    //그래서 submit하면 자동으로 새로고침이 되는게 기본값인데
    //밑에거 실행하면 그걸 막아버림
    event.preventDefault();
    const currnetValue = input.value;
    paintGreeting(currnetValue);
    saveNAme(currnetValue);
}

const askForName = () => {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

const paintGreeting = (text) => {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

const loadName = () => {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}
const init2 = () => {
    loadName();
}

init2();