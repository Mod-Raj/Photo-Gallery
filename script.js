
//--------------------------Gallery

const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementById('close');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = image.src;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
// 


document.getElementById("heading").addEventListener("click", function() {
  alert("You clicked on the heading!");
});

// //
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}
