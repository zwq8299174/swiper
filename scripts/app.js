
require.config({
    waitSeconds : 45,
    paths: {
        "jquery": "http://static.niceweb.me/webapp/assets/master/js/lib/jquery/jquery.min",
        "swiper":"http://static.niceweb.me/webapp/assets/master/js/lib/swiper/swiper.min",
        "swiperAnimate":"http://static.niceweb.me/webapp/assets/master/js/lib/swiper/swiper.animate1.0.2.min"
    },
    map: {
        '*': {
            'css': 'http://static.niceweb.me/webapp/assets/master/js/lib/require/css.js'
        }
    },
    shim : {
        "jquery": {
            exports: "jQuery"
        },
        "swiper":{
            deps: ["jquery"]
        },
        "swiperAnimate":{
            deps: ["swiper"]
        }
    }
});
require(["jquery"],function($){

    $('.swiper-slide,.swiper-container,#loading').css({
        height: $(window).height()
    });

    $(window).on('resize',function(){
        $('.swiper-slide,.swiper-container,#loading').css({
            height: $(window).height()
        });
    });

    require(["css!http://static.niceweb.me/webapp/assets/master/css/animate.min.css","css!http://static.niceweb.me/webapp/assets/master/css/swiper/swiper.min.css","swiperAnimate","swiper"],function(){
        var mySwiper = new Swiper('.swiper-container',{
            setWrapperSize :true,
            direction:"vertical",
            speed : 1000,
            longSwipesRatio : 0.3,
            grabCursor:true,
            nextButton:'#btn2',
            mousewheelControl : true,
            lazyLoading : true,
            lazyLoadingInPrevNext : true,
            lazyLoadingOnTransitionStart : true,
            onInit: function(swiper){
                setTimeout(function(){
                    $("#loading").remove();
                    $(".swiper-container").css({"opacity":"1"});
                    swiperAnimateCache(swiper);
                    swiperAnimate(swiper);
                },1000);

                $(".swiper-slide").click(function(){
                    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                        window.location.href="https://itunes.apple.com/cn/app/gong-e-mi-ce/id1039227334?l=zh&ls=1&mt=8";
                    }else{
                        window.location.href="http://downfile2.tgbusdata.cn/app/pcgame/android/pcgame.apk";
                    }
                });
            },
            onSlideChangeEnd: function(swiper){
                swiperAnimate(swiper);
            },
            onTransitionEnd: function(swiper){
                swiperAnimate(swiper);
            }
        });
    });

});