$(".nav-1 li").hover(function(){
	let index=$(this).index();
	let p=true;
	for(let i=0;i<$(".Xl").length;i++){
			if($(".Xl").eq(i).css("display") === "block"){
					p=false;
					break;
			}
	}
	if(p != false){
		$(".Xl").eq(index).slideDown(300);
		$(".Xl").eq(index).css("display","block");
		$(".Xl").eq(index).siblings().css("display","none");
		
	}else{
		$(".Xl").eq(index).css("display","block");
		$(".Xl").eq(index).siblings().css("display","none");
	}
		$(".Xl").eq(index).mouseleave(function(){
			$(this).slideUp(300);
});
