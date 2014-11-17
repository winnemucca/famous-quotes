
//quote constructor
var Quote = function (quote, author) {
	this.quote = quote;
	this.author = author;
	this.quoteID = author + quote;

	this.addQuoteToArray = function () {
		quotesArr.push(this);
	}

 	this.renderQuoteContainer = function (){
		var quoteContainer = $('<div class="quote-container" data-quoteID="'+this.quoteID+'">');
		var quoteChangeContainer = $('<div class="quote-change-container">');
		quoteContainer.append('<h5 class="author-main">' +this.author+ '</h5>', quoteChangeContainer, '<p>'+this.quote+'</p>');
		var rankingContainer = $('<div class="ranking-container">')
		for (var i = 1; i<=this.ranking; i++){
			rankingContainer.append('<i class="icon-star star" data-ranking='+i+'></i>');			
		}
		for (var i=this.ranking+1; i<=5; i++){
			rankingContainer.append('<i class="icon-star-empty star" data-ranking="'+i+'"></i>');
		}

		quoteChangeContainer.append(rankingContainer, '<input type="submit" value="Delete">');
		return quoteContainer



	};

};


var quotesArr = [quote1,quote2,quote3,quote4, quote5, quote6, quote7];

var renderQuotesArr = function (){
	// sort quotes in array by ranking
	quotesArr.sort(function(a,b){
		if (a.ranking > b.ranking){
			return 1;
		}if (a.ranking < b.ranking){
			return -1;
		}return 0;
	});

	$('.main-quote-list').empty();



// quotes instances
var quote1 = new Quote('Chuck Klosterman', 'Art and love are the same thing: It’s the process of seeing yourself in things that are not you.');

var quote2 = new Quote('Chuck Klosterman', 'Every relationship is fundamentally a power struggle, and the individual in power is whoever likes the other person less.');

var quote3 = new Quote('Chuck Klosterman', 'Life is rarely about what happened; its mostly about what we think happened.');

var quote4 = new Quote('Chuck Klosterman', 'It feels so exhausting to be so bad at something I loved so much');

var quote5 = new Quote('Kurt Vonnegut','Laughter and tears are both responses to frustration and exhaustion. I myself prefer to laugh, since there is less cleaning up to do afterward.');

var quote6 = new Quote('Kurt Vonnegut','Maturity is a bitter disappointment for which no remedy exists, unless laughter could be said to remedy anything');

var quote6 = new Quote('Kurt Vonnegut','Beware of the man who works hard to learn something, learns it, and finds himself no wiser than before.');
var quote7 = new Quote ('Kurt Vonnegut', 'The year was 2081, and everyone was finally equal.');

$(document).on('ready', function() {
	
	$('.submit').on('click', function(e) {
		e.preventDefault();
		var authorResponse= $('.author').val();
		var authorQuote= $('.quote').val();

		$('.user-input').trigger('reset');
		$('.postedResponse').append("<div>" + ' name: ' + authorResponse + "</div>");
		$('.postedResponse').append(' quote: ' + authorQuote);


	});
  
});

