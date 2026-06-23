# Getting Started
Create react app...

    npx create-react-app my-app

This will launch the create project in directory my-app. This creates a basic folder structure.

path|description
--|--
/node_modules|holds our dependancies
index.html|holds our div that everything loads into
/src|holds source code for our components
/public|holds static content

Once you have generated the project you can fire up the dev server with...

    npm run start

If you ever need to create or recreate the node_modules folder you can run...

	npm install

## index.js 
index.js kick starts your application. In the starter project it includes the App component that lives in App.js

# Creating Components

Components contain templates and logic. Babel converts JSX into the html and javascript. 

Starting with react 17 you no longer need to import react in your components.

### Styling Components with [[CSS]]
To apply CSS styles use `className` instead of `class` when working with an HTML elements you wish to style. 

`<div className="myCustomClass">`


