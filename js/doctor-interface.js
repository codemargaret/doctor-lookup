var apiKey = require('./../.env').apiKey;
import { Doctor } from './../js/doctor.js';

$(document).ready(function() {

  $('#medical-lookup').submit(function(event) {
    event.preventDefault();
    let doctor = new Doctor();
    let issue = $('#issue').val();
    let name = $('#name').val();
    let promise = doctor.makePromise(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${issue}&location=or-portland&skip=0&limit=10&user_key=5a9aa1f8eda796b71fdded86547df837`);
    doctor.callApi(promise, issue, name);
  });
});
