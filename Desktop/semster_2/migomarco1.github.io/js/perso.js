 $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

jQuery(document).ready(function() {
  
  var btn = $('#button');

	$(window).scroll(function() {
	  if ($(window).scrollTop() > 300) {
	    btn.addClass('show');
	    $('#cd-vertical-nav').addClass('show');
	  } else {
	    btn.removeClass('show');
	    $('#cd-vertical-nav').removeClass('show');
	  }
	});

	btn.on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({scrollTop:0}, '300');
	});


	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	};

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	};


	// The scroll-up function
	function scrollUp() {
	  var vheight = $(window).height();
	  $('html, body').animate({
	    scrollTop: (Math.ceil($(window).scrollTop() / vheight)-1) * vheight
	  }, 500);
	};

	// The scroll-down function
	function scrollDown() {
	  var vheight = $(window).height();
	  $('html, body').animate({
	    scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
	  }, 500);  
	};
	
	 // Click to Scroll DOWN Functions
	  $('.goNext').click(function(event){
	    scrollDown();
	    event.preventDefault();
	  });
	  
	  // Click to Scroll UP Functions
	  $('.goBack').click(function(event){
	    scrollUp();
	    event.preventDefault();
	  });

	$('a[href="#"]').click(function(event){
	    event.preventDefault();
	});

});