how to install tailwind css -->

step 1 //
npm init -y
npm install parcel 
src
src/index.html 

step 2 //
create a file name .postcssrc in root folder
and paste 
{
    "plugins":{
        "@tailwindcss/postcss":{}
    }
}


step 3 // 
create index.css in src and paste below code :
@import "tailwindcss";


step 4 paste below code in index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="./index.css" type="text/css" rel="stylesheet">
</head>
<body>
    <h1 class="text-3x1 font-bold underline">Hello hunt </h1>
</body>
</html>


and run below command in terminal 
npx parcel src/index.html


///*****************************************************************************************


whenever dtry to download any depedency first check it version in package.json


************************ to get access to fatch data from any website
https://cors-anywhere.herokuapp.com/


---------------------------- To CREATE ROUTES DOWNLOAD REACT ROUTES
FIRST INSTALL react-router by npm install react-router-dom
https://reactrouter.com/start/data/installation   GO TO THIS LINK AND CHECK IMPORT FOR BROWSER ROUTER

import { createBrowserRouter } from "react-routerdom"; 
--> import this one for creating routes  

"react-router-dom" you will use this to route and link


https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.9654&lng=77.5428&restaurantId=1066525&submitAction=ENTER

https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.9654&lng=77.5428&restaurantId=383490&submitAction=ENTER



