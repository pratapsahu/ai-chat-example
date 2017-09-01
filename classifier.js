module.exports = function(){

    // Classifier
    this.getIntentCategories = function(){
        return {
            'greeting':'Hello, How can I assist you?',
            'loan': 'Loans are available for home, car',
            'interest': 'car 10%, home 8%',
            'payment': 'can be opted with 6, 12 or 24 months'
        };
    };

    this.classifyIntents = function(classifier, classifierS, classifierSS){
        classifier.addDocument('Hi Hello how are you hey', 'greeting');
        classifier.addDocument('loan process', 'loan');
        classifier.addDocument('interest rates mortgage', 'interest');
        classifier.addDocument('eligibility how much amount tenure', 'payment');
        classifier.addDocument('what eligibility criteria loan', 'payment');

        classifier.train();
    };

}