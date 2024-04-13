# Fyle Frontend Challenge

GitHub Repo Finder is an Angular application that allows users to search for GitHub repositories and view details about the users who own them.


### Project Screenshots
![screenshot1](https://github.com/Harshal2502/fyle-internship-challenge-23/assets/92778686/42a40611-3310-4daf-9468-2dca4328b70e)

![screensshot2](https://github.com/Harshal2502/fyle-internship-challenge-23/assets/92778686/02222540-3646-4100-a3b5-97894cb2a0c8)

![screenshot3](https://github.com/Harshal2502/fyle-internship-challenge-23/assets/92778686/20fc10ce-833f-4339-9c59-ff900ef6102a)


## Introduction

GitHub Repo Finder is a web application built with Angular that provides users with the ability to search for GitHub repositories based on a GitHub username. The application retrieves user and repository data from the GitHub API and displays it in a user-friendly interface. Users can easily explore repositories and gain insights into GitHub profiles.

## Features

GitHub Repo Finder offers the following key features:

1. **GitHub Repository Search:** Users can search for GitHub repositories by providing a GitHub username.

2. **User Profile Information:** The application displays detailed user information, including the user's name, bio, location, and blog.

3. **Repository Listings:** Users can view repositories owned by the searched GitHub user, with information about each repository's name, description, and other details.

4. **Server-Side Pagination:** GitHub Repo Finder implements server-side pagination for repository display. Users can choose how many repositories they want to view on one page (10 bydefault, with a maximum of 100).

5. **Responsive Design:** The application is designed to work seamlessly on various screen sizes, including mobile, tablet, and desktop.
   
## Dependencies

GitHub Repo Finder relies on the following key dependencies:

1. **Angular 14+:** The application is built using the Angular framework, providing a robust and maintainable structure for the frontend.

2. **Tailwind CSS:** Tailwind CSS is used for styling the application. It offers a utility-first approach for designing user interfaces and helps maintain a consistent design system.

3. **Axios:** Axios is a popular library for making HTTP requests. It is used to interact with the GitHub API and fetch user and repository data.

4. **GitHub API:** The application interacts with the GitHub REST API to retrieve user and repository information. You can find detailed information about the GitHub API in the [official documentation](https://docs.github.com/en/rest/reference).

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js and npm are installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:
```bash
https://github.com/Harshal2502/fyle-internship-challenge-23.git
```
2. Navigate to the project directory:
```bash
cd fyle-internship-challenge-23
```

3. Install project dependencies:
```bash
npm install
```

### Running the Application

To run the GitHub Repo Finder, use the following command:

```bash
ng serve
```

This will start the development server. Open your web browser and navigate to http://localhost:4200/ to access the application.

## Running Tests

This project includes unit tests with 100% code coverage for user-info component and api-service to ensure code quality and reliability. To run the unit tests, you can use the following npm scripts:

To run service tests:
```bash
npm run test:apiservice
```

To run component tests:
```bash
npm run test:userinfo
```
These commands will execute the tests and generate a code coverage report.

### Testing Libraries:

1. **Jasmine**: This project includes the use of Jasmine testing framework for writing unit tests. Jasmine is a widely adopted framework for testing JavaScript and TypeScript code. It provides an easy-to-read syntax for writing test cases and assertions.

2. **Karma**: Karma is a test runner that executes the unit tests. It launches a web server to run tests in real browsers, ensuring that our code works correctly in different environments.

3. **Angular Testing Utilities**: We leverage Angular's testing utilities, including TestBed, ComponentFixture, and async, to set up testing environments, create components, and test component behavior.

## Acknowledgments

It was a fun excerise! Special thanks to ![FyleHQ](https://github.com/fylein) for providing this fantastic learning opportunity.

