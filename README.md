# E-Commerce Back End

## Description

This challenge was to build the back end for an e-commerce website. It works with Express.js API and Sequelize to interact with a PostgreSQL database. The walkthrough video can be found [here](https://drive.google.com/file/d/1s7N0ClafLIgskt6gIZb_Ynp5ANdq8Xx3/view?usp=sharing).

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Table of Contents

* [Description](#description)

* [User Story](#user-story)

* [Acceptance Criteria](#acceptance-criteria)

* [Installation](#installation)

* [Usage](#usage)

* [Tests](#tests)

* [Contributing](#contributing)

* [Screenshot](#screenshot)

* [Questions](#questions)

## Installation

💾

`npm init`

`npm i dotenv express pg sequelize`

## Usage

💻

This application is used to GET, create (POST), update (PUT), and DELETE data for each route (categories, products, tags)

## Tests

N/A

## Contributing

* [**Vanessa Bou**](https://github.com/rvbouu)

## Screenshot

### Catergory Routes
![gif of application functionality](./images/categories.gif)

### Product Routes
![gif of application functionality](./images/products.gif)

### Tag Routes
![gif of application functionality](./images/tags.gif)



The full video showing the application functionality can be found [here](https://drive.google.com/file/d/1s7N0ClafLIgskt6gIZb_Ynp5ANdq8Xx3/view?usp=sharing).

## Questions

  [GitHub](https://github.com/rvbouu)

  For additional questions or concerns, please email me at rvbouu@gmail.com