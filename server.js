import express from 'express'
import { bugs } from './demo-data-bug.js'


const app = express()

app.get('/', (req, res) => res.send('Hello there'))

app.listen(3030, () => console.log('Server ready at port 3030'))

app.get('/api/bug', (req, res) => {
    console.log('Sending bugs list...')
    res.send(bugs)
        .then((bugs) => console.log(bugs))
        .catch((err) => console.log('error on getting bugs list'))
})

app.get('/api/bug/save', (req, res) => {})

app.get('/api/bug/:bugId', (req, res) => {})

app.get('/api/bug/:bugId/remove', (req, res) => {})