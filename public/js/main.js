/* jshint browser: true, jquery: true */

'use strict';
/////global variables
  var $loginform = $('#loginform');
  var emaillogin    = $loginform.find('[type="email"]').val();
  var pass       = $loginform.find('[type="password"]').val();
  var url = 'https://datingappnssc8.firebaseio.com/';

  //////for some reason not allowing me to create a Constructor object
  //with var ref = new Firebase(url); it says that Firebase is undefined


////the register button will need to hide login and display form

$('#loginform').on('click', '#registerbutton', function (event){
  event.preventDefault();

////hides the loginform
  $('#loginform').toggleClass('hidden');
/////new profile form will appear
  $('#createprofile').toggleClass('hidden');
})


$('#newprofileform').on('click', '#createbutton', function (event){
///////post this info to firebase


 var $tbody = $('<tbody></tbody>'),
      photo = $('#infophoto').val(),
      name  = $('#infoname').val(),
      gender = $('#infogender').val(),
      email = $('#infoemail').val(),
      descr = $('#infodescription').val(),
      jsonurl = 'https://datingappnssc8.firebaseio.com/.json',
      data = {photourl: photo, name: name, gender: gender, email: email, description: descr},
      profiles = JSON.stringify(data);

$.post(jsonurl, profiles, function(res){
      $npphoto.attr('profiles-uuid', res.profile)
      $tbody.attr('profiles-uuid', res.profile);
      })
  $('#newprofileform').toggleClass('hidden');
  $('#profileapp').toggleClass('hidden');

})


function addProfileToTable (uuid, info){
  var $profilephoto = $('<img src='+info.photourl+'></img>'),
      $profilename  = $('<td>'+info.name+'</td>'),
      $profilegender  = $('<td>'+info.gender+'</td>'),
      $profileemail = $('<td>'+info.email+'</td>'),
      $profiledescr  = $('<td>'+info.descr+'</td>');
///////append the info to the div and table


      $('#imagecontainer').append($profilephoto);
      $('#profilename').append($profilename);
      $('#gender').append($profilegender);
      $('#profileemail').append($profileemail);
      $('#profiledescr').append($profiledescr);
}

