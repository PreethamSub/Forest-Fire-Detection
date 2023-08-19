# Forest-Fire-Detection
A complete web application that uses CNN to detect forest fires using satellite images

<img src="https://github.com/PreethamSub/Forest-Fire-Detection/blob/main/output.png">

## To run the project
- Clone the github repository
- Open the `Forest_Fire_detection.ipynb` file in Google Colaboratory.
- Run all the cells in the notebook
- The colab notebook asks for google drive permissions. Give the permissions to store the github files.
- The last cell will run a web API on a specific url. Copy the url and paste it in the “appscript.js” in the front end javascript code
- Optionally, set the Bing Maps API key to avoid limitations in using the maps API.

## Copying the API endpoint
The project uses FastAPI to connect to the front end. Make sure you copy the endpoint correctly

<img src="https://github.com/PreethamSub/Forest-Fire-Detection/blob/main/Backend.png">
<img src="https://github.com/PreethamSub/Forest-Fire-Detection/blob/main/Frontend.png">

## Bing Maps API
The project also uses the Bing Maps API to get the satellite imagery. An API key is optional and is not required to run this project. To avoid the limitations the API key can be created <a href="https://www.microsoft.com/en-us/maps/choose-your-bing-maps-api">here</a>

## Live Demo
The project's frontend is hosted on `glitch.com` a frontend hosting service. A live demo can be found here: <a href="https://glitch.com/edit/#!/fire-detection?path=index.html%3A1%3A0"> Live Demo </a>.
