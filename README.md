# API Docs Hub

This project documents the Unsplash Photos API and the Rick & Morty APIs. Its goal is to help business owners understand the use cases of APIs and developers to know how to utilize the APIs. The project also has usecases for the two APIs to showcase how they work.

## Table of contents

1. [Project Structure](#project-structure)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)

## Project structure 

- **/src**: Contains all the source code for the project.
  - **/components**: Reusable UI components used throughout the application.
    - `Navbar.js`: Navigation component.
    - `Footer.js`: Footer component.
    - `LandingPage.js`: Landing page component.
    - `UnsplashDocs.js`: Component for displaying Unsplash API documentation.
    - `RickAndMortyDocs.js`: Component for displaying Rick and Morty API documentation.
  - **/pages**: Components that represent different pages of the application.
    - `Home.js`: Main landing page or homepage component.
    - `Unsplash.js`: Page component for Unsplash API use case.
    - `RickAndMorty.js`: Page component for Rick and Morty API use case.
  - **/utils**: Utility functions and modules.
    - `api.js`: Contains functions to interact with external APIs (Unsplash and Rick & Morty APIs).
  - `App.js`: Main application component where routing and overall layout are defined.
  - `index.js`: Entry point of the React application where the app is rendered into the DOM.
- **/tests**: Test files for unit or integration testing.
  - `App.test.js`: Tests related to the main App component.
  - `UnsplashDocs.test.js`: Tests related to Unsplash API documentation component.
  - `RickAndMortyDocs.test.js`: Tests related to Rick and Morty API documentation component.
- **.eslintrc.js**: ESLint configuration file for maintaining code quality and style consistency.
- **package.json**: Configuration file for npm dependencies and scripts.
- **README.md**: Project documentation file providing an overview, installation instructions, usage guidelines, API documentation, contributing guidelines, and license information.

## Technologies Used
- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **API Client**: Axios for making API requests
- **Code Linting**: ESLint
- **Testing**: Jest and React Testing Library
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel

## Installation
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

