// codepen https://codepen.io/hnzxewqw/pen/bGEKLdo
// QA選單收合

$(function () {
	$(".btn_QA").css({cursor:"pointer"}).click(function (e) {
		e.preventDefault();
		//在 div 上動態新增 class
		$(this).toggleClass("active");
		//div 在父層元素中，找到 p 元素，並且給它滑動效果
		$(this).parent().find("p").slideToggle();
        $(this).find("img").toggle();
        //div 在父層 .btn_QA 元素中，找到其他 .btn_QA 同層元素，再找到該同層元素的 p 標籤，並向上收闔
		$(this).parent().siblings().find("p").slideUp();
        $(this).parent().siblings().find(".less").hide();
        $(this).parent().siblings().find(".more").show();
		//duv 在父層 .btn_QA 元素中，找到其他 .btn_QA 同層元素，再找到該同層元素的 div 標籤，並動態移除 class
		$(this).parent().siblings().find("div").removeClass("active");
	});
});

    