
module.exports = function (str) {
	let strArr = str.split('');
	let length = strArr.length;
	let count = 0;
	let tempStr = '';
	let newStr = '';
	for (let x = 0; x < length; x++) {
		if(tempStr === ''){
			tempStr = strArr[x];
			count ++;
			continue;
		}
		if (tempStr !== strArr[x]) {
			newStr += `${tempStr}${count}`;
			tempStr = strArr[x];
			count = 1;
		} else {
			count ++;
		}
		if(x === length - 1){
			newStr += `${tempStr}${count}`;
		}
	}
	return newStr;
}