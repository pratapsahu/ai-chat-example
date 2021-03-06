module.exports = function(){

    this.intents = {
        'fundTransfer': [
            'fund transfer',
            'I want to transfer funds',
            'P2P fund transfer',
            'want to transfer money'
        ],
        'greeting': [
            'Hi',
            'How are you ?',
            'Hello',
            'Hey'
        ],
        'loan': [
            'loan',
            'process'
        ],
        'interest': [
            'interest rates',
            'mortgage'
        ],
        'payment': [
            'eligibility',
            'how much amount',
            'tenure',
            'what eligibility criteria'
        ]
    };

    // Classifier
    this.getIntentCategories = function(){
        return {
            'greeting':'Hello, How can I assist you?',
            'loan': 'Loans are available for home, car',
            'interest': 'car 10%, home 8%',
            'payment': 'can be opted with 6, 12 or 24 months',
            'fundTransfer': 'Sure, I can help you transfer money. Please click on the link to make a fund transfer. <a href="#">Fund Transfer</a>'
        };
    };

    this.classifyIntents = function(classifier, classifierS, classifierSS){
        /*classifier.addDocument(this.intents['greeting'].join(' '), 'greeting');
        classifier.addDocument(this.intents['loan'].join(' '), 'loan');
        classifier.addDocument(this.intents['interest'].join(' '), 'interest');
        classifier.addDocument(this.intents['payment'].join(' '), 'payment');
        classifier.addDocument(this.intents['fundTransfer'].join(' '), 'fundTransfer');*/

        for(var intent in this.intents){
            if(this.intents.hasOwnProperty(intent)){
                classifier.addDocument(this.intents[intent].join(' '), intent);
            }
        }

        classifier.train();
    };

}