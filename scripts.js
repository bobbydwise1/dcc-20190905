/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

Implement a URL shortener with the following methods:

   shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
   restore(short), which expands the shortened string into the original url. If no such shortened string exists, return null.

Hint: What if we enter the same URL twice?
*/

const hasher = (yourString) => {
  const p = 31;
  const m = 1000000009
  let hash_value = 0;
  let p_pow = 1;
  for (char of yourString) {
    hash_value = (hash_value + (char.charCodeAt(0) - 97 + 1 * p_pow) % m);
    console.log(hash_value)
    p_pow = (p_pow * p) % m;
  }
  return hash_value;
}

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
