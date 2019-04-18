// require express library
const express = require('express');
const bodyParser = require('body-parser');
// instantiate/create an express application
const app = express();
const myMiddleWare = (req, res, next) => {
   console.log("1st"+req.method+"to"+req.url);
   next();

}
const myMiddleWare2 = (req, res, next) => {
   console.log("1st"+req.method+"to"+req.url);
   next();

}
// use the body parser middleware
app.use(bodyParser.json());
app.use(myMiddleWare);
app.use(myMiddleWare2);

app.post('/books', (req, res) => {
     console.log(req.body);
    res.status(201).json({book: book});
   });

// define a port to host our server
const port = 3000;
const books = [
 { title: 'Dictionary', author: 'Webster' },
 { title: 'Encyclopedia', author: 'Encarta' },
 { title: 'Clean Code', author: 'Robert' }];
// define a home route / to respond to hello world
// app.get('/books', (req, res) => res.json({books: books}));
app.post('/books', (req, res) => {
//   console.log(req.body);
 const book = req.body.book;
 books.push(book);
 res.status(201).json({book: book});
});

app.put('/books/:id',(req,res)=>{
    const id = req.params.id;
    const book = req.body.book;
    books[id] =book;
    res.status(201).json({book: book});
});
// define a show route /books/:id to respond with a signal book
app.get('/books', (req, res) => res.json({books: books}));
// eslint-disable-next-line func-names
app.get('/books/:id', (req, res) => {
 const id = req.params.id;
 const book = books[id];
 res.status(200).json({book: book});
});

// define a delete route route /books/:id to remove the book and respond 204
app.delete('/books/:id', (req, res) => {
 const id = req.params.id;
 books.splice(id, 1);

 res.status(204).send();
});


//   app.update('/books/:id', (req, res) => {
//     const id = req.params.id;
//     books.splice(id, 1);

//     res.status(200).send();
//   });

// start app on port 3000 and print to console that it is running
app.listen(port, () => console.log('App running on port' + port));