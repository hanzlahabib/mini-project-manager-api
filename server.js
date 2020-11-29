const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const db = require("./src/models");
const { MONGO_URI } = require('./src/config/db.config')
const projectRoutes = require('./src/routes/projects.routes')
const taskRoutes = require('./src/routes/tasks.routes')
const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))
require('./src/routes/auth.routes')(app);
app.use('/projects', projectRoutes)
app.use('/project/tasks', taskRoutes)
db.mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('App running on ' + PORT)
})

