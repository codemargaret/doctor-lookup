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
      for(let i = 0; i < doctorNum; ++i){
        specialties = allDoctors[i].specialties;
        //returns one object within an array
        let specObject = specialties.pop();
        //removes the object from the array
        let description = specObject.description;
        if (description.match(issueToFind)){
          $('.showDoctors').append(`<li>${allDoctors[i].profile.last_name}, ${allDoctors[i].profile.first_name}</li>`);
        } else {
          $('.showDoctors').text("No results found.");
        }
      }
    }, function(error){
      $('.errors').text(`There was an error processing your request: ${error.message}`);
    });
  }
} //end Doctor class
