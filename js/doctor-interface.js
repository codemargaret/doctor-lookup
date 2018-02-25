var apiKey = require('./../.env').apiKey;
import { Doctor } from './../js/doctor.js';

$(document).ready(function() {

  $('#medical-lookup').submit(function(event) {
    event.preventDefault();
    $('#showDoctors').text('');
    $('.noResults').text('');
    let doctor = new Doctor();
    let issue = $('#issue').val();
    let name = $('#name').val();
    let promise = doctor.makePromise(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${issue}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`);
    doctor.callApi(promise);
  });
});
