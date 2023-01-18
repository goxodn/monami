$(function(){
	$("#familysite").click(function(){
		$("#familysite>ul").slideToggle(2000);
	});
	
	$("#language").click(function(){
		$("#language").animate({
			height : "45px"
		
		},1000).click(function(){
			$("#language").animate({
				height : "27px"
			},1000)
		})
	});
	
	$("#hambergericon").click(function(){
		$("#Hamclick").slideToggle("2000");
		$("#Hamclick1").slideToggle("2000");
		$("#Hamclick2").slideToggle("2000");
		$("#Hamclick3").slideToggle("2000");
		$("#Hamclick4").slideToggle("2000");
		
	});
	
	//제일 상단 메인 주메뉴 애니메이션 시작
	//제일 상단 메인 주메뉴 애니메이션 시작
	//제일 상단 메인 주메뉴 애니메이션 시작
	$("#navSogae").mouseenter(function(){		
		$("#navsogae").stop().slideDown(500)		
	});
	
	$("#navSogae").mouseleave(function(){
		$("#navsogae").stop().slideUp(500);		
	});
	
	
	
	$("#navJefum").mouseenter(function(){		
		$("#navjefum").stop().slideDown(500)		
	});
	
	$("#navJefum").mouseleave(function(){
		$("#navjefum").stop().slideUp(500);		
	});
	
	
	$("#navMuseum").stop().mouseenter(function(){		
		$("#navmuseum").stop().slideDown(200)		
	});
	
	$("#navMuseum").stop().mouseleave(function(){
		$("#navmuseum").stop().slideUp(200);		
	});
	
	$("#navGogak").stop().mouseenter(function(){		
		$("#navgogak").stop().slideDown(500)		
	});
	
	$("#navGogak").stop().mouseleave(function(){
		$("#navgogak").stop().slideUp(500);		
	});
	
	
	$("#navNews").stop().mouseenter(function(){		
		$("#navnews").stop().slideDown(500)		
	});
	
	$("#navNews").stop().mouseleave(function(){
		$("#navnews").stop().slideUp(500);		
	});
	
	//제일 상단 메인 주메뉴 애니메이션 끝
	//제일 상단 메인 주메뉴 애니메이션 끝
	//제일 상단 메인 주메뉴 애니메이션 끝
	
	
	//red박스 newarrival 애니메이션 시작
	//red박스 newarrival 애니메이션 시작
	//red박스 newarrival 애니메이션 시작
	
	
	$("#topleftjefum").mouseenter(function(){
		$("#jefumbox").fadeIn(300);

	});
	
	$("#topleftjefum").mouseleave(function(){
		$("#jefumbox").fadeOut(300);

	});
	
	
	$("#newarrTopright").mouseenter(function(){
		$("#fountainbox").fadeIn(300);
	});
	$("#newarrTopright").mouseleave(function(){
		$("#fountainbox").fadeOut(300);
	});
	
	
	
	$("#downnailart").mouseenter(function(){
		$("#nailbox").fadeIn(300);
	});
	$("#downnailart").mouseleave(function(){
		$("#nailbox").fadeOut(300);
	});
	
	
	$("#downseramic").mouseenter(function(){
		$("#DIYbox").fadeIn(300);
	});
	$("#downseramic").mouseleave(function(){
		$("#DIYbox").fadeOut(300);
	});
	
	
	$("#downpluspen").mouseenter(function(){
		$("#pluspenbox").fadeIn(300);
	});
	$("#downpluspen").mouseleave(function(){
		$("#pluspenbox").fadeOut(300);
	});
	
	
	//red박스 newarrival 애니메이션 끝
	//red박스 newarrival 애니메이션 끝
	//red박스 newarrival 애니메이션 끝
	
	
	
	
});