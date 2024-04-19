# Recipe Information Page

This project is a web page where you can view books and recipes related to cooking. Data is stored using MongoDB, and the backend is built using Express. The frontend is developed using React and Vite.

## Backend API

The backend API is built using Express and provides the following endpoints:

- `/api/recipes`: Endpoint to retrieve all recipes.
- `/api/recipe/:recipeId`: Endpoint to retrieve a specific recipe.
- `/api/latestrecipes`: Endpoint to retrieve the latest recipes.
- `/api/books`: Endpoint to retrieve all books.
- `/api/book/:bookId`: Endpoint to retrieve a specific book.
- `/api/latestbooks`: Endpoint to retrieve the latest books.

Each endpoint returns data in JSON format.

## Frontend

The frontend is developed using React and Vite, communicating with the backend API to fetch data. The project consists of the following pages:

- **Home Page**: Displays a list of the latest recipes and books, 4 items per page.
- **Recipes Page**: Allows viewing the list of recipes.
- **Recipe/:Recipe_id Page**: Displays detailed information about a specific recipe.
- **Books Page**: Allows viewing the list of books.
- **Book/:books_id Page**: Displays detailed information about a specific book.

The format of recipe and book data retrieved from the backend API is as follows:

**Books Data Example:**
```json
{
  "_id": {
    "$oid": "661ecbff000769b7bd5bdc42"
  },
  "title": "The Joy of Cooking",
  "description": "A classic cookbook filled with a wide range of recipes and cooking techniques.",
  "author": "Irma S. Rombauer",
  "publisher": "Scribner",
  "published_date": "1931-11-01",
  "pages": 1200,
  "thumbnail": "https://m.media-amazon.com/images/I/71E38BP7AlL._SL1500_.jpg",
  "poster": "https://m.media-amazon.com/images/I/71E38BP7AlL._SL1500_.jpg"
}
```
**Books Data Example:**
```json
{
  "_id": {
    "$oid": "661ecbff000769b7bd5bdc42"
  },
  "title": "The Joy of Cooking",
  "description": "A classic cookbook filled with a wide range of recipes and cooking techniques.",
  "author": "Irma S. Rombauer",
  "publisher": "Scribner",
  "published_date": "1931-11-01",
  "pages": 1200,
  "thumbnail": "https://m.media-amazon.com/images/I/71E38BP7AlL._SL1500_.jpg",
  "poster": "https://m.media-amazon.com/images/I/71E38BP7AlL._SL1500_.jpg"
}
```

## Usage

1. Clone the project:
  ```bash
    git clone https://github.com/sonyejun/JAssignment2.git
  ```
2. Enter database information in .env(Include database information in submitted assignments)

3. Navigate to the backend directory and install dependencies:
  ```bash
    cd JAssignment2_Back-YejunSon
    npm install
    npm run dev
  ```

4. Navigate to the fontend directory and install dependencies:
  ```bash
    cd JAssignment2_Front-YejunSon-YejunSon
    npm install
    npm run dev
  ```

5. View the project in your browser with the url provided at Front Start.


## Deployment

This website has been deployed on Vercel. You can access it through the following link:

[Go to Cooking Page](https://j-assignment2.vercel.app/)
