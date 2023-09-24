let arr = ['123', '456', '789'];
let res = arr.map(function(elem) {
	return arr.reverse(elem);
});
console.log(res);