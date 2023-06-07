const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const cookieParser = require("cookie-parser");
app.use(cookieParser());



app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use('/api', authRoute);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);  
});


