import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

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
            id: Date.now().toString(),
            title: title,
            content: content
      };

      // Push the new post object directly into our global in-memory state array
      posts.push(newPost);

      // Redirect the user back to the home page route to see their new post in the feed!
      res.redirect('/');
});

app.get('/posts/:id/edit', (req, res) => {
      // Look up the post in our array using the dynamic route parameter 'req.params.id'
      const targetedPost = posts.find(p => p.id === req.params.id);

      // Safety check: If the post doesn't exist, return a 404 status error
      if (!targetedPost) {
            return res.status(404).send("Post not found");
      }

      // Render the edit template and pass the found post data to it
      res.render('edit', { post: targetedPost });
});

// 5. UPDATE - Process the Modification Data
app.post('/posts/:id/update', (req, res) => {
      const { title, content } = req.body;

      // Find the exact index of the post inside our state array
      const postIndex = posts.findIndex(p => p.id === req.params.id);

      if (postIndex !== -1) {
            // Overwrite the old object parameters with the newly updated form fields
            posts[postIndex] = { id: req.params.id, title, content };
      }

      res.redirect('/');
});

// 6. DELETE - Process Post Removal
app.post('/posts/:id/delete', (req, res) => {
      // Filter out the item matching our target ID, re-assigning the rest back to the array
      posts = posts.filter(p => p.id !== req.params.id);

      res.redirect('/');
});

app.listen(port, () => {
      console.log(`Server is listening successfully on port ${port}`);
});


/// Last commit