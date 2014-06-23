var quotes,
    p = parseInt($(".quantity__buttons input").attr("value"));

/** shuffle

    Shuffle an array. 

    @see http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_.22inside-out.22_algorithm

    @param {Array} array Array to shuffle.
    @param {Object} rng Optional RNG. Defaults to Math.
    @return {Array} The original array, shuffled.
*/
function shuffle (array, rng) {
  var i = array.length, j, swap;
  if (!rng) rng = Math;
  while (--i) {
    j = rng.random() * (i + 1) | 0;
    swap = array[i];
    array[i] = array[j];
    array[j] = swap;
  }
  console.log(array);
  return array;
}


function getQuotes(p) {

    var leon = [],
        shuffled = shuffle(quotes);

    for (i = 0; i < parseInt(p); i++) {
      leon.push('<p>' + quotes[i] + '</p>');
    }

    return leon;
}


$(document).ready(function() {

    $(".quantity--plus").click(function() {
      p++
      $(".quantity__buttons input").attr("value", p);
    });

    $(".quantity--minus").click(function() {
      p--
      $(".quantity__buttons input").attr("value", p);
    });

    //Get the quotes
    $.getJSON('js/quotes.json', function(data) {
         quotes = data.leon;
         console.log(quotes);
    });



    // When the okay button is clicked...
    $(".okay__button").click(function() {
        // Get the number of required paragraphs
        p = parseInt($(".quantity__buttons input").attr("value"))
        // Send 
        var leon = getQuotes(p);

        $('.generate__text').empty().html(leon);
    });

});
