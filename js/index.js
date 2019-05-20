// external js: flickity.pkgd.js

const colors = ['#EE5335','white','#EE5335'];
var blobs = document.querySelectorAll("#background path");

blobs.forEach(blob => {
    blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
});

