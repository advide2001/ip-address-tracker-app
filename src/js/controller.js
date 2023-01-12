var toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("change", function () {
  if (toggleSwitch.checked) {
    // Checkbox is checked
    console.log("Yearly");
  } else {
    // Checkbox is not checked
    console.log("Monthly");
  }
});
