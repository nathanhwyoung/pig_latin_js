describe('piglatin', function() {
    it("adds 'ay' to the end of a word that starts with a vowel", function() {
        expect(piglatin('at')).to.equal('atay');
    });

});
