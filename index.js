var form = document.getElementById("my-form");
var firstName
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var email = document.getElementById("email");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your message"
  });
}
form.addEventListener("submit", handleSubmit)