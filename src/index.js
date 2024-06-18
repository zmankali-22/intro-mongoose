

const {app} = require('./server.js')

const { connect } = require("./utils/database.js")


app.listen(3000, () => {
    connect()
    console.log("Server is running on port 3000")
})