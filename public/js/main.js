/* jshint browser: true, jquery: true */

'use strict';
/////global variables
  var url = 'https://datingappnssc8.firebaseio.com/',
      ref = new Firebase(url);

  //////for some reason not allowing me to create a Constructor object
  //with var ref = new Firebase(url); it says that Firebase is undefined



////this will log the user in
$('#loginform').on('click', '#loginbutton', function (evt){
  evt.preventDefault();
  var unemail = $('#unemail').val();
  var unpass  = $('#unpass').val();

  ref.authWithPassword({
    email    : unemail,
    password : unpass
  }, function(error, authData) {
    if (error) {
      switch (error.code) {
        case "INVALID_EMAIL":
          console.log("The specified user account email is invalid.");
        case "INVALID_PASSWORD":
          console.log("The specified user account password is incorrect.");
        case "INVALID_USER":
          console.log("The specified user account does not exist.");
          console.log("Error logging user in:", error);
      }
    } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});



 $('#loginform').toggleClass('hidden');
 $('#mainpageapp').toggleClass('hidden');
})

////the register button will need to hide login and display form

$('#loginform').on('click', '#registerbutton', function (event){
  event.preventDefault();
  var unemail = $('#unemail').val();
  var unpass  = $('#unpass').val();
/////this will create the user

  $('#loginform').toggleClass('hidden');
/////new profile form will appear
  $('#createprofile').toggleClass('hidden');
})


$('#newprofileform').on('click', '#createbutton', function (event){
///////post this info to firebase
event.preventDefault();

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
  $('#createprofile').toggleClass('hidden');
  $('#mainpageapp').toggleClass('hidden');
})


function addProfileToTable (uuid, info){

  var profileurl = url + uuid + '/.json';

  var $profilephoto = $('<img src='+info.photourl+'></img>'),
      $profilename  = $('<td>'+info.name+'</td>'),
      $profilegender  = $('<td>'+info.gender+'</td>'),
      $profileemail = $('<td>'+info.email+'</td>'),
      $profiledescr  = $('<td>'+info.descr+'</td>');
///////append the info to the div and table
      console.log(info.name);

      $('#imagecontainer').append($profilephoto);
      $('#profilename').append($profilename);
      $('#gender').append($profilegender);
      $('#profileemail').append($profileemail);
      $('#profiledescr').append($profiledescr);
}

////////////////////These are the click handlers used for navigation
//
$('#mainpageapp').on('click', '#profileappbutton', function(event){
  event.preventDefault();

  $('#profileapp').toggleClass('hidden');

  $('#mainpageapp').toggleClass('hidden');
})

$('#mainpageapp').on('click', '#currentappbutton', function(event){
  event.preventDefault();

  $('#currentapp').toggleClass('hidden');

  $('#mainpageapp').toggleClass('hidden');
})

$('#mainpageapp').on('click', '#potentialappbutton', function(event){
  event.preventDefault();

  $('#potentialapp').toggleClass('hidden');

  $('#mainpageapp').toggleClass('hidden');
})

$('#profileapp').on('click', '#currentappbutton', function (event){
  event.preventDefault;
  $('#currentapp').toggleClass('hidden');
  $('#profileapp').toggleClass('hidden');
})

$('#profileapp').on('click', '#potentialappbutton', function (event){
  event.preventDefault;
  $('#profileapp').toggleClass('hidden');
  $('#potentialapp').toggleClass('hidden');
})

$('#currentapp').on('click', '#potentialappbutton', function (event){
  event.preventDefault;
  $('#currentapp').toggleClass('hidden');
  $('#potentialapp').toggleClass('hidden');
})

$('#currentapp').on('click', '#profileappbutton', function (event){
  event.preventDefault;
  $('#currentapp').toggleClass('hidden');
  $('#profileapp').toggleClass('hidden');
})

$('#potentialapp').on('click', '#currentappbutton', function (event){
  event.preventDefault;
  $('#currentapp').toggleClass('hidden');
  $('#potentialapp').toggleClass('hidden');
})

$('#potentialapp').on('click', '#profileappbutton', function (event){
  event.preventDefault;
  $('#profileapp').toggleClass('hidden');
  $('#potentialapp').toggleClass('hidden');
})



///this will be used to retrieve all of the likes or available profiles, when retrieving a list of items in Firebase.
// child_added is triggered once for each existing child and then again every time a new child is added to the specified path.
// The event callback is passed a snapshot containing the new child's data.
//If we wanted to retrieve only the data on each new profile that matched we could use child_added:
// Retrieve new posts as they are added to Firebase
//ref.on("child_added", function(snapshot) {
//  var newPost = snapshot.val();
//  console.log("Author: " + newPost.author);
//  console.log("Title: " + newPost.title);
//});
//
//In this example the snapshot will contain an object with an individual blog post.
//Because we converted our post to an object using .val() on line 3, we have access to the post's
//author and title properties by calling by calling .author and .title respectively.

//////sign user out
//

$('#profileapp').on('click', '#logout', function (){
  ref.unauth();
  location.reload(true);
});

$('#currentapp').on('click', '#logout', function (){
  ref.unauth();
  location.reload(true);
});

$('#potentialapp').on('click', '#logout', function (){
  ref.unauth();
  location.reload(true);
});
