const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {  randomBytes } = require('crypto')
 
app.use(bodyParser.json())

const commentsByPostId = {}

app.get('/posts/:id/comments', (req, res) => {
    const { id } = req.params

    res.send(commentsByPostId[id] || [])
})

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { id } = req.params
    const { content } = req.body

    const comments = commentsByPostId[id] || [];
    comments.push({ id: commentId, content});
    commentsByPostId[id] = comments;

    res.status(201).send(commentsByPostId[id])
})

app.listen(5002, () => {
    console.log('Listening posts on port 5002');
})