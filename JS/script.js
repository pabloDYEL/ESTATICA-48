// Header Scroll Changes

const header = document.getElementById('header');
const header2 = document.getElementById('header2');


function scrollValue() {
  var scroll = window.scrollY;
  if (scroll < 70) {
      header.classList.remove('BgColour');
      header2.classList.remove('BgColour3'); // Remove background color class from header2
  } else {
      header.classList.add('BgColour');
      header2.classList.add('BgColour3'); // Add background color class to header2
  }
}

window.addEventListener('scroll', scrollValue);



// Main Scroll Changes

const main = document.getElementById('main');

function scrollValue2() {
  var scroll = window.scrollY;
  if (scroll < 70) {
    main.classList.remove('main-paper-edit');
  } else {
    main.classList.add('main-paper-edit');
  }
}

window.addEventListener('scroll', scrollValue2);




// Header Hiden Info

var currentDropdown = null;

function toggleDropdown(dropdownId, imgId) {
  var dropdownContent = document.getElementById(dropdownId);
  var arrowImg = document.getElementById(imgId);
  
  if (currentDropdown && currentDropdown !== dropdownContent) {
    currentDropdown.style.display = 'none';
    var previousArrowImg = currentDropdown.previousElementSibling.querySelector('img');
    previousArrowImg.classList.remove('rotated');
  }

  if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
    dropdownContent.style.display = 'block';
    arrowImg.classList.add('rotated');
    currentDropdown = dropdownContent;
  } else {
    dropdownContent.style.display = 'none';
    arrowImg.classList.remove('rotated');
    currentDropdown = null;
  }
}

document.addEventListener('click', function(event) {
  if (!event.target.closest('.dropdown')) {
    var dropdownContents = document.getElementsByClassName('dropdown-content');
    for (var i = 0; i < dropdownContents.length; i++) {
      dropdownContents[i].style.display = 'none';
      var arrowImg = dropdownContents[i].previousElementSibling.querySelector('img');
      arrowImg.classList.remove('rotated');
    }
    currentDropdown = null;
  }
});






// Burger

$(function(){
	$(".hide-burger").click(function(e){
		e.preventDefault();
		$(".hide-burger").toggleClass("open");
    $(".hide-burger").toggleClass("open-aside");
    $(header).toggleClass("BgColour2");
		$(header2).toggleClass("aside-down");
	});
});


// IMG CHANGER


function changeImage(imageSrc) {
  var buttons = document.querySelectorAll('#buttons button');
  buttons.forEach(function(button) {
    button.classList.remove('selected');
  });

  event.currentTarget.classList.add('selected');

  document.getElementById('main-image').style.opacity = 0;

  setTimeout(function() {
    document.getElementById('main-image').src = imageSrc;
    document.getElementById('main-image').style.opacity = 1;
  }, 200); 
}