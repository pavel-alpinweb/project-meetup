import Masonry from 'masonry-layout';
var elem = document.querySelector('.gallery');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.gallery__item',
});