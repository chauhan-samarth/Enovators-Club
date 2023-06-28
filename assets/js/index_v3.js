var homeSwiper = new Swiper('.home-testimonials',{
    loop:true,
    mode : 'horizontal',
    grabCursor: true,
    pagination: '.swiper-pagination',
    autoplay: 10000,
    paginationClickable: true
});

var initSlider = (function() {
    var sliderInit;

    return function() {
        if (!sliderInit && $('.why-dc.v2 .slider-hiw').length) {
            var hiwSwiper = new Swiper('.why-dc.v2 .slider-hiw',{
                loop:true,
                mode : 'horizontal',
                grabCursor: true
            });

            $('.swiper-button-prev').on('click', function(e){
                e.preventDefault();
                hiwSwiper.swipePrev();
            });
            $('.swiper-button-next').on('click', function(e){
                e.preventDefault();
                hiwSwiper.swipeNext();
            });

            sliderInit = true;
        }
    }
})();

initSlider();


/* FIXED MENU */
//var block_top_position = $('.cats-table').length ? $('.cats-table').offset().top : $('.funorama_designs').offset().top;
//var btn_top_position = $('.top_block_content .green-btn').length ? $('.top_block_content .green-btn').offset().top : $('.funorama_designs').offset().top;
//var cats_table_btn_top_position = $('.cats-table .center_wrapper > a').length ? $('.cats-table .center_wrapper > a').offset().top : $('.funorama_designs').offset().top;
var $catsTable = $('.cats-table');
if ($catsTable.length) {
    var block_top_position = $catsTable.offset().top;


    var btn_top_position = $('.top_block_content .green-btn').offset().top;
    var cats_table_btn_top_position = $('.cats-table .center_wrapper > a').offset().top;
    if ($('.hiw_new').length) {
        var hiw_new_top_position = $('.hiw_new').offset().top-500;
    }

    $(window).scroll(function() {
        var current_top_position = $(this).scrollTop();

        initSlider();

        if ($(window).width() > 0) {
            if (current_top_position > block_top_position) {
                $('.top-panel.transparent-unlogged').addClass('fixed').css('transition', '-webkit-transform 500ms, opacity 500ms');
            } else {
                $('.top-panel.transparent-unlogged').removeClass('fixed');
                $('.why-dc .differences').removeClass('animated');
            };

            if (current_top_position > btn_top_position) {
                $('.top-panel.transparent-unlogged').addClass('pre-fixed');
            } else {
                $('.top-panel.transparent-unlogged').removeClass('pre-fixed').css('transition', '');
            };
        }

        if ($(window).width() > 767) {
            if (current_top_position > cats_table_btn_top_position) {
                $('.why-dc .differences').addClass('animated');
            } else {
                $('.hiw_new ul').removeClass('animated');
            };

            if (current_top_position > cats_table_btn_top_position-300) {
                $('.slider-hiw').addClass('visible');
            } else {
                $('.slider-hiw').removeClass('visible');
            };

            if (current_top_position > hiw_new_top_position && $('.hiw_new').length) {
                $('.hiw_new ul').addClass('animated');
            };

            if (blockVisible()) {
                $('.numbers-say .numbers-items .num').each(function() {
                    var number = parseFloat($(this).html());
                    $(this).animate({ num: number}, {
                        duration: 1000,
                        step: function (num) {
                            this.innerHTML = num.toFixed(0);
                        }
                    });
                });
            }
        }
    });
}


/* FIXED MENU END */


function blockVisible() {
    var window_bottom = $(window).scrollTop() + $(window).height();
    var block_top = $(document).height();
    return window_bottom == block_top;
};
var mainWrapperNewStart = $('.main_wrapper--new-start');
if(!mainWrapperNewStart) {
    $('.top-block-v2').height($(window).height());
    $(window).resize(function() {
        $('.top-block-v2').height($(window).height());
    });
}


function mmenu() {
    $('#menu.new_hp').addClass('mobile_menu');
}

if ($(window).width() < 1025) {
    mmenu();
}

$(window).resize(function() {
    if ($(window).width() < 1025) {
        mmenu();
    } else {
        $('#menu.new_hp').removeClass('mobile_menu');
    }
});


// scollar landing
$(function() {
    var $scholar_elem = $('.landing_scollar'),
        rules = {
            name: {
                min: 3,
                max: 30,
                required: true
            },
            email: {
                min: 3,
                max: 40,
                required: true,
                email: true
            },
            subject: {
                min: 3,
                max: 100,
                required: true

            },
            message: {
                min: 3,
                max: 500,
                required: true
            }
        },
        scrollTop, hiwTopOffset, $hiw_elem, offset,
        $btnSubmitElem, $dropZoneElem,
        $faq_elem, $faq_items_elems, $tabTitles, $dndMsgElem,
        $tabTitlesListElements, $tabContentsElements,
        validateForm = function(data) {
            var result = { err: false, messages: {} },
                messages;
            for(pr in data) {
                if (data.hasOwnProperty(pr)) {
                    messages = [];
                    for(rule in rules[pr]) {
                        if (rules[pr].hasOwnProperty(rule)) {
                            switch(rule) {
                                case 'required':
                                    if (!data[pr].trim()) {
                                        messages.push('Field "' + pr + '" is required.');
                                    }
                                    break;
                                case 'min':
                                    if (data[pr].length < rules[pr][rule]) {
                                        messages.push('Field "' + pr + '" length < ' + rules[pr][rule]);
                                    }
                                    break;
                                case 'max':
                                    if (data[pr].length > rules[pr][rule]) {
                                        messages.push('Field "' + pr + '" length > ' + rules[pr][rule]);
                                    }
                                    break;
                                case 'email':
                                    if (!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(data[pr])) {
                                        messages.push('Field "' + pr + '" not found symbol `@`');
                                    }
                                    break;
                            }
                        }
                    }

                    if (messages.length) {
                        if (!result.err) { result.err = true; }
                        result.messages[pr] = messages;
                    }
                }
            }

            return result;
        },
        scrHandler = function() {
            scrollTop = $(window).scrollTop()  +  window.outerHeight;

            if (hiwTopOffset < scrollTop) {
                $hiw_elem.find('ul').addClass('animated');
                $(window).off('scroll', scrHandler);
            }
        };

    if ($scholar_elem.length) {
        $hiw_elem = $scholar_elem.find('.hiw_new');
        offset = window.outerHeight + $hiw_elem.height();
        hiwTopOffset = $hiw_elem.offset().top;
        $errorsList = $scholar_elem.find('.errors-list');
        $btnSubmitElem = $scholar_elem.find('#submitForm');
        $formWrapper = $scholar_elem.find('.form-wrapper');
        $dropZoneElem = $scholar_elem.find('.dnd-upload');
        $dndMsgElem = $scholar_elem.find('.dnd-msg');

        var dcDropzone = new Dropzone("div#file_upld", {
            url: "/scholarship/request",
            method: "POST",
            clickable: '#file_upld',
            uploadMultiple: false,
            autoProcessQueue: false,
            acceptedFiles: 'application/.pdf,.doc,.txt',
            init: function() {
                var myDropzone = this;

                // First change the button to actually tell Dropzone to process the queue.
                $btnSubmitElem.on("click", function(e) {
                    // Make sure that the form isn't actually being sent.
                    e.preventDefault();
                    e.stopPropagation();

                    var elems = Array.prototype.slice.call(this.form.elements, 0),
                        formData = elems.filter(function(i) {
                            return i.nodeName.toUpperCase() === 'INPUT';
                        }).map(function(i) {
                            var res = {};

                            res.name = i.getAttribute('id');
                            res.value = i.value;

                            return res;
                        }).reduce(function(o, i) {
                            o[i.name] = i.value;
                            return o;
                        }, {});

                    $errorsList.html('');
                    var vRes = validateForm(formData);

                    if (!vRes.err) {
                        this.setAttribute('disabled', 'disabled');

                        if (myDropzone.files.length) {
                            myDropzone.options.params = formData;
                            myDropzone.processQueue();
                        } else {
                            $.post('/scholarship/request', formData)
                                .done(function(resp) {
                                    resp = JSON.parse(resp);
                                    $btnSubmitElem[0].removeAttribute('disabled');
                                    $errorsList.html('');
                                    if (resp.status) {
                                        $formWrapper.addClass('sended');
                                    } else if (resp.errors) {
                                        $errorsList.html(renderMessages(resp.errors));
                                    }
                                });
                        }
                    } else {
                        $errorsList.html(renderMessages(vRes.messages));
                    }
                });

                myDropzone.on("addedfile", function(file) {
                    if (['pdf','doc','txt'].indexOf(file.name.split('.').pop()) > -1) {
                        $dndMsgElem.text('File: ' + file.name);
                    } else {
                        myDropzone.removeFile(file);
                        $dndMsgElem.text('Allowed types: .pdf,.doc,.txt');
                    }
                });
            },
            success: function(resp) {
                resp = JSON.parse(resp.xhr.response);
                $btnSubmitElem[0].removeAttribute('disabled');
                $errorsList.html('');
                if (resp.status) {
                    $scholar_elem.addClass('success');
                    $formWrapper.addClass('sended');
                } else if (resp.errors) {
                    $errorsList.html(renderMessages(resp.errors));
                }
            }
        });

        // faq
        $(window).on('scroll', scrHandler);
        scrHandler();
        $faq_elem = $scholar_elem.find('.faq');
        $faq_items_elems = $faq_elem.find('li');

        $faq_items_elems.find('.question-text').on('click', function(e) {
            var liElem = $(e.target).closest('li');

            if (!liElem.hasClass('open')) {
                $faq_items_elems.removeClass('open');
                liElem.addClass('open');
            } else {
                liElem.removeClass('open');
            }
        });

        function renderMessages(errorsO) {
            var result;

            if (!errorsO) { return; }

            result = Object.keys(errorsO).reduce(function(s, i) {
                return s.concat(errorsO[i]);
            }, []);
            if (!result.length) { return; }

            return result.map(function(i) {
                return '<li>' + i + '</li>';
            }).join('');
        }

        $tabTitles = $scholar_elem.find('.tab-titles');
        $tabTitlesListElements = $tabTitles.children('li');
        $tabContentsElements = $scholar_elem.find('.tab-contents li');

        $tabTitlesListElements.on('click', function() {
            var tab_id = $(this).data('tab'),
                $tabContentElem;
            $tabTitlesListElements.removeClass('active');
            $(this).addClass('active');
            $tabContentElem = $tabContentsElements.filter('[data-tab=' + tab_id + ']');
            $tabContentsElements.removeClass('active');

            if ($tabContentElem[0]) {
                $tabContentElem.addClass('active');
            }
        });

        var contentsDetailsElem = $("#contents_details");
        $scholar_elem.find('.read-more').on('click', function() {
            $('html, body').animate({
                scrollTop: contentsDetailsElem.offset().top
            }, 1000);
        });
    }
});