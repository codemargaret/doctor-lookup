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
      let specialties;
      for(let i = 0; i < 5; ++i){
        specialties = body.data[i].specialties;
        if (specialties.includes(issueToFind)){
          alert("I found a thing!");
        }
      }
    }, function(error){
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  }
} //end Doctor class
