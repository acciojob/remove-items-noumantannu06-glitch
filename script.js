const selectElement = document.getElementById('your-dropdown-id');
const selectedOptions = Array.from(selectElement.selectedOptions);

selectedOptions.forEach(option => {
  selectElement.removeChild(option);
});