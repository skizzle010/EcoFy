const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const commentRoute = require("./routes/comment");
const likeRoute = require("./routes/like");
const postRoute = require("./routes/post");
const cookieParser = require("cookie-parser");
app.use(cookieParser());



app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use('/api', authRoute);
app.use('/api', commentRoute);
app.use('/api', likeRoute);
app.use('/api', postRoute);




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);  
});


