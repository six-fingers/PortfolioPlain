
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// console.log(IN);

// function authorize() {
//   console.log('authorizing');
//
//   IN.API.Raw("/people/mhN2C5AlCz/positions").result(
//     function(a) {
//       console.log(a);
//     }
//   ).error(
//     function() {
//       console.log('error');
//     }
//   );
//
// }

// IN.Event.on(IN, "auth", authorize);

// IN.API.Connections("mhN2C5AlCz")
//   .result(function(result) {
//     console.log(result);
//   })
//   .error(function(err) {
//     alert(err);
//   });

// IN.API.Raw(url).method(methodType).body(bodyContent).result(resultCallback);

// IN.API.Raw().url(url).method(methodType).body(bodyContent).result(resultCallback);



// ----------------------------------------------------------------------------
// -------------------------CONFIRMED CODE-------------------------------------
// ----------------------------------------------------------------------------

// MAIN JS ROOT
console.log('Main Js Root');

// LINKED IN
function getProfileData() {
  IN.API.Profile("mhN2C5AlCz")
    .result(function(result) {
      console.log(result);
      buildLinkedInBasicInfoTable(result)
    })
    .error(function(err) {
      alert(err);
    });
}

// BUILT LINKED IN BASIC INFO TABLE
function buildLinkedInBasicInfoTable(info) {
  var table = ` <table class="table table-striped" border=1>
                  <tr>
                    <td rowspan="3" class="middle-center">
                      <img src="${info.values[0].pictureUrl}">
                    </td>
                  </tr>
                  <tr>
                    <td>${info.values[0].firstName} ${info.values[0].lastName}</td>
                  </tr>
                  <tr>
                    <td>${info.values[0].headline}</td>
                  </tr>
                  <tr>
                    <td colspan="2">The information presented in this table are dinamically retrieved from LinkedIn using their Javascript SDK</td>
                  </tr>
                </table>`;
  document.querySelector('#linkedInBasicInfo').innerHTML = table;
}

// SEND EMAIL FUNCTION
function send() {
  var post_data = new FormData();
  post_data.append('name',  $('input[id=name]').val());
  post_data.append('email',   $('input[id=email]').val());
  post_data.append('message',    $('textarea[id=message]').val());
  // if($('input[id=file]') && $('input[id=file]')[0] && $('input[id=file]')[0].files && $('input[id=file]')[0].files[0]) {
  //   console.log('sending file too...');
  //   post_data.append('form_attachment', $('input[id=file]')[0].files[0]);
  // }
  $.ajax({
      url: "../send.php",
      data: post_data,
      contentType: false,
      processData: false,
      type: 'POST',
      dataType: 'json',
      success : function() { console.log("Email Successfully Sent !");}
  });
}
