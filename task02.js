'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = arr => {
		let sum = 0;

	    for (const key in arr) {
	    	sum += arr[key];
    			}
  		const result = Math.floor(sum/arr.length);
  		console.log(result);
  		return result;
     };


getAverageValue(allCashbox)