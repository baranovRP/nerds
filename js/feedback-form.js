var link = document.querySelector(".contacts-email");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector(".feedback-form");
var nickname = popup.querySelector("[name=nickname]");
var defNickname = popup.querySelector("[name=nickname]").value;
var storageNickname = localStorage.getItem("nickname");
var email = popup.querySelector("[name=email]");
var defEmail = popup.querySelector("[name=email]").value;
var storageEmail = localStorage.getItem("email");
var message = popup.querySelector("[name=content]");
var defMessage = popup.querySelector("[name=content]").value;
var cancel = popup.querySelector(".cancel");

function closeContactsForm() {
  popup.classList.remove("show-contacts-form");
  popup.classList.remove("modal-error");
}

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("show-contacts-form");
  if (storageNickname) {
    nickname.value = storageNickname;
    var isStorageNicknamePresent = true;
  }
  if (storageEmail) {
    email.value = storageEmail;
    var isStorageEmailPresent = true;
  }
  if (isStorageNicknamePresent && isStorageEmailPresent) {
    message.value = "";
    message.focus();
  }
  else if (isStorageNicknamePresent) {
    email.value = "";
    email.focus();
  }
  else {
    nickname.value = "";
    nickname.focus();
  }
});

nickname.addEventListener("click", function (event) {
  event.preventDefault();
  if (nickname.value === defNickname) {
    nickname.value = "";
  }
  nickname.focus();
});

email.addEventListener("click", function (event) {
  event.preventDefault();
  if (email.value === defEmail) {
    email.value = "";
    if (nickname.value != storageNickname) {
      nickname.value = defMessage;
    }
  }
  email.focus();
});

message.addEventListener("click", function (event) {
  event.preventDefault();
  if (message.value === defMessage) {
    message.value = "";
  }
  message.focus();
});

nickname.addEventListener("blur", function (event) {
  event.preventDefault();
  if (!nickname.value) {
    nickname.value = defNickname;
  }
});

email.addEventListener("blur", function (event) {
  event.preventDefault();
  if (!email.value) {
    email.value = defEmail;
  }
});

message.addEventListener("blur", function (event) {
  event.preventDefault();
  if (!message.value) {
    message.value = defMessage;
  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  closeContactsForm();
});

cancel.addEventListener("click", function (evene) {
  event.preventDefault();
  closeContactsForm();
});

form.addEventListener("submit", function (event) {
  if (!nickname.value || !email.value || !message.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("name", nickname.value);
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("show-contacts-form")) {
      closeContactsForm();
    }
  }
});
