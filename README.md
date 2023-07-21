# Free-Food-FIU

Authors:
Capstone 2: Carlos Manuel Moya Ramirez, Brian Sanchez, Jose Rodolfo Espinoza Garcia, Annie Nguyen, Sebas Peña
Product Owner: Carlos Manuel Moya Ramirez

The project aims to address food waste and food insecurity by creating a platform that connects students with campus events that offer free food. The platform will provide information about upcoming events, allowing students to reduce food waste and find ways to address food insecurity. Students can search for events based on location and type of food, and view pictures of the food offered at the event.

---

### Project Structure

As a tree structure for better visualizing of the project's organizatio:

```
Free-Food-FIU/
┣ backend/
┃ ┣ config
┃ ┣ ┣ db.js
┃ ┣ controllers
┃ ┣ ┣ eventController.js
┃ ┣ ┣ userController.js
┃ ┣ middleware
┃ ┣ ┣ authMiddleware.js
┃ ┣ ┣ errorMiddleware.js
┃ ┣ ┣ fileUploadMiddleware.js
┃ ┣ models
┃ ┣ ┣ eventModel.js
┃ ┣ ┣ userModel.js
┃ ┣ routes
┃ ┣ ┣ eventRoutes.js
┃ ┣ ┣ userRoutes.js
┃ ┣ utils
┃ ┣ ┣ generateToken.js
┃ ┗ server.js
┣ frontend/
┃ ┣ assets/
┃ ┃ ┣ icons/
┃ ┃ ┗ images/
┃ ┣ components/
┃ ┃ ┣ activities/
┃ ┃ ┣ activity/
┃ ┃ ┣ auth/
┃ ┃ ┣ cardDB/
┃ ┃ ┣ cardsLatest/
┃ ┃ ┣ Completed/
┃ ┃ ┣ custHooks/
┃ ┃ ┣ forumComp/
┃ ┃ ┣ Game Option/
┃ ┃ ┣ Game Options/
┃ ┃ ┣ homepage-sects/
┃ ┃ ┣ lingDetection/
┃ ┃ ┣ lingDiscrimination/
┃ ┃ ┣ lingIdentification/
┃ ┃ ┣ nav/
┃ ┃ ┣ Option/
┃ ┃ ┣ options/
┃ ┃ ┣ playButton/
┃ ┃ ┣ pop/
┃ ┃ ┣ progressBar/
┃ ┃ ┗ store/
┃ ┣ helpers/
┃ ┃ ┣ allActivities.js
┃ ┃ ┣ allDashboardOptions.js
┃ ┃ ┗ allDetectionGames.js
┃ ┣ pages/
┃ ┃ ┣ activityPage/
┃ ┃ ┣ auth/
┃ ┃ ┣ dashboard/
┃ ┃ ┣ forum/
┃ ┃ ┣ gamePage/
┃ ┃ ┣ homePage/
┃ ┃ ┣ ling/
┃ ┃ ┣ myProfile/
┃ ┃ ┣ reset/
┃ ┃ ┗ settings/
┃ ┣ App.js
┃ ┣ firebase-config.js
┃ ┣ index.css
┃ ┗ index.js
┣ .env
┣ .gitattributes
┣ .gitignore
┣ package-lock.json
┣ package.json
┗ README.md
```

Code/Auditory Training App is the directory that contains all of the code required to make app functional. If/When other directories are added, they will be used for documentation.

The Auditory Training App/src directory is where all the source code for the application lies. The main entrypoint of the application is through index.js, which is where the application is created, and immediately calls App.js where all other components that change the UI must be referenced.

Project Structure provides a visual imagery of how classes call each other and how the project is structured.

### Installation & Running steps

The easiest way to get started with Auditory Training App is to install install Node.js. You can do that by going to :

```
https://nodejs.org/en/.
```

This will automatically install the Node Package Manager (NPM).

It is also necessary to be able to run git commands in your terminal (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), or use the dektop app (https://desktop.github.com/).

After Node.js is installed, and you can run git commands/or the app, you will need to clone the GitHub repository to your local machine using the git clone command.

Using your terminal, You can now install all the necessary dependencies for the node_modules folder by navigating to the directory folder, and running :

```

npm install

```

It is necessary to create a firebase-config.js file. This should be placed in the src folder. To find the firebase key that should be contained in that file, please refer to the following website: https://support.google.com/firebase/answer/7015592#web&zippy=%2Cin-this-article 

Please be advised that you will have to include an export statement including db, auth, and storage.

The app can now be started on your local machine by running:

```

npm start

```
