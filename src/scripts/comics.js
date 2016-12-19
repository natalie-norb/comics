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

		var showActiveImage = function(imgContainer) {
            var top = $(imgContainer)[0].offsetTop;
            //var top = $(image).offset().top;            

            $('.comics__container').animate({
                scrollTop: top
            }, 500);
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