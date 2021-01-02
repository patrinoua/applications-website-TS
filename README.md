# applications-website-TS

https://applications-website-ts.web.app/

As an owner for a property you are able to list all the applicants to your property, see their
status, and search for specific applicants.

<!-- design of this page
https://www.figma.com/file/BgajmFzDq2h4BwVrVFegBn/mcmakler-applicants-page?node-id=0%3A1 -->

● Mock api.
● The page shows loading while fetching the data from the api (Lazy Loading)

<!-- ● The page shows an error message if the request failed to load applicants -->

● Applicants are grouped based on “status”
○ Available statues are “Appointment_Set”, “Property_Viewed”, “Interested” and
“Offer_Accepted”

● Users can search for an applicant by first name, last name, or email address.
● Search term updates the query param as following
○ /page/?search=fred (and this will be a shareable url)
● Applicant card shows “bid” if applicant has bid
● Colors on applicants cards are random, and letters are (first name + last name) initials
● “Bids” and “Status” filters do not function, but are implemented in the UI
● Applicant cards on mobile are scrollable horizontally

Also:
● mobile first responsive design
● Solution Deployed on firebase [link](https://applications-website-ts.web.app/)

<!-- ● Consider how you handle translations and localization
Stack -->

## Stack

- React [Create React App](https://facebook.github.io/create-react-app/) [v4.0.1](https://github.com/facebook/create-react-app/releases/tag/v4.0.1)
- [TypeScript](https://www.typescriptlang.org/) [v4.0.5](https://github.com/microsoft/TypeScript/releases/tag/v4.0.5)
- [Material UI](http://material-ui.com/)
- [Styled-Components](https://styled-components.com/): CSS-in-JS
- [Storybook](https://storybook.js.org/)
- (Lazy Loading](https://reactjs.org/docs/code-splitting.html)
  [ESLint](https://eslint.org/)
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint#readme)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
