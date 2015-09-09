describe('piglatin', function() {
    it("adds 'ay' to the end of a word that starts with a vowel", function() {
        expect(piglatin('at')).to.equal('atay');
    });

    it("moves all of the first consecutive consonants to the end and add 'ay'", function() {
        expect(piglatin('Pig')).to.equal('igPay');
    });

});
