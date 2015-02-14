/* jshint browser: true, jquery: true */

'use strict';

/////the login page will need to authenticate and display app

$('#loginform').on('click', '#loginbutton', function (event){
  event.preventDefault();

////hides the loginform
  $('#loginform').toggleClass('hidden');
///displays profile of user
  $('#profileapp').toggleClass('hidden');

})

////the register app will need to hide login and display form

$('#loginform').on('click', '#registerbutton', function (event){
  event.preventDefault();

////hides the loginform
  $('#loginform').toggleClass('hidden');
/////new profile form will appear
  $('#createprofile').toggleClass('hidden');
})



