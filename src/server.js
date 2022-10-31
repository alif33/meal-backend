const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const upload = require("../utils/multer");

// const upload = multer();
// const authRoutes = require("./routes/auth");
const adminRoutes = require("../routes/adminRoutes");
// const cloudinary = require("../utils/cloudinary");
// const schoolRoutes = require("./routes/school");
// const studentRoutes = require("./routes/student");

env.config();

mongoose
  .connect(
    `mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_PASSWORD }@cluster0.uo7o9f7.mongodb.net/${ process.env.DB_DATABASE }?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("Database connected");
  });

app.use(cors());
app.use(express.json());
// app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.get("/upload", upload.single("image"),  async(req, res)=>{
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.send(result);
  } catch (error) {
    res.send(error);
  }

})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});