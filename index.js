const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const ConversationRoute= require('./routes/conversation')
const MessageRoute= require('./routes/message')
const UserRoute = require('./routes/users')

dotenv.config();

// middleware
app.use(express.json());
app.use(cors());


// mongodb connection
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

// all routes
app.use('/api/conversations', ConversationRoute)
app.use('/api/messages', MessageRoute)
app.use('/api/users', UserRoute)

// where the server is listening
app.listen(8800, () => {
  console.log("Backend server is running!");
});