/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            /*====================================
             CUSTOM LINKS SCROLLING FUNCTION 
            ======================================*/

            $('a[href*=#]').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
               && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target
                    || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        var targetOffset = $target.offset().top - 80;
                        $('html,body')
                        .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                        return false;
                    }
                }
            });
          

          
            /*====================================
               WRITE YOUR SCRIPTS BELOW 
           ======================================*/


          
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));

var tutor = {"date":"2016-04-03 15:30:10", "name":"John S.", "skype":"johns@gmail.com", "phone":"1245149299", "major":"Economics", "year":"2017","bio":"test1 test1 test1 " +
		"test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1","rate":"4"}

function match() {
	$('.match').append($('<div/>').addClass("tutorProf"));
	$form = $("<form></form>");
	$('.tutorProf').append($form);
	$form.append($('<div/>') 
			.addClass("profpic"));
	
	var num = "(" + tutor.phone.subString(0,3) + ") " + tutor.phone.substring(3); 
	
	$form.append($('<div/>') 
			.addClass("name")
			.text(tutor.name +"<br/>" + num));
	$form.append($('<div/>') 
			.addClass("block")
			.text("about"));
	$('.about').append($('<div/>')
			.addClass("rating")
			.text(function() {
				var i = pasrseInt(tutor.rate);
				var str = "";
				while (i > 0){
					str += "&#9733";
					i--;
				}
				return str;
			}));
	$('.about').append("<span style='color:#521AA9'>Major: </span>" + tutor.major + "<br/>" + 
			"<span style='color:#521AA9'>Year: </span>" + tutor.year + "<br/>" +
			"<span style='color:#521AA9'>Bio : </span>" + tutor.bio);
	$form.append($('<div/>').append("<input type='button' onclick='pass(validateStuform())' class='action-button' id='cancel' value='Cancel'></input>"));				
}


var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

$('#stuck').delay(5000).fadeOut('slow');
$('#grasp').delay(5000).fadeIn('slow');
$('#graspBtn').delay(6500).fadeIn('slow');

function signUpClick(){
	$("#landingpage_hype_container").fadeOut("slow");
	$("#signUp").fadeIn("slow");
	$('#grasp').fadeIn("slow");
}

var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
		return false;
});

function validateSignUpForm() {
	 var ans = "";
	    var fname = document.forms["signUp"]["FName"].value;
	    var lname = document.forms["signUp"]["LName"].value;
	    var eduEmail = document.forms["signUp"]["email"].value;
	    var pass = document.forms["signUp"]["pass"].value;
	    var phone = document.forms["signUp"]["phoneNumber"].value;
	    var bday = document.forms["signUp"]["bday"].value;
	    var street = document.forms["signUp"]["address1"].value;
	    var appt = document.forms["signUp"]["address2"].value;
	    var city = document.forms["signUp"]["city"].value;
	    var st = $("input[type='select'][name='state']:checked");
	    var zip = document.forms["signUp"]["zip_code"].value;
	    var major = document.forms["signUp"]["major"].value;
	    var gradYr = $("input[type='select'][name='gradYr']:checked");
	    var bio = document.forms["signUp"]["bio"].value;
	    var accNum = document.forms["signUp"]["accNum"].value;
	    var routingNum = document.forms["signUp"]["routingNum"].value;
	    var Vemail = document.forms["signUp"]["Vemail"].value;
	
	    if (fname == null || fname == "") {
	    	ans += "Please enter a first name \n";
	    	console.log(ans);
	    }
	    if (lname == null || lname == "") {
	    	ans += "Please enter a last name \n";
	    	console.log(ans);
	    }
	    if (eduEmail == null || eduEmail == "") {
	    	ans += "Please enter your school email adress name \n";
	    	console.log(ans);
	    } else if(eduEmail.toLowerCase().indexOf(".edu") < 0 && eduEmail.toLowerCase().indexOf("@") < 0) {
	    	ans += "Please enter a valid school email adress \n";
	    	console.log(ans);
	    }
	    if (pass == null || pass == "") {
	    	ans += "please enter a password \n";
	    } else if (pass != (document.forms["signUp"]["cpass"].value)) {
	    	ans += "Your passwords do not match. Please try again \n";
	    	console.log(ans);
	    }
	    if (phone == null || phone == ""){
	    	ans += "please enter your phone number \n";
	    	console.log(ans);
	    } else if(phone.charAt(3) != "-" || phone.charAt(7) != "-" || phone.length != 12) {
	    	ans += "please enter a valid phone number \n";
	    	console.log(phone.charAt(3));
	    	console.log(phone.charAt(7));
	    	console.log(phone.length);
	    	console.log(ans);
	    }
	    if (bday == null || bday == "") {
	    	ans += "please enter your birthdate \n";
	    	console.log(ans);
	    }
	    if (street == null || street == "") {
	    	ans += "please enter your street address \n";
	    	console.log(ans);
	    }
	    if (city == null || city == "") {
	    	ans += "please enter your city \n";
	    	console.log(ans);
	    }
	    if (zip == null || zip == "") {
	    	ans += "please enter your zip code \n";
	    	console.log(ans);
	    }
	    if(major == null || major == "") {
	    	ans += "please enter your major \n";
	    	console.log(ans);
	    }
	    
	    if((accNum != null && accNum.length > 0) && (routingNum == null || routingNum =="") || 
	    		(routingNum != null && routingNum.length > 0) && (accNum == null || accNum == "")) {
	    	ans += "please complete your bank account information \n";
	    	console.log(ans);
	    }
	    
	    if((routingNum == null || routingNum =="")&& 
	    		(accNum == null || accNum == "")&&
	    		(Vemail == null || Vemail == "")) {
	    	ans += "please tell us how to pay you, either venmo or bank account \n";
	    	console.log(ans);
	    }
	        
		
	 if (ans.length>0) {
	   	alert(ans);
	    return false;
	} else {	    
		$("#msform").fadeOut("slow");
		setTimeout(function(){$("#ty").fadeIn("slow")}, 1000);
		return true;
	}
}


var $el = $('#home');  //record the elem so you don't crawl the DOM everytime  
var a = $el.position().top + $el.outerHeight(true)*.10;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('.navbar').css({"background-color":"rgba(255,255,255, 1)"});
        $('#nav a').css({"color":"#3498db"});
        $('#colorLogo').css({"visibility":"visible"});
        $('#whiteLogo').css({"visibility":"hidden"});
    } else {
       $('.navbar').css({"background":"transparent"});
        $('#nav a').css({"color":"#ffffff"});
        $('#colorLogo').css({"visibility":"hidden"});
        $('#whiteLogo').css({"visibility":"visible"});
    }
});

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #FFFFFF }";
  document.body.appendChild(css);
};

jQuery(document).ready(function($) {
    $('.my-slider').unslider({
        autoplay: true,
        infinite: true
    });
});