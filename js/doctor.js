export class Doctor {
  constructor(){
  }

  makePromise(api_key){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = api_key;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  callApi(promise){
    promise.then(function(response){
      let body = JSON.parse(response);
      body.data.forEach(function(doctor){
        $('#showDoctors').append(`<div class="card">Name: ${doctor.profile.last_name}, ${doctor.profile.first_name}, <br> Number: ${doctor.practices[0].phones[0].number}, <br> Website: ${doctor.practices[0].website}, <br> Address: ${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state}, ${doctor.practices[0].visit_address.zip}, <br> Accepts new patients: ${doctor.practices[0].accepts_new_patients}</div>`);
      });
      //attempt to show if a search did not return results, but since the loop is breaking, it's not reaching this point
      // if (doctorCount === 0) {
      //   $('.noResults').text("Your search returned no results");
      // }
    }, function(error){
      $('.errors').text(`There was an error processing your request: ${error.message}`);
    });
  }
} //end Doctor class
