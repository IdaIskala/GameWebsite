const express = require("express")
const app = express()

app.get("/", (request, response) => {
    console.log("GET /")
    //response.sendStatus(200)
    response.status(200).send("<h1>Nice game!</h1>")
})




const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})