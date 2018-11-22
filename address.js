$(function(){
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

    var sContent ="中国广东省深圳市南山区创业路中兴工业城综合楼11楼";
	var map = new BMap.Map("l-map");
	var point = new BMap.Point(113.92887,22.520911);
	map.centerAndZoom(point, 15);
	var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow,point); //开启信息窗口
    
    
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
	

})