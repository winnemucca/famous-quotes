
//quote constructor
var Quote = function ( author, quote,ranking) {
	this.quote = quote;
	this.author = author;
	this.quoteID = _.uniqueId();
	this.ranking = ranking;

	
};


var userQuotesList = [];




Quote.prototype.createEl = function() {
	

	var outer = this.$el;
 	var inner = $('<div class="rating">');	


 	 outer= $('<div data-id="'+this.quoteID+'">')
	.addClass('quotes')
	.append('<p class="quote-text">' +this.quote + '</p>')
	.append('<p class="authorName">-'+ this.author + '</p>');



    var quote = this;
    inner.append(
    	_.range(5).map(function(item,index) {
    		var id = quote.quoteID+'-'+index;
    		// value is currently set to unchecked;
    		var input = '<input type="radio" name="myRadios" class="rating-input" id="'+id+'" value="'+(index+1)+'">';
    		var label = '<label for="'+id+'" class="rating-star"></label>';
    		// console.log(input,label);
    		console.log('rating ',$('rating').length);

    	// 	for(var i = 0; i<input.length;i++) {
    	// 	if(input[i].type="radio" && input=='checked') {
    	// 		input.checked=true;

    	// 	}
    	// }
    		$('.star').each(function() {

    		})

    		return input+label;
    	})
    )
	// console.log('running');
	return outer.append(inner);


}     

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
// quotesArr.push(new Quote);

console.log('instances ',quotesArr);




// var newQuote = new Quote(authorResponse, authorResponse);
// newQuote.addQuoteToArray();







$(document).on('ready', function() {

	
	
	$('.submit').on('click', function(e) {
		e.preventDefault();
		// console.log(addQuoteToArray());
		var authorResponse= $('.author').val();
		var authorQuote= $('.quote').val();

		var starRating = 0;

		var newQuote = new Quote(authorResponse,authorQuote,starRating);


		userQuotesList.push(newQuote);
		

		// console.log("user quote list ",userQuotesList);

		$('.user-input').trigger('reset');
		
 		$('.postedResponse').empty();
 			for(var i = 0; i<userQuotesList.length; i++) {
 				// console.log(userQuotesList[i]);



 			$('.postedResponse').append(userQuotesList[i].createEl());




 		}

 		


 		console.log(userQuotesList);
	});
// end of on submit
	$(document).on('click', '.rating-input', function() {
 			// e.preventDefault();
 			// console.log($(this).attr('value'));
 			var id = $(this).parents('.quotes').attr('data-id');
 			var filteredQuote = userQuotesList.filter(function(quote) {
 				if(quote.quoteID === id) {
 					return true;
 				}

 			})

 			// add the + to change the value to an integer otherwise it will be a string!
 			// *******************************
 			starRating=+$(this).attr('value');
 			filteredQuote[0].ranking = starRating; 
 			// console.log('parents: ',$(this).parents('.quotes'));
 			console.log('filtered quote ',filteredQuote);
 			console.log('sorted quotes ',_.sortBy(userQuotesList,function(sort){
 				return sort.ranking;
 			}))
 			userQuotesList = _.sortBy(userQuotesList,function(sort) {
 				return sort.ranking;
 			})
 			console.log(userQuotesList);
 			$(this).attr("checked",true);
 			// $('')
 			// console.log( $(this).attr("checked",true));



 		});
			// end of click on rating input  *********star system

	$(document).on('click','.random',function() {
		console.log('clicked');
		// $('.postedResponse').append(quote1.createEl());

		// for(var i =0; i<quotesArr.length; i++) {

		// }
		console.log('shuffle',_.shuffle(quotesArr));
		quotesArr = _.shuffle(quotesArr);
		console.log(quotesArr[0]);
		$('.postedResponse').append(quotesArr[0].createEl());
		userQuotesList.push(quotesArr[0]);
		console.log(userQuotesList);
	})

	// end of click on the random button
  
	
});



// end of document on ready

