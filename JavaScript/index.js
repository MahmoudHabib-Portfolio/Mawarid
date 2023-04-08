$(document).ready(function() {

    // init ScrollMagic    
    var controller = new ScrollMagic.Controller();

    // build a Scene
    var ourSceneTwo = new ScrollMagic.Scene({
        triggerElement: '#project-2',
        triggerHook: 0.5,
        reverse: true
    })

    .setClassToggle('.scrollup2', 'fadein')
        .addTo(controller);


    // build a Scene
    var ourScenethree = new ScrollMagic.Scene({
        triggerElement: '#project-3',
        triggerHook: 0.3,
        reverse: true
    })

    .setClassToggle('.scrollup3', 'fadein')
        .addTo(controller);

    // build a Scene
    var ourScenefour = new ScrollMagic.Scene({
        triggerElement: '#project-4',
        triggerHook: 0.3,
        reverse: true
    })

    .setClassToggle('.scrollup4', 'fadein')
        .addTo(controller);

    // build a Scene
    var ourScenefive = new ScrollMagic.Scene({
        triggerElement: '#project-5',
        triggerHook: 0.3,
        reverse: true
    })

    .setClassToggle('.scrollup5', 'fadein')
        .addTo(controller);

    var DP = $('.tiptext');
    var SDP = $('.tiptext2');
    var TL = new TimelineLite();

    $('.tip').click(function(){
        $('.tiptext').css('display','block');
        TL.from(DP, 0.5, {y: -30, autoAlpha: 0, ease:Power1.easeOut});
    });

    $('.tiptext').mouseleave(function(){
        $('.tiptext').css('display','none');
    });

    $('.tip2').click(function(){
        $('.tiptext2').css('display','block');
        TL.from(SDP, 0.5, {y: -30, autoAlpha: 0, ease:Power1.easeOut});
    });

    $('.tiptext2').mouseleave(function(){
        $('.tiptext2').css('display','none');
    });

});