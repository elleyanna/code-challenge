This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# STRATIS HTML interface

Create a simple web interface that will allow the user to do the following tasks:

- Enter in a unit number and display to the screen all the residents of that unit.
- Enter in a first and last name and display all the information we have about that user. (Name, unit of residence, role(s) on property, and devices they are able to control.)

Try to anticipate the user's needs and create an interface that meets them.

Ideally, your final product will work as expected and look nice, but if you are running out of time, focus on getting your JavaScript to work over adding in additional styling. Do not spend more than four hours total on the project.

You can add in additional files to the project folder (e.g. CSS files or icons), but please make sure that we can load the final product in the latest version of a Chrome browser.

## About the data

Sample data are in the file property_data.js. You should not change anything within this file.

The "roles" key on people objects refers to the roles a user has on that property, which impacts what devices they can control.

A person may control a device if:

- It is associated with their unit of residence.
- The device is marked as admin_accessible and the user is an admin.
  - For example, Mackenzie Carroll can control the thermostat, lights, and lock that have a unit value that matches her residence, 102
  - Zakiyya Shabazz can control any device that has a unit value of 201, plus any "Sunnee" light and any lock (because she is an admin and those devices all have admin_accessible marked as true.)
