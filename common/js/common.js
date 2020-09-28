$(function() {
    page.init();
});

var page={
    init: function() {
        //Common
        page.common();

        //Main
        page.main();

        //Sub
        page.sub();

        //Pop-Up
        page.popup();
    },
    common: function(){
        //Slider
        $(".slider.slider-v1").each(function(){
            var slider=$(this);
            var slider_con=$(slider).find(".slider-container");
            slider_con=new Swiper($(slider_con),{
                loop: true,
                autoHeight: true,
                autoplay:{
                    delay: 3000,
                    disableOnInteraction: true
                },
                speed: 300,
            });
        });
        $(".slider.slider-v2").each(function(){
            var slider=$(this);
            var slider_con=$(slider).find(".slider-container");
            slider_con=new Swiper($(slider_con),{
                loop: true,
                autoplay:{
                    delay: 3000,
                    disableOnInteraction: true
                },
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 300,
                breakpoints:{
                    1200:{
                        slidesPerView: 3,
                        centeredSlides: true,
                    },
                    720:{
                        slidesPerView: 2,
                        centeredSlides: false,
                    }
                }
            });
        });
        $(".slider.slider-v3").each(function(){
            var slider=$(this);
            var slider_con=$(slider).find(".slider-container");
            slider_con=new Swiper($(slider_con),{
                loop: true,
                autoplay:{
                    delay: 1000,
                    disableOnInteraction: true
                },
                speed: 300,
                direction: 'vertical',
            });
        });
        //Lnb
        $(".lnb.lnb-v1").each(function(){
            var target=$(this);
            var target_pos_t=$(target).position().top
            $(window).on("load scroll",function(){
                $(target).css("height",$(target).children('.lnb-wrap').outerHeight())
                var scroll_pos_t=$(document).scrollTop();
                var scroll_offset=$("#gnb").height();
                if(scroll_pos_t+scroll_offset>=target_pos_t){
                    $(target).addClass('active');
                    $(target).children('.lnb-wrap').css("top",$("#gnb").height());
                }else{
                    $(target).removeClass('active');
                    $(target).children('.lnb-wrap').css("top",0);
                }
            })
        });
        $(".btn.btn-scrolltop").each(function(){
            var target=$(this);
            var limit_t=$(window).height();
            var target_height=$(target).outerHeight(true)
            $(window).on("load scroll",function(){
                var scroll_pos_t=$(document).scrollTop();
                var scroll_pos_b=scroll_pos_t+$(window).height();
                if(scroll_pos_b>limit_t+target_height){
                    $(target).addClass('active');
                }else{
                    $(target).removeClass('active');
                }
            })
        });
        //Btn
        $(".btn.btn-scrolltop").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: 0
            }, 500);
            return false;
        });
        //Header
        if($("#header").length>0){
            $(window).on("load scroll",function(){
                var scroll_pos_t=$(document).scrollTop();
                if(scroll_pos_t>0){
                    $("#header").addClass('active');
                }else{
                    $("#header").removeClass('active');
                }
            });
            var scroll_position=$(document).scrollTop();
            if(scroll_position>0){
                $("#header").addClass('active');
            }else{
                $("#header").removeClass('active');
            }
        }else if($("#header").length>0){
            $("#header").addClass('active');
        }
        //Gnb
        $(".btn.btn-gnb").on("click",function(){
            if(!$("#gnb").hasClass('active')){
                $("#gnb").addClass('active');
                $(".gnb-container").fadeIn(300);
                $(".gnb-mask").fadeIn(300);
            }else{
                $("#gnb").removeClass('active');
                $(".gnb-container").fadeOut(300);
                $(".gnb-mask").fadeOut(300);
            }
            return false;
        })
        $(".gnb-mask").on("click",function(){
            $("#gnb").removeClass('active');
            $(".gnb-container").fadeOut(300);
            $(".gnb-mask").fadeOut(300);
            return false;
        })
        $(window).on("load resize",function(){
            if($(window).width()>=1200){
                $("#gnb").removeClass('active');
                $(".gnb-container").removeAttr('style');
                $(".gnb-mask").removeAttr('style');
            }
        });
        //Tab
        $(".tab.tab-v1").each(function(){
            var target=$(this);
            $(target).find(".tab-header .btn").on("click",function(){
                var index=$(this).index();
                $(target).find(".tab-header .btn").removeClass("active");
                $(this).addClass("active");
                $(target).find(".tab-content>.frame").removeClass("active");
                $(target).find(".tab-content>.frame").eq(index).addClass("active");
                return false;
            });
        });
    },
    main: function(){
    },
    sub: function(){
    },
    popup: function(){
        $(".popup-open").on("click",function(){
            var attr=$(this).attr('popup-connect');
            if (typeof attr !== typeof undefined && attr !== false) {
                if($('.popup[popup-connect="'+attr+'"]').length>0){
                    $(".popup-mask").fadeIn(300);
                    $(".popup").fadeIn(300);
                }
            }
            return false;
        })
        $(".popup-close").on("click",function(){
            $(".popup-mask").fadeOut(300);
            $(".popup").fadeOut(300);
            return false;
        })
    },
}