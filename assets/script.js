let quote1 = document.querySelector('#quote1');
let modal1 = document.querySelector('#modal1');

quote1.addEventListener('click', function() {
    modal1.style.display = "flex";
});

var span = document.getElementsByClassName("close")[0]

span.onclick = function() {
    modal1.style.display = "none";
  }