const notificationModal = document.getElementById("notification");
const laterButton = document.getElementById("later-input");

const username = "kalbo_09";

function Proceed() {

}

function checkButton(buttonName) {
  const usernameInputValue = document.getElementById("username-input").value;

  if (buttonName === "submit_user") {
    if (usernameInputValue === "") {
      document.getElementById("notification-message").innerHTML = "Empty Field!";
      document.getElementById("notification-message-2").innerHTML = "";
      document.getElementById("notification-button").innerHTML = "Try Again!";
      document.getElementById("notification-button").style.color = "red";
      showNotification(true);
    } else if (usernameInputValue === username) {
      document.getElementById("notification-message").innerHTML = `${usernameInputValue} is used by another user!`;
      document.getElementById("notification-message-2").innerHTML = "";
      document.getElementById("notification-button").innerHTML = "Try Again!";
      document.getElementById("notification-button").style.color = "red";
      showNotification(true);
    } else if (usernameInputValue.includes(" ")) {
      document.getElementById("notification-message").innerHTML = "Username cannot contain spaces!";
      document.getElementById("notification-message-2").innerHTML = "";
      document.getElementById("notification-button").innerHTML = "Try Again!";
      document.getElementById("notification-button").style.color = "red";
      showNotification(true);
    } else {
      document.getElementById("notification-message").innerHTML = "Are You Sure?";
      document.getElementById("notification-message-2").innerHTML = "";
      document.getElementById("notification-button").innerHTML = "Submit";
      document.getElementById("notification-button").style.color = "yellow";
      showNotification(true);
    }
  } else if (buttonName === "later_user") {
    document.getElementById("notification-message").innerHTML = "Are You Sure?";
    document.getElementById("notification-message-2").innerHTML = '"We will generate a temporary username for you!"';
    document.getElementById("notification-button").innerHTML = "Submit";
    document.getElementById("notification-button").style.color = "yellow";
    showNotification(true);
  }
}

function showNotification(isOpen) {
  if (isOpen) {
    notificationModal.classList.add("open");
  } else {
    notificationModal.classList.remove("open");
  }
}
