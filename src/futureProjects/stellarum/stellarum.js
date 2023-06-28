var c = document.getElementById('cvs');
var ctx = c.getContext('2d');

var cookies = document.cookie;//I hate you

c.width = window.innerWidth - (window.innerWidth / 10);
c.height = window.innerHeight - (window.innerHeight / 10);

