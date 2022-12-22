# React News Feeds App

This is a Frontend project that uses [this API](rss2json.com/), and as its name suggests it converts RSS into JSON. That in turn makes possible to take RSS from news feeds. This app takes any RSS link, downloads the first 10 news to them show them at any moment. Saved RSS links can be deleted at any point. 

## Used Technologies

Apart from the obvious ones (*HTML* and *JS*), it also uses: 
- **SCSS** for most of the visual design.
- **React** for the design of the structure and logic of the app.
- **Bootstrap** as another tool for the design of the app.
- **Axios**, the javascript library, to make requests to the *API*.
- And **Jest**, to test the app.

## Wireframe

[Click here to open the wireframe](./public/wireframe.pdf)

## Unsolved problems

- News feeds don't update automatically.
- Links aren't filtered
- The number of news is limited by the API

## How to install

To use this project you would need to follow these steps:
- Clone the repo
- Install the dependencies with `npm install`
- Start the project with `npm start`