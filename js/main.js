$(document).ready(function () {
  $('section').each(function(){
    var section = $(this),
        container = section.find('.container');
    if(container.length){
      var offset = container.offset().left,
          height = section.outerHeight(),
          iteration = 2;
      if(section.hasClass('s_main')){
        iteration = 1;
      }
      for(var i = 0; i<iteration; i++){
        if(offset > 100){
          var elem = getRandomInt(1,7);
          switch(elem){
            case 1:
              section.append('<svg class="svg_bg" style="position:absolute; left:'+getRandomInt(15,offset-30)+'px;top: '+getRandomInt(30,height)+'px;" xmlns="http://www.w3.org/2000/svg" width="36" height="37"><path d="M23.3 1C29.2 1 34 5.8 34 11.8 34 17.8 29.2 22.6 23.3 22.6 17.4 22.6 12.6 17.8 12.6 11.8 12.6 5.8 17.4 1 23.3 1Z" style="fill:none;opacity:0.2;stroke-width:2px;stroke:rgb(9, 54, 168)"/><path d="M1 11.5L24.2 11.5 24.2 35 1 35 1 11.5Z" style="fill:none;opacity:0.2;stroke-width:2px;stroke:rgb(237, 136, 63)"/></svg><svg style="position:absolute; right:'+getRandomInt(20,offset-40)+'px;top: '+getRandomInt(30,height)+'px;"  xmlns="http://www.w3.org/2000/svg" width="25" height="26"><path d="M10.7 1.8C4.8 2.5 0.7 7.9 1.4 13.9 2.1 19.8 7.4 24 13.3 23.3 19.2 22.6 23.3 17.2 22.6 11.3 21.9 5.3 16.5 1.1 10.7 1.8Z" style="fill:none;opacity:0.2;stroke-width:2px;stroke:rgb(9, 54, 168)"/></svg>');
              break;

            case 2:
              section.append('<svg class="svg_bg" style="position:absolute; right:'+getRandomInt(20,offset-40)+'px;top: '+getRandomInt(30,height)+'px;" xmlns="http://www.w3.org/2000/svg" width="54" height="51"><path d="M52 7L21.9 48.4 1.1 1.6 52 7Z" style="fill:none;opacity:0.3;stroke-width:2px;stroke:rgb(237, 136, 63)"/></svg>');
              break;

            case 3:
              section.append('<svg class="svg_bg" style="position:absolute; left:'+getRandomInt(15,offset-30)+'px;top: '+getRandomInt(30,height)+'px;" xmlns="http://www.w3.org/2000/svg" width="25" height="26"><path d="M10.7 1.8C4.8 2.5 0.7 7.9 1.4 13.9 2.1 19.8 7.4 24 13.3 23.3 19.2 22.6 23.3 17.2 22.6 11.3 21.9 5.3 16.5 1.1 10.7 1.8Z" style="fill:none;opacity:0.2;stroke-width:2px;stroke:rgb(9, 54, 168)"/></svg><svg style="position:absolute; left:'+getRandomInt(20,offset-40)+'px;top: '+getRandomInt(30,height)+'px;"  xmlns="http://www.w3.org/2000/svg" width="54" height="51"><path d="M52 7L21.9 48.4 1.1 1.6 52 7Z" style="fill:none;opacity:0.3;stroke-width:2px;stroke:rgb(237, 136, 63)"/></svg>');
              break;

            case 4:
              section.append('<svg class="svg_bg" style="position:absolute; left:'+getRandomInt(15,offset-30)+'px;top: '+getRandomInt(30,height)+'px;" xmlns="http://www.w3.org/2000/svg" width="36" height="37"><path d="M23.3 1C29.2 1 34 5.8 34 11.8 34 17.8 29.2 22.6 23.3 22.6 17.4 22.6 12.6 17.8 12.6 11.8 12.6 5.8 17.4 1 23.3 1Z" style="fill:none;opacity:0.2;stroke-width:2px;stroke:rgb(9, 54, 168)"/><path d="M1 11.5L24.2 11.5 24.2 35 1 35 1 11.5Z" style="fill:none;opacity:0.2;stroke-width:2px;stroke:rgb(237, 136, 63)"/></svg><svg style="position:absolute; left:'+getRandomInt(20,offset-40)+'px;top: '+getRandomInt(30,height)+'px;" xmlns="http://www.w3.org/2000/svg" width="54" height="51"><path d="M52 7L21.9 48.4 1.1 1.6 52 7Z" style="fill:none;opacity:0.3;stroke-width:2px;stroke:rgb(237, 136, 63)"/></svg>');
              break;

            case 5:
              section.append('<svg class="svg_bg" style="position:absolute; right:'+getRandomInt(20,offset-40)+'px;top: '+getRandomInt(30,height)+'px;" xmlns="http://www.w3.org/2000/svg" width="36" height="37"><path d="M23.3 1C29.2 1 34 5.8 34 11.8 34 17.8 29.2 22.6 23.3 22.6 17.4 22.6 12.6 17.8 12.6 11.8 12.6 5.8 17.4 1 23.3 1Z" style="fill:none;opacity:0.2;stroke-width:2px;stroke:rgb(9, 54, 168)"/><path d="M1 11.5L24.2 11.5 24.2 35 1 35 1 11.5Z" style="fill:none;opacity:0.2;stroke-width:2px;stroke:rgb(237, 136, 63)"/></svg>');
              break;

            case 6:
              section.append('<svg class="svg_bg" style="position:absolute; left:'+getRandomInt(20,offset-40)+'px;top: '+getRandomInt(30,height)+'px;" xmlns="http://www.w3.org/2000/svg" width="54" height="51"><path d="M23.3 1C29.2 1 34 5.8 34 11.8 34 17.8 29.2 22.6 23.3 22.6 17.4 22.6 12.6 17.8 12.6 11.8 12.6 5.8 17.4 1 23.3 1Z" style="fill:none;opacity:0.2;stroke-width:2px;stroke:rgb(9, 54, 168)"/></svg>');
              break;
            default:
              return;
          }
        }
      }
    }
  });
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //video placeholder
  $('.s_video__left_placeholder').click(function(){
    $(this).addClass('_hidden');
    players['player0'].playVideo();
  });
  //video tabs
  $('.s_video__right_item').click(function(){
//    var el = $(this),
//        n = el.index(),
//        id = $('.s_video__left_video._active').find('iframe').attr('id');
//    $('.s_video__left_placeholder').removeClass('_hidden');
//    players[''+id+''].stopVideo();
//    el.addClass('_active').siblings().removeClass('_active');
//    $('.s_video__left_video').eq(n).addClass('_active').siblings().removeClass('_active');
  });

  //history slider
  if($('.s_history__slider_wrp').length){
    var historySlider = new Swiper('.s_history__slider_wrp', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 40,
      autoplay: {
        delay: 10000
      },
      navigation: {
        prevEl: '.s_history__slider_wrp .g_arr__left',
        nextEl: '.s_history__slider_wrp .g_arr__right'
      },
      breakpoints: {
        655: {
          slidesPerView: 1
        }
      }
    });
  }
  //adapt slider
  if($('.s_adapt__cat').length){
    var historySlider = new Swiper('.s_adapt__cat', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        prevEl: '.s_adapt__cat .g_arr__left',
        nextEl: '.s_adapt__cat .g_arr__right'
      },
      breakpoints: {
        1000:{
          slidesPerView: 2
        },
        616:{
          slidesPerView: 1
        }
      }
    });
  }
  //adapt slider
  if($('.s_about__partners').length){
    var historySlider = new Swiper('.s_about__partners', {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: {
        prevEl: '.s_about__partners .g_arr__left',
        nextEl: '.s_about__partners .g_arr__right'
      },
      autoplay: {
        delay: 4000
      },
      breakpoints: {
        800: {
          slidesPerView: 4
        },
        600: {
          slidesPerView: 3
        },
        400: {
          slidesPerView: 2
        }
      }
    });
  }
  //done slider
  if($('.s_done__top').length){
    var historySlider = new Swiper('.s_done__top', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerColumn: 2,
      navigation: {
        prevEl: '.s_done__top .g_arr__left',
        nextEl: '.s_done__top .g_arr__right'
      },
      breakpoints: {
        1000: {
          slidesPerView: 2
        },
        670: {
          slidesPerView: 1
        }
      }
    });
  }
  //done slider
  if($('.s_done__bot').length){
    var historySlider = new Swiper('.s_done__bot', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        prevEl: '.s_done__bot .g_arr__left',
        nextEl: '.s_done__bot .g_arr__right'
      },
      breakpoints: {
        800: {
          slidesPerView: 1
        }
      }
    });
  }
  //needs tabs
  if($('.s_shelter__needs_rightSlider').length){
    var historySlider = new Swiper('.s_shelter__needs_rightSlider', {
      slidesPerView: 'auto',
      navigation: {
        prevEl: '.s_shelter__needs_rightSlider .g_arr__left',
        nextEl: '.s_shelter__needs_rightSlider .g_arr__right'
      }
    });
    var user = 1;
    if($('.s_user_1').length){
      user = -1;
    }
    $('.s_shelter__needs_rightFilter a').click(function(e){
      var el = $(this),
          n = el.index();
      e.preventDefault();
      el.addClass('_current').siblings().removeClass('_current');
      $('.s_shelter__needs_rightBody').eq(n+user).addClass('_current').siblings().removeClass('_current');
      historySlider.slideTo(n);
    });
  }

  //gallery
  if($('.s_gallery__body').length){
    var srcs = $(".s_gallery__body").data('imgs');
    var img = srcs.split('*');
    var imgs = [];
    for(var i = 0; i<img.length;i++){
      var imgObject = img[i].split(',');
      imgs[i] = {
        url: imgObject[0],
        width: parseInt(imgObject[1]),
        height: parseInt(imgObject[2]),
        caption: imgObject[3],
        urlLarge: imgObject[4],
        size: imgObject[5]
      };
    }
    function galleryImgJustify(){
      $('.s_gallery__body').empty().justifiedImages({
        images: imgs,
        rowHeight: 200,
        maxRowHeight: 300,
        margin: 5,
        imageContainer: 's_gallery__item',
        imageSelector: 's_gallery__item_img',
        thumbnailPath: function(photo, width, height){
          return photo.url;
        },
        getSize: function(photo){
          return {width: photo.width, height: photo.height};
        },
        template: function(photo){
          return '<figure class="s_gallery__item" style="height:'+photo.displayHeight+'px;margin-right:'+photo.marginRight+'px"><a href="'+photo.urlLarge+'" data-size="'+photo.size+'"><img class="s_gallery__item_img"  src="'+photo.src+'" alt="'+photo.caption+'" style="height:'+photo.displayHeight+'px;width:'+photo.displayWidth+'px"><i><svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40"><style>.a{fill:rgb(255, 255, 255);opacity:0.7;}</style><path d="M39.7 38L29.9 28.2C32.5 25.2 34.1 21.3 34.1 17.1 34.1 7.6 26.5 0 17.1 0 7.6 0 0 7.7 0 17.1 0 26.5 7.7 34.1 17.1 34.1 21.3 34.1 25.2 32.5 28.2 29.9L38 39.6C38.2 39.9 38.5 40 38.8 40 39.1 40 39.4 39.9 39.7 39.6 40.1 39.2 40.1 38.4 39.7 38ZM2.4 17.1C2.4 9 9 2.4 17.1 2.4 25.1 2.4 31.7 9 31.7 17.1 31.7 25.1 25.1 31.7 17.1 31.7 9 31.7 2.4 25.1 2.4 17.1Z" class="a"/><path d="M22.5 21.8C23 23.7 20.8 24.2 19.9 23.9 18.9 23.7 17 23.6 17 23.6 17 23.6 15.1 23.7 14.2 23.9 13.2 24.2 11.1 23.7 11.5 21.8 11.9 19.8 13.8 19.8 14.3 17.2 14.8 14.5 17 14.6 17 14.6 17 14.6 19.2 14.5 19.7 17.2 20.2 19.8 22.1 19.8 22.5 21.8ZM19 14.5C20.1 14.8 21.4 13.9 21.8 12.4 22.3 10.9 21.7 9.4 20.5 9.1 19.4 8.7 18.1 9.7 17.7 11.2 17.2 12.6 17.8 14.1 19 14.5ZM23.8 13.9C22.7 13.5 21.3 14.2 20.7 15.7 20.2 17.1 20.6 18.6 21.7 19.1 22.8 19.6 24.2 18.8 24.8 17.3 25.3 15.9 24.9 14.4 23.8 13.9ZM15 14.5C16.2 14.1 16.8 12.6 16.4 11.2 15.9 9.7 14.7 8.7 13.5 9.1 12.4 9.4 11.8 10.9 12.2 12.4 12.6 13.9 13.9 14.8 15 14.5ZM12.3 19.1C13.4 18.6 13.9 17.1 13.3 15.7 12.7 14.2 11.4 13.5 10.2 13.9 9.1 14.4 8.7 15.9 9.3 17.3 9.8 18.8 11.2 19.6 12.3 19.1Z" class="a"/></svg></i></a><figcaption><i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19"><path d="M16.9 16.2C17.4 18.7 14.7 19.2 13.6 18.9 12.4 18.6 10 18.5 10 18.5 10 18.5 7.6 18.6 6.4 18.9 5.3 19.2 2.6 18.7 3.1 16.2 3.7 13.6 6 13.7 6.6 10.3 7.3 6.9 10 7.1 10 7.1 10 7.1 12.7 6.9 13.4 10.3 14 13.7 16.3 13.6 16.9 16.2ZM12.5 6.9C13.9 7.3 15.5 6.2 16 4.3 16.6 2.4 15.8 0.5 14.4 0.1 12.9-0.3 11.3 0.9 10.8 2.7 10.3 4.6 11 6.5 12.5 6.9ZM18.4 6.2C17.1 5.6 15.3 6.6 14.6 8.4 13.9 10.3 14.5 12.2 15.9 12.8 17.2 13.4 19 12.4 19.7 10.6 20.4 8.8 19.8 6.8 18.4 6.2ZM7.5 6.9C9 6.5 9.7 4.6 9.2 2.7 8.7 0.9 7.1-0.3 5.6 0.1 4.2 0.5 3.4 2.4 4 4.3 4.5 6.2 6.1 7.3 7.5 6.9ZM4.1 12.8C5.5 12.2 6.1 10.3 5.4 8.4 4.6 6.6 2.9 5.6 1.5 6.2 0.2 6.8-0.4 8.8 0.3 10.6 1 12.4 2.7 13.4 4.1 12.8Z" fill="rgb(255, 90, 51)"/></svg></i><span>'+photo.caption+'</span></figcaption></figure>'
        }
      });
    }
    galleryImgJustify();
    $(window).resize(galleryImgJustify);
    //gallery init
    initPhotoSwipeFromDOM('.s_gallery__body');
  }

  //responsive
  if(Modernizr.mq('only screen and (max-width: 950.5px)')){
    $('.header__logo').insertBefore('.header__top_nav');
  }
  if(Modernizr.mq('only screen and (max-width: 450.5px)')){
    $('.header__bot_right').append($('.header__top_nav a'));
  }
  //nav hamb
  $('.header__hamb').click(function(){
    $('.header__bot_nav').addClass('_active');
  });
  $('.header__bot_navClose').click(function(){
    $('.header__bot_nav').removeClass('_active');
  });

  //popups
  $('.popup').each(function(){
    var popup = $(this),
        popup_h = popup.outerHeight(),
        popup_w = popup.outerWidth(),
        h = $(window).height(),
        px = window.pageYOffset + h/2 - popup_h/2;
    popup.css({
      'top': px+'px',
      'margin-left': '-'+ popup_w/2 +'px',
    });
  });
  $('._open_pop').click(function(e){
    e.preventDefault();
    var visible = $('.popup._visible');
    visible.addClass('_back');
    setTimeout(function(){
      visible.removeClass('_visible _back');
    },700);
    var name = $(this).data('name'),
        txt = $(this).data('txt'),
        help = $(this).data('help'),
        popup = $('.popup_'+name),
        popup_h = popup.outerHeight(),
        popup_w = popup.outerWidth(),
        h = $(window).height(),
        px = window.pageYOffset + h/2 - popup_h/2;
    popup.css({
      'top': px+'px',
      'margin-left': '-'+ popup_w/2 +'px',
    });
    if(txt){
      popup.find('.popup__title').html(txt);
      popup.find('input[name="form"]').val(txt);
    }
    if(help){
      popup.find('.g_needs__item').html(help);
    }
    popup.find('form').trigger( 'reset' );
    $('.popup.popup_'+name+', .overlay').addClass('_visible');
    $('.s_main__menu').removeClass('_active');
  });
  $('.overlay, ._close_pop').click(function(e){
    e.preventDefault();
    $('.popup._visible').addClass('_back');
    $('.overlay').removeClass('_visible');
    $('.s_inner__left').removeClass('_active');
    setTimeout(function(){
      $('.popup._visible').removeClass('_visible _back');
    },500);
  });

  //validate
  if($('.s_login__form').length){
    var it = $('.s_login__form');
    it.validate({
      rules: {
        pass: {required: true},
        mail: {required: true}
      },
      messages: {},
      errorPlacement: function (error, element) {},
      submitHandler: function (form) {
        var data = new FormData(it[0]);
        $.ajax({
          url: '/login.php',
          type: 'POST',
          data: data,
          cache: false,
          processData: false,
          contentType: false,
          success: function( respond, textStatus, jqXHR ){

          },
          error: function( jqXHR, textStatus, errorThrown ){
            console.log('ОШИБКИ AJAX запроса: ' + textStatus );
          }
        });
      },
      success: function () {
      },
      highlight: function (element, errorClass) {
        $(element).addClass('_error');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('_error');
      }
    });
  }
  if($('.s_contacts__right_form').length){
    var it = $('.s_contacts__right_form');
    it.validate({
      rules: {
        name: {required: true},
        mail: {required: true},
        phone: {required: true},
        msg: {required: false}
      },
      messages: {},
      errorPlacement: function (error, element) {},
      submitHandler: function (form) {
        var data = new FormData(it[0]);
        $.ajax({
          url: '/mail.php',
          type: 'POST',
          data: data,
          cache: false,
          processData: false,
          contentType: false,
          success: function( respond, textStatus, jqXHR ){
            $('.popup').removeClass('_visible');
            var name = 'thnx'
            popup = $('.popup_'+name),
              popup_h = popup.outerHeight(),
              popup_w = popup.outerWidth(),
              h = $(window).height(),
              px = window.pageYOffset + h/2 - popup_h/2;
            popup.css({
              'top': px+'px',
              'margin-left': '-'+ popup_w/2 +'px',
            });
            $('.popup.popup_'+name+', .overlay').addClass('_visible');
            setTimeout(function () {
              if ($('.popup_thnx').hasClass('_visible')) {
                $('.popup_thnx, .overlay').removeClass('_visible');
              }
            }, 2000);
            it.trigger( 'reset' );
          },
          error: function( jqXHR, textStatus, errorThrown ){
            console.log('ОШИБКИ AJAX запроса: ' + textStatus );
          }
        });
      },
      success: function () {
      },
      highlight: function (element, errorClass) {
        $(element).addClass('_error');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('_error');
      }
    });
  }
  if($('.popup_pick__form').length){
    var it = $('.popup_pick__form');
    it.validate({
      rules: {
        name: {required: true},
        phone: {required: true}
      },
      messages: {},
      errorPlacement: function (error, element) {},
      submitHandler: function (form) {
        var data = new FormData(it[0]);
        $.ajax({
          url: '/mail.php',
          type: 'POST',
          data: data,
          cache: false,
          processData: false,
          contentType: false,
          success: function( respond, textStatus, jqXHR ){
            $('.popup').removeClass('_visible');
            var name = 'thnx'
            popup = $('.popup_'+name),
              popup_h = popup.outerHeight(),
              popup_w = popup.outerWidth(),
              h = $(window).height(),
              px = window.pageYOffset + h/2 - popup_h/2;
            popup.css({
              'top': px+'px',
              'margin-left': '-'+ popup_w/2 +'px',
            });
            $('.popup.popup_'+name+', .overlay').addClass('_visible');
            setTimeout(function () {
              if ($('.popup_thnx').hasClass('_visible')) {
                $('.popup_thnx, .overlay').removeClass('_visible');
              }
            }, 2000);
            it.trigger( 'reset' );
          },
          error: function( jqXHR, textStatus, errorThrown ){
            console.log('ОШИБКИ AJAX запроса: ' + textStatus );
          }
        });
      },
      success: function () {
      },
      highlight: function (element, errorClass) {
        $(element).addClass('_error');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('_error');
      }
    });
  }
  if($('.s_register .s_register__form').length){
    var it = $('.s_register__form');
    it.validate({
      rules: {
        reg_name: {required: true},
        reg_city: {required: true},
        reg_desc: {required: true},
        reg_first: {required: true},
        reg_second: {required: true},
        reg_old: {required: true},
        reg_phone_mod: {required: true},
        reg_mail: {required: true}
      },
      messages: {},
      errorPlacement: function (error, element) {},
      submitHandler: function (form) {
        var data = new FormData(it[0]);
        $.ajax({
          url: '/mail.php',
          type: 'POST',
          data: data,
          cache: false,
          processData: false,
          contentType: false,
          success: function( respond, textStatus, jqXHR ){
            $('.popup').removeClass('_visible');
            var name = 'thnx_reg'
            popup = $('.popup_'+name),
              popup_h = popup.outerHeight(),
              popup_w = popup.outerWidth(),
              h = $(window).height(),
              px = window.pageYOffset + h/2 - popup_h/2;
            popup.css({
              'top': px+'px',
              'margin-left': '-'+ popup_w/2 +'px',
            });
            $('.popup.popup_'+name+', .overlay').addClass('_visible');
            setTimeout(function () {
              if ($('.popup_thnx_reg').hasClass('_visible')) {
                $('.popup_thnx_reg, .overlay').removeClass('_visible');
              }
            }, 2000);
            it.trigger( 'reset' );
          },
          error: function( jqXHR, textStatus, errorThrown ){
            console.log('ОШИБКИ AJAX запроса: ' + textStatus );
          }
        });
      },
      success: function () {
      },
      highlight: function (element, errorClass) {
        $(element).addClass('_error');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('_error');
      }
    });
  }
  if($('.s_user .s_register__form').length){
    var it = $('.s_register__form');
    it.validate({
      rules: {
        reg_name: {required: true},
        reg_city: {required: true},
        reg_desc: {required: true},
        reg_phone_mod: {required: true},
        reg_mail: {required: true}
      },
      messages: {},
      errorPlacement: function (error, element) {},
      submitHandler: function (form) {
        var data = new FormData(it[0]);
        $.ajax({
          url: '/mail.php',
          type: 'POST',
          data: data,
          cache: false,
          processData: false,
          contentType: false,
          success: function( respond, textStatus, jqXHR ){
            $('.popup').removeClass('_visible');
            var name = 'thnx_reg'
            popup = $('.popup_'+name),
              popup_h = popup.outerHeight(),
              popup_w = popup.outerWidth(),
              h = $(window).height(),
              px = window.pageYOffset + h/2 - popup_h/2;
            popup.css({
              'top': px+'px',
              'margin-left': '-'+ popup_w/2 +'px',
            });
            $('.popup.popup_'+name+', .overlay').addClass('_visible');
            setTimeout(function () {
              if ($('.popup_thnx_reg').hasClass('_visible')) {
                $('.popup_thnx_reg, .overlay').removeClass('_visible');
              }
            }, 2000);
            it.trigger( 'reset' );
          },
          error: function( jqXHR, textStatus, errorThrown ){
            console.log('ОШИБКИ AJAX запроса: ' + textStatus );
          }
        });
      },
      success: function () {
      },
      highlight: function (element, errorClass) {
        $(element).addClass('_error');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('_error');
      }
    });
  }
  if($('.s_user__needs_add').length){
    $('.s_user__needs_add').each(function(){
      var it = $(this);
      it.validate({
        rules: {
          needs_what: {required: true},
          needs_value: {required: true},
          needs_title: {required: true},
          needs_desc: {required: true}
        },
        messages: {},
        errorPlacement: function (error, element) {},
        submitHandler: function (form) {
          var data = new FormData(it[0]);
          $.ajax({
            url: '/mail.php',
            type: 'POST',
            data: data,
            cache: false,
            processData: false,
            contentType: false,
            success: function( respond, textStatus, jqXHR ){
              $('.popup').removeClass('_visible');
              var name = 'thnx'
              popup = $('.popup_'+name),
                popup_h = popup.outerHeight(),
                popup_w = popup.outerWidth(),
                h = $(window).height(),
                px = window.pageYOffset + h/2 - popup_h/2;
              popup.css({
                'top': px+'px',
                'margin-left': '-'+ popup_w/2 +'px',
              });
              $('.popup.popup_'+name+', .overlay').addClass('_visible');
              setTimeout(function () {
                if ($('.popup_thnx').hasClass('_visible')) {
                  $('.popup_thnx, .overlay').removeClass('_visible');
                }
              }, 2000);
              it.trigger( 'reset' );
            },
            error: function( jqXHR, textStatus, errorThrown ){
              console.log('ОШИБКИ AJAX запроса: ' + textStatus );
            }
          });
        },
        success: function () {
        },
        highlight: function (element, errorClass) {
          $(element).addClass('_error');
        },
        unhighlight: function (element, errorClass, validClass) {
          $(element).removeClass('_error');
        }
      });
    });
  }
  if($('.popup_add__body').length){
    $('.popup_add__body').each(function(){
      var it = $(this);
      it.validate({
        rules: {
          edit_cat: {required: true},
          edit_gender: {required: true},
          edit_name: {required: true},
          edit_age: {required: true},
          edit_desc: {required: false},

          add_cat: {required: true},
          add_gender: {required: true},
          add_name: {required: true},
          add_age: {required: true},
          add_desc: {required: false}
        },
        messages: {},
        errorPlacement: function (error, element) {},
        submitHandler: function (form) {
          var data = new FormData(it[0]);
          $.ajax({
            url: '/mail.php',
            type: 'POST',
            data: data,
            cache: false,
            processData: false,
            contentType: false,
            success: function( respond, textStatus, jqXHR ){

            },
            error: function( jqXHR, textStatus, errorThrown ){
              console.log('ОШИБКИ AJAX запроса: ' + textStatus );
            }
          });
        },
        success: function () {
        },
        highlight: function (element, errorClass) {
          $(element).addClass('_error');
        },
        unhighlight: function (element, errorClass, validClass) {
          $(element).removeClass('_error');
        }
      });
    });
  }

  //table wrp
  if($('.g_txt table').length){
    $('.g_txt table').wrap('<div class="g_txt__table_wrp"><div class="g_txt__table"></div></div>');
  }
  //video wrp
  if($('.g_txt iframe').length){
    $('.g_txt iframe').wrap('<div class="g_txt__video"></div>');
  }

  //selects
  $('.g_select__head').click(function(e){
    e.stopPropagation();
    var el = $(this),
        select = el.closest('.g_select');
    select.toggleClass('_active');

  });
  $('.g_select__body a').click(function(e){
    e.stopPropagation();
    e.preventDefault();
    var a = $(this),
        txt = a.text(),
        select = a.closest('.g_select'),
        input = select.find('input'),
        head = select.find('.g_select__head span');
    a.addClass('_active').siblings().removeClass('_active');
    input.val(txt);
    head.text(txt);
    select.removeClass('_error _active');

  });
  $(window).click(function(){
    $('.g_select').removeClass('_active');
  });

  //map init
  if($('.s_map__body').length){
    mapInitialize('map');
  }

  $('.s_help__item_head').click(function(){
    $(this).closest('.s_help__item').toggleClass('_active');
  });

  //prevent only numbers
  $('input[name="phone"],._num').on('keydown',function(e){
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        // Allow: Ctrl/cmd+A
        (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: Ctrl/cmd+C
        (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: Ctrl/cmd+X
        (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  });

  //mobile filter
  $('.s_inner__mob_filter').click(function(e){
    e.preventDefault();
    $('.s_inner__left').addClass('_active');
    $('.overlay').addClass('_visible');
  });
  $('.s_inner__left_close').click(function(e){
    e.preventDefault();
    $('.s_inner__left').removeClass('_active');
    $('.overlay').removeClass('_visible');
  });

  if(Modernizr.mq('only screen and (max-width: 800px)')){
    $('.s_user__head .g_btn').insertBefore('.s_user__head');
  }
  if(getMobileOperatingSystem()){
    $('.s_blog_inner__article_info .g_btn').click(function(){
      $(this).addClass('_active');
    });
  }
});
//gmap init
function mapInitialize(el_id) {
  var center = $('#'+el_id).data('center').split(','),
      zoom = $('#'+el_id).data('zoom');
  var center = new google.maps.LatLng(center[0],center[1]);
  var mapOptions = {
    zoom: zoom,
    center: center,
    mapTypeControl: false,
    scrollwheel: false,
    navigationControl: false,
    scaleControl: false
  };
  var mapElement = document.getElementById(el_id);
  var map = new google.maps.Map(mapElement, mapOptions);


  var points = $('#'+el_id).data('points').split(';');
  points.forEach(function(feature) {
    var dot_info = feature.split('['),
        dot = dot_info[0].split(','),
        content = dot_info[1];
    var icoImg = {
      path: 'M8 0C3.6 0 0 3.63 0 8.1c0 1.16.24 2.28.7 3.3 2 4.44 5.83 9.1 6.96 10.44.1.1.2.16.34.16.13 0 .25-.06.34-.16 1.13-1.33 4.96-6 6.96-10.44.46-1.02.7-2.14.7-3.3C16 3.63 12.4 0 8 0zm0 12.3c-2.3 0-4.16-1.88-4.16-4.2C3.84 5.78 5.7 3.9 8 3.9s4.15 1.88 4.15 4.2c0 2.32-1.86 4.2-4.15 4.2z',
      fillColor: '#ff5a33',
      fillOpacity: 1,
      scale: 3.1,
      strokeOpacity: 0
    };
    var marker = new google.maps.Marker({
      position: {
        lat: Number(dot[0]),
        lng: Number(dot[1])
      },
      icon: icoImg,
      map: map,
      title: "Мы находимся тут!",
      optimized: false
    });
  });
}



//load youtube iframe api
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var players = {};

function onYouTubePlayerAPIReady() {
  $(document).ready(function () {
    $('._video').each(function (event) {
      var iframeID = $(this).attr('id');
      players[iframeID] = new YT.Player(iframeID);
    });
  });
}

//gallery
var initPhotoSwipeFromDOM = function(gallerySelector) {

  // parse slide data (url, title, size ...) from DOM elements
  // (children of gallerySelector)
  var parseThumbnailElements = function(el) {
    var thumbElements = el.getElementsByTagName('figure'),
        numNodes = thumbElements.length,
        items = [],
        figureEl,
        linkEl,
        size,
        item;
    for(var i = 0; i < numNodes; i++) {

      figureEl = thumbElements[i]; // <figure> element

      // include only element nodes
      if(figureEl.nodeType !== 1) {
        continue;
      }

      linkEl = figureEl.children[0]; // <a> element

      size = linkEl.getAttribute('data-size').split('x');

      // create slide object
      item = {
        src: linkEl.getAttribute('href'),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10)
      };



      if(figureEl.children.length > 1) {
        // <figcaption> content
        item.title = figureEl.children[1].innerHTML;
      }

      if(linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute('src');
      }

      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }

    return items;
  };

  // find nearest parent element
  var closest = function closest(el, fn) {
    return el && ( fn(el) ? el : closest(el.parentNode, fn) );
  };

  // triggers when user clicks on thumbnail
  var onThumbnailsClick = function(e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    var eTarget = e.target || e.srcElement;

    // find root element of slide
    var clickedListItem = closest(eTarget, function(el) {
      return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
    });

    if(!clickedListItem) {
      return;
    }

    // find index of clicked item by looping through all child nodes
    // alternatively, you may define index via data- attribute
    var clickedGallery = clickedListItem.parentNode.parentNode,
        childNodes = clickedListItem.parentNode.parentNode.getElementsByTagName('figure'),
        numChildNodes = childNodes.length,
        nodeIndex = 0,
        index;

    for (var i = 0; i < numChildNodes; i++) {
      if(childNodes[i].nodeType !== 1) {
        continue;
      }

      if(childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }

    if(index >= 0) {
      // open PhotoSwipe if valid index found
      openPhotoSwipe( index, clickedGallery );
    }
    return false;
  };

  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  var photoswipeParseHash = function() {
    var hash = window.location.hash.substring(1),
        params = {};

    if(hash.length < 5) {
      return params;
    }

    var vars = hash.split('&');
    for (var i = 0; i < vars.length; i++) {
      if(!vars[i]) {
        continue;
      }
      var pair = vars[i].split('=');
      if(pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }

    if(params.gid) {
      params.gid = parseInt(params.gid, 10);
    }

    return params;
  };

  var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
    var pswpElement = document.querySelectorAll('.pswp')[0],
        gallery,
        options,
        items;

    items = parseThumbnailElements(galleryElement);

    // define options (if needed)
    options = {
      bgOpacity: 0.9,
      // define gallery index (for URL)
      galleryUID: galleryElement.getAttribute('data-pswp-uid'),
      getThumbBoundsFn: function(index) {
        // See Options -> getThumbBoundsFn section of documentation for more info
        var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
            rect = thumbnail.getBoundingClientRect();
        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
      }

    };

    // PhotoSwipe opened from URL
    if(fromURL) {
      if(options.galleryPIDs) {
        // parse real index when custom PIDs are used
        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
        for(var j = 0; j < items.length; j++) {
          if(items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        // in URL indexes start from 1
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }

    // exit if index not found
    if( isNaN(options.index) ) {
      return;
    }

    if(disableAnimation) {
      options.showAnimationDuration = 0;
    }

    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

  // loop through all gallery elements and bind events
  var galleryElements = document.querySelectorAll( gallerySelector );

  for(var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute('data-pswp-uid', i+1);
    galleryElements[i].onclick = onThumbnailsClick;
  }

  // Parse URL and open gallery if it contains #&pid=3&gid=1
  var hashData = photoswipeParseHash();
  if(hashData.pid && hashData.gid) {
    openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
  }
};


//mobile hover disable
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return null;
}

if (getMobileOperatingSystem()) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}
