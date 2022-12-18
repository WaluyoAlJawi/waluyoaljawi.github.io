// parallax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  //   parallax h1
  //   $('.jumbotron h1').css({
  //     transform: 'translate(0px, ' + wScroll / 8 + '%)',
  //   });

  //   parallax h4
  //   $('.jumbotron h4').css({
  //     transform: 'translate(0px, ' + wScroll / 8 + '%)',
  //   });

  // info
  if (wScroll > $('.panel').offset().top - 300) {
    $('.panel .pnl').each(function (i) {
      setTimeout(function () {
        $('.panel .pnl').eq(i).addClass('muncul');
      }, 500 * (i + 1));
    });
  }

  //   Visi Misi
  if (wScroll > $('.vm .p').offset().top - 250) {
    $('.vm .p').each(function (i) {
      setTimeout(function () {
        $('.vm .p').eq(i).addClass('muncul');
      }, 500 * (i + 1));
    });
  }

  //   Info
  if (wScroll > $('.info .card').offset().top - 450) {
    $('.info .card').each(function (i) {
      setTimeout(function () {
        $('.info .card').eq(i).addClass('muncul');
      }, 500 * (i + 1));
    });
  }

  //   Galeri
  if (wScroll > $('.galeri .card').offset().top - 350) {
    $('.galeri .card').each(function (i) {
      setTimeout(function () {
        $('.galeri .card').eq(i).addClass('muncul');
      }, 500 * (i + 1));
    });
  }
});
