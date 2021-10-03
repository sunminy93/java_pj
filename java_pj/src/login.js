const loginId = document.querySelector("#login-id");
const loginIdInput = document.querySelector("#login-id input");
const loginGreeting = document.querySelector("#greeting");

const hiddenClass = "hidden";

function loginData(info) {
    info.preventDefault();
    const myId = loginIdInput.value;
    loginId.classList.add(hiddenClass);
    console.log(myId);
    loginGreeting.innerText = `hello ${myId}`;
    loginGreeting.classList.remove(hiddenClass);
    clock.classList.remove(hiddenClass);
    todoForm.classList.remove(hiddenClass);
    localStorage.setItem("myId", myId);
}

loginId.addEventListener("submit", loginData);

const savedId = localStorage.getItem("myId")

if (savedId === null) {
    loginId.classList.remove(hiddenClass);
    loginId.addEventListener("submit", loginData);
} else {
    loginGreeting.innerText = `hello ${savedId}`;
    loginGreeting.classList.remove(hiddenClass);
    clock.classList.remove(hiddenClass);
    todoForm.classList.remove(hiddenClass);
}