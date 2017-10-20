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
      for(let i = 0; i < doctorNum; ++i){
        //searches description of specialty for matching keywords
        specialties = allDoctors[i].specialties;
        //returns one object within an array
        let specObject = specialties.pop();
        //removes the object from the array
        let description = specObject.description;
        profile = allDoctors[i].profile;
        let name = profile.slug;
        //extracts addresses, phone numbers, and websites from practices
        firstPractice = allDoctors[i].practices[0];
        console.log(firstPractice)
        let address = firstPractice.visit_address;
        // firstPhones = firstPractice.phones
        // console.log(firstPhones);

        if ((description.match(issueToFind)) || (name.match(nameToFind))){
          $('.showDoctors').append(`<li>${allDoctors[i].profile.last_name}, ${allDoctors[i].profile.first_name}, ${allDoctors[i].practices[i].phones[i].number}</li>`);
          $('.showAddresses').append(`<li>${allDoctors[i].practices[i].visit_address.street}, ${allDoctors[i].practices[i].visit_address.city}, ${allDoctors[i].practices[i].visit_address.state}, ${allDoctors[i].practices[i].visit_address.zip}</li>`);
        }
      }
    }, function(error){
      $('.errors').text(`There was an error processing your request: ${error.message}`);
    });
  }
} //end Doctor class
