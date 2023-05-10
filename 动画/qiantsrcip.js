

$(document).ready(function(){
	
	
	

	$(".qianting").css("display","none");
	$(".qianting").fadeIn(2000);
	$(".baoz1").css("display","none");	
	$(".baoz4").css("display","none");	
		
	   setTimeout(function(){
   	$(".yulei").css("display","none")
   },8000)
 	
	
	setTimeout(function(){
		
		$(".boat1").fadeOut(100,function(){
			$(".baoz1").fadeIn(500)
		})
		
	},8000)
	
	setTimeout(function(){
		$(".baoz1").css("display","none")
		
//		$(".yulei2").css("display","none")
	},12000)
//

    setTimeout(function(){
    	$(".feiji").fadeOut(100,function(){
    		$(".baoz4").fadeIn(500);
    	})
    	 },12000);
    
     setTimeout(function(){
    	$(".baoz4").css("display","none")
    },16000);
    setTimeout(function(){
    	$(".yulei2").fadeOut(500);
    },11500);
    
  

var music=document.getElementById("music")
	
	//音乐按钮
	$(".music").on("click",function(){
		//音乐的状态 如果在暂停状态就播放 其他状态就暂停
		if(music.paused){
			//暂停
			music.play();
			$(this).attr("src","img/dengno.png")
			
		}else{
		  music.pause();
		  $(this).attr("src","img/dengoff.png");
		 
		}
		
	})
	
	
});


