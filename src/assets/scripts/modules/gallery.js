import Masonry from 'masonry-layout';

$(window).load(function () {
  var elem = document.querySelector('.gallery');
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.gallery__item',
  });
});