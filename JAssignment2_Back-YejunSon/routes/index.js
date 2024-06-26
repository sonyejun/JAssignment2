var express = require('express');
var router = express.Router();

const dotenv = require('dotenv');
dotenv.config();

const {MongoClient, ObjectId} = require('mongodb');

const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}/`; //default port is 27017
const client = new MongoClient(dbUrl);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET recipes api */
router.get('/api/recipes', async function(req, res, next) {
  let recipes = await getRecipes();
  res.json(recipes);
});

/* GET one recipe api */
router.get('/api/recipe/:recipeId', async function(req, res, next) {
  let recipe = await getRecipe(req.params.recipeId);
  res.json(recipe);
});

/* GET latest recipes api */
router.get("/api/latestrecipes", async (req, res) => {
  let recipes = await getLatestRecipes();
  res.json(recipes);
});

/* GET Books api */
router.get('/api/books', async function (req, res, next) {
  let books = await getBooks();
  res.json(books);
});

/* GET one book api */
router.get('/api/book/:bookId', async function(req, res, next) {
  let book = await getBook(req.params.bookId);
  res.json(book);
});

/* GET latest books api */
router.get("/api/latestbooks", async (req, res) => {
  let recipes = await getLatestBooks();
  res.json(recipes);
});




//mongodb
async function connection() {
  db = client.db("Http5222Assign2");
  return db;
};

async function getRecipes() {
  db = await connection();
  let results = db.collection('recipes').find({});
  let res = await results.toArray();
  return res;
}

async function getRecipe(id) {
  const getSingleId = { _id: new ObjectId(id) };
  db = await connection();
  let result = db.collection('recipes').findOne(getSingleId);
  return result;
}

async function getLatestRecipes() {
  db = await connection();
  let results = db.collection("recipes").find({}).sort({_id: -1}).limit(4);
  let res = await results.toArray();
  return res;
};

async function getBooks() {
  db = await connection();
  let results = db.collection('books').find({});
  let res = await results.toArray();
  return res;
}

async function getBook(id) {
  const getSingleId = { _id : new ObjectId(id)};
  db = await connection();
  let result = db.collection('books').findOne(getSingleId);
  return result;
}

async function getLatestBooks() {
  db = await connection();
  let results = db.collection("books").find({}).sort({_id: -1}).limit(4);
  let res = await results.toArray();
  return res;
};

module.exports = router;
