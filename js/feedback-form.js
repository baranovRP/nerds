function closeContactsForm(){popup.classList.remove("show-contacts-form"),popup.classList.remove("modal-error")}var link=document.querySelector(".contacts-email"),popup=document.querySelector(".modal-content"),close=document.querySelector(".modal-content-close"),form=popup.querySelector(".feedback-form"),nickname=popup.querySelector("[name=nickname]"),defNickname=popup.querySelector("[name=nickname]").value,storageNickname=localStorage.getItem("nickname"),email=popup.querySelector("[name=email]"),defEmail=popup.querySelector("[name=email]").value,storageEmail=localStorage.getItem("email"),message=popup.querySelector("[name=content]"),defMessage=popup.querySelector("[name=content]").value,cancel=popup.querySelector(".cancel");link.addEventListener("click",function(e){if(e.preventDefault(),popup.classList.add("show-contacts-form"),storageNickname){nickname.value=storageNickname;var a=!0}if(storageEmail){email.value=storageEmail;var n=!0}a&&n?(nickname.value=storageNickname,email.value=storageEmail,message.value="",message.focus()):a?(nickname.value=storageNickname,email.value="",email.focus()):(nickname.value="",nickname.focus())}),nickname.addEventListener("click",function(e){e.preventDefault(),nickname.value===defNickname&&(nickname.value=""),nickname.focus()}),nickname.addEventListener("blur",function(e){e.preventDefault(),nickname.value||(nickname.value=defNickname)}),email.addEventListener("click",function(e){e.preventDefault(),email.value===defEmail&&(email.value=""),email.focus()}),email.addEventListener("blur",function(e){e.preventDefault(),email.value||(email.value=defEmail)}),message.addEventListener("click",function(e){e.preventDefault(),message.value===defMessage&&(message.value=""),message.focus()}),message.addEventListener("blur",function(e){e.preventDefault(),message.value||(message.value=defMessage)}),close.addEventListener("click",function(e){e.preventDefault(),closeContactsForm()}),cancel.addEventListener("click",function(e){e.preventDefault(),closeContactsForm()}),form.addEventListener("submit",function(e){nickname.value===defNickname||email.value===defEmail||message.value===defMessage?(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error")):(localStorage.setItem("name",nickname.value),localStorage.setItem("email",email.value))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("show-contacts-form")&&closeContactsForm()});
