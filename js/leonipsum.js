var quotes;

//Fisher-Yates shuffle
function shuffle(quotes) {

    var m = quotes.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = quotes[m];
    quotes[m] = quotes[i];
    quotes[i] = t;
}

return quotes;
}


function getQuotes(p) {

    var shuffled = shuffle(quotes);
    console.log(shuffled);

    //leon = leon.join("\n");

    //return leon;
}


$(document).ready(function() {

    $(".okay__button").click(function(){
        var p = $(".quantity__buttons input").val();
        console.log(p);
        var leon = getQuotes(p);

        $('.generate__text').empty().html(leon);
    });
});

$(document).ready(function() {
    $.getJSON('js/quotes.json', function(data) {
     quotes = data;
     console.log(quotes);
 });
})
