/* jshint browser: true, jquery: true */

'use strict';
/////global variables
  var $loginform = $('#loginform');
  var emaillogin    = $loginform.find('[type="email"]').val();
  var pass       = $loginform.find('[type="password"]').val();
  var url = 'https://datingappnssc8.firebaseio.com/';
  var ref = new Firebase(url);
console.log(ref);
  //////for some reason not allowing me to create a Constructor object
  //with var ref = new Firebase(url); it says that Firebase is undefined


$('#loginform').on('click', '#loginbutton', function (evt){
  evt.preventDefault();

  ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);


});

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


 $('#loginform').toggleClass('hidden');
 $('#mainpageapp').toggleClass('hidden');
})

////the register button will need to hide login and display form

$('#loginform').on('click', '#registerbutton', function (event){
  event.preventDefault();

////hides the loginform
  $('#loginform').toggleClass('hidden');
/////new profile form will appear
  $('#createprofile').toggleClass('hidden');
  $('#mainpageapp').toggleClass('hidden');
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

////////////////////These are the main page click handlers
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


