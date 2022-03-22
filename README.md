# Trello Clone in React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This is a Trello clone using React. For now, some initial data is being fetched from a local file named data.js. 

It is possible to add new cards to a List, add a new List as well as edit the title of an existing List.
The user can drag and drop cards in the same list as well as other lists and drag and drop an entire list to change the order in which the lists appear. Drag and drop feature is using react-beautiful-dnd package.

## Packages and Technologies used:

[React](https://reactjs.org/docs/getting-started.html)

[React-hooks](https://reactjs.org/docs/hooks-intro.html)

[CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

[react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd)

## Improvements:

1. Replace local data with a dummy realtime database using [Firebase](https://firebase.google.com/). This will make data persistance easier and data can then be fetched/updated using Javascript's inbuilt fetch() API or [axios](https://www.npmjs.com/package/axios) HTTP client.
2. Add extensive unit test cases using [jest](https://jestjs.io/).

## Steps to start the project on local:

1. Clone this repository.
2. In the local folder execute `npm install` to install all the project dependencies.
3. Run `npm start` and open [http://localhost:3000](http://localhost:3000) to view this in your browser.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
