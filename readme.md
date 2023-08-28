## Table of Contents

1. [Introduction](#1-introduction)
2. [Installation](#3-installation)
3. [Usage](#3-usage)
4. [Methods](#4-methods)
5. [Libraries Used](#5-libraries-used)
6. [Contact](#6-contact)

---

## 1. Introduction

Welcome to the documentation for the Petshop API. This project aims to provide a RESTful API for managing petshop services.

## 2. Installation

To install and set up the project locally, follow these steps:

1. Clone the project repository from GitHub:

```bash
git clone https://github.com/alefnsc/petshop-api.git
```

2. Navigate to the project directory:

```bash
cd petshop-api
```

3. Install project dependencies using npm:

```bash
npm install
```

## 3. Usage

After installation, you can start the server by running:

```bash
npm start
```

This will start the Express server and make the API available at http://localhost:3000.

## 4. Methods

**ElephantSQL(Postgres)**

- **getOwners():** Retrieves all owners.
- **getOwner(id):** Retrieves an owner by its unique ID.
- **createOwner(owner):** Creates a new owner.
- **updateOwner(id, owner):** Updates an existing owner by its ID.
- **deleteOwner(id):** Deletes an owner by its ID.
  
- **getPets():** Retrieves all pets.
- **getPet(id):** Retrieves an pet by its unique ID.
- **createPet(pet):** Creates a new pet.
- **updatePet(id, pet):** Updates an existing pet by its ID.
- **deletePet(id):** Deletes an pet by its ID.
  
- **getService(id):** Retrieves an service by its unique ID.
- **createService(service):** Creates a new service.

**MongoDB Atlas**

- **getPost():** Retrieves all posts.
- **createPet(post):** Creates a new post.
- **creteComment(postId, comment[nome, conteudo]):** Create a new comment on existing post by MongoDB ID.

To view object model check [Models](/models).

## 5. Libraries Used

- **cors:** A package that enables Cross-Origin Resource Sharing (CORS) in Express applications, allowing controlled access to resources from different origins.

- **express:** A popular web application framework for Node.js used to create APIs and web servers. It simplifies routing, middleware, and handling HTTP requests.

- **mongodb:** The official MongoDB driver for Node.js, providing methods for interacting with MongoDB databases.

- **nodemon:** A tool that monitors changes in your source code and automatically restarts the Node.js application when changes are detected. Great for development.

- **pg:** A PostgreSQL client for Node.js that enables you to interact with PostgreSQL databases.

- **sequelize:** A promise-based Node.js ORM (Object-Relational Mapping) for relational databases like PostgreSQL, MySQL, SQLite, etc.

- **winston:** A popular logging library for Node.js that offers flexible and configurable logging options.

## 6. Contact

- **Maintainer:** Alexandre Fonseca
- **Email:** alexandrefonsecach@gmail.com
