const express = require("express")
const exphbs = require("express-handlebars")
const methodOverride = require("method-override")
const routes = require("./routes")
const bodyParser = require('body-parser')// 引用 body-parser
require("./config/mongoose")



const app = express()
const port = 3000

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true })) // 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(methodOverride("_method"))
app.use(routes)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})