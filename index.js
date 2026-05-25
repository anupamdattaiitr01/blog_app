import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

let posts = [
      {
            id: "1",
            title: "My First Blog Post",
            content: "Welcome! This is a mock post stored directly in the server's memory array to verify our EJS looping configurations."
      }
];

app.get('/', (req, res) => {
      res.render('index', { posts: posts });
});

app.listen(port, () => {
      console.log(`Server is listening successfully on port ${port}`);
});