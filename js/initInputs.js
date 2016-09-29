
var dropContainer =  document.getElementById('drop-container'),
inputFile = document.getElementById('img-section__input');

function readFile(file) {
  var reader = new FileReader();

  reader.onload = function(e) {
    var img = document.getElementById('initial-img'),
    message= document.getElementById('drop-message');

    message.classList.add('hidden');
    img.classList.remove('hidden');
    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

dropContainer.ondragover = function() {
  this.classList.add('hover');
  return false;
};

dropContainer.ondragleave = function () {
  this.classList.remove('hover');
  return false;
};

dropContainer.ondrop = function (e) {
  e.stopPropagation();
  e.preventDefault();
  this.classList.remove('hover');
  readFile(e.dataTransfer.files[0]);
  return false;
};

inputFile.addEventListener('change', function(){
  readFile(this.files[0]);
});
