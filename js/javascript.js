$(document).ready(function () {
	new fullpage('#fullpage', {
		fadingEffect: 'section',
		dragAndMove: true,

	});


	function workSlider() {

		$('.slider-prev, .slider-next').click(function () {

			var $this = $(this),
				curLeft = $('.slider').find('.slider-item__left'),
				curLeftPos = $('.slider').children().index(curLeft),
				curCenter = $('.slider').find('.slider-item__center'),
				curCenterPos = $('.slider').children().index(curCenter),
				curRight = $('.slider').find('.slider-item__right'),
				curRightPos = $('.slider').children().index(curRight),
				totalWorks = $('.slider').children().length,
				$left = $('.slider-item__left'),
				$center = $('.slider-item__center'),
				$right = $('.slider-item__right'),
				$item = $('.slider-item');

			$('.slider').animate({ opacity: 0 }, 400);

			setTimeout(function () {

				if ($this.hasClass('slider-next')) {
					if (curLeftPos < totalWorks - 1 && curCenterPos < totalWorks - 1 && curRightPos < totalWorks - 1) {
						$left.removeClass('slider-item__left').next().addClass('slider-item__left');
						$center.removeClass('slider-item__center').next().addClass('slider-item__center');
						$right.removeClass('slider-item__right').next().addClass('slider-item__right');
					}
					else {
						if (curLeftPos === totalWorks - 1) {
							$item.removeClass('slider-item__left').first().addClass('slider-item__left');
							$center.removeClass('slider-item__center').next().addClass('slider-item__center');
							$right.removeClass('slider-item__right').next().addClass('slider-item__right');
						}
						else if (curCenterPos === totalWorks - 1) {
							$left.removeClass('slider-item__left').next().addClass('slider-item__left');
							$item.removeClass('slider-item__center').first().addClass('slider-item__center');
							$right.removeClass('slider-item__right').next().addClass('slider-item__right');
						}
						else {
							$left.removeClass('slider-item__left').next().addClass('slider-item__left');
							$center.removeClass('slider-item__center').next().addClass('slider-item__center');
							$item.removeClass('slider-item__right').first().addClass('slider-item__right');
						}
					}
				}
				else {
					if (curLeftPos !== 0 && curCenterPos !== 0 && curRightPos !== 0) {
						$left.removeClass('slider-item__left').prev().addClass('slider-item__left');
						$center.removeClass('slider-item__center').prev().addClass('slider-item__center');
						$right.removeClass('slider-item__right').prev().addClass('slider-item__right');
					}
					else {
						if (curLeftPos === 0) {
							$item.removeClass('slider-item__left').last().addClass('slider-item__left');
							$center.removeClass('slider-item__center').prev().addClass('slider-item__center');
							$right.removeClass('slider-item__right').prev().addClass('slider-item__right');
						}
						else if (curCenterPos === 0) {
							$left.removeClass('slider-item__left').prev().addClass('slider-item__left');
							$item.removeClass('slider-item__center').last().addClass('slider-item__center');
							$right.removeClass('slider-item__right').prev().addClass('slider-item__right');
						}
						else {
							$left.removeClass('slider-item__left').prev().addClass('slider-item__left');
							$center.removeClass('slider-item__center').prev().addClass('slider-item__center');
							$item.removeClass('slider-item__right').last().addClass('slider-item__right');
						}
					}
				}
				if ($this.hasClass('slider-prev')) {
					if (curLeftPos < totalWorks - 1 && curCenterPos < totalWorks - 1 && curRightPos < totalWorks - 1) {
						$left.removeClass('slider-item__left').prev().addClass('slider-item__left');
						$center.removeClass('slider-item__center').prev().addClass('slider-item__center');
						$right.removeClass('slider-item__right').prev().addClass('slider-item__right');
					}
					else {
						if (curLeftPos === totalWorks - 1) {
							$item.removeClass('slider-item__left').last().addClass('slider-item__left');
							$center.removeClass('slider-item__center').prev().addClass('slider-item__center');
							$right.removeClass('slider-item__right').prev().addClass('slider-item__right');
						}
						else if (curCenterPos === totalWorks - 1) {
							$left.removeClass('slider-item__left').prev().addClass('slider-item__left');
							$item.removeClass('slider-item__center').last().addClass('slider-item__center');
							$right.removeClass('slider-item__right').prev().addClass('slider-item__right');
						}
						else {
							$left.removeClass('slider-item__left').prev().addClass('slider-item__left');
							$center.removeClass('slider-item__center').prev().addClass('slider-item__center');
							$item.removeClass('slider-item__right').last().addClass('slider-item__right');
						}
					}
				}
				else {
					if (curLeftPos !== 0 && curCenterPos !== 0 && curRightPos !== 0) {
						$left.removeClass('slider-item__left').next().addClass('slider-item__left');
						$center.removeClass('slider-item__center').next().addClass('slider-item__center');
						$right.removeClass('slider-item__right').next().addClass('slider-item__right');
					}
					else {
						if (curLeftPos === 0) {
							$item.removeClass('slider-item__left').first().addClass('slider-item__left');
							$center.removeClass('slider-item__center').next().addClass('slider-item__center');
							$right.removeClass('slider-item__right').next().addClass('slider-item__right');
						}
						else if (curCenterPos === 0) {
							$left.removeClass('slider-item__left').next().addClass('slider-item__left');
							$item.removeClass('slider-item__center').first().addClass('slider-item__center');
							$right.removeClass('slider-item__right').next().addClass('slider-item__right');
						}
						else {
							$left.removeClass('slider-item__left').next().addClass('slider-item__left');
							$center.removeClass('slider-item__center').next().addClass('slider-item__center');
							$item.removeClass('slider-item__right').first().addClass('slider-item__right');
						}
					}
				}

			}, 400);

			$('.slider').animate({ opacity: 1 }, 400);

		});

	}


	workSlider();

});
