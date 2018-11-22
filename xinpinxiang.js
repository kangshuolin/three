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
    var pic=0;
    var index=0;
    console.log($(".slider li").length)
  
       $(".dian .index").click(function(){
        
           for(var i=0;i<$(".slider li").length;i++){
            $(".dian .index").css({"background":"none","border":"2px solid rgba(170,170,170,.85)"})
           }
        $(this).css({"background-color":"#fff","border":"2px solid #fff"})
        console.log($(".dian .index").index($(this)))
        var juli=-$(".dian .index").index($(this))*$(".slider li img").width();
        $(".slider").animate({"left":juli})
       })



       var sysId=getParams("sysId");
       var article=articleData[sysId].data;
       console.log(article)
       $(".wrap").append(
           `
           <ul class="slider">
                <li>
                    <img src="${article.coverImg1}" alt="" style="width:100%;height: 600px;">
                </li>
                <li>
                    <img src="${article.coverImg2}" alt="" style="width:100%;height: 600px;">
                </li>
                <li>
                    <img src="${article.coverImg3}" alt="" style="width:100%;height: 600px;">
                </li>
                <li>
                    <img src="${article.coverImg4}" alt="" style="width:100%;height: 600px;">
                </li>
            </ul>
           `
       )
       $(".title-warp").append(
           `
            <p class="title">${article.title}</p>
            <p class="subtitle">${article.subtitle}</p>
           `
       )
})


function getParams(name){
    var value = window.location.search.substring(1);
    if(value.indexOf("&") != -1){
        var arr = value.split("&");
        for (var i=0;i<arr.length;i++) {
            var newarr = arr[i].split("=");
            if(newarr[0] == name){
                return newarr[1];
            }
        }
    }else{
        var newarr = value.split("=")
        for (var i=0;i<newarr.length;i++) {
            if(newarr[0] == name){
                return newarr[1];
            }
        }
    }
 }