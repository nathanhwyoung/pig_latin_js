describe('piglatin', function() {
    it("adds 'ay' to the end of a word that starts with a vowel", function() {
        expect(piglatin('at')).to.equal('atay');
    });

    it("moves the first consonant to the end and add 'ay'", function() {
        expect(piglatin('Pig')).to.equal('igPay');
    });

    it("moves the second consonant to the end and add 'ay'", function() {
        expect(piglatin('Thought')).to.equal('oughtThay');
    });

    it("moves the third consonant to the end and add 'ay'", function() {
        expect(piglatin('Chroma')).to.equal('omaChray');
    });

    it("moves the fourth consonant to the end and add 'ay'", function() {
        expect(piglatin('Schmo')).to.equal('oSchmay');
    });

    it("moves the 'u' along with the 'q' if the first consonants include 'qu'", function() {
        expect(piglatin('Queen')).to.equal('eenQuay');
    });

    it("moves the 'u' along with the 'q' if the 2nd and 3rd consonants include 'qu'", function() {
        expect(piglatin('squeal')).to.equal('ealsquay');
    });
});
