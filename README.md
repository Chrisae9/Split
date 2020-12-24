# Split

A react app to split a grocery bill between contributors.

## Setup

Head over to the [Google Developer Console](https://console.developers.google.com/apis/credentials).

Create a new OAuth client ID.

Edit the new credentials settings and make sure that the correct URI origins are set under `Authorized JavaScript origins` and `Authorized redirect URIs`.

For local/testing use `http://localhost:{port}`.

For production use `https://{domain}`.

Create a `.env` in the project source folder and set these environment variables accordingly:

```
REACT_APP_GOOGLE_CLIENT_ID = {Client ID from Google Dev Console}
REACT_APP_GOOGLE_CLIENT_SECRET = {Client secret from Google Dev Console}
REACT_APP_SERVER = {REST API url}
```

If hosting on a GitHub pages branch you will need to set the Google Client ID & Secret using GitHub Secrets.

For more information on how to setup the REST API visit: https://github.com/Chrisae9/split-backend. Unfortunately this cannot be hosted on GitHub pages since it only allows for static websit hosting.

Install dependencies.

`npm install`

## Run

`npm start`

To deploy to GitHub pages make sure the correct homepage is set at the top of `package.json`

`npm run deploy`

