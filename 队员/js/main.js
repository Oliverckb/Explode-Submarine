var $index = 0;
$(document).ready(function() {

	//	var boxW=$(".box").css("width");
	//	$(".page").css("width",boxW);

	$(".box").swipe({
		swipe: function(event, direct) {
			console.log(direct);
			if (direct == "left") {
				$index = $index + 1;
				cut();
			} else if (direct == "right") {

				$index = $index - 1;
				cut();
			}
		}
	});
	$(".page1-tb1").css("display", "none");
	$(".page1-text2").css("display", "none");
	$(".page1-text3").css("left", "-75%");
	$(".page1-text4").css("display", "none");
	$(".page1-text5").css("display", "none");
	$(".page1-tb2").css("top", "-30%");
	$(".page1-text1").css("left", "-50%");
	$(".page1-text1").animate({
		left: "0%"
	}, 2000, function() {
		$(".page1-text2").fadeIn(2000, function() {
			$(".page1-text3").animate({
				left: "15%"
			}, 1000)
			$(".page1-text4").fadeIn(1000);
			$(".page1-text5").fadeIn(1000)
		});

	});
	$(".page1-tb1").fadeIn(2000, function() {
		$(".page1-tb2").animate({
			top: "3%"
		}, 2000);
	});

	var music = document.getElementById("music");
	$(".musicbtn").on("click", function() {
		if (music.paused) {
			music.play();
			$(this).attr("src", "img/musicBtn.png");
		} else {
			music.pause();
			$(this).attr("src", "img/musicBtnOff.png");
		}

	});
});

function cut() {
	if ($index < 0) {
		$index = 0;
	} else if ($index > 12) {
		$index = 12
	} else {
		init()
		$(".content").animate({
			left: $index * -100 + "%"
		}, 1000, amat);
	}
}

function init() {
	if ($index == 0) {
		$(".page1-tb1").css("display", "none");
		$(".page1-text2").css("display", "none");
		$(".page1-text3").css("left", "-75%");
		$(".page1-text4").css("display", "none");
		$(".page1-text5").css("display", "none");
		$(".page1-tb2").css("top", "-30%");
		$(".page1-text1").css("left", "-50%");
	} else if ($index == 1) {
		$(".page2-text1").css("top", "-12%");
		$(".page2-text3").css("display", "none");
		$(".page2-p1").css("top", "-30%");
		$(".page2-tb3").css("display", "none")
		$(".page2-tb1").css("right", "-25%");
		$(".page2-text2").css("display", "none");
	} else if ($index == 2) {
		$(".page3-text1").css("top", "-12%");
		$(".page3-p1").css("left", "110%");
		$(".page3-p2").css("top", "-30%");
		$(".page3-tb1").css("right", "-40%");
		$(".page3-tb2").css("display", "none");
		$(".page3-text4").css("bottom", "-20%");
		$(".page3-text2").css("display", "none");
		$(".page3-text3").css("display", "none");

	} else if ($index == 3) {
		$(".page4-tb5").css("display", "none");
		$(".page4-tb4").css("bottom", "100%");
		$(".page4-tb3").css("right", "70%");
		$(".page4-p1").css("top", "-50%");
		$(".page4-text2").css("display", "none");
		$(".page4-tb3").show();
		$(".page4-tb4").show();
	} else if ($index == 4) {
		$(".page5-tb3").css("display", "none");
		$(".page5-tb2").css("right", "-40%");
		$(".page5-p1").css("top", "-50%");
		$(".page5-p2").css("right", "-50%");
		$(".page5-text1").css("top", "-20%");
		$(".page5-text2").css("display", "none");
		$(".page5-text3").css("display", "none");
		$(".page5-text4").css("bottom", "-20%");
	} else if ($index == 5) {
		$(".page6-tb2").css("display", "none");
		$(".page6-p1").css("top", "-50%");
		$(".page6-p2").css("right", "-40%");
		$(".page6-text1").css("top", "-20%");
		$(".page6-text2").css("display", "none");
		$(".page6-text3").css("right", "-60%");
	} else if ($index == 6) {
		$(".page7-p1").css("width", "0%");
		$(".page7-p2").css("height", "0%");
		$(".page7-text1").css("right", "-70%");
		$(".page7-text2").css("display", "none");
		$(".page7-text3").css("display", "none");
	} else if ($index == 7) {
		$(".page8-p1").css("width", "0%");
		$(".page8-p2").css("display", "none");
		$(".page8-text1").css("display", "none");
		$(".page8-text2").css("display", "none");
		$(".page8-text3").css("display", "none");
		$(".page8-text4").css("display", "none");
		$(".page8-text5").css("display", "none");
		$(".page8-text6").css("display", "none");
		$(".page8-text7").css("display", "none");
		$(".page8-text8").css("display", "none");
		$(".page8-tb3").css("display", "none");
		$(".page8-tb4").css("display", "none");
		$(".page8-tb5").css("display", "none");
		$(".page8-tb1").css("display", "none");
		$(".page8-tb1").show();
		$(".page8-tb2").show();
	} else if ($index == 8) {
		$(".page9-p1").css("width", "0%");
		$(".page9-text1").css("top", "-30%");
		$(".page9-text2").css("right", "-70%");
		$(".page9-text3").css("display", "none");
		$(".page9-text4").css("right", "-70%");
		$(".page9-tb2").css("top", "-30%");
		$(".page9-tb3").css("display", "none");
		$(".page9-tb4").css("bottom", "-30%");
	} else if ($index == 9) {
		$(".page10-p1").css("display", "none");
		$(".page10-p2").css("display", "none");
		$(".page10-p3").css("display", "none");
		$(".page10-p4").css("display", "none");
		$(".page10-p5").css("display", "none");
		$(".page10-p6").css("display", "none");
		$(".page10-p7").css("display", "none");
		$(".page10-p8").css("display", "none");
		$(".page10-p9").css("display", "none");
		$(".page10-p10").css("display", "none");
		$(".page10-p11").css("display", "none");
		$(".page10-p12").css("display", "none");
		$(".page10-p13").css("display", "none");
		$(".page10-text1").css("display", "none");
		$(".page10-text2").css("display", "none");
	}
}

function amat() {

	if ($index == 0) {
		$(".page1-text1").animate({
			left: "0%"
		}, 2000, function() {
			$(".page1-text2").fadeIn(2000, function() {
				$(".page1-text3").animate({
					left: "15%"
				}, 1000)
				$(".page1-text4").fadeIn(1000);
				$(".page1-text5").fadeIn(1000);
			});

		});
		$(".page1-tb1").fadeIn(2000, function() {
			$(".page1-tb2").animate({
				top: "3%"
			}, 2000);
		});
	} else if ($index == 1) {
		$(".page2-text1").animate({
			top: "3%"
		}, 1000, function() {
			$(".page2-text3").fadeIn(2000);
		});
		$(".page2-p1").animate({
			top: "13%"
		}, 2000, function() {
			$(".page2-tb3").fadeIn(1000);
			$(".page2-tb1").animate({
				right: "5%"
			}, 2000, function() {
				$(".page2-text2").fadeIn(2000);
			});
		});
	} else if ($index == 2) {
		$(".page3-text1").animate({
			top: "5%"
		}, 1000, function() {
			$(".page3-p2").animate({
				top: "20%"
			}, 1000, function() {
				$(".page3-text2").fadeIn(1000, function() {
					$(".page3-p1").animate({
						left: "55%"
					}, 1000, function() {
						$(".page3-text3").fadeIn(1000, function() {
							$(".page3-tb2").fadeIn(1000, function() {
								$(".page3-text4").animate({
									bottom: "3%"
								}, 2000, function() {
									$(".page3-tb1").animate({
										right: "1%"
									}, 2000);
								});
							});
						});
					});
				});
			});
		});
	} else if ($index == 3) {
		$(".page4-p1").animate({
			top: "3%"
		}, 2000, function() {
			$(".page4-text2").fadeIn(1000);
		});
		$(".page4-tb4").animate({
			bottom: "34%"
		}, 8000);
		$(".page4-tb3").animate({
			right: "3%"
		}, 8000, function() {
			$(this).fadeOut();
			$(".page4-tb4").fadeOut(0, function() {
				$(".page4-tb5").fadeIn(2000, function() {
					$(".page4-tb5").hide();
				});
			});
		});
	} else if ($index == 4) {
		$(".page5-text1").animate({
			top: "5%"
		}, 2000, function() {
			$(".page5-p1").animate({
				top: "10%"
			}, 2000, function() {
				$(".page5-text3").fadeIn(1000, function() {
					$(".page5-text2").fadeIn(1000);
					$(".page5-p2").animate({
						right: "5%"
					}, 2000, function() {
						$(".page5-text4").animate({
							bottom: "10%"
						}, 2000);
						$(".page5-tb3").fadeIn(1000);
						$(".page5-tb2").animate({
							right: "10%"
						}, 2000);
					});
				});
			});
		});
	} else if ($index == 5) {
		$(".page6-text1").animate({
			top: "3%"
		}, 2000, function() {
			$(".page6-p1").animate({
				top: "15%"
			}, 2000);
			$(".page6-p2").animate({
				right: "5%"
			}, 2000, function() {
				$(".page6-text3").animate({
					right: "-1%"
				}, 3000);
				$(".page6-text2").fadeIn(2000);
				$(".page6-tb2").fadeIn(3000);
			});
		});
	} else if ($index == 6) {
		$(".page7-text1").animate({
			right: "2%"
		}, 2000, function() {
			$(".page7-p1").animate({
				width: "27%"
			}, 2000, function() {
				$(".page7-text3").fadeIn(1000, function() {
					$(".page7-p2").animate({
						height: "25%"
					}, 2000, function() {
						$(".page7-text2").fadeIn(1000);
					});
				});
			});
		});
	} else if ($index == 7) {
		$(".page8-tb3").fadeIn(2000, function() {
			$(".page8-text1").fadeIn(1000);
			$(".page8-p1").animate({
				width: "30%"
			}, 2000, function() {
				$(".page8-text8").fadeIn(2000);
				$(".page8-text2").fadeIn(2000, function() {
					$(".page8-p2").fadeIn(1000, function() {
						$(".page8-text7").fadeIn(1000, function() {
							$(".page8-text3").fadeIn(2000, function() {
								$(".page8-text4").fadeIn(2000);
								$(".page8-tb5").fadeIn(2000, function() {
									$(".page8-text5").fadeIn(1000, function() {
										$(".page8-text6").fadeIn(2000);
										$(".page8-tb2").fadeOut(1000);
										$(".page8-tb1").fadeIn(1000);
										$(".page8-p2").fadeOut(2000);
										$(".page8-tb4").fadeIn(1000);
										$(".page8-tb3").fadeOut(1000);
									});
								});
							});
						});
					});
				});
			});
		});
	} else if ($index == 8) {
		$(".page9-text1").animate({
			top: "5%"
		}, 2000, function() {
			$(".page9-p1").animate({
				width: "30%"
			}, 2000, function() {
				$(".page9-text2").animate({
					right: "8%"
				}, 2000, function() {
					$(".page9-tb2").animate({
						top: "3%"
					}, 1000, function() {
						$(".page9-text3").fadeIn(2000, function() {
							$(".page9-tb3").fadeIn(1000, function() {
								$(".page9-text4").animate({
									right: "8%"
								}, 2000, function() {
									$(".page9-tb4").animate({
										bottom: "3%"
									}, 1000);
								});
							});
						});
					});
				});

			});
		});
	} else if ($index == 9) {
		$(".page10-p1").fadeIn(1500, function() {
			$(".page10-p2").fadeIn(1500, function() {
				$(".page10-p3").fadeIn(1500, function() {
					$(".page10-p4").fadeIn(1500, function() {
						$(".page10-p5").fadeIn(1500, function() {
							$(".page10-p6").fadeIn(1500, function() {
								$(".page10-p7").fadeIn(1500, function() {
									$(".page10-p8").fadeIn(1500, function() {
										$(".page10-p9").fadeIn(1500, function() {
											$(".page10-p10").fadeIn(1500, function() {
												$(".page10-p11").fadeIn(1500, function() {
													$(".page10-p12").fadeIn(1500, function() {
														$(".page10-p13").fadeIn(1500, function() {
															$(".page10-p1").fadeOut(3000);
															$(".page10-p2").fadeOut(3000);
															$(".page10-p3").fadeOut(3000);
															$(".page10-p4").fadeOut(3000);
															$(".page10-p5").fadeOut(3000);
															$(".page10-p6").fadeOut(3000);
															$(".page10-p7").fadeOut(3000);
															$(".page10-p8").fadeOut(3000);
															$(".page10-p9").fadeOut(3000);
															$(".page10-p10").fadeOut(3000);
															$(".page10-p11").fadeOut(3000);
															$(".page10-p12").fadeOut(3000);
															$(".page10-p13").fadeOut(3000,function(){
																$(".page10-text1").fadeIn(2000,function(){
																   $(".page10-text2").fadeIn(2000);
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	}
}