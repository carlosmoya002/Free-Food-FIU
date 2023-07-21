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
┃ ┣ ┗ db.js
┃ ┣ controllers
┃ ┣ ┣ eventController.js
┃ ┣ ┗ userController.js
┃ ┣ middleware
┃ ┣ ┣ authMiddleware.js
┃ ┣ ┣ errorMiddleware.js
┃ ┣ ┗ fileUploadMiddleware.js
┃ ┣ models
┃ ┣ ┣ eventModel.js
┃ ┣ ┗ userModel.js
┃ ┣ routes
┃ ┣ ┣ eventRoutes.js
┃ ┣ ┗ userRoutes.js
┃ ┣ utils
┃ ┣ ┗ generateToken.js
┃ ┗ server.js
┣ frontend/
┃ ┣ logo/
┃ ┃ ┗ logo.png
┃ ┣ public/
┃ ┃ ┗ vite.svg
┃ ┣ src/
┃ ┃ ┣ assets/
┃ ┃ ┣ ┗ react.svg
┃ ┃ ┣ components/
┃ ┃ ┣ ┣ event-creation/diet-option-selectors/
┃ ┃ ┣ ┣ ┣ allergies/
┃ ┃ ┣ ┣ ┣ ┣ AllergyOptions.jsx
┃ ┃ ┣ ┣ ┣ ┗ AllergySelectComponent.jsx
┃ ┃ ┣ ┣ ┣ preferences/
┃ ┃ ┣ ┣ ┣ ┣ PreferenceOptions.jsx
┃ ┃ ┣ ┣ ┣ ┗ PreferenceSelectComponent.jsx
┃ ┃ ┣ ┣ ErrorMsg.jsx
┃ ┃ ┣ ┣ EventBox.jsx
┃ ┃ ┣ ┣ FormContainer.jsx
┃ ┃ ┣ ┣ Header.jsx
┃ ┃ ┣ ┣ Hero.jsx
┃ ┃ ┣ ┣ Loader.jsx
┃ ┃ ┣ ┗ PrivateRoute.jsx
┃ ┃ ┣ css/
┃ ┃ ┣ ┣ EventBox.css
┃ ┃ ┣ ┗ EventCreationScreen.css
┃ ┃ ┣ screens/
┃ ┃ ┣ ┣ EventCreationScreen.jsx
┃ ┃ ┣ ┣ EventsScreen.jsx
┃ ┃ ┣ ┣ HomeScreen.jsx
┃ ┃ ┣ ┣ LoginScreen.jsx
┃ ┃ ┣ ┣ ProfileScreen.jsx
┃ ┃ ┣ ┣ RegisterScreen.jsx
┃ ┃ ┣ ┗ UpdateProfileScreen.jsx
┃ ┃ ┣ slices/
┃ ┃ ┣ ┣ apiSlice.js
┃ ┃ ┣ ┣ authSlice.js
┃ ┃ ┣ ┣ eventApiSlice.js
┃ ┃ ┣ ┗ usersApiSlice.js
┃ ┃ ┣ App.jsx
┃ ┃ ┣ index.css
┃ ┃ ┣ main.jsx
┃ ┃ ┗ store.js
┃ ┣ uploads/
┃ ┃ ┗ placeholder.txt
┃ ┣ .eslintrc.cjs
┃ ┣ .gitignore
┃ ┣ index.html
┃ ┣ package-lock.json
┃ ┣ package.json
┃ ┗ vite.config.js
┣ .gitignore
┣ package-lock.json
┣ package.json
┗ README.md
```

The backend folder contains all the resources to make a successful connexion with the Mongo Database. Also it has al the files to du the CRUD operation for the Events and Users collections.

The frontend folder contains all the resources to create the UI, such as the design of the pages. Also, it has the files necessary to connect the pages to the backend. Furthermore, the folder uploads is where the images for the events are stored locally.

### Installation & Running steps

The run the webapp it is necesary to install Node.js locally. The necesary installation file is at:

```
https://nodejs.org/en/download
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
