$(function() {
	mui.init();
	var $close = $('#close_icon,.mask'),
		$mask = $('.mask'),
		$BoxBtn = $('#box_btn,#nav_btn'),
		$plus = $('#plus'),
		$minus = $('#minus'),
		$skuNum = $('#skuNum'),
		$sc_btn = $('#sc_btn'),
		$list = $('.list');

	function BoxHide() {
		$('.mask').hide();
		$('.detail_box').removeClass('show');
	}

	function BoxShow() {
		$('.mask').show();
		$('.detail_box').addClass('show');
	}

	$close.click(function() {
		BoxHide();
	});

	$BoxBtn.click(function() {
		BoxShow();
	});

	$plus.click(function() {
		var num = $skuNum.val();
		num++;
		$skuNum.val(num);
	});
	$minus.click(function() {
		var num = $skuNum.val();
		if(num > 0) {
			num--;
			$skuNum.val(num);
		}
	});

	$list.click(function() {
		$list.removeClass('active');
		$(this).addClass('active');
	})

	//收藏
	$sc_btn.click(function() {
		$(this).toggleClass('icon-shoucang2');
		$(this).toggleClass('icon-shoucang_xuanzhongzhuangtai');
	});
});