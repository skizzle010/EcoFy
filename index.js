const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const commentRoute = require("./routes/comment");
const likeRoute = require("./routes/like");
const postRoute = require("./routes/post");
const cookieParser = require("cookie-parser");
app.use(cookieParser());



app.use(express.json());
app.use('/api', authRoute);
app.use('/api/comment', commentRoute);
app.use('/api/like', likeRoute);
app.use('/api/post', postRoute);




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);  
});


