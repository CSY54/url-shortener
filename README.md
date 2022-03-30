# URL Shortener

This project is a homework of Dcard backend intern.

The document is on [Google Drive](https://drive.google.com/file/d/1AreBiHDUYXH6MI5OqWpKP-f6-W0zA8np/view).

## Getting Started

1. Create `.env` file from example
  ```shell
  $ cp .env.example .env
  ```
2. Fill in the variables in the `.env` file
3. Start the server
  ```shell
  # Development
  $ yarn dev

  # Production
  $ yarn prod
  ```

## Introduction

The stack is as follow
- Framework
  - Express
    - A lightweight framework that fits my need
- Database
  - SQLite
    - Since this is a small project, I choose to use SQLite to store the data
- Library
  - prisma 
    - An ORM to interact with the database
  - dotenv
    - Load environment variables from `.env` file
  - helmet
    - Help secure the app by setting various HTTP headers
  - is-url
    - Check the reqeust URL is a valid one without requesting to it
  - morgan
    - A logger
  - nodemon
    - Auto-reload server when file changes
  - superstruct
    - Validate the request schema and conform the response body
  - eslint\*, prettier
    - Perform stylecheck and force the style of the code - Airbnb are used here

## Routes

### POST `/api/v1/urls`

#### Request Body

```js
{
  url: string,
  expireAt: string
}
```

#### Response

- 200 Created successfully
  ```js
  {
    id: string,
    shortUrl: string
  }
  ```
- 400 Bad request
  ```js
  {
    message: string
  }
  ```

### GET `/:urlId`

#### Parameter

- `urlId`: string

#### Response

- 302 Redirect to the original URL
- 404 Link not found or expired (maybe 410 is better)
  ```js
  {
    message: string
  }
  ```

## TODO

- [ ] Cache
