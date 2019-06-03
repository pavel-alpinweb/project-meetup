import Masonry from 'masonry-layout';

$(document).ready(function () {
  $('.gallery').imagesLoaded( function() {
    var elem = document.querySelector('.gallery');
    var msnry = new Masonry( elem, {
      // options
      itemSelector: '.gallery__item',
    });
    msnry.reloadItems();
  });
});