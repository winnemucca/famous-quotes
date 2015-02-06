	
var NameSpace = function() {
//quote constructor
var Quote = function ( author, quote,ranking) {
	this.quote = quote;
	this.author = author;
	this.quoteID = author + "\n" + quote;
	this.ranking = ranking;

	
};


Quote.prototype.addQuoteToArray = function() {
	var newObject = {};
	newObject.user = this.author;
	newObject.value= this.quote;

	userQuotesList.push(newObject);
	console.log(userQuotesList);

	// this will keep my value but putting the value into create el will not work;
	this.$el = $('<div>')
	.addClass('quotes')
	.append('<p class="quote-text">' +this.quote + '</p>')
	.append('<p>-'+ this.author + '</p>');
	console.log('running');
	return this.$el;

}

// list to append to 
var userQuotesList = [];




Quote.prototype.createEl = function() {
	console.log(this.quote,this.author);
	return userQuotesList.map(function(quote) {
		console.log('createEl is running');
		console.log(quote);
		var userRespEl =$('<div class="quote"></div>');
 		var userAutherQuote = $('<p class="userquote">' + quote.quote + '</div>');
 		var userAuthor= $('<p class="userAuthor">') +quote.author + '</div>';
 		var starRatingEl = $('<p class="rating">');
 		userRespEl.append(userAutherQuote,userAuthor,starRatingEl);
 		 	// console.log(userRespEl);

 		return userRespEl;
	})


		// var userRespEl =$('<div class="quote"></div>');
 	// 	var userAutherQuote = $('<p class="userquote">' + this.quote + '</div>');
 	// 	var userAuthor= $('<p class="userAuthor">') +this.author + '</div>';
 	// 	var starRatingEl = $('<p class="rating">');
 	// 	userRespEl.append(userAutherQuote,userAuthor,starRatingEl);
 	// 	console.log(userRespEl);
 	// 	return userRespEl;



 		


 // 	this.$el = $('<div>')
	// .addClass('quotes')
	// .append('<p class="quote-text">' +this.quote + '</p>')
	// .append('<p>-'+ this.author + '</p>');
	// console.log('running');
	// return this.$el;
	// }



// }  end of the NameSpace






// var renderQuotesArr = function () {
// 	// sort quotes in array by ranking
// 	quotesArr.sort(function(a,b){
// 			if (a.ranking > b.ranking){
// 				return 1;
// 			}if (a.ranking < b.ranking){
// 				return -1;
// 			}return 0;
// 		});
// 	};

	// $('.main-quote-list').empty();



// quotes instances
var quote1 = new Quote('Chuck Klosterman', 'Art and love are the same thing: It’s the process of seeing yourself in things that are not you.',1);

var quote2 = new Quote('Chuck Klosterman', 'Every relationship is fundamentally a power struggle, and the individual in power is whoever likes the other person less.',2);

var quote3 = new Quote('Chuck Klosterman', 'Life is rarely about what happened; its mostly about what we think happened.',3);

var quote4 = new Quote('Chuck Klosterman', 'It feels so exhausting to be so bad at something I loved so much',4);

var quote5 = new Quote('Kurt Vonnegut','Laughter and tears are both responses to frustration and exhaustion. I myself prefer to laugh, since there is less cleaning up to do afterward.',5);

var quote6 = new Quote('Kurt Vonnegut','Maturity is a bitter disappointment for which no remedy exists, unless laughter could be said to remedy anything',3);

var quote6 = new Quote('Kurt Vonnegut','Beware of the man who works hard to learn something, learns it, and finds himself no wiser than before.',4);
var quote7 = new Quote ('Kurt Vonnegut', 'The year was 2081, and everyone was finally equal.',4);

var quotesArr = [quote1,quote2,quote3,quote4, quote5, quote6, quote7];
// console.log(quotesArr);
quotesArr.push(new Quote);

console.log('instances ',quotesArr);




// var newQuote = new Quote(authorResponse, authorResponse);
// newQuote.addQuoteToArray();







$(document).on('ready', function() {
	$('.container').append("<div>" + quote2.quoteID +" </div>");
	
	$('.submit').on('click', function(e) {
		e.preventDefault();
		// console.log(addQuoteToArray());
		var authorResponse= $('.author').val();
		var authorQuote= $('.quote').val();

		var newQuote = new Quote(authorResponse,authorQuote);

		newQuote.addQuoteToArray();


		// var appendEls = newQuote.createEl();
		// var appendEls = newQuote
		// console.log(appendEls)

		$('.postedResponse').append(newQuote.addQuoteToArray());
		console.log("user quote list ",userQuotesList);

		$('.user-input').trigger('reset');
		


		

 		// $('.postedResponse').empty().append(appendEls);



	});
  
});




Quote.prototype.createEl = function() {
	// console.log(this);
	// console.log(this.quote,this.author);

	// return userQuotesList.map(function(quote) {
	// 	console.log('createEl is running');
	// 	console.log(quote);
	// 	var userRespEl =$('<div class="quote"></div>');
 // 		var userAutherQuote = $('<p class="userquote">' + quote.user + '</div>');
 // 		var userAuthor= $('<p class="userAuthor">') +quote.value + '</div>';
 // 		var starRatingEl = $('<p class="rating">');
 // 		userRespEl.append(userAutherQuote,userAuthor,starRatingEl);
 // 		 	// console.log(userRespEl);
 // 		 console.log(this)
 // 		return userRespEl;
	})































































	// this.renderQuoteContainer = function (){
	// 	var quoteContainer = $('<div class="quote-container" data-quoteID="'+this.quoteID+'">');
	// 	var quoteChangeContainer = $('<div class="quote-change-container">');
	// 	quoteContainer.append('<h5 class="author-main">' +this.author+ '</h5>', quoteChangeContainer, '<p>'+this.quote+'</p>');
	// 	var rankingContainer = $('<div class="ranking-container">')
	// 	for (var i = 1; i<=this.ranking; i++){
	// 		rankingContainer.append('<i class="icon-star star" data-ranking='+i+'></i>');			
	// 	}
	// 	for (var i=this.ranking+1; i<=5; i++){
	// 		rankingContainer.append('<i class="icon-star-empty star" data-ranking="'+i+'"></i>');
	// 	}

	// 	quoteChangeContainer.append(rankingContainer, '<input type="submit" value="Delete">');
	// 	return quoteContainer

	// };




	var renderQuotesArrEl = quotesArr.map(function(response) {
 		var userRespEl =$('<div class="quote">');
 		var userAutherQuote = $('<p class="userquote">').text(response.quote);
 		var userAuthor= $('<p class="userAuthor">').text(response.author);
 		var starRatingEl = $('<p class="rating">');
 			
 		userRespEl.append(userAuthor,userAutherQuote, starRatingEl);

 			return userRespEl;
 		});




this.renderQuotesArrEl = quotesArr.map(function(response) {
 		var userRespEl =$('<div class="quote">');
 		var userAutherQuoteID = $('<p class="userquoteID">');
 		var starRatingEl = $('<p class="rating">');
 			
 		userRespEl.append(userRespEl,starRatingEl);

 			return userRespEl;
 		});