//your JS code here. If required.
 // Ask for confirmation
const isProceeding = confirm("Do you want to proceed?");

// Check user's choice
if (isProceeding) {
  // Show alert if OK is clicked
  alert("You clicked OK. Proceeding...");
} else {
  // Show alert if Cancel is clicked
  alert("You clicked Cancel. Exiting...");
}