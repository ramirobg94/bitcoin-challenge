var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

export const maxValueRight = (arr) => Math.max(...[ ...arr].reverse());
//export const maxValueRightWithIndexOf = (arr) => arr[arr.lastIndexOf(Math.max(...arr))];
export const getMaxDiference = (sliced) => maxValueRight(sliced) - sliced[0];
export const sliceToRight = (arr, idx) => arr.slice(idx);
export const getMaxDiferenceToRight = (arr, idx) => getMaxDiference(sliceToRight(arr,idx));
export const getMax = (max, newNumber) => typeof max === 'number' && typeof newNumber === 'number' && newNumber >= max ? newNumber : max;
export const hasProfit = (max) => max > 0;

export const maximizationHuman = (arr) => {
	let max = -1, err = false;
	arr.forEach((currentValue, idx, ar) => {
		if(typeof currentValue !== 'number') { err = true; }
		max = getMax(max, getMaxDiferenceToRight(ar,idx))
	});
	return hasProfit(max) && !err ? max : -1;
}

export const maximizationOneLine = (arr) => {
	let max = -1, err = false;
	arr.forEach((currentValue, idx, ar) => {
		if(typeof currentValue !== 'number') { err = true; }
		if(Math.max(...[ ...ar.slice(idx)].reverse()) - currentValue >= max) { max = Math.max(...[ ...ar.slice(idx)].reverse()) - currentValue; }
	});
	return max > 0 && !err ? max : -1;
}

export const crazy = (arr) => {
	let max = -1;
	const fLength = arr.length;
	while(arr.length > 0){
		max = getMax(max, getMaxDiference(arr, fLength - arr.length))
		arr.shift();
	}
	return hasProfit(max) ? max : -1;
}

export const getDiferencesToTheRight = (arr) => arr.reduce((p,cV,idx,arr) => p.concat(getMaxDiferenceToRight(arr,idx)), new Array())

export const maxValueInArray = (arr) =>  Math.max(...arr);

export const retunValueIfPositive = (value) => value > 0 ? value : -1;

export const isEmpty = (arr) => arr.length <= 0

export const maximizationWithReducersShortestVersion = (arr) => isEmpty(arr) ? -1 : retunValueIfPositive(maxValueInArray(getDiferencesToTheRight(arr)) );

export const maximizationWithReducersShorterVersion = (arr) => isEmpty(arr) ? -1 :  retunValueIfPositive(Math.max(...getDiferencesToTheRight(arr)));

export const maximizationWithReducersShortVersion = (arr) => isEmpty(arr) ? -1 : retunValueIfPositive(Math.max(...arr.reduce((p,cV,idx,arr) => p.concat(getMaxDiferenceToRight(arr,idx)), new Array())));

export const maximizationWithReducers = (arr) => isEmpty(arr) ? -1 : retunValueIfPositive(arr.reduce((p,cV,idx,arr) => p.concat(getMaxDiferenceToRight(arr,idx)), new Array()).reduce((a,b)=>Math.max(a, b)));

export const maximizationWithReducersLongVersion = (arr) => isEmpty(arr) ? -1 : retunValueIfPositive(arr.reduce((p,cV,idx,arr) => p.concat(  Math.max(...[ ...arr.slice(idx)].reverse())-arr.slice(idx)[0]), new Array()).reduce((a,b)=>Math.max(a, b)));

export const maximizationInOneTweet = (s) => isEmpty(s) ? -1 : retunValueIfPositive( s.reduce((p,c,i,a)=>p.concat(Math.max(...[...s.slice(idx)].reverse())-s.slice(idx)[0]),new Array()).reduce((a,b)=>Math.max(a, b)) )

export const dinamicMax = (arr) => {
	if( isEmpty(arr) ) return -1;

	let maxRange = -1;
	let minValue = arr[0];
	arr.forEach((currentValue) => {
		if(currentValue < minValue) minValue = currentValue;
		if(maxRange < (currentValue - minValue )) maxRange = currentValue - minValue;
	});

	return maxRange > 0 ? maxRange : -1;
}

console.log(dinamicMax([45, 24, 35, 31, 40, 38, 24]))

// add tests
suite.add('maximizationHuman', function() {
  maximizationHuman([45, 24, 35, 31, 40, 38, 24]);
})
.add('maximizationOneLine', function() {
  maximizationOneLine([45, 24, 35, 31, 40, 38, 24]);
})
.add('maximizationWithReducersShortestVersion', function() {
  maximizationWithReducersShortestVersion([45, 24, 35, 31, 40, 38, 24]);
})
.add('maximizationWithReducersShorterVersion', function() {
  maximizationWithReducersShorterVersion([45, 24, 35, 31, 40, 38, 24]);
})
.add('maximizationWithReducersShortVersion', function() {
  maximizationWithReducersShortVersion([45, 24, 35, 31, 40, 38, 24]);
})
.add('maximizationWithReducers', function() {
  maximizationWithReducers([45, 24, 35, 31, 40, 38, 24]);
})
.add('maximizationWithReducersLongVersion', function() {
  maximizationWithReducersLongVersion([45, 24, 35, 31, 40, 38, 24]);
})
.add('crazy', function() {
  crazy([45, 24, 35, 31, 40, 38, 24]);
})
.add('maximizationInOneTweet', function() {
  maximizationInOneTweet([45, 24, 35, 31, 40, 38, 24]);
})
.add('dinamicMax', function() {
	dinamicMax([45, 24, 35, 31, 40, 38, 24]);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
