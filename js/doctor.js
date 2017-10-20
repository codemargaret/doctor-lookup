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

  callApi(promise, issueToFind, nameToFind){
    promise.then(function(response){
      let body = JSON.parse(response);
      let allDoctors = body.data;
      let doctorNum = allDoctors.length;
      let specialties;
      let profile;
      let firstPractice;
      // let doctorCount = 0;
      for(let i = 0; i < doctorNum; ++i){
        specialties = allDoctors[i].specialties;
        let specObject = specialties.pop();
        let description = specObject.description;
        profile = allDoctors[i].profile;
        let name = profile.slug;
        firstPractice = allDoctors[i].practices[0];

        if ((description.match(issueToFind)) || (name.match(nameToFind))){
          $('.showDoctors').append(`<li>${allDoctors[i].profile.last_name}, ${allDoctors[i].profile.first_name}, ${allDoctors[i].practices[i].phones[i].number}</li>`);
          $('.showAddresses').append(`<li>${allDoctors[i].practices[i].visit_address.street}, ${allDoctors[i].practices[i].visit_address.city}, ${allDoctors[i].practices[i].visit_address.state}, ${allDoctors[i].practices[i].visit_address.zip}</li>`);
          $('.showNewStatus').append(`<li>${allDoctors[i].practices[i].accepts_new_patients}</li>`);
          doctorCount += 1;
        }
      }
      //attempt to show if a search did not return results, but since the loop is breaking, it's not reaching this point
      // if (doctorCount === 0) {
      //   $('.noResults').text("Your search returned no results");
      // }
    }, function(error){
      $('.errors').text(`There was an error processing your request: ${error.message}`);
    });
  }
} //end Doctor class
