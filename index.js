import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import postRoutes from "./routes/posts.js"

 // App Config
 const app = express()
 dotenv.config();
 const PORT = process.env.PORT || 5000 ;

// Middlewares
  app.use(express.json({limit: "30mb" , extended: true}));
  app.use(express.urlencoded({limit: "30mb" , extended: true}));
  app.use(cors())
  
  app.use("/posts", postRoutes)
  
  app.get('/' , (req, res) => {
      res.send('Test Rest API')
  })

   // Listener and DB Config
    mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err)=> console.log(err.message))

  