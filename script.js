//-----------------------------------------------Package cost calculator------------------------------

function calculateCost() {
  var packageSelect = document.getElementById("packageSelect");
  var peopleCount = document.getElementById("peopleCount");
  var costResult = document.getElementById("costResult");

  var price = Number(packageSelect.value);
  var people = Number(peopleCount.value);

  if (people <= 0) {
    costResult.style.color = "red";
    costResult.innerHTML = "Please enter a valid number of travellers.";
  } else {
    var total = price * people;
    costResult.style.color = "green";
    costResult.innerHTML = "Estimated Total Cost: Rs. " + total;
  }
}

//----------------------------------------------Booking form validation----------------------------
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var destination = document.getElementById("destination").value;
  var formMessage = document.getElementById("formMessage");

  if (name == "" || email == "" || phone == "" || destination == "") {
    formMessage.style.color = "red";
    formMessage.innerHTML = "Please fill in all the fields.";
    return false;
  }

  if (email.indexOf("@") == -1) {
    formMessage.style.color = "red";
    formMessage.innerHTML = "Please enter a valid email address.";
    return false;
  }

  if (phone.length != 10) {
    formMessage.style.color = "red";
    formMessage.innerHTML = "Please enter a valid 10 digit mobile number.";
    return false;
  }

  formMessage.style.color = "green";
  formMessage.innerHTML = "Thanks! We have received your trip enquiry.";
  return false; // stops the page from reloading
}

//--------------------------------------------------------Gallery filter----------------------------------------
function filterGallery(category) {
  var items = document.getElementsByClassName("gallery-item");
  for (var i = 0; i < items.length; i++) {
    if (category == "all" || items[i].className.indexOf(category) != -1) {
      items[i].style.display = "inline-block";
    } else {
      items[i].style.display = "none";
    }
  }
}
