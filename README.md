# Okta x Firebase // Custom Authentication proof of concept

Proof of concept for integrating Okta authentication with Firebase authentication.

## Configuration

Ensure that the frontend application has the correct envrionment variables.
These should be provided in a `.env` file in the `app` directory and should provide
the parameters required log in with Okta.

`.env` should contain these fields:

```
REACT_APP_CLIENT_ID=
REACT_APP_AUTH_URL=
REACT_APP_REDIRECT_URI=
```

Similarly, these variables also need to be provided to Firebase functions.
It expects this configuration:

```
  "oktafirebasepoc": {
    "oktaurl": value,
    "clientid": value,
    "audience": value
  }
```

Use the following command to check the current configuration.

```
firebase functions:config:get
```

See the [Firebase documentation](https://firebase.google.com/docs/functions/config-env)
for more information on how to configure this.

## Running this project locally

1. Install dependencies

```
yarn install-all
```

2. Sign in to Firebase with an account that has access to the project that this app will be hosted on (see `.firebaserc`)

```
firebase login
```

3. Navigate to the `app` directory and start the application on `localhost`

```
cd app
yarn start
```

## Deploying

1. Login to Firebase using `firebase login`.

2. Use one of the following commands to deploy a particular component of the project.
   Note that these commands will both **build** and **deploy** your project.

```
// Deploy app (Firebase hosting)
yarn deploy:app

// Deploy cloud functions
yarn deploy:functions
```

Or alternatively, use this command to deploy the entire application:

```
yarn deploy
```

### License

[MIT](LICENSE)
