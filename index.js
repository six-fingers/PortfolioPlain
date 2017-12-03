


function buildLinkedInTable(info) {
  console.log(info);
  console.log(document.querySelector('#linkedInBasicInfo'));

  console.log(typeof info);
  console.log(Object.keys(info.values[0]));

  Object.keys(info.values[0]).forEach(
    function(name) {
      console.log(name, info.values[0][name]);
    }
  );

  var table = ` <table class="table" border=1>
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



// $results.innerHTML = "Wonderful";




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
      buildLinkedInTable(result)
    })
    .error(function(err) {
      alert(err);
    });
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
