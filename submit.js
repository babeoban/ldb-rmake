var modal = document.getElementById('myModal');
var modal1 = document.getElementById('lastwords');
var modal2 = document.getElementById('myModal-content');
var modal3 = document.getElementById('myModal-content1');
var btn = document.getElementById("openBtn");
var btn1 = document.getElementById("openBtn1");
var span = document.getElementById("close");
var span1 = document.getElementById("close1");

btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal1.style.display = "block";
}

span.onclick = function() {
  modal1.classList.add('modal-exit2');
  modal3.classList.add('modal-exit');
  setTimeout(function() {
    modal1.style.display = "none";
    modal1.classList.remove('modal-exit2');
    modal3.classList.remove('modal-exit');
  }, 500); 
}
span1.onclick = function() {
  modal.classList.add('modal-exit2');
  modal2.classList.add('modal-exit');
  setTimeout(function() {
    modal.style.display = 'none';
    modal.classList.remove('modal-exit2');
    modal2.classList.remove('modal-exit');
  }, 550); 
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.add('modal-exit2');
    modal2.classList.add('modal-exit');
    setTimeout(function() {
      modal.style.display = 'none';
      modal.classList.remove('modal-exit2');
      modal2.classList.remove('modal-exit');
    }, 550);
  }
  if (event.target == modal1) {
    modal1.classList.add('modal-exit2');
    modal3.classList.add('modal-exit');
    setTimeout(function() {
      modal1.style.display = 'none';
      modal1.classList.remove('modal-exit2');
      modal3.classList.remove('modal-exit');
    }, 550);
  }
}

document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();
});
