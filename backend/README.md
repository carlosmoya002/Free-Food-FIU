# Backend (Express / Node)

## Introduction

Our application uses the MERN stack, which utilizes React for the frontend and Express/ Node for the backend with Mongodb for the database.

Our backend consists of an Express app created using Node.js. It is our API we use to reach the React frontend application. Is is also how we communcate with our Mongodb database, which lives in Mongodb Atlas.

You can read this README to get a better understanding of how to run the backend during development and what you'll need to do beforehand.

## Context

The file `server.js` is the entrypoint of the backend portion of our application. It is where we register our Express app and connect to our API endpoints as well as the database.

The routes directory contains .js files that specify the REST API endpoints for the different data collections that our application contains.

## Prerequisites

Before running the application locally during development, you must create a `.env` file: 

- `touch .env`

This is where you'll place environment variables used by the backend. In this way, have to set up the variables while you are in your local environment in order to avoid hardcoding data that is either sensitive or we'd like to be able to configure differently depending on the context.

So far, this is what you'll need in your `.env` file:

- `PORT=<Port # (usually 4000)>`

- `MONGODB_URI=<Mongodb URI from Mongodb Atlas (click on the connect button; requires admin password)`

## How to Run

To run the backend portion of the application, you currently use the following script command:

- `nodemon server.js`

This script will run the backend on a live server so that changes made to your code will be reflected on the host address in real-time (while the server is running; you only have to run this command once and then continue development while it's running).

## Common Issues

When starting and stopping the application using commands, you may run into the following error....

- `Error: listen EADDRINUSE: address already in use :::<whatever your port number is>`

...which just indicates that you have ran the application, canceled it, and are trying to run it again but it is telling you that the port is still in use because of a previous run you did.

To fix this, run the following command...

- `sudo lsof -i :<whatever your port number is>`

...and this will list the current processes running in that port. Locate the PID (port id) which will be listed and make note of it. Then run:

- `kill -9 <PID>`