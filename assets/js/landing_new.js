$(document).ready(function () {
    const pageLandingFeedback = document.querySelector('.page-landing-feedback-js');
    if(!pageLandingFeedback && typeof stackedCards !== 'undefined'){
        var stackedCard = new stackedCards({
            selector: '.for-swiping-wrapper',
            layout: "slide",
            transformOrigin: "center",
        });
    }

    if(!pageLandingFeedback && typeof stackedCards !== 'undefined'){
        stackedCard.init();
    }

    /////calculate feedback slider height
    if(pageLandingFeedback){
        function calculateSliderHeight(){
            setTimeout(function(){
                const feedbackslist = document.querySelectorAll('.js-feedback');
                const feedbackWrapper = document.querySelector('.feedback-wrapper');
                const feedbackslistHeights = Array.from(feedbackslist).map(item=>item.clientHeight);
                const maxValue = Math.max(...feedbackslistHeights);
                feedbackWrapper.style.height = `${maxValue +52}px`;

             }, 1000);
        }
        calculateSliderHeight();
        window.addEventListener('resize',calculateSliderHeight);
    }
    const squaresWrapper = document.querySelector('.squares-wrapper');
    if(squaresWrapper){
        setTimeout(function(){
            const cards = document.querySelectorAll('.squares-wrapper-img-item');
            if(cards.length<7){
                squaresWrapper.style.animationDuration = `${cards.length+2}s`;
            }
            if(cards.length<=4){
                squaresWrapper.style.animationDuration = `${cards.length/2}s`;
            }
        }, 500);


    }


    //Accordion
    var accordionOpenButtons = $('.js-accordion-btn');

    accordionOpenButtons.click(function () {
        var accordionContentToShow = $(this).next('.js-accordion-content');

        $(this).toggleClass('shown');
        accordionContentToShow.toggleClass('shown');
    });

    //scroll reveal animation handler

    function scrollReveal(selector, cssClass) {
        var animatedElements = $(selector);
        var totalElements = animatedElements.length;
        var visibleElements = 0;

        return function () {
            if (totalElements > 0 && visibleElements < totalElements) {
                var windowPosition = $(window).scrollTop() + $(window).height();

                animatedElements.each(function (index, item) {
                    if ($(item).offset().top <= windowPosition && $(item).hasClass(cssClass)) {
                        $(item).removeClass(cssClass);
                        visibleElements++;
                    }
                })
            }
        }
    }

    var pageElementsReveal = scrollReveal('.scroll-reveal', 'not-visible');
    pageElementsReveal();

    $(window).scroll(pageElementsReveal);

    // Feedback slides change

    var feedbackCards = $('.js-feedback');
    var feedbackCardsChangeInterval = 5000;


    if (feedbackCards.length > 0) {
        setInterval(changeFeedbackCard, feedbackCardsChangeInterval);
    }

    function changeFeedbackCard() {
        if (feedbackCards.length > 1) {
            var firstCardIndex = 0;
            var lastCardIndex = feedbackCards.length - 1;
            var currentCardIndex = getActiveCardIndex();
            var nextCard = currentCardIndex + 1 > lastCardIndex ? firstCardIndex : currentCardIndex + 1;

            $(feedbackCards[currentCardIndex]).removeClass('active');
            $(feedbackCards[nextCard]).addClass('active');
        }
    }

    function getActiveCardIndex() {
        var activeCardIndex = null;

        feedbackCards.each(function (index, card) {
            if ($(card).hasClass('active')) {
                return activeCardIndex = index;
            }
        });

        return activeCardIndex;
    }

    //Button watch video
    var watchVideoButtons = $('.video-modal-trigger');

    watchVideoButtons.click(function () {
        var watchVideoContentToShow = $(this).next('.modal-wrapper');

        watchVideoContentToShow.addClass('shown');
    });

    //Button close video
    var closeVideoButtons = $('.modal-wrapper .closing-button');

    closeVideoButtons.click(function () {
        var watchVideoContentToShow = $(this).parents('.modal-wrapper');
        var iframeVideo = watchVideoContentToShow.find('iframe');
         iframeVideo.attr("src",iframeVideo.attr("src"));

        watchVideoContentToShow.removeClass('shown');
    });

});
