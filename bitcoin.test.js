import { maximizationHuman, maximizationOneLine,
	maxValueRight,
	sliceToRight,
	getMaxDiference,
	getMaxDiferenceToRight,
	getMax
	//maxValueRightWithIndexOf,
} from './bitcoin';
import { assert } from 'chai';



describe('check small functions: maxValueRight', () => {
	it('returns -Infinity if there is no array', () => {
		assert.equal(maxValueRight([]), -Infinity);
	});

	it('returns NaN if there are any no number', () => {
		assert.isNaN(maxValueRight(['a']));
	});

	it('returns 5 for [1,2,3,4,5]', () => {
		assert.equal(maxValueRight([1,2,3,4,5]), 5);
	});

	it('returns 5 for [1,2,3,5,4]', () => {
		assert.equal(maxValueRight([1,2,3,5,4]), 5);
	});

	it('returns 5 for [1,2,5,4,3]', () => {
		assert.equal(maxValueRight([1,2,5,4,3]), 5);
	});

	it('returns 5 for [1,2,5,4,5]', () => {
		assert.equal(maxValueRight([1,2,5,4,5]), 5);
	});

	it('returns 4 for [1,2,-5,4,3]', () => {
		assert.equal(maxValueRight([1,2,-5,4,3]), 4);
	});

});

/*
describe('check small functions: maxValueRightWithIndexOf', () => {
	it('returns -1 if there is no profit', () => {
		assert.equal(-1, -1);
	});
});*/

describe('check small functions: sliceToRight', () => {
	it('returns [] if there array is [] and cut is bigger than 0', () => {
		assert.deepEqual(sliceToRight([],2), []);
	});

	it('returns [] if there array is [] and cut is 0', () => {
		assert.deepEqual(sliceToRight([],0), []);
	});

	it('returns [] if there array is [] and cut is lower than 0', () => {
		assert.deepEqual(sliceToRight([],-1), []);
	});

	it('returns [1,2,3,4,5] if there array is [1,2,3,4,5] and cut is 0', () => {
		assert.deepEqual(sliceToRight([1,2,3,4,5], 0), [1,2,3,4,5]);
	});

	it('returns [2,3,4,5] if there array is [1,2,3,4,5] and cut is 1', () => {
		assert.deepEqual(sliceToRight([1,2,3,4,5], 1), [2,3,4,5]);
	});

	it('returns [3,4,5] if there array is [1,2,3,4,5] and cut is 2', () => {
		assert.deepEqual(sliceToRight([1,2,3,4,5], 2), [3,4,5]);
	});

	it('returns [4,5] if there array is [1,2,3,4,5] and cut is 3', () => {
		assert.deepEqual(sliceToRight([1,2,3,4,5], 3), [4,5]);
	});

	it('returns [5] if there array is [1,2,3,4,5] and cut is 4', () => {
		assert.deepEqual(sliceToRight([1,2,3,4,5], 4), [5]);
	});

	it('returns [] if there array is [1,2,3,4,5] and cut is 5', () => {
		assert.deepEqual(sliceToRight([1,2,3,4,5], 5), []);
	});

	it('returns [5] if there array is [1,2,3,4,5] and cut is -1', () => {
		assert.deepEqual(sliceToRight([1,2,3,4,5], -1), [5]);
	});

	it('returns [4,5] if there array is [1,2,3,4,5] and cut is -2', () => {
		assert.deepEqual(sliceToRight([1,2,3,4,5], -2), [4,5]);
	});

	it('returns [3,4,5] if there array is [1,2,3,4,5] and cut is -3', () => {
		assert.deepEqual(sliceToRight([1,2,3,4,5], -3), [3,4,5]);
	});

	it('returns [2,3,4,5] if there array is [1,2,3,4,5] and cut is -4', () => {
		assert.deepEqual(sliceToRight([1,2,3,4,5], -4), [2,3,4,5]);
	});

	it('returns [1,2,3,4,5] if there array is [1,2,3,4,5] and cut is -5', () => {
		assert.deepEqual(sliceToRight([1,2,3,4,5], -5), [1,2,3,4,5]);
	});

});

describe('check small functions: getMaxDiference', () => {

	it('returns NaN if the array is []', () => {
		assert.isNaN(getMaxDiference([]));
	});

	it('returns NaN if the array is [1,"a",3]', () => {
		assert.isNaN(getMaxDiference([1,'a',3]));
	});

	it('returns NaN if the array is ["a",1,3]', () => {
		assert.isNaN(getMaxDiference(['a',1,3]));
	});

	it('returns 4 if the array is [1,2,3,4,5]', () => {
		assert.equal(getMaxDiference([1,2,3,4,5]), 4);
	});

	it('returns 4 if the array is [1,2,3,5,4]', () => {
		assert.equal(getMaxDiference([1,2,3,5,4]), 4);
	});

	it('returns 4 if the array is [1,2,5,3,4]', () => {
		assert.equal(getMaxDiference([1,2,5,3,4]), 4);
	});

	it('returns 4 if the array is [1,5,2,3,4]', () => {
		assert.equal(getMaxDiference([1,5,2,3,4]), 4);
	});

	it('returns 0 if the array is [5,1,2,3,4]', () => {
		assert.equal(getMaxDiference([5,1,2,3,4]), 0);
	});

	it('returns 4 if the array is [1,2,5,4,5]', () => {
		assert.equal(getMaxDiference([1,2,5,4,5]), 4);
	});

});


describe('check small functions: getMaxDiferenceToRight', () => {
	it('returns NaN if the array is [] and cut 1', () => {
		assert.isNaN(getMaxDiferenceToRight([],1));
	});
	it('returns NaN if the array is [] and cut 0', () => {
		assert.isNaN(getMaxDiferenceToRight([],0));
	});
	it('returns NaN if the array is [] and cut -1', () => {
		assert.isNaN(getMaxDiferenceToRight([],-1));
	});

	it('returns NaN if the array is [1,"a",3] and cut 1', () => {
		assert.isNaN(getMaxDiferenceToRight([1,'a',3],1));
	});

	it('returns NaN if the array is [1,"a",3] and cut 0', () => {
		assert.isNaN(getMaxDiferenceToRight([1,'a',3],0));
	});

	it('returns NaN if the array is [1,"a",3] and cut -1', () => {
		assert.equal(getMaxDiferenceToRight([1,'a',3],-1),0);
	});

	it('returns NaN if the array is ["a",1,3] and cut 1', () => {
		assert.equal(getMaxDiferenceToRight(['a',1,3],1),2);
	});
	it('returns NaN if the array is ["a",1,3] and cut 0', () => {
		assert.isNaN(getMaxDiferenceToRight(['a',1,3],0));
	});
	it('returns NaN if the array is ["a",1,3] and cut -1', () => {
		assert.equal(getMaxDiferenceToRight(['a',1,3],-1),0);
	});

	it('returns 4 if the array is [1,2,3,4,5] and cut 0', () => {
		assert.equal(getMaxDiferenceToRight([1,2,3,4,5],0), 4);
	});

	it('returns 3 if the array is [1,2,3,4,5] and cut 1', () => {
		assert.equal(getMaxDiferenceToRight([1,2,3,4,5],1), 3);
	});

	it('returns 2 if the array is [1,2,3,4,5] and cut 2', () => {
		assert.equal(getMaxDiferenceToRight([1,2,3,4,5],2), 2);
	});

	it('returns 1 if the array is [1,2,3,4,5] and cut 3', () => {
		assert.equal(getMaxDiferenceToRight([1,2,3,4,5],3), 1);
	});

	it('returns 0 if the array is [1,2,3,4,5] and cut 4', () => {
		assert.equal(getMaxDiferenceToRight([1,2,5,4,5],4), 0);
	});

	it('returns 0 if the array is [1,2,3,4,5] and cut 5, out of limits', () => {
		assert.isNaN(getMaxDiferenceToRight([1,2,3,4,5],5));
	});

	it('returns 4 if the array is [1,2,5,4,1] and cut 0', () => {
		assert.equal(getMaxDiferenceToRight([1,2,5,4,1],0), 4);
	});

	it('returns 3 if the array is [1,2,5,4,1] and cut 1', () => {
		assert.equal(getMaxDiferenceToRight([1,2,5,4,1],1), 3);
	});

	it('returns 0 if the array is [1,2,5,4,1] and cut 2', () => {
		assert.equal(getMaxDiferenceToRight([1,2,5,4,1],2), 0);
	});

	it('returns 0 if the array is [1,2,5,4,1] and cut 3', () => {
		assert.equal(getMaxDiferenceToRight([1,2,5,4,1],3), 0);
	});

	it('returns 0 if the array is [1,2,5,4,1] and cut 4', () => {
		assert.equal(getMaxDiferenceToRight([1,2,5,4,1],4), 0);
	});


});

describe('check small functions: getMax', () => {
	it('returns max, first argument, if there are any no number', () => {
		assert.equal(getMax('a',1), 'a');
		assert.equal(getMax(1,'a'), 1);
	});

	it('returns 5 between 3 and 5', () => {
		assert.equal(getMax(3,5), 5);
		assert.equal(getMax(5,3), 5);
	});

	it('returns 5 between -1 and 5', () => {
		assert.equal(getMax(-1,5), 5);
		assert.equal(getMax(5,-1), 5);
	});

	it('returns -1 between -1 and -1', () => {
		assert.equal(getMax(-1,-2), -1);
		assert.equal(getMax(-2,-1), -1);
	});

	it('returns 0 between -1 and 0', () => {
		assert.equal(getMax(-1,0), 0);
		assert.equal(getMax(0,-1), 0);
	});

});



describe('bitcoin profif maximisation for humans', () => {
	it('returns -1 if there is no profit', () => {
		assert.equal(maximizationHuman([]), -1);
	});

	it('returns -1 if there are any no number', () => {
		assert.equal(maximizationHuman([45, 24, 35, 'a', 40, 38, 11]), -1);
	});

	it('returns 16 for [45, 24, 35, 31, 40, 38, 24]', () => {
		assert.equal(maximizationHuman([45, 24, 35, 31, 40, 38, 24]), 16);
	});

	it('returns -1 for [5, 4, 3, 2, 1]  because there are not profit 5 - 5 = 0', () => {
		assert.equal(maximizationHuman([5,4,3,2,1]), -1);
	});

	it('returns 4 for [1, 2, 3, 4, 5]', () => {
		assert.equal(maximizationHuman([1,2,3,4,5]), 4);
	});


	it('returns 4 for [5,4,3,2,1,2,3,4,5]', () => {
		assert.equal(maximizationHuman([5,4,3,2,1,2,3,4,5]), 4);
	});

	it('returns 4 for [1,2,3,1,2,3,1,2,3,4,5,1,2,3,4]', () => {
		assert.equal(maximizationHuman([1,2,3,1,2,3,1,2,3,4,5,1,2,3,4]), 4);
	});

  // ...
});

describe('bitcoin profif maximisation one line', () => {
	it('returns -1 if there is no profit', () => {
		assert.equal(maximizationOneLine([]), -1);
	});

	it('returns -1 if there are any no number', () => {
		assert.equal(maximizationOneLine([45, 24, 35, 'a', 40, 38, 11]), -1);
	});

	it('returns 16 for [45, 24, 35, 31, 40, 38, 24]', () => {
		assert.equal(maximizationOneLine([45, 24, 35, 31, 40, 38, 24]), 16);
	});

	it('returns -1 for [5, 4, 3, 2, 1] because there are not profit 5 - 5 = 0', () => {
		assert.equal(maximizationOneLine([5,4,3,2,1]), -1);
	});

	it('returns 4 for [1, 2, 3, 4, 5]', () => {
		assert.equal(maximizationOneLine([1,2,3,4,5]), 4);
	});


	it('returns 4 for [5,4,3,2,1,2,3,4,5]', () => {
		assert.equal(maximizationOneLine([5,4,3,2,1,2,3,4,5]), 4);
	});

	it('returns 4 for [1,2,3,1,2,3,1,2,3,4,5,1,2,3,4]', () => {
		assert.equal(maximizationOneLine([1,2,3,1,2,3,1,2,3,4,5,1,2,3,4]), 4);
	});

  // ...
});

describe('Sign', () => {
	it('         _           _                  _   _          _          _           _      ', () => { assert.equal(0,0); });
	it('        /\\ \\        / /\\               /\\_\\/\\_\\ _     /\\ \\       /\\ \\        /\\ \\ ', () => { assert.equal(0,0); });
	it('       /  \\ \\      / /  \\             / / / / //\\_\\   \\ \\ \\     /  \\ \\      /  \\ \\ ', () => { assert.equal(0,0); });
	it('      / /\\ \\ \\    / / /\\ \\           /\\ \\/ \\ \\/ / /   /\\ \\_\\   / /\\ \\ \\    / /\\ \\ \\   ', () => { assert.equal(0,0); });
	it('     / / /\\ \\_\\  / / /\\ \\ \\         /  \\____\\__/ /   / /\\/_/  / / /\\ \\_\\  / / /\\ \\ \\ ', () => { assert.equal(0,0); });
	it('    / / /_/ / / / / /  \\ \\ \\       / /\\/________/   / / /    / / /_/ / / / / /  \\ \\_\\ ', () => { assert.equal(0,0); });
	it('   / / /__\\/ / / / /___/ /\\ \\     / / /\\/_// / /   / / /    / / /__\\/ / / / /   / / / ', () => { assert.equal(0,0); });
	it('  / / /_____/ / / /_____/ /\\ \\   / / /    / / /   / / /    / / /_____/ / / /   / / /  ', () => { assert.equal(0,0); });
	it(' / / /\\ \\ \\  / /_________/\\ \\ \\ / / /    / / /___/ / /__  / / /\\ \\ \\  / / /___/ / /  ', () => { assert.equal(0,0); });
	it('/ / /  \\ \\ \\/ / /_       __\\ \\_\\\\/_/    / / //\\__\\/_/___\\/ / /  \\ \\ \\/ / /____\\/ /  ', () => { assert.equal(0,0); });
	it('\\/_/    \\_\\/\\_\\___\\     /____/_/        \\/_/ \\/_________/\\/_/    \\_\\/\\/_________/   ', () => { assert.equal(0,0); });
	it('', () => { assert.equal(0,0); });
	it('github/ramirobg94', () => { assert.equal(0,0); });
	it('GuideSmiths - Christmas challenge 2017', () => { assert.equal(0,0); });

   
  
                                                                                    

})