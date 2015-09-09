var vowelTester = function(string, integer) {
    //receives a word and an index number and returns true if that spot in the word is a vowel
    var array = string.split("");

    var vowels = ['a','e','i','o','u','A','E','I','O','U'];
    var vowel = false;

    for (var i = 0, len = vowels.length; i < len; i++) {
        if (array[integer] === vowels[i]) {
            vowel = true;
        }
    }
    return vowel;
}

var piglatin = function(input) {
    if (!/\s/.test(input)) {
        var array = input.split("");

        if ((array[0] === ('q', 'Q')) && (array[1] === 'u')) {
            array.push(array.shift());
            array.push(array.shift());
            array.push('a', 'y');
            var word = array.join('');
            return word;

        } else if ((array[1] === ('q')) && (array[2] === 'u')) {
                array.push(array.shift());
                array.push(array.shift());
                array.push(array.shift());
                array.push('a', 'y');
                var word = array.join('');
                return word;

            } else if (vowelTester(input, 0)) {
                    var array = input.split("");
                    array.push('a', 'y');
                    var word = array.join('');
                    return word;

            } else if (vowelTester(input, 1)) {
                var array = input.split("");
                array.push(array.shift());
                array.push('a', 'y');
                var word = array.join('');
                return word;

            } else if (vowelTester(input, 2)) {
                var array = input.split("");
                array.push(array.shift());
                array.push(array.shift());
                array.push('a', 'y');
                var word = array.join('');
                console.log(word);
                return word;

            } else if (vowelTester(input, 3)) {
                var array = input.split("");
                array.push(array.shift());
                array.push(array.shift());
                array.push(array.shift());
                array.push('a', 'y');
                var word = array.join('');
                return word;

            } else
                var array = input.split("");
                array.push(array.shift());
                array.push(array.shift());
                array.push(array.shift());
                array.push(array.shift());
                array.push('a', 'y');
                var word = array.join('');
                return word;

        }
};

// $(document).ready(function() {
//   $("form#palindrome").submit(function(event) {
//     var input = $("input#input").val();
//     var result = palindrome(input);
//
//     $(".input").text(input);
//     if (!result) {
//       $(".not").text("not");
//     } else {
//         $(".not").empty();
//     }
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
