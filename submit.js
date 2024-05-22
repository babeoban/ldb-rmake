var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal-content');
var btn = document.getElementById("openBtn");
var span = document.getElementsByClassName("close")[0]; 

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.classList.add('modal-exit2');
  modal2.classList.add('modal-exit');
  setTimeout(function() {
    modal.style.display = 'none';
    modal.classList.remove('modal-exit2');
    modal2.classList.remove('modal-exit');
  }, 500); 
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.add('modal-exit2');
    modal2.classList.add('modal-exit');
    setTimeout(function() {
      modal.style.display = 'none';
      modal.classList.remove('modal-exit2');
      modal2.classList.remove('modal-exit');
    }, 500);
  }
}

document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();
});
