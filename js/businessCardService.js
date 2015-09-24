var app = angular.module('mccApp');

app.service('businessCardService', function(){



var cardOptions = [
    {
        name: 'Option 1',
        preview: 'http://businesscardjournal.com/wp-content/uploads/Dark-Minimal-Typography-Business-Card-Template-0025.jpg'
    },
      {
        name: 'Option 2',
        preview: 'http://businesscardjournal.com/wp-content/uploads/Simple-Clean-Creative-Business-Card-Template-0023.jpg'
    },
      {
        name: 'Option 3',
        preview: 'http://businesscardjournal.com/wp-content/uploads/Creative-Modern-Green-Business-Card-Template-QR-Code-0031.jpg'
    }
    ]

this.getOptions = function () {
    return cardOptions;

}