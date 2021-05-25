baguetteBox.run('.gallery');
// const search = new Filter('search', 'data-caption');

function myFunction() {
  // Declare variables
  console.log('myFunction engaged')
  var input, filter, parent, child, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toLowerCase();
  parent = document.getElementById("photo-container");
  child = parent.getElementsByClassName('photo');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < child.length; i++) {
    a = child[i].getElementsByTagName("a")[0];
    txtValue = a.getAttribute('data-caption');
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      child[i].style.display = "";
    } else {
      child[i].style.display = "none";
    }
  }
}
