const express = require("express");
const cors = require("cors");
const axios = require("axios");

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// const CHAT_ENGINE_PROJECT_ID = "af933ea2-2df6-4465-bdff-ee4d0d727560";
 const CHAT_ENGINE_PRIVATE_KEY = "";

app.post("/authenticate", async (req, res) => {//signup
//   const { username, secret, email, first_name, last_name } = req.body;
    const {username} = req.body;
  // Store a user-copy on Chat Engine!
  // Docs at rest.chatengine.io
  try {
    const r = await axios.put(//post
      "https://api.chatengine.io/users/",
      //{ username, secret, email, first_name, last_name },
      {username: username, secret:username, first_name: username},
      { headers: { "Private-Key": process.env.CHAT_ENGINE_PRIVATE_KEY} }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});



// vvv On port 3001!
app.listen(3001);