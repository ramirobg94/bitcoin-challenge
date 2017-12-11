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