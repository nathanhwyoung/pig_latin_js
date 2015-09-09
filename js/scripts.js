var vowelTester = function(string, integer) {
    //receives a word and an index number and returns true if that spot in the word is a vowel
    var array = string.split("");

    var vowels = ['a','e','i','o','u','A','E','I','O','U'];
    var vowel = false;

    for (var i = 0, len = vowels.length; i < len; i++) {
        if (array[0] === vowels[i]) {
            vowel = true;
        }
    }

    return vowel;
}

var piglatin = function(input) {
    if (!/\s/.test(input)) {
        var result = vowelTester(input, 0);

        if (result) {
            var array = input.split("");
            array.push('a', 'y');
            console.log(array);
            var word = array.join('');
        }
    } return word;
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
