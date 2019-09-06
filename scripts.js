/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

Implement a URL shortener with the following methods:

   shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
   restore(short), which expands the shortened string into the original url. If no such shortened string exists, return null.

Hint: What if we enter the same URL twice?
*/

const shorten = (yourString) => {
  let result = 0;
  for ( i = 0; i < yourString.length; i++ ) {
    result = result * 37 + yourString[i].charCodeAt(0)
    console.log(result)
  }
  return result
}


const restore = (hash) => {
  let copied = short.slice()
}

let test0 = 'www.testsite.com'
console.log(shorten(test0))

$(document).ready(function() {
    $('#output-1').text(1)
});
