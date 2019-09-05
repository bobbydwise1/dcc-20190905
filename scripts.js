/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

Implement a URL shortener with the following methods:

   shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
   restore(short), which expands the shortened string into the original url. If no such shortened string exists, return null.

Hint: What if we enter the same URL twice?
*/

const shorten = (url) => {
  let copied = url.slice() //Avoid Mutation

  return copied
}

const restore = (short) => {
  let copied = short.slice()
}

let test0 = 'www.testsite.com'

$(document).ready(function() {
    $('#output-1').text(1)
});
