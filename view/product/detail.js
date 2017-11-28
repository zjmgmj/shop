$(function() {
	mui.init();
	var $close = $('#close_icon,.mask'),
		$mask = $('.mask'),
		$BoxBtn = $('#box_btn,#nav_btn'),
		$plus = $('#plus'),
		$minus = $('#minus'),
		$skuNum = $('#skuNum');

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
});