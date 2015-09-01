app.filter('byAlphabetFraction', function () {
  	'use strict';
    return function (rows, letters) {
        var items = {
            letters: letters,
            out: []
        };

        angular.forEach(rows, function (value, key) {
        	var firstLetterInName = value.name.charAt(0).toLowerCase(),
        		firstLetterInSurname = value.surname.charAt(0).toLowerCase();

        	if((this.letters.indexOf(firstLetterInName) > -1) || (this.letters.indexOf(firstLetterInSurname) > -1)){
        		this.out.push(value);
        	}

        }, items);

        if (letters.length === 0){items.out = rows}

        return items.out;
    };
});