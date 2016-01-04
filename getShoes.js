$(document).ready(function() {
	setTimeout(_abc(0), 2000);
});

function _abc(i){
	return function(){
		abc(i);
	};
}

function abc(i){
	var thisi = i + 1;
	console.log(thisi);
	var showsize = $("#exp-pdp-buying-tools-container>.add-to-cart-form>.exp-pdp-size-and-quantity-container>.exp-pdp-size-container>a");
	showsize.mousedown();
	var size = $("#exp-pdp-buying-tools-container>.add-to-cart-form>.exp-pdp-size-and-quantity-container>.exp-pdp-size-container>.exp-pdp-size-dropdown-container>ul>li");
	size.eq(thisi).mouseup();
	$("#buyingtools-add-to-cart-button").click();
	if(thisi == 10){
		setTimeout(_abc(0), 2000);
	}else{
		setTimeout(_abc(thisi), 2000);
	}
}