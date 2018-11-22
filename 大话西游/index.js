$(function(){

	var num = 0
	timer = null;
	clearInterval(timer)
	timer = setInterval(function(){
		if(num == 1){
			$(".hua").css("top",0);
			num = 0
        }
        else{
        num++
		var yidong = num*55
		$(".hua").animate({"top":-yidong+"px"})
        }
		
		
    },3000)


    // $(".slider-item").eq(0).show();
    var num2 = 0;
    $(".banner-prev").click(function () {
        num2--;
        if (num2 < 0) {
            num2 = $(".slider-item").length - 1
        }
        $(".slider-item").eq(num2).show().siblings().hide()
    });
    $(".banner-next").click(function () {
        num2++;
        if (num2 > $(".slider-item").length - 1) {
            num2= 0
        }
        $(".slider-item").eq(num2).show().siblings().hide()
    });
   
    function playNext() {
        num2--;
        if (num2 < 0) {
            num2 = $(".slider-item").length - 1
        }
        $(".slider-item").eq(num2).show().siblings().hide()
    }
    timer = setInterval(playNext, 3000);
//点击选项卡
function    tab1(nav,cont){
    nav.click(function(){
        nav.removeClass("on");
        $(this).addClass("on");
        cont.css("display","none");
        cont.eq($(this).index()).css("display","block");

    })
}
tab1($(".guan"),$(".slide-box"))


  
  //hover选项卡
    function tab2(nav, cont) {
		nav.mousemove(function() {
			nav.attr("class", "jiu");
			$(this).attr("class", "jiu active");
			cont.css("display", "none");
			cont.eq($(this).index()).css("display", "block");
		})

    }
    tab2($(".jiu"),$(".slide-item")) 
  

    var   index=0;
    var   timer1=null;


    function timerTab(nav,cont,num){
        nav.removeClass("active");
        nav.eq(index).addClass("active")
    timer1=setInterval(function(){
        index++;
        if(index>cont.length-1){
            index=0;
        }
       nav.removeClass("active");
       nav.eq(index).addClass("active");
       cont.css("display","none");
       cont.eq(index).css("display","block")


    },num) 
    }
    console.log($("#slide-box1 .slide-item"));
    console.log($("#slide-box2 .slide-item"));
    console.log($("#slider-nav1 .jiu"));
    console.log($("#slider-nav2 .jiu"));
   //$("#slide-box1 .slide-item")
    timerTab($("#slider-nav1 .jiu"),$("#slide-box1 .slide-item"),1000);
    //timerTab($("#slider-nav2 .jiu"),$("#slide-box2 .slide-item"),1000);

  
    

  
})


