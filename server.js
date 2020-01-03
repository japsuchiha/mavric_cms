const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema.js')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:false
}));

app.listen(4000, () => {
    console.log("server is up")
})