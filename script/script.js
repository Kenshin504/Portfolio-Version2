function facebook()
{
  window.open('https://www.facebook.com/ryan.lumbis.3/');
}

function gmail()
{
  window.open('mailto:ryanlumbis712@gmail.com');
}

function github()
{
  window.open('https://github.com/Kenshin504');
}

window.onscroll = function() 
{
  var scrollBar = document.getElementById('scroll-bar');
  var totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = window.scrollY;
  var scrollPercentage = (scrolled / totalHeight) * 100;
  
  scrollBar.style.width = scrollPercentage + '%';
};
  