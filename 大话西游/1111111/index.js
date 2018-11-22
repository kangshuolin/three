//nav下的search框框
$(function() {
	$("nav .search_box input").focus(function() {
		$(this).val("");
	});
	$("nav .search_box input").blur(function() {
		$(this).val("搜索大话2");
	});
})

//banner

$(function() {
	let index = 0;
	let timer = null;
	$(".banner a").eq(index).addClass("now");

	function next() {
		index++;
		if(index > $(".banner a").length - 1) {
			index = 0;
		}
		$(".banner a").removeClass("now");
		$(".banner a").eq(index).addClass("now");
	}
	timer = setInterval(function() {
		index++;
		if(index > $(".banner a").length - 1) {
			index = 0;
		}
		$(".banner a").removeClass("now");
		$(".banner a").eq(index).addClass("now");
	}, 3000);
	$(".next").click(next);
	$(".prev").click(function() {
		index--;
		if(index < 0) {
			index = $(".banner a").length - 1;
		}
		$(".banner a").removeClass("now");
		$(".banner a").eq(index).addClass("now");
	})
	$(".banner").mouseenter(function() {
		clearInterval(timer);
	})
	$(".banner").mouseleave(function() {
		timer = setInterval(function() {
			index++;
			if(index > $(".banner a").length - 1) {
				index = 0;
			}
			$(".banner a").removeClass("now");
			$(".banner a").eq(index).addClass("now");
		}, 3000);
	})
});

//选项卡

$(function() {

	//click点击选项卡
	function tab1(nav, cont) {
		nav.click(function() {
			nav.attr("class", "");
			$(this).attr("class", "active");
			cont.css("display", "none");
			cont.eq($(this).index()).css("display", "block");
		})

	}
	tab1($(".mid2 .gf_hz_nav a"), $(".mid2 .gf_hz_cont"));
	tab1($("article .sec1>.fr .fr3 ul li"), $("article .sec1>.fr .fr3 .cont_box"));

	// mousemove
	function tab2(nav, cont) {
		nav.mousemove(function() {
			nav.attr("class", "");
			$(this).attr("class", "active");
			cont.css("display", "none");
			cont.eq($(this).index()).css("display", "block");
		})

	}

	tab2($(".mid .mid3 .mid3_nav li"), $(".mid .mid3 .mid3_tabCont ul"));
	tab2($(".fr1 ol.fr1_nav  li"), $(".fr1 .fr1_cont ul"))

})

$(function() {
	function tab3(nav, cont) {
		nav.mousemove(function() {
			nav.attr("class", "");
			$(this).attr("class", "active");
			cont.css("opacity", "0");
			cont.eq($(this).index()).css("opacity", "1");
		})

	}
	tab3($(".mid .mid2 .gf_hz_cont1 ol li"), $(".mid .mid2 .gf_hz_cont1 ul li"));
	tab3($(".mid .mid2 .gf_hz_cont2 ol li"), $(".mid .mid2 .gf_hz_cont2 ul li"));

//选项卡中上带定时器	

	let index1 = 0;
	let timer1 = null;
	$(".mid .mid2 .gf_hz_cont1 ol li").removeClass("active");
	$(".mid .mid2 .gf_hz_cont1 ol li").eq(index1).addClass("active");
	timer1 = setInterval(function() {
		index1++;
		if(index1 > $(".mid .mid2 .gf_hz_cont1 ul li").length - 1) {
			index1 = 0;
		}
		$(".mid .mid2 .gf_hz_cont1 ol li").removeClass("active");
		$(".mid .mid2 .gf_hz_cont1 ol li").eq(index1).addClass("active");
		$(".mid .mid2 .gf_hz_cont1 ul li").css("opacity", "0");
		$(".mid .mid2 .gf_hz_cont1 ul li").eq(index1).css("opacity", "1");
	}, 2000);
	$(".mid .mid2 .gf_hz_cont1 ol li").hover(function() {
		index1 = $(this).index();
		$(".mid .mid2 .gf_hz_cont1 ol li").removeClass("active");
		$(".mid .mid2 .gf_hz_cont1 ol li").eq(index1).addClass("active");
		$(".mid .mid2 .gf_hz_cont1 ul li").css("opacity", "0");
		$(".mid .mid2 .gf_hz_cont1 ul li").eq($(this).index()).css("opacity", "1");
	});
	$(".mid .mid2 .gf_hz_cont").mouseenter(function() {
		clearInterval(timer1);
	});
	$(".mid .mid2 .gf_hz_cont").mouseleave(function() {
		timer1 = setInterval(function() {
			index1++;
			if(index1 > $(".mid .mid2 .gf_hz_cont1 ul li").length - 1) {
				index1 = 0;
			}
			$(".mid .mid2 .gf_hz_cont1 ol li").removeClass("active");
			$(".mid .mid2 .gf_hz_cont1 ol li").eq(index1).addClass("active");
			$(".mid .mid2 .gf_hz_cont1 ul li").css("opacity", "0");
			$(".mid .mid2 .gf_hz_cont1 ul li").eq(index1).css("opacity", "1");
		}, 2000);
	});

});

// 获奖公告
$(function() {
	let left1 = 1;
	var timer2 = null;
	timer2 = setInterval(function() {
		$(".mid .mid3 .mid3_hjgs .hjgs_fix ol").css({
			"left": $(".mid .mid3 .mid3_hjgs .hjgs_fix ol").position().left - left1
		});
	}, 50)
	$(".mid .mid3 .mid3_hjgs").mouseenter(function() {
		clearInterval(timer2);
	})
	$(".mid .mid3 .mid3_hjgs").mouseleave(function() {
		timer2 = setInterval(function() {
			$(".mid .mid3 .mid3_hjgs .hjgs_fix ol").css({
				"left": $(".mid .mid3 .mid3_hjgs .hjgs_fix ol").position().left - left1
			});
		}, 50)
	})

})

// 无缝轮播

$(function() {
	let tIndex1 = 0;
	let bIndex1 = 0;
	$(".fr3 .cont_box .ol1 li:first-child").clone(true).appendTo($(".fr3 .cont_box .ol1"))

	function next() {
		tIndex1++
		bIndex1++
		if(tIndex1 > $(".fr3 .cont_box .ol1 li").length - 1) {
			tIndex1 = 1
			$(".fr3 .cont_box .ol1").css("left", 0).stop().animate({
				"left": -328
			})
		}
		if(tIndex1 == $(".fr3 .cont_box .ol1 li").length - 1) {
			bIndex1 = 0
		}
		$(".fr3 .cont_box .ol1").stop().animate({
			"left": -tIndex1 * 328
		})
	}

	$(".zy1 .btnLeft").click(function() {
		tIndex1--;
		bIndex1--;
		if(tIndex1 < 0) {
			tIndex1 = $(".fr3 .cont_box .ol1 li").length - 2
			$(".fr3 .cont_box .ol1").css("left", -328 * 6).stop().animate({
				"left": -328 * 5
			})
		}
		if(bIndex1 < 0) {
			bIndex1 = $(".fr3 .cont_box .ol1 li").length - 2
		}
		$(".fr3 .cont_box .ol1").stop().animate({
			"left": -tIndex1 * 328
		})
	})
	$(".zy1 .btnRight").click(function() {
		next()
	})

});