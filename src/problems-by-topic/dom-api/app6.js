import $ from 'jquery';

export default () => {
  $('a[data-slide]').click((e) => {
    const carousel = e.target.closest('[data-ride="carousel"]');
    const active = $('.carousel-item.active', carousel);
    const direction = e.currentTarget.dataset.slide;
    const map = {
      next: active.next().length > 0 ? active.next() : active.siblings().first(),
      prev: active.prev().length > 0 ? active.prev() : active.siblings().last(),
    };
    const newActive = map[direction];
    active.removeClass('active');
    newActive.addClass('active');
  });
};