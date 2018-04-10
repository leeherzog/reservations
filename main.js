var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {
  if (name in reservations && reservations[name]["claimed"] === false){
    alert("Welcome!");
  }
  else if (name in reservations && reservations[name]["claimed"] === true){
    alert("Reservation already claimed!");
  }
  else {
    alert("No reservation!");
  }
}

claimReservation();