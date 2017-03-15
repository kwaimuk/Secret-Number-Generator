'use strict';
module.exports = function () {
	var numbah =Math.floor((Math.random() * 1000000)+1);
	 
	 function secretNumber() { 
		return numbah;
	};


	return secretNumber;
};