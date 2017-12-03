function send() {

    console.log('send...');
    // function below will run clear.php?h=michael

    var post_data = new FormData();

    post_data.append('name',  $('input[id=name]').val());
    post_data.append('email',   $('input[id=email]').val());
    post_data.append('message',    $('textarea[id=message]').val());

    console.log($('input[id=name]').val(),$('input[id=email]').val(),$('textarea[id=message]').val());


    if($('input[id=file]') && $('input[id=file]')[0] && $('input[id=file]')[0].files && $('input[id=file]')[0].files[0]) {
      console.log('sending file too...');
      post_data.append('form_attachment', $('input[id=file]')[0].files[0]);
    }

    $.ajax({
        url: "../send.php",
        data: post_data,
        contentType: false,
        processData: false,
        type: 'POST',
        dataType: 'json',
        success : function() {
            // here is the code that will run on client side after running clear.php on server

            // function below reloads current page
            //location.reload();
        }
    });
}

console.log('Root');

// Setup an event listener to make an API call once auth is complete
function onLinkedInLoad2() {
    console.log('onLinkedInLoad');
    // console.log(IN.Event.on(IN, "auth", getProfileData));
    console.log(IN.User.authorize(onLinkedInAuth));
    IN.User.authorize(onLinkedInAuth);
}

// Handle the successful return from the API call
function onSuccess(data) {
    console.log('Success');
    console.log(data);
}

// Handle an error response from the API call
function onError(error) {
    console.log('Error');
    console.log(error);
}

// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
    console.log('getProfileData');
    IN.API.Raw("/people/~").result(onSuccess).error(onError);
}

function onLinkedInAuth() {
  alert('call2');
  IN.API.Raw("/companies/000000/updates")
  .method("GET")
  .result(function(res) {
     document.write(JSON.stringify(res));
   });
}

function onLinkedInLoad() {
  onLinkedInLogin();
  IN.Event.on(IN, "auth", function() {onLinkedInLogin();});
  IN.Event.on(IN, "logout", function() {onLinkedInLogout();});
}
function onLinkedInLogin() {
  IN.API.Profile("mhN2C5AlCz")
    // .fields(["id", "firstName", "lastName", "pictureUrl", "publicProfileUrl", "emailAddress"])
    .result(function(result) {

      console.log(result);
    })
    .error(function(err) {
      alert(err);
    });
}
function liAuth(){
  //
  console.log('liAuth');
   IN.User.authorize(function(){
       console.log('callback function');
   });
   // onLinkedInLoad();
   //IN.UI.Authorize().place();
}



// console.log( IN.API );

// function ciao() {
//   console.log('On Load');
//
//   var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://www.linkedin.com/oauth/v2/authorization?client_id=78ib4822tfa2eq&redirect_uri=http%3A%2F%2Fseidita.co.uk&state=dfghjk345678jjj&response_type=code",
//     "method": "GET",
//     "headers": {
//         "cache-control": "no-cache",
//         "postman-token": "a920a241-075f-c28e-e3a5-ae941716debf"
//       }
//   }
//
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });
//
//
//
//   // console.log(IN.User.isAuthorized());
// }
// ciao();
