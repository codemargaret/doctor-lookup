# _Doctor Lookup_

#### _An application that allows a user to look up doctors to treat specific medical issues, 10.20.2017_

#### By _**Margaret Berry**_

## Description
_This application makes an API call on the BetterDoctor API to retrieve information about doctors in the Portland area.  Users can search doctors by name or medical issue._

## Setup/Installation Requirements
_Run the following commands in Terminal:_

1. `$ git clone` [this repository](https://github.com/codemargaret/doctor-lookup.git)
2. `$ cd doctor-lookup`
3. _Go to the [Better Doctor API](https://developer.betterdoctor.com/) to create your own API key._
4. `$ touch .env`
5. _In the .env file, add the following code:_
  * _exports.apiKey = "your_api_key";_
6. `$ npm install`
7. `$ bower install`
8. `$ gulp build`
9. `$ gulp serve`

## User Stories
* _A user can enter a medical issue to receive a list of doctors in the Portland area that fit the search query._
* _A user can enter a name to receive a list of doctors in the Portland area that fit the search query._
* _If the query response includes any doctors, a user can see the first name, last name, address, phone number, website and whether or not the doctor is accepting new patients._
* _If the API call results in an error the user will see a notification that states what the error is._
* _If no doctors meet the search criteria, the application should return a notification that states that no doctors meet the criteria._

## Specifications
| Spec                                                | Input       | Output           |
|-----------------------------------------------------|-------------|------------------|
| Returns doctors that treat a specific medical issue | muscle pain | Preciado, Xavier |
| Returns doctors by name                             | Preciado    | Preciado, Xavier |

## Known Bugs
_There are no known bugs at this time._

## Future Features
_Refactor logic into more separate methods._

## Support and contact details
_If you have issues, questions, ideas, or concerns, please contact [Margaret](codeberry1@gmail.com). Feel free to make a contribution to the code._

## Technologies Used
* _JavaScript_
* _Node_
* _Bower_
* _Jasmine_
* _Karma_

### License
*This software is licensed under the MIT license.*

Copyright (c) 2017 **_Margaret Berry_**
