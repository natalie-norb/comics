$(document).ready(function(){
    var triggers = $('.comics__trigger');

    var ShowComics = (function () {
    	var currentActive = $('.comics__item._active');
   
		var _init = function() {
			eventListeners();
		}		

		var eventListeners = function() {
			for (var i = 0; i < triggers.length; i++) {
				triggers[i].addEventListener('click', setActive);
			}
		}

		var showActiveImage = function(image) {
            var top = $(image).offset().top;
            var left = $(image).offset().left;
            //$('.comics__container').scrollTop(top);
            $(image).offset({top: 0, left: left});
            //document.querySelector(image).scrollIntoView();
		}

		var setActive = function() {
		  	var parent = this.closest('.comics__item'),
            	currentId = $(currentActive).find('.comics__trigger').attr('href');

            event.preventDefault();

            if (!$(parent).hasClass('_active')) {
            	$(currentActive).removeClass('_active'); 
            	$(parent).addClass('_active');
            	currentActive = parent;
            	showActiveImage($(this).attr('href'));
            	//showActiveImage(this.getAttribute('href'));
            }

		}

    	return {
    		init: _init
    	}
    })();

    if (triggers) {
    	ShowComics.init();
    }
});