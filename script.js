const scriptURL =
  "https://script.google.com/macros/s/AKfycbzB1E9a_iMs1Op7xlCRrXQqaKmV7xqfqapu0Xv9KK4Xlvz_K5VjfRzSfI3zCqM8anSWtA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Successfully Sent..!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
