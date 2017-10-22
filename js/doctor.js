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
        debugger;
        $('.showDoctors').append(`<li>${doctor.profile.last_name}, ${doctor.profile.first_name}, ${doctor.practices.website}</li>`);
        $('.showAddresses').append(`<li>${doctor.practices.visit_address.street}, ${doctor.practices.visit_address.city}, ${doctor.practices.visit_address.state}, ${doctor.practices.visit_address.zip}</li>`);
        $('.showNewStatus').append(`<li>${doctor.practices.accepts_new_patients}</li>`);
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
