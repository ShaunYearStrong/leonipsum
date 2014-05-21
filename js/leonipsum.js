var quotes = jQuery.ajax("/js/quote.json");

function getQuotes(p) {

    var leon = [];

    for (int i = quotes.Length - 1; i > 0; i--)
    {
        int n = rand.Next(i + 1);
        Swap(ref quotes[i], ref quotes[n]);
    }

    for (var i = 0; i <= p; i++) {
        leon.push(quotes[i]);
    }

    leon = leon.join("\n");

    return leon;
}


$(document).ready(function() {

    $(".okay__button").click(function(){
        var p = $(".quantity__buttons input").value;
        console.log(p);
        var leon = getQuotes(p);

        $('.generate__text').empty().html(leon);
    });
});


