// Variable to hold the HTML we'll generate
var html = '';

// Load the projects from the json file
// Do something with the result here

var data = [
  {
    "title":"XT-MISR",
    "img_url":"http://phantasm.biz/images/logos/Research.jpg",
    "url": "http://www.xtmisr.com",
  },
  {
    "title":"XT-MISR",
    "img_url":"http://phantasm.biz/images/logos/Research.jpg",
    "url": "http://www.xtmisr.com",
  },
  {
    "title":"XT-MISR",
    "img_url":"http://phantasm.biz/images/logos/Research.jpg",
    "url": "http://www.xtmisr.com",
  },
  {
    "title":"XT-MISR",
    "img_url":"http://phantasm.biz/images/logos/Research.jpg",
    "url": "http://www.xtmisr.com",
  }
]

console.log("hadiiiiii");
for (var i = 0; i < data.length; i++) {
	html += '<li>';
	html += '<a href="'+ data[i].url +'">';
	html += '<img src="' + data[i].img_url + '" alt="'+ data[i].title +'" />';
	html += '</a>';
	html += '</li>';
};

$('.projects').html(html);
// $.getJSON("js/projects.json", function(data) {
// });