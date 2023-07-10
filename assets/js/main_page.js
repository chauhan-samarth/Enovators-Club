$(document).ready(function(){
    /**
     * Only for main page
     */
    var not_init_slider = true;
    try {
        var myCarousel = new Swiper('.carousel .swiper-container',{
            slideClass: 'slide',
            slidesPerView: 'auto',
            calculateHeight: true,
            speed: 800
        });
        $('.carousel').on('mouseenter', function() {
            if (not_init_slider) {
                $.ajax({ // Загрузка элементов слайдера через ajax после загрузки самого слайдера
                    url: '',
                    type: 'POST',
                    data: {slider:'item'}, // Определяем элементы слайдера
                    success: function(data) {
                        $('.carousel_item .center_wrapper').html(data);


                        var myItemSlider = new Swiper('.carousel_item .swiper-container',{
                            slideClass: 'contest_details',
                            calculateHeight: true,
                            onTouchEnd: function() { myPumpCarousel.setActiveIndex(myItemSlider.activeIndex); myPumpCarousel.updatePositions();}
                        });
                        var myPumpCarousel = new pumpCarousel(myCarousel, myItemSlider);
                        myPumpCarousel.init();
                    }
                });
                not_init_slider = false;
            }
        })
    } catch(e) {};
    // Видео в бекграунде (Владана) (main page и http://www.designcontest.ofc/logo-design/)
    //главная страница и посадочные
    $(window).bind('scroll', function() {
		if (window.screen.width>640) {
        if ($('.back-video .video-background').length==0) {
            $('.testimonial-block .back-video').prepend('<div class="video-background"></div><div class="video-mask"><div>Video mask</div></div>');
            $('.video-background').videobackground({
                videoSource: ['../video/back-video-vladana.mp4', 'video/mp4',
                    '../video/back-video-vladana.webm', 'video/webm',
                    '../video/back-video-vladana.ogv', 'video/ogg'],
                poster: '../video/back-video-vladana.jpg',
                loop: true,
                autoplay: true,
                preload: true,
                loadedCallback: function() {
                    $(this).videobackground('mute');
                }
            });
        }
		}
    });
    // Параллакс эффект (main page, /logo-design/, http://designcontest.ofc/HTML/how-it-works.html)
    //на главной и на посадочных
    $('.main-new .main_banner').parallax("50%", -0.4);
    $('.community_count').parallax("50%", -0.4);
    $('.main-new .main_banner.logo-cat').parallax("50%", 0);
    $('.main-new .main_banner.hiw').parallax("50%", 0);
    //на главную и на посадочные
    $(".rating_cart").noUiSlider({
        range: [0, 100]
        ,start: 40
        ,handles: 1
        ,serialization: {
            to: [ $("#low"), 'html' ]
            ,resolution: 1
        }
    });
    $(".noUiSlider").noUiSlider({
        range: [0, 100]
        ,start: 40
        ,handles: 1
        ,serialization: {
            to: [ $("#low"), 'html' ]
            ,resolution: 1
        }
    });

    $("#bulk_rating").noUiSlider({
        range: [0, 100]
        ,start: 80
        ,handles: 1
        ,serialization: {
            to: [ $("#low_bulk"), 'html' ]
            ,resolution: 1
        }
    });

    $('.look_and_feel .noactive .noUiSlider').attr('disabled', 'disabled');

    // Блок отзывов - смена табов (main page и http://www.designcontest.ofc/logo-design/)
    //главная и посадочные
    $('ul.testmonials-tabs').delegate('li:not(.active)', 'click', function() {
        $(this).addClass('active').siblings().removeClass('active')
            .parents('div.tabs-content').find('.testimonial-block').eq($(this).index()).fadeIn(500).siblings('.testimonial-block').hide();
        return false;
    });
    // Открытие видео в поп-апе при клике на ссылку (main page, http://www.designcontest.ofc/logo-design/, http://www.designcontest.ofc/testimonials/, http://designcontest.ofc/HTML/how-it-works.html)
    //главная и посадочные и отзывы

    var bind_removing_menuup = function(html_box) {
        var $overlay_box = $(html_box[0]);
        var $menuup_box = $(html_box[1]);
        var $close_menuup_box = $menuup_box.find('.close_menuup');
        var remove_html_box = function(e) {
            e.preventDefault();
            e.stopPropagation();
            html_box.remove();
            $('img.video-picture').removeClass('up');
        }
        $overlay_box.bind('click', function(e){remove_html_box(e);});
        $close_menuup_box.bind('click', function(e){remove_html_box(e);});
    }

    $(function(){
        var $html_box = $('<div id="overlay" class="overlay" style="display:block;"></div><div class="menuup" id="testimonial-video"><a href="#" class="close_menuup" title="Close details">Close details</a><iframe id="iframe-youtube" width="640" height="360" src="//www.youtube.com/embed/Y4a5YIQTUtw?rel=0&autoplay=1&showinfo=0" frameborder="0" allowfullscreen></iframe></div>');
        $(".back-video .watch-link").click(function(){
            $html_box.appendTo($('body'));

            bind_removing_menuup($html_box);
            //ga('send', 'event', 'button', 'click', 'testimonial-video');
        });
    });

    $(function(){
        var $html_box = $('<div id="overlay" class="overlay" style="display:block;"></div><div class="menuup" id="testimonial-video"><a href="#" class="close_menuup" title="Close details">Close details</a><iframe id="iframe-youtube" width="640" height="360" src="//www.youtube.com/embed/Y4a5YIQTUtw?rel=0&autoplay=1&showinfo=0" frameborder="0" allowfullscreen></iframe></div>');
        $(".top-block-content .watch-link").click(function(){
            $html_box.appendTo($('body'));

            bind_removing_menuup($html_box);
            //ga('send', 'event', 'button', 'click', 'testimonial-video');
        });
    });

    $(function(){
        var $html_box2 = $('<div id="overlay-2" class="overlay" style="display:block;"></div><div class="menuup" id="slider-video"><a href="#" class="close_menuup" title="Close details">Close details</a><iframe id="iframe-youtube-2" width="640" height="360" src="//www.youtube.com/embed/ShbKmlieZUg?rel=0&autoplay=1&showinfo=0" frameborder="0" allowfullscreen></iframe></div>');
        $(document).on('click', '.right-cats .watch-link', function(e){
            e.preventDefault();
            var video_link = $(e.currentTarget).attr('data-video-link')||'//www.youtube.com/embed/Mh8YhXVCgZs?rel=0&autoplay=1&showinfo=0';
            $html_box2.find('iframe').attr('src',video_link);
            $html_box2.appendTo($('body'));

            bind_removing_menuup($html_box2);
            //ga('send', 'event', 'button', 'click', 'hiw-video');
        });
    });
    $(function(){
        var $html_box3 = $('<div id="overlay" class="overlay" style="display:block;"></div><div class="menuup" id="testimonial-video-rus"><a href="#" class="close_menuup" title="Close details">Close details</a><iframe id="iframe-youtube" width="640" height="360" src="//www.youtube.com/embed/9D7cNlnWaQc?rel=0&autoplay=1&showinfo=0" frameborder="0" allowfullscreen></iframe></div>');

        $(".back-video .watch-link-rus").click(function(){
            $html_box3.appendTo($('body'));

            bind_removing_menuup($html_box3);
            //ga('send', 'event', 'button', 'click', 'testimonial-video-rus');
        });
    });
    $(function(){
        var $html_box4 = $('<div id="overlay-3" class="overlay" style="display:block;"></div><div class="menuup" id="slider-video"><a href="#" class="close_menuup" title="Close details">Close details</a><iframe id="iframe-youtube-3" width="640" height="360" src="//www.youtube.com/embed/oq6JV-gRElo?rel=0&autoplay=1&showinfo=0" frameborder="0" allowfullscreen></iframe></div>');

        $(".right-cats .watch-link-rus").click(function(){
            $html_box4.appendTo($('body'));
            bind_removing_menuup($html_box4);
            //ga('send', 'event', 'button', 'click', 'hiw-video-rus');
        });
    });
    $(function(){       
        var $html_box5 = $('<div id="overlay-5" class="overlay" style="display:block;"></div><div class="menuup" id="slider-video"><a href="#" class="close_menuup" title="Close details">Close details</a><iframe width="560" height="315" src="https://www.youtube.com/embed/DRJkSKTfB4s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
        $(".top-block-v2 .top_block_content .hiw-link").click(function(e){
            e.preventDefault();
            $html_box5.appendTo($('body'));

            bind_removing_menuup($html_box5);
        });
    });
    // Наложение картинки поверх видео в блоке Отзывов, чтобы не было видно его восспроизведения, когда запущено видео в попапе (main page, http://www.designcontest.ofc/logo-design/)
    //главная и посадочные
    $(document).on('click', '.watch-link, .watch-link-rus', function(e){
        e.preventDefault();
        $('img.video-picture').addClass('up');
    });
    // Добавление класса, когда блок попадает в зону видимости браузера (используется для анимации на главной, http://www.designcontest.ofc/logo-design/ и http://designcontest.ofc/HTML/how-it-works.html)
    // главная и посадочные

    if ( $.fn.waypoint ) {
        $( '.et-animation' ).waypoint( {
            offset: '67%',
            handler: function() {
                $(this).addClass( 'et-animated' );
            }
        } );
        $( '.et-animation-2' ).waypoint( {
            offset: '100%',
            handler: function() {
                $(this).addClass( 'et-animated' );
            }
        } );
        $( '.et-animation-3' ).waypoint( {
            offset: '101%',
            handler: function() {
                $(this).addClass( 'et-animated' );
            }
        } );
        $( '.hiw-animation' ).waypoint( {
            offset: '60%',
            handler: function() {
                $(this).addClass( 'et-animated' );
            }
        } );
    }
    // Добавления класса следуещему блоку с анимацией, когда закончилась текущая. Делали для того, чтобы анимация блоков была привязана не только к появлению блоков в видимой части экрана, а еще и к окончанию предыдущей (main page и /logo-design/)
    //главная и посадочные
    var ANIMATION = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
    var first = $(".strip.modern .noUi-origin");
    first.on(ANIMATION, function() {
        $(".how-it-works .line-hiw.second").addClass("start");
    });
    var second = $(".how-it-works .line-hiw.second li.second button");
    second.on(ANIMATION, function() {
        $(".how-it-works .line-hiw.third").addClass("start");
    });
    //tooltip for money back icon
    $('.money-back').tooltip({
        tooltipClass: 'tooltip',
        track: true,
        content: function() {
            var $element = $(this);
            var icon_description = $element.attr('data-tooltip-text');
            var icon_head = $element.attr('data-tooltip-head');
            var $tooltip_inner = $('<div class="tooltip_in"></div>');
            var $tooltip_head = $('<h2></h2>').text(icon_head).appendTo($tooltip_inner);
            var $tooltip_text = $('<p></p>').text(icon_description).appendTo($tooltip_inner);
            return $tooltip_inner;
        },
        position: { my: 'center bottom-10', at: 'center top',
            using: function(position, feedback) {
                $(this).css(position).addClass(feedback.vertical+'_arow');
            }}
    });
    $(document).on('click', '.main_banner .right-cats .curved-hz-1 .main_start_contest', function(e){
        e.preventDefault();
        //ga('send', 'event', 'button', 'click', 'start-contest-top');
        $(e.currentTarget).closest('form').submit();
    });
    $(document).on('click', '.carousel_item .contest_info .curved-hz-1 button', function(e){
        e.preventDefault();
        //ga('send', 'event', 'button', 'click', 'start-contest-slider');
        $(e.currentTarget).closest('form').submit();
    });
    $(document).on('click', '.set-up .curved-hz-1 button', function(e){
        e.preventDefault();
        //ga('send', 'event', 'button', 'click', 'start-contest-bottom');
        $(e.currentTarget).closest('form').submit();
    });
    $(document).on('click', '.community_count a', function(e){
        e.preventDefault();
        //ga('send', 'event', 'button', 'click', 'learn-more-one-on-one');
        var href_link = $(e.currentTarget).attr('href');
        document.location = href_link;
    });
    var isFirefox =navigator.userAgent.indexOf("Firefox") != -1;
    if(!isFirefox)
    {
        setInterval(function () {
            $('#blink-block').toggleClass('blinked')
        }, 5000);
    }
});

document.oncontextmenu = new Function("return false");
