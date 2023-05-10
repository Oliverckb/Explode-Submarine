var rows = 30;
var cols = 40;
var blocksize = 20;
var ctx;
var ship = [];
var bomb_1 = [];
var bomb_2 = [];
var bomb_3 = [];
var bomb_4 = [];
var bomb_5 = [];
var bl = 1;
var sl = 5;

var direction = 0;
var flag_1 = 1,
	flag_2 = 1,
	flag_3 = 1,
	flag_4 = 1,
	flag_5 = 1;
var j = 1;
var ship_pt = new Image();
var bomb_pt = new Image();
var submarine_pt_1 = new Image();
var submarine_pt_2 = new Image();
var submarine_pt_3 = new Image();
var submarine_pt_4 = new Image();
ship_pt.src = "img/chuan1.png";
bomb_pt.src = "img/yulei.png";
submarine_pt_1.src = "img/qianting11.png";
submarine_pt_2.src = "img/qianting12.png";
submarine_pt_3.src = "img/qianting13.png";
submarine_pt_4.src = "img/qianting14.png";

var blast_1 = new Image();
var blast_2 = new Image();
var blast_3 = new Image();
var blast_4 = new Image();
blast_1.src = "img/daodan.png";
blast_2.src = "img/baozha4.png";

var interval;
var interval_2;
var interval_3;
var interval_4;

var submarine_arr = [];
var submarine_num = 6
var nub = 1;

var time = 60;

//计分计时板 全局变量
var fenshu = 0;
var defen = document.getElementById('fenshu');
var shijian = 0;
var jishi = document.getElementById("jishi");
var guanka = 1;
var tongguan = document.getElementById("tongguan");
var leijidefen = 0;
var tishi = document.getElementById('tishi');
//定义重置 暂停 返回
var reset = document.getElementById('reset');
var zanting = document.getElementById('zanting');
var fanhui = document.getElementById('fanhui');
//定义 爆炸 过关 音效
var baozha = document.getElementById('baozha');
var guoguan = document.getElementById('guoguan');
var lianjie = document.getElementById('lianjie');

window.onload = function() {

	ctx = document.getElementById('Marine_Crash').getContext('2d');
	initship();
	initbomb_1();
	initbomb_2();
	initbomb_3();
	initbomb_4();
	initbomb_5();

	for (var i = 0; i <= submarine_num; i++) {
		submarine_arr[i] = new submarine();
	}

	interval_2 = setInterval(function() {
		for (var i = 0; i <= submarine_num; i++) {
			submarine_arr[i].submarine_move_right();
			draw();
		}
	}, time);

	interval_3 = setInterval(Crash, 10); //判定是否炸到船体
	interval_4 = setInterval("jishiqi()", 1000); //计时器刷新
	draw();

	//设置键盘监听事件
	document.onkeydown = function(event) {
		var e = event || window.event;
		keyDown(e.keyCode);
	}
}

//船体初始化
function initship() {
	//船体
	for (var i = 0; i <= sl; i++) {
		ship[i] = {
			x: i * blocksize,
			y: 140
		}
	}
}

function initbomb_1() {
	//炸弹初始化
	//1号炸弹
	for (var i = 0; i <= bl; i++) {
		bomb_1[i] = {
			x: ship[sl - parseInt(sl / 2) - 1].x,
			y: 140 + i * blocksize
		}
	}
}

function initbomb_2() {
	//2号炸弹初始化
	for (var i = 0; i <= bl; i++) {
		bomb_2[i] = {
			x: ship[sl - parseInt(sl / 2) - 1].x,
			y: 140 + i * blocksize
		}
	}
}

function initbomb_3() {
	//3号炸弹初始化
	for (var i = 0; i <= bl; i++) {
		bomb_3[i] = {
			x: ship[sl - parseInt(sl / 2) - 1].x,
			y: 140 + i * blocksize
		}
	}
}

function initbomb_4() {
	//4号炸弹初始化
	for (var i = 0; i <= bl; i++) {
		bomb_4[i] = {
			x: ship[sl - parseInt(sl / 2) - 1].x,
			y: 140 + i * blocksize
		}
	}
}

function initbomb_5() {
	//5号炸弹初始化
	for (var i = 0; i <= bl; i++) {
		bomb_5[i] = {
			x: ship[sl - parseInt(sl / 2) - 1].x,
			y: 140 + i * blocksize
		}
	}
}
//炸弹释放
function bomb_release() {
	if (flag_1 == 2) {
		bomb_1[0] = {
				x: bomb_1[0].x,
				y: bomb_1[0].y + j * 0.5 * blocksize
			}
			//		console.log(bomb_1);
		if (bomb_1[0].y >= rows * blocksize) {
			initbomb_1();
			flag_1 = 1;
		}
	}

	if (flag_2 == 2) {
		bomb_2[0] = {
			x: bomb_2[0].x,
			y: bomb_2[0].y + j * 0.5 * blocksize
		}
		if (bomb_2[0].y >= rows * blocksize) {
			initbomb_2();
			flag_2 = 1;
		}
	}
	if (flag_3 == 2) {
		bomb_3[0] = {
			x: bomb_3[0].x,
			y: bomb_3[0].y + j * 0.5 * blocksize
		}
		if (bomb_3[0].y >= rows * blocksize) {
			initbomb_3();
			flag_3 = 1;
		}
	}
	if (flag_4 == 2) {
		bomb_4[0] = {
			x: bomb_4[0].x,
			y: bomb_4[0].y + j * 0.5 * blocksize
		}
		if (bomb_4[0].y >= rows * blocksize) {
			initbomb_4();
			flag_4 = 1;
		}
	}
	if (flag_5 == 2) {
		bomb_5[0] = {
			x: bomb_5[0].x,
			y: bomb_5[0].y + j * 0.5 * blocksize
		}
		if (bomb_5[0].y >= rows * blocksize) {
			initbomb_5();
			flag_5 = 1;
		}
	}

	//		console.log(bomb);
	draw();
}

//击沉事件
function Crash() {
	for (var i = 0; i <= submarine_num; i++) {
		if ((bomb_1[0].x >= (submarine_arr[i].x - 1.5 * blocksize)) && (bomb_1[0].x <= (submarine_arr[i].x + 1.8 * blocksize)) && (bomb_1[0].y <= submarine_arr[i].y + 0.8 * blocksize) && (bomb_1[0].y >= submarine_arr[i].y - 0.8 * blocksize)) {

			ctx.drawImage(blast_1, submarine_arr[i].x - 30, submarine_arr[i].y - 32, 80, 60);
			initbomb_1();
			flag_1 = 1;
			submarine_arr[i].flag = "b";
			playHome();

		}
		if ((bomb_2[0].x >= (submarine_arr[i].x - 1.5 * blocksize)) && (bomb_2[0].x <= (submarine_arr[i].x + 1.8 * blocksize)) && (bomb_2[0].y <= submarine_arr[i].y + 0.8 * blocksize) && (bomb_2[0].y >= submarine_arr[i].y - 0.8 * blocksize)) {

			initbomb_2();
			flag_2 = 1;
			submarine_arr[i].flag = "b";
			playHome();
		}
		if ((bomb_3[0].x >= (submarine_arr[i].x - 1.5 * blocksize)) && (bomb_3[0].x <= (submarine_arr[i].x + 1.8 * blocksize)) && (bomb_3[0].y <= submarine_arr[i].y + 0.8 * blocksize) && (bomb_3[0].y >= submarine_arr[i].y - 0.8 * blocksize)) {

			initbomb_3();
			flag_3 = 1;
			submarine_arr[i].flag = "b";
			playHome();
		}
		if ((bomb_4[0].x >= (submarine_arr[i].x - 1.5 * blocksize)) && (bomb_4[0].x <= (submarine_arr[i].x + 1.8 * blocksize)) && (bomb_4[0].y <= submarine_arr[i].y + 0.8 * blocksize) && (bomb_4[0].y >= submarine_arr[i].y - 0.8 * blocksize)) {

			initbomb_4();
			flag_4 = 1;
			submarine_arr[i].flag = "b";
			playHome();
		}
		if ((bomb_5[0].x >= (submarine_arr[i].x - 1.5 * blocksize)) && (bomb_5[0].x <= (submarine_arr[i].x + 1.8 * blocksize)) && (bomb_5[0].y <= submarine_arr[i].y + 0.8 * blocksize) && (bomb_5[0].y >= submarine_arr[i].y - 0.8 * blocksize)) {

			initbomb_5();
			flag_5 = 1;
			submarine_arr[i].flag = "b";
			playHome();
		}
		if (submarine_arr[i].flag == "b") {
			submarine_arr[i].count += 1;
			if (submarine_arr[i].count > 50) {
				submarine_arr[i] = new submarine();
				fenshu = fenshu + 10;
				defen.innerHTML = "分数" + fenshu;
				//playHome();
			}
		}

		draw();
	}
}
//计时器
function jishiqi() {
	shijian++;
	daojishi();
	//	if (guanka <= 5) {
	//		jishi.innerHTML = "倒计时:" + (30 - shijian);
	//	} else if (5 <= guanka <= 10) {
	//		jishi.innerHTML = "倒计时:" + (30 - (5 * (guanka - 5) - shijian);
	//	}
	//判断是否继续游戏
	if (!gameIsOver()) {

		draw();
	} else {
		if (guanka <= 10) {
			clearInterval(interval);
			clearInterval(interval_2);
			clearInterval(interval_3);
			clearInterval(interval_4);
			alert('您止步第' + guanka + '关 \n得分:' + fenshu);
		} else {
			clearInterval(interval);
			clearInterval(interval_2);
			clearInterval(interval_3);
			clearInterval(interval_4);
			alert('恭喜您通关\n得分:' + fenshu);
		}

	}
}

function daojishi() {
	if (guanka <= 5) {
		jishi.innerHTML = "倒计时:" + (30 - shijian);
	} else if (5 < guanka <= 10) {
		jishi.innerHTML = "倒计时:" + (30 - (2 * (guanka - 5)) - shijian);
	}
}
//游戏结束函数
function gameIsOver() {
	if (guanka <= 5) {
		if (shijian == 30 && fenshu >= (leijidefen + 40 + (guanka * 10))) {
			//			console.log("过关");
			shijian = 0;
			leijidefen = fenshu;
			guanka++;
			time -= 10;
			clearInterval(interval_2);
			interval_2 = setInterval(function() {
				for (var i = 0; i <= submarine_num; i++) {
					submarine_arr[i].submarine_move_right();
					draw();
				}
			}, time);
			console.log(time);
			guoguan.play();
			tongguan.innerHTML = "第" + guanka + "关" + '<br/>' + "所需分数:" + (leijidefen + 40 + (guanka * 10));
			tishi.innerHTML = "第" + guanka + "关";
			return false;
		} else if (shijian == 30 && fenshu < (leijidefen + 40 + (guanka * 10))) {
			return true;
		}
	} else if (5 < guanka && guanka <= 10) {
		if (shijian == 30 - (2 * (guanka - 5)) && fenshu >= leijidefen + 100) {
			shijian = 0;
			leijidefen = fenshu;
			guanka++;
			time = 30;
			clearInterval(interval_2);
			interval_2 = setInterval(function() {
				for (var i = 0; i <= submarine_num; i++) {
					submarine_arr[i].submarine_move_right();
					draw();
				}
			}, time);
			guoguan.play();
			tongguan.innerHTML = "第" + guanka + "关" + '<br/>' + "所需分数:" + (leijidefen + 100);
			tishi.innerHTML = "第" + guanka + "关";
			return false;
		} else if (shijian == 30 - (2 * (guanka - 5)) && fenshu < leijidefen + 100) {
			return true;
		}
	} else {
		return true;

	}
}
//绘制画布
function draw() {
	ctx.clearRect(0, 0, cols * blocksize, rows * blocksize);
	//绘制网格线条
	//绘制横线
	for (var i = 0; i <= rows; i++) {
		ctx.strokeStyle = 'transparent';
		ctx.beginPath();
		ctx.moveTo(0, i * blocksize)
		ctx.lineTo(cols * blocksize, i * blocksize);
		ctx.stroke();
		ctx.closePath();
	}
	//绘制竖线
	for (var i = 0; i <= cols; i++) {
		ctx.strokeStyle = 'transparent';
		ctx.beginPath();
		ctx.moveTo(i * blocksize, 0)
		ctx.lineTo(i * blocksize, rows * blocksize);
		ctx.stroke();
		ctx.closePath();
	}

	//绘制船体
	for (var i = 0; i < sl; i++) {
		ctx.fillStyle = 'transparent';
		ctx.fillRect(ship[i].x, ship[i].y, blocksize, blocksize);
		ctx.strokeStyle = 'transparent';
		ctx.beginPath();
		ctx.moveTo(ship[i].x, ship[i].y);
		ctx.lineTo(ship[i].x + blocksize, ship[i].y);
		ctx.lineTo(ship[i].x + blocksize, ship[i].y + blocksize);
		ctx.lineTo(ship[i].x, ship[i].y + blocksize);
		ctx.stroke();
		ctx.closePath();
	}

	for (var i = 0; i < bl; i++) {
		ctx.fillStyle = 'transparent';
		ctx.fillRect(bomb_1[i].x, bomb_1[i].y, blocksize, blocksize);
		ctx.strokeStyle = 'transparent';
	}

	//2号炸弹
	for (var i = 0; i < bl; i++) {
		ctx.fillStyle = 'transparent';
		ctx.fillRect(bomb_2[i].x, bomb_2[i].y, blocksize, blocksize);
		ctx.strokeStyle = 'transparent';
	}
	//3号炸弹
	for (var i = 0; i < bl; i++) {
		ctx.fillStyle = 'transparent';
		ctx.fillRect(bomb_3[i].x, bomb_3[i].y, blocksize, blocksize);
		ctx.strokeStyle = 'transparent';
	}
	//4号炸弹
	for (var i = 0; i < bl; i++) {
		ctx.fillStyle = 'transparent';
		ctx.fillRect(bomb_4[i].x, bomb_4[i].y, blocksize, blocksize);
		ctx.strokeStyle = 'transparent';
	}
	//5号炸弹
	for (var i = 0; i < bl; i++) {
		ctx.fillStyle = 'transparent';
		ctx.fillRect(bomb_5[i].x, bomb_5[i].y, blocksize, blocksize);
		ctx.strokeStyle = 'transparent';
	}
	//画炸弹
	ctx.drawImage(bomb_pt, bomb_1[0].x - 5, bomb_1[0].y - 10, 30, 30);
	ctx.drawImage(bomb_pt, bomb_2[0].x - 5, bomb_2[0].y - 10, 30, 30);
	ctx.drawImage(bomb_pt, bomb_3[0].x - 5, bomb_3[0].y - 10, 30, 30);
	ctx.drawImage(bomb_pt, bomb_4[0].x - 5, bomb_4[0].y - 10, 30, 30);
	ctx.drawImage(bomb_pt, bomb_5[0].x - 5, bomb_5[0].y - 10, 30, 30);
	ctx.drawImage(ship_pt, ship[0].x, ship[0].y - 60, 150, 80);

	ctx.fillStyle = 'transparent';
	for (var i = 0; i <= submarine_num; i++) {
		ctx.fillRect(submarine_arr[i].x, submarine_arr[i].y, blocksize, blocksize);
		ctx.fillRect(submarine_arr[i].x + blocksize, submarine_arr[i].y, blocksize, blocksize);
		ctx.fillRect(submarine_arr[i].x - blocksize, submarine_arr[i].y, blocksize, blocksize);
	}

	for (var i = 0; i <= submarine_num; i += 4) {
		ctx.drawImage(submarine_arr[i].flag == "b" ? blast_2 : submarine_pt_1, submarine_arr[i].x - 30, submarine_arr[i].y - 32, 80, 60)
	}

	for (var i = 1; i <= submarine_num; i += 4) {
		ctx.drawImage(submarine_arr[i].flag == "b" ? blast_2 : submarine_pt_2, submarine_arr[i].x - 30, submarine_arr[i].y - 30, 80, 70)
	}

	for (var i = 2; i <= submarine_num; i += 4) {
		ctx.drawImage(submarine_arr[i].flag == "b" ? blast_2 : submarine_pt_3, submarine_arr[i].x - 38, submarine_arr[i].y - 10, 80, 30)
	}

	for (var i = 3; i <= submarine_num; i += 4) {
		ctx.drawImage(submarine_arr[i].flag == "b" ? blast_2 : submarine_pt_4, submarine_arr[i].x - 35, submarine_arr[i].y - 38, 80, 80)
	}
}

//船体移动
function move() {
	switch (direction) {
		case 1:
			if ((ship[sl - 1].x < cols *3*blocksize) && (ship[0].x >= 20)) {
				for (var i = 0; i <= sl; i++) {
					ship[i].x = (ship[i].x - blocksize);
					ship[i].y = (ship[i].y);
				}
				if (flag_1 == 1) {
					for (var i = 0; i < bl; i++) {
						bomb_1[i].x = (bomb_1[i].x - blocksize);
					}
				}
				if (flag_2 == 1) {
					for (var i = 0; i < bl; i++) {
						bomb_2[i].x = (bomb_2[i].x - blocksize);
					}
				}
				if (flag_3 == 1) {
					for (var i = 0; i < bl; i++) {
						bomb_3[i].x = (bomb_3[i].x - blocksize);
					}
				}
				if (flag_4 == 1) {
					for (var i = 0; i < bl; i++) {
						bomb_4[i].x = (bomb_4[i].x - blocksize);
					}
				}
				if (flag_5 == 1) {
					for (var i = 0; i < bl; i++) {
						bomb_5[i].x = (bomb_5[i].x - blocksize);
					}
				}
				draw();
			}

			draw();
			break;
		case 2:
			if ((ship[sl - 1].x < cols * blocksize - 3*blocksize) && (ship[0].x >= 0)) {
				for (var i = 0; i <= sl; i++) {
					ship[i].x = (ship[i].x + blocksize);
					ship[i].y = (ship[i].y);
					draw();
				}
				if (flag_1 == 1) {
					for (var i = 0; i < bl; i++) {
						bomb_1[i].x = (bomb_1[i].x + blocksize);
					}
				}
				if (flag_2 == 1) {
					for (var i = 0; i < bl; i++) {
						bomb_2[i].x = (bomb_2[i].x + blocksize);
					}
				}
				if (flag_3 == 1) {
					for (var i = 0; i < bl; i++) {
						bomb_3[i].x = (bomb_3[i].x + blocksize);
					}
				}
				if (flag_4 == 1) {
					for (var i = 0; i < bl; i++) {
						bomb_4[i].x = (bomb_4[i].x + blocksize);
					}
				}
				if (flag_5 == 1) {
					for (var i = 0; i < bl; i++) {
						bomb_5[i].x = (bomb_5[i].x + blocksize);
					}
				}
				draw();
				break;
			}
	}
}

//潜艇初始化
function submarine() {
	this.width = 20;
	this.height = 20;
	this.sank_speed = 20;
	this.flag = "a";
	this.count = 0;
	this.x = parseInt(Math.random() * (5) - 5) * blocksize;
	this.y = parseInt(10 + Math.random() * 20) * blocksize;
	this.speed = parseInt((Math.random() * Math.random() * Math.random() * 5 + Math.random() + Math.random()) + 2);

	this.submarine_move_right = function() {
			this.x += this.speed;
			if (this.x > 800) {
				this.x = -100;
			}
		}
		//	
		//	this.submarine_move_down = function (){
		//		this.y += this.sank_speed
		//		
		//	}

}

function keyDown(code) {
	//	console.log(code);
	switch (code) {
		//检测左移动
		case 37:
			direction = 1;
			move();
			break;
			//检测右移动
		case 39:
			direction = 2;
			move();
			break;
			//检测投炸弹
		case 32:
			if (nub > 5) {
				nub = 1;
				clearInterval(interval);
			}
			if (nub == 1) {
				flag_1 = 2;
				interval = setInterval(bomb_release, 150);
			}
			if (nub == 2) {
				flag_2 = 2;
			}
			if (nub == 3) {
				flag_3 = 2;
			}
			if (nub == 4) {
				flag_4 = 2;
			}
			if (nub == 5) {
				flag_5 = 2;
			}
			nub++;
			break;
	}
}
//重置
reset.onclick = function() {
	window.location.reload();
}
//暂停
zanting.onclick = function() {
	alert('继续游戏?');
}
//爆炸音效
function playHome() {
	baozha.play();
}
//返回
fanhui.onclick=function(){
	lianjie.click();
}
