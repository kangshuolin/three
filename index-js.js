$(function(){

    wow = new WOW(
        {
            animateClass: 'animated',
            offset:       100,
            callback:     function(box) {
                console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
        }
);
wow.init();



    function setsize(){
        var w = $(window).innerWidth();
        $(".slider li").css({
            width:w
        })
    }
    setsize();
    $(window).on("resize",function(){
        setsize()
    });


    var pic=0;  //记录图片的索引
    var len=0;
    $(".slider li").eq(0).clone(true).appendTo(".slider");
    console.log($(".slider li").length);
    function aa(){
        len=$(".slider li").length-1;
        if(pic==6){//也要算上插入的那一张
           $(".slider").css("left",0);
            pic=0;
        }
        pic++;
        var juli=-pic*$(".slider li img").width()+"px";
        $(".slider").animate({"left":juli});
    }
    var timer=null;
    timer=setInterval(function(){
        aa();
    },1000);
    $("#box ul").mouseover(function(){
       clearInterval(timer)
    });

    $(".bx-pager-link.two").click(function() {
        $(".list-f").animate({"left":-1040})
    });
    $(".bx-pager-link.one").click(function() {
        $(".list-f").animate({"left":0})
    });
    $(".bx-pager-link.san").click(function() {
        $(".list-f").animate({"left":-1560})
    });
  $(".bx-pager-link").click(function(){
      $(".bx-pager-link").removeClass("active");
      $(this).addClass("active");
  });
    $(".prev.arrow").click(function(){
        $(".slider-m").animate({"left":-1041})
    });
    $(".next.arrow").click(function(){
        $(".slider-m").animate({"left":0})
    });


    var item= 0;
    $(".bx-next").click(function(){
        item++;
        if (item>$(".slider-t li").length-1){
            $(".slider-t").css({"left":-1270});
            item=$(".slider-t li").length-1
        }else {
            $(".slider-t").animate({"left":-item*635})
        }
    });

    $(".bx-prev").click(function(){
        item--;
        if(item<0){
            $(".slider-t").css("left",0);
            item=0
        }else {
            $(".slider-t").animate({"left":-item*635})
        }
    });

  var wx=document.getElementById("weixin");
  var fwx=document.getElementById("fixed_weixin");
    wx.addEventListener("click",function(event){
      console.log(1);
        fwx.style.display = "block";
        var event=event||window.event;
        if(event&&event.stopPropagation){
            event.stopPropagation();
        }
        else{
            event.cancelBubble=true;
        }


  });
    document.addEventListener('click',function(event){
        event=event||window.event;
        var ele=event.target||event.srcElement;
        if(ele.className!=='tu-pian'&&ele.className!=='fixed-container'){
            fwx.style.display='none';
        }

    });
        var judge=true;
        $(".headSHBtn").click(function(){
            if(judge){
          $(".headSHBtn").css("background"," #1f244f");
          $(".headSHBtn span").eq(0).css({"transform":"rotate(-45deg)",
                                          "top":"25px","background":"#fff"});
            $(".headSHBtn span").eq(1).css({"transform":"rotate(45deg)",
                "top":"25px","background":"#fff"});
            $(".index_nav").animate({"right":0})
            judge=false;
            }
            else{
                $(".headSHBtn").css("background","none");
                $(".headSHBtn span").eq(0).css({"transform":"rotate(0deg)",
                "top":"20px","background":"#dedede"});
                $(".headSHBtn span").eq(1).css({"transform":"rotate(0deg)",
                "top":"28px","background":"#dedede"});
                $(".index_nav").animate({"right":-400})
                judge=true;
            }


        })



    })







