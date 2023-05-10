$(document).ready(function() {
	//使用js 获取到音乐标签对象 
	var music = document.getElementById("music");
	//音乐按钮
	$(".music").on("click", function() {
		//音乐的状态 如果在暂停状态就播放 其他状态就暂停
		if (music.paused) {
			//开始
			music.play();
			$(this).attr("src", "img/musicBtn.png");
		} else {
			//暂停
			music.pause();
			$(this).attr("src", "img/musicBtnOff.png");
		}
	});
	//使加载图标隐藏
	$("#loading").css("display", "none");
	//使各个图标隐藏
	$(".box").css("display", "none");
	//使战舰隐藏
	$(".boat").css("display", "none");
	//使背景图片还原
	$(".backpic").attr("src", "material/dengtaOff.jpg");
	//使背景图片淡入
	$(".backpic").css("display", "none");
	$(".backpic").fadeIn(4000);
	//使各个图标淡入
	$(".box").fadeIn(2000,function(){
		$(this).animate({left:"19%"},1000,function(){
			$(this).animate({left:"25%"},2000,function(){
				$(this).animate({left:"22%"},1000);	
			});
		});
	});
	//按钮的悬停事件
	$(".button").mouseover(function() {
		$(this).css("transform", "scale(1.2)");
		$(this).mouseleave(function() {
			$(this).css("transform", "scale(1)");
		});
	});

});

$(function() {
	/*****************第一个按钮点击事件***********/
	$(".link-mission a").click(function() {
		$("#loading").css("display", "inline");
		$(".box").css("opacity", "0.5");
		setTimeout(function() {
			window.location.href = "http://127.0.0.1:8020/%E7%81%AB%E7%82%8E%E7%84%B1%E7%87%9A%E5%9B%A2%E9%98%9F%E9%A1%B9%E7%9B%AE-%E6%AD%A3%E5%BC%8F%E7%89%88/%E5%8A%A8%E7%94%BB/qianting.html";
			clearTimeout(this);
		}, 2000);
	});

	/*****************第二个按钮点击事件************/
	$(".link-play a").click(function() {
		//背景虚化
		$(".box").fadeOut(1000);
		//背景淡出
		$(".backpic").fadeOut(1000, function() {
			//背景图换地址
			$(".backpic").attr("src", "material/dengtaOn.jpg");
			$(".backpic").fadeIn(1000, function() {
				//战舰出现
				$(".boat").fadeIn(1000, function() {
					$(this).animate({
						width:"280px",
						height:"60px",
						right: "50%",
						bottom: "11%",
						opacity: 0.9
					}, 3000, function() {
						$(this).animate({
							width:"280px",
							height:"60px",
							right: "85%",
							opacity: 0.9
						}, 2000, function() {
							$(this).animate({
								width:"240px",
								height:"45px",
								bottom: "20%",
								opacity: 0.8
							}, 1000, function() {
								$(this).animate({
									width:"160px",
									height:"20px",
									right: "43%",
									bottom: "36%",
									opacity: 0.5
								}, 3000, function() {
									$(this).fadeOut(1000, function() {
										//出现加载图标
										$("#loading").css("display", "inline");
										setTimeout(function() {
											window.location.href = "http://127.0.0.1:8020/%E7%81%AB%E7%82%8E%E7%84%B1%E7%87%9A%E5%9B%A2%E9%98%9F%E9%A1%B9%E7%9B%AE-%E6%AD%A3%E5%BC%8F%E7%89%88/%E6%B8%B8%E6%88%8F/index.html";
											clearTimeout(this);
										}, 2000);
									});
								});
							});
						});
					});
				});
			});
		});
	});
	/***********************第三个按钮点击事件******************/
	$(".link-touch a").click(function() {
		$("#loading").css("display", "inline");
		$(".box").css("opacity", "0.5");
		setTimeout(function() {
			window.location.href = "http://127.0.0.1:8020/%E7%81%AB%E7%82%8E%E7%84%B1%E7%87%9A%E5%9B%A2%E9%98%9F%E9%A1%B9%E7%9B%AE-%E6%AD%A3%E5%BC%8F%E7%89%88/%E9%98%9F%E5%91%98/index.html";
			clearTimeout(this);
		}, 2000);
	});

});