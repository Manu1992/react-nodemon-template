/**
 * Created by admin on 28.11.16.
 */
import express from 'express'

let app = express()

app.get('/*', (req, res) => {
    res.send('hello!! world')
})

app.listen(8080, () => console.log(`Running on localhost:8080`))
