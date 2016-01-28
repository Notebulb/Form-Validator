//if you're using forms off of https://github.com/sum-kcid/Web-Components, you may want to include these methods and check out the other scripts as well

errHandler = function(inptEl, titleEl, errClass, errTxt, succsClass) {
	inptEl.removeClass(succsClass).addClass(errClass);
	titleEl.removeClass(succsClass).addClass(errClass).html(errTxt);
};

successHandler = function(inptEl, titleEl, succsClass, succsText, errClass) {
	inptEl.removeClass(errClass).addClass(succsClass);
	titleEl.removeClass(errClass).addClass(succsClass).html(succsText);
};
