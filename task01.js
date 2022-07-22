'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов','Смиронов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смиронов', 'Попов'];

const filter = (arr1, arr2) => {
	let result = [];
	    for (const key in arr1) {
    	if (arr2.indexOf(arr1[key]) === -1) {
	        result.push(arr1[key]);
    }
  }
	   console.log(result);
	   return result;
     };


filter(allStudents, failedStudents)