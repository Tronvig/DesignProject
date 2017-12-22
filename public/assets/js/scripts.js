/*!
 * DesignProject
 * Form Creation App
 * https://github.com/Tronvig/DesignProject/
 * @author Matt Tronvig
 * @version 1.0.0
 * Copyright 2017. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    // Rellax - Parallax animations
    var rellax = new Rellax('.rellax');

    // On page load remove preload class from body
    $(window).on('load', function() {
      $('body').removeClass('preload');
    });

    // Hide .header on scroll down and show header on scroll up
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var headerHeight = $('header').outerHeight();

    function hasScrolled() {
        var st = $(window).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta) {
            return;
        }

        // If they scrolled down and are past the header, add class .header-up.
        // This is necessary so you never see what is "behind" the header.
        if (st > lastScrollTop && st > headerHeight){
            // Scroll Down
            $('header').removeClass('header--down').addClass('header--up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('header--up').addClass('header--down');
            }
        }

        lastScrollTop = st;
    }

    $(window).scroll(function(){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    // Control input label position on focus
    $('label input').on('focus',function(){
        var inputVal = $(this).val();
        if (inputVal.length < 1) {
          $(this).parent().toggleClass('on');
        }
    });

    // Mobile Nav
    // Hamburger menu for mobile derived from: https://codepen.io/alexnewman/pen/ByePod
    var isHamburgerActive = false;

    // Show the mobile nav
    function hideMobileNav() {
      // animate the nav exit
      $('.mobile-nav').removeClass('animate-inFromRight');
      $('.mobile-nav').addClass('animate-outToLeft');
      $('.mobile-nav').removeClass('active');

      // delay hiding the nav
      $('.icon__hamburger').removeClass('active');
      setTimeout(function () {
          $('body').removeClass('menu-open');
      }, 1200);

    }

    // Hide the mobile nav
    function showMobileNav() {

        $('.icon__hamburger').addClass('active');
        $('body').toggleClass('menu-open');
        $('.mobile-nav').toggleClass('active');
        $('.mobile-nav').removeClass('animate-outToLeft');
        $('.mobile-nav').addClass('animate-inFromRight');

        // List of nav items in the mobile nav - switch to dynamic list in future
        var classes = [
          'nav__item--1',
          'nav__item--2',
          'nav__item--3',
          'nav__item--4',
          'nav__item--5',
          'nav__item--6',
          'nav__item--7',
          'nav__item--8',
          'nav__item--9'
          ];

        $('.nav__level .nav__item').each(function(index, element){
            $(element).addClass(classes[index]);
        });

    }

    $('.icon__hamburger').on('click', function() {
      if (isHamburgerActive) {
        hideMobileNav();
      } else {
        showMobileNav();
      }

      isHamburgerActive = !isHamburgerActive;
    });

    // Signup & Login Forms
    //
    // Form triggers:
    // Login: menu--login, signup--login, mobile-nav--login
    // Signup: menu--signup, cta--signup, login--signup, mobile-nav--signup
    //

    var isFormActive = false;

    // Show the requested form
    function showForms(form) {
      if ($('body').hasClass(form)) {

        // do nothing, requested form is already shown

      } else {

        // Remove classes from body & forms
        $('body').removeClass();
        $('.signup').removeClass('active');
        $('.login').removeClass('active');
        $('.auth').removeClass('active');
        $('.prospect').removeClass('active');

        // Show the requested form
        $('body').addClass('forms-open');
        $('body').addClass(form);
        $('.forms').addClass('active');
        $(form).addClass('active');

      }

      // Hide the mobile nav if it's active
      if (isHamburgerActive) {
        hideMobileNav();
        isHamburgerActive = !isHamburgerActive;
      } else {
        // do nothing
      }

      isFormActive = true;
    }
    // Close the open form
    function closeForms(form) {
      if (isFormActive) {

        $('body').toggleClass('forms-open');
        $('body').toggleClass(form);
        $('.forms').toggleClass('active');
        $(form).toggleClass('active');

      } else {
        // do nothing
      }

      isFormActive = !isFormActive;
    }

    // Reset the Sign up
    function resetSignup() {

        // Show first step
        $('.provider').addClass('on');

        // Remove progress
        $('.credentials').removeClass('on');
        $('.terms').removeClass('on');

    }

    // Login form triggers
    //
    // Show login form from main nav
    $('.menu--login').click(function(){
        showForms('.login');
        return false;
    });
    // Show login form from mobile nav
    $('.mobile-nav--login').click(function(){
        showForms('.login');
        return false;
    });
    // Show login form from signup
    $('.signup--login').click(function(){
        showForms('.login');
        return false;
    });
    // ^ COMBINE THESE

    // Sign up form triggers
    //
    // Show sign up form from main nav
    $('.menu--signup').click(function(){
        showForms('.signup');
        return false;
    });
    // Show sign up form from mobile nav
    $('.mobile-nav--signup').click(function(){
        showForms('.signup');
        return false;
    });
    // Show sign up form from signup
    $('.login--signup').click(function(){
        showForms('.signup');
        return false;
    });
    // Show sign up from CTA
    $('.cta--signup').click(function(){
        showForms('.signup');
        return false;
    });
    // ^ COMBINE THESE

    // Dismiss forms
    // Login
    $('.login--dismiss').click(function(){
        closeForms('.login');
        return false;
    });
    // Sign up
    $('.signup--dismiss').click(function(){
        closeForms('.signup');
        resetSignup();
        return false;
    });
    // Prospect
    $('.prospect--dismiss').click(function(){
        closeForms('.prospect');
        resetSignup();
        return false;
    });
    // Auth
    $('.auth--dismiss').click(function(){
        closeForms('.auth');
        resetSignup();
        return false;
    });
    // Success
    $('.success--dismiss').click(function(){
        closeForms('.success');
        return false;
    });
    // ^ COMBINE THESE

    // Signup & Prospect Forms
    //
    // Attribution Providers

    // Prospect Form
    $('.attribution').click(function(e) {
      e.preventDefault();

      // Hide providers, show credentials
      $('.provider').toggleClass('on');
      $('.credentials').toggleClass('on');

      // Assign select attribution provider to form
      var attribution = $(this).attr('id');
      $('#attribution').val(attribution); // Set
      $('input[name="attributionProvider"]').val(attribution); // Set

      // Show Prospect form if not TUNE client
      if(attribution === 'Adjust' || attribution === 'Appsflyer'){
        $('.attr-provider').text(attribution + ' as your attribution provider');
        closeForms('.signup');
        showForms('.prospect');
      } else if(attribution === 'None') {

        $('.attr-provider').text('no attribution provider');
        closeForms('.signup');
        showForms('.prospect');
      }
    });

    // Show Terms
    $('.show-terms').click(function(e) {
      e.preventDefault();

      $('.credentials').toggleClass('on');
      $('.terms').toggleClass('on');

    });

    // Services URLs (need to add stage URLs)
    var API_URL = 'https://mv-managerapi.tune.com';
    var WEBAPP_URL = 'https://app.multiverse.com';

    // Post the form to Marketo & send user to App

    // Attach a submit handler to the sign up form
    $('#signupForm').submit(function( event ) {
      $('#signupForm .error').hide();

      // Hide terms
      $('.terms').toggleClass('on');

      // Stop form from submitting normally
      event.preventDefault();

      // Get some values from elements on the page:
      var $form = $( this ),
        firstname = $form.find( 'input[name="FirstName"]' ).val(),
        lastname = $form.find( 'input[name="LastName"]' ).val(),
        company = $form.find( 'input[name="Company"]' ).val(),
        email = $form.find( 'input[name="email"]' ).val(),
        password = $form.find( 'input[name="pass"]' ).val(),
        attribution = $form.find( 'input[name="attribution"]' ).val(),
        url = $form.attr( 'action' );

      // Send the data using post
      var signup = $.ajax({
            type: 'POST',
            url: API_URL+'/session',
            contentType: 'application/json',
            data: JSON.stringify({'email': email, 'password': password})
        });

      // Put the results in a div
      signup.done(function( data ) {
        if (typeof(data.token) !== 'undefined' && typeof(data.token.type) !== 'undefined' && data.token.type !== null && data.token.type == '2factor' && data.token.token !== null) {
           $('body').removeClass('loading');
           var a2fToken = data.token.token;
           $('#twoFactorForm').attr('auth_token', a2fToken);
           $('#twoFactorForm').attr('email', email);
           showForms('.auth');
        } else {
          var session_token = data.token.token;
          createCookie('sessionCookie', session_token);

          // Send lead data to Marketo
          var marketoForm = MktoForms2.getForm(1099);
          marketoForm.addHiddenFields({
            //These are the values which will be submitted to Marketo
            'FirstName':firstname,
            'LastName':lastname,
            'Company':company,
            'Email':email,
            'attributionProvider':attribution
            });
          marketoForm.submit();
          marketoForm.onSuccess(function(values, followUpUrl) {
            // Take the user to the app
            window.location.replace(WEBAPP_URL+'/login/'+session_token);

            // If there is one, prevent the form from taking the lead to the follow up url
            return false;
          });

        }
      });

      signup.error(function(httpObj, textStatus) {
        var errorMessage = httpObj.status === 418 ? 'Error: Unfortunately, only TMC AA users with administrator permissions may use Multiverse. Please work with a team member that has administrator access to use Multiverse.'
          : 'Failed to authenticate. Please check your e-mail and password.';
        $('body').removeClass('loading');
        //showForms('.signup');
        $('.credentials').toggleClass('on');
        $('#signupForm .error').text(errorMessage);
        $('#signupForm .error').show();
      });
    });

    // Intro Login
    $('#login').submit(function( event ) {
      $('body').addClass('loading');
      $('#loginForm .error').hide();

      // Stop form from submitting normally
      event.preventDefault();

      // Get some values from elements on the page:
      var $form = $( this ),
        email = $form.find( 'input[name="email"]' ).val(),
        password = $form.find( 'input[name="pass"]' ).val();

      // Send the data using post
      var posting = $.ajax({
        type: 'POST',
        url: API_URL+'/session',
        contentType: 'application/json',
        data: JSON.stringify({'email': email, 'password': password})
      });

      // Results
      posting.done(function( data ) {
        if (typeof(data.token) !== 'undefined' && typeof(data.token.type) !== 'undefined' && data.token.type !== null && data.token.type == '2factor' && data.token.token !== null) {
          $('body').removeClass('loading');
          var a2fToken = data.token.token;
          $('#twoFactorForm').attr('auth_token', a2fToken);
          $('#twoFactorForm').attr('email', email);
          showForms('.auth');
        } else {
          var session_token = data.token.token;
          createCookie('sessionCookie', session_token);
          window.location.replace(WEBAPP_URL+'/login/'+session_token);
        }
      });
      posting.error(function(httpObj, textStatus) {
        // Show main login and add error messages
        showForms('.login');
        var errorMessage = httpObj.status === 418 ? 'Error: Unfortunately, only TMC AA users with administrator permissions may use Multiverse. Please work with a team member that has administrator access to use Multiverse.'
          : 'Failed to authenticate. Please check your e-mail and password.';
        $('body').removeClass('loading');
        $('#loginForm .error').text(errorMessage);
        $('#loginForm .error').show();
      });
    });

    // Main Login
    // Attach a submit handler to the sign up form
    $('#loginForm').submit(function( event ) {
      $('body').addClass('loading');
      $('#loginForm .error').hide();

      // Stop form from submitting normally
      event.preventDefault();

      // Get some values from elements on the page:
      var $form = $( this ),
        email = $form.find( 'input[name="email"]' ).val(),
        password = $form.find( 'input[name="pass"]' ).val();

      // Send the data using post
      var posting = $.ajax({
        type: 'POST',
        url: API_URL+'/session',
        contentType: 'application/json',
        data: JSON.stringify({'email': email, 'password': password})
      });

      // Results
      posting.done(function( data ) {
        if (typeof(data.token) !== 'undefined' && typeof(data.token.type) !== 'undefined' && data.token.type !== null && data.token.type == '2factor' && data.token.token !== null) {
          $('body').removeClass('loading');
          var a2fToken = data.token.token;
          $('#twoFactorForm').attr('auth_token', a2fToken);
          $('#twoFactorForm').attr('email', email);
          showForms('.auth');
        } else {
          var session_token = data.token.token;
          createCookie('sessionCookie', session_token);
          window.location.replace(WEBAPP_URL+'/login/'+session_token);
        }
      });
      posting.error(function(httpObj, textStatus) {
        var errorMessage = httpObj.status === 418 ? 'Error: Unfortunately, only TMC AA users with administrator permissions may use Multiverse. Please work with a team member that has administrator access to use Multiverse.'
          : 'Failed to authenticate. Please check your e-mail and password.';
        $('body').removeClass('loading');
        $('#loginForm .error').text(errorMessage);
        $('#loginForm .error').show();
      });
    });

    // Complete 2factor auth for signin
    // Attach a submit handler to the 2factor form
    $('#twoFactorForm').submit(function( event ) {
      $('body').addClass('loading');
      $('#twoFactorForm .error').hide();

      // Stop form from submitting normally
      event.preventDefault();

      // Get some values from elements on the page:
      var $form = $( this ),
        code = $form.find( 'input[name="code"]' ).val(),
        email = $('#twoFactorForm').attr('email'),
        auth_token = $('#twoFactorForm').attr('auth_token');

      // Send the data using post
      var posting = $.ajax({
            type: 'POST',
            url: API_URL+'/session',
            contentType: 'application/json',
            data: JSON.stringify({ 'auth_token': auth_token, 'code': code })
        });

      // Results
      posting.done(function( data ) {
        if (typeof(data.error_msg) !== 'undefined' && data.error_msg !== null) {
          $('body').removeClass('loading');
          $('#twoFactorForm .error').text(data.error_msg);
          $('#twoFactorForm .error').show();
        } else {
          var session_token = data.token.token;
          createCookie('sessionCookie', session_token);
          window.location.replace(WEBAPP_URL+'/login/'+session_token);
        }
      });
      posting.error(function(httpObj, textStatus) {
        var errorMessage = 'Failed to authenticate. Invalid verification code.';
        $('body').removeClass('loading');
        $('#twoFactorForm .error').text(errorMessage);
        $('#twoFactorForm .error').show();
      });
    });

    // Marketo Form Success & Thank You Messages

    // On successful marketo prospect form submit we should be returned to multiverse.com with a thank you query param
    // Get the query parameter
    var getParameterByName = function(name) {
          name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
          var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
              results = regex.exec(location.search);
          return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      }; //

    var param = getParameterByName('message');

    // If it was successful show the thank you message
    if ( param === 'thank-you' ) {
      showForms('.success');
    }

    // END SIGNUP & LOGIN SERVICES

  });

})(jQuery, window, document);
