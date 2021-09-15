var tileLayer = new L.TileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});
var map = new L.Map('map', {
'center': [-34.598047, -58.420191],
'zoom': 13,
'layers': [tileLayer]
});

var marker = L.marker([-34.598047, -58.420191],{
draggable: true
}).addTo(map);

marker.on('dragend', function (e) {
document.getElementById('latitude').value = marker.getLatLng().lat;
document.getElementById('longitude').value = marker.getLatLng().lng;
});
function mostrar(){
    var archivo1 = document.getElementById("inputGroupFile01").files[0];
    var archivo2= document.getElementById("inputGroupFile02").files[0];
    var archivo3 = document.getElementById("inputGroupFile03").files[0];
    var reader = new FileReader();
    var archivos =[ archivo1,archivo2,archivo3];
    var imgs = ["img1","img2","img3"];
    var inputGroupFiles = ["inputGroupFile01","inputGroupFile03","inputGroupFile03"]
    for (let index = 0; index <= archivos.length; index++) {
        if(inputGroupFiles[index]){
            reader.readAsDataURL(archivos[index] );
            reader.onloadend = function () {
              document.getElementById(imgs[index]).src = reader.result;
        
        }
    }
  };
}
function mostrar1(){
    var archivo = document.getElementById("inputGroupFile01").files[0];
    var reader = new FileReader();
    if (inputGroupFile01) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementById("img1").src = reader.result;
      }
    }
  };
  function mostrar2(){
    var archivo = document.getElementById("inputGroupFile02").files[0];
    var reader = new FileReader();
    if (inputGroupFile02) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementById("img2").src = reader.result;
      }
    }
  };
  function mostrar3(){
    var archivo = document.getElementById("inputGroupFile03").files[0];
    var reader = new FileReader();
    if (inputGroupFile03) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementById("img3").src = reader.result;
      }
    }
  };