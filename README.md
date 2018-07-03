# DevConnector

Practicing MERN Stack apps through building a social media hub for developers.
Following the Brad Traversy tutorial.

## Getting Started

* 1.) Create `config/keys_dev.js` and export an object which contains your mongodb URI and your secret keystring. It should look something like this:

```
module.exports = {
  mongoURI: "<YOUR MONGODB URI HERE>",
  secretOrKey: "<YOUR SECRET KEY HERE>"
};
```

* 2.) run `yarn` or `npm install` in the root directory and in the client directory:

```
yarn ; cd client ; yarn
```

* 3.) Use `yarn run dev` to run the express server and the react frontend. Once loaded, Sign Up to create an account, then log in.

```
yarn run dev
```

* 4.) once logged in, create your profile, add education/experience, and create posts in the Post Feed
