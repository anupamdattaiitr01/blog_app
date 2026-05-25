import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

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

app.get('/posts/new', (req, res) => {
      res.render('create');
});

app.post('/posts', (req, res) => {
      // Destructure form field values directly out of req.body
      const { title, content } = req.body;

      // Create a new structured post object
      const newPost = {
            id: Date.now().toString(), // Generates a clean, unique string ID using a timestamp
            title: title,
            content: content
      };

      // Push the new post object directly into our global in-memory state array
      posts.push(newPost);

      // Redirect the user back to the home page route to see their new post in the feed!
      res.redirect('/');
});

app.listen(port, () => {
      console.log(`Server is listening successfully on port ${port}`);
});