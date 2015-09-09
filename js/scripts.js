var piglatin = function(input) {
    if (!/\s/.test(input)) {
        var array = input.split("");
        var vowels = ['a','e','i','o','u','A','E','I','O','U'];
        var vowelTester = false;
        for (var i = 0, len = vowels.length; i < len; i++) {
            if (array[0] === vowels[i]) {
                vowelTester = true;
            }
        }

        if (vowelTester = true) {
            array.push('a', 'y');
        }
        var string = array.join('');
        console.log(string);
        return string;
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
