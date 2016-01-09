$(document).ready(function() {
	//此处改成想要的尺码代号，值应该是1~11的数字，代表尺码在按钮中的位置
	var i_want_size = 1;

	abc(i_want_size - 1);
});

function _abc(i){
	return function(){
		abc(i);
	};
}

function abc(i){
	var goonflag = $(".modal-mask-class").css('display');
	if(goonflag != 'none'){
		return;
	}
	var showsize = $("#exp-pdp-buying-tools-container>.add-to-cart-form>.exp-pdp-size-and-quantity-container>.exp-pdp-size-container>a");
	showsize.show();
	var size = $("#exp-pdp-buying-tools-container>.add-to-cart-form>.exp-pdp-size-and-quantity-container>.exp-pdp-size-container>.exp-pdp-size-dropdown-container>ul>li");
	size.eq(i).mouseup();
	$("#buyingtools-add-to-cart-button").click();
	setTimeout(_abc(0), 100);
}