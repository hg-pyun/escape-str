const Escape = require('../lib');

var str = "<script>alert('alert!'); &\'\"\/</script>";
var eStr = Escape.bracket(str);
var eHtmlStr = Escape.html(str);

console.log('before', str);
console.log('escape bracket', eStr);
console.log('escape html', eHtmlStr);