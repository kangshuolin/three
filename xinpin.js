/**
 * Created by admin on 2018/11/14.
 */
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


    //跳转详情页
    $(".content_list").delegate(".projectitem","click",function(){
        var sysId=$(this).attr("data-id");    
        window.location="xinpinxiang.html?sysId=one"+sysId
    });


    getList();



    



})


function getList(){
        var list=listData.listData0.data.list;
        console.log(list)
        // $(".content_list").html("");
        var htmlmodel=$("#licont").html();
       for(var i=0;i<list.length;i++){
           $(".content_list").append(
               `
               <li class="projectitem" data-id="${list[i].listId}">
                    <a href="javascript:">
                        <div class="project_img">
                            <img src="${list[i].coverImg}" alt="" style="width:283px;height:198px;">
                        </div>
                        <div class="project_info">
                            <div>
                                <p class="title">${list[i].title}</p>
                                <p class="subtitle">${list[i].subtitle}</p>
                            </div>
                        </div>
                    </a>
                </li>
               
               `
           )

           
       }
    }


    


   
    