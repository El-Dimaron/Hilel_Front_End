const loginPopup = new Popup({
  id: "login-button",
  title: "",
  content: `<iframe src="./login.html" style="width:100%; height:500px; border:none;" allow="fullscreen"></iframe>`,
  css: `
        .popup-header {
            display: none;
        }`,
});

const loginButton = document.querySelector("#login-button");
loginButton.addEventListener("click", () => {
  loginPopup.show();
});

const registerPopup = new Popup({
  id: "register-button",
  title: "",
  content: `<iframe src="./register.html" style="width:100%; height:600px; border:none;" allow="fullscreen"></iframe>`,
  css: `
        .popup-header {
            display: none;
        }`,
});

const registerButton = document.querySelector("#register-button");
registerButton.addEventListener("click", () => {
  registerPopup.show();
});
