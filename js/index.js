$(function () {
	//音乐
	/*function audioAutoPlay(id) {
		var audio = document.getElementById(id);
		audio.play();
		document.addEventListener("WeixinJSBridgeReady", function() {
			audio.play();
		}, false);
	}
	audioAutoPlay('musicStar');*/

	//swiper-container
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: false,
		direction: 'horizontal',
		loop: false,
		noSwiping: true,
		initialSlide: 0,
		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on: {
			init: function () {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function () {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
				//this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); //动画只展现一次，去除ani类名
			}
		}
	});

	//scroll
	mui('.mui-scroll-wrapper').scroll({
		scrollY: true, //是否竖向滚动
		scrollX: false, //是否横向滚动
		startX: 0, //初始化时滚动至x
		startY: 0, //初始化时滚动至y
		indicators: false, //是否显示滚动条
		deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
		bounce: true //是否启用回弹
	})

	$('.global_xyb,.screen1 .tu5,.zdsm').on('click', function () {
		mySwiper.slideNext();
	})

	$('.xzt ul li').on('click', function () {
		$(this).css('color', '#f00').siblings().css('color', '#000')
		$(this).parent().parent().fadeOut(500).siblings().delay(500).fadeIn()
	})

	var successNum = 0

	$('.screen2 .xzt ul li:nth-of-type(1)').on('click', function () {
		$('.screen2 .xzt .zdsm img').attr('src', 'images/02_tu2.png')
		successNum++
	})
	$('.screen2 .xzt ul li:nth-of-type(2)').on('click', function () {
		$('.screen2 .xzt .zdsm img').attr('src', 'images/02_tu3.png')
	})

	$('.screen3 .xzt ul li:nth-of-type(1)').on('click', function () {
		$('.screen3 .xzt .zdsm img').attr('src', 'images/03_tu2.png')
	})
	$('.screen3 .xzt ul li:nth-of-type(2)').on('click', function () {
		$('.screen3 .xzt .zdsm img').attr('src', 'images/03_tu3.png')
		successNum++
	})

	$('.screen4 .xzt ul li:nth-of-type(1)').on('click', function () {
		$('.screen4 .xzt .zdsm img').attr('src', 'images/04_tu2.png')
		successNum++
	})
	$('.screen4 .xzt ul li:nth-of-type(2)').on('click', function () {
		$('.screen4 .xzt .zdsm img').attr('src', 'images/04_tu3.png')
	})

	$('.screen5 .xzt ul li:nth-of-type(1)').on('click', function () {
		$('.screen5 .xzt .zdsm img').attr('src', 'images/05_tu2.png')
	})
	$('.screen5 .xzt ul li:nth-of-type(2)').on('click', function () {
		$('.screen5 .xzt .zdsm img').attr('src', 'images/05_tu3.png')
		successNum++
	})

	$('.screen6 .xzt ul li:nth-of-type(1)').on('click', function () {
		$('.screen6 .xzt .zdsm img').attr('src', 'images/06_tu2.png')
		haibao()
	})
	$('.screen6 .xzt ul li:nth-of-type(2)').on('click', function () {
		$('.screen6 .xzt .zdsm img').attr('src', 'images/06_tu3.png')
		successNum++
		haibao()
	})

	var haibao = function () {
		// console.log(successNum)
		if (successNum >= 5) {
			$('#hbtu').attr('src', 'images/07_tu1.jpg')
		} else if (successNum >= 1 && successNum < 5) {
			$('#hbtu').attr('src', 'images/07_tu2.jpg')
		} else if (successNum == 0) {
			$('#hbtu').attr('src', 'images/07_tu3.jpg')
		}
	}

	$('.mui-icon-closeempty').on('click', function () {
		$('.screen7 .user').fadeOut()
	})

	$('.tijiao span').on('click', function () {
		var name = $('#name').val()
		var phone = $('#phone').val()

		if (!name) {
			mui.alert('请填写姓名')
			return false
		}

		if (!phone) {
			mui.alert('请填写联系方式')
			return false
		}

		if (!(/^[1][0-9]{10}$/.test(phone))) {
			mui.alert('请输入正确的手机号码')
			return false
		}

		mui.alert('成功参与抽奖！')
		$('.screen7 .user').fadeOut()


	})



})