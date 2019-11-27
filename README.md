# Burger_App
Build a nice burger matching your taste

The application is developed using the follwing technologies
1) React
2) Redux
3) Java Script(Es6+)
4) HTML5 and CSS3

Use command prompt to run the following commands

1) Use the following command to create the react app with predefined folder structure

create-react-app {folder name} --scripts-version 1.1.5

2) Now replace all the files of your src folder with the files of above src folder.

3) For using external css some folowing changes has to be made 
Open the project in visual studio code editor and run the following command in vs terminal

npm run eject

Then it will create a config folder in your root folder
now you have to change some code in the following two files of config folder

=> In webpack.config.prod.js file

replace the following code 
{ importLoaders: 1,
  minimize: true,
  sourceMap: shouldUseSourceMap,}
  
with 
{  minimize: true,
   sourceMap: shouldUseSourceMap,
   modules: true,
   localIdentName: '[name]__[local]__[hash:base64:5]'
}

=> In webpack.config.dev.js file

replace the following code 
{
 importLoaders: 1,
},

with
{
  importLoaders: 1,
  modules: true,
  localIdentName: '[name]__[local]__[hash:base64:5]'
 },
 
4)now run the following command in VS terminal for checking prop-types

npm install --save prop-types

5) now run the following command for http requests (AJAX)

npm install --save axios

6) now run the following command for routing

npm install --save react-router react-router-dom

7)to install redux run the following commands one by one

npm install --save redux

npm install --save react-redux

npm install --save redux-thunk


8) after running all the above commands in visual studio code terminal 
to start the application and to see the application in browser run the following command in command prompt

npm start






