const express = require("express"); 

const app = express();
const cors = require("cors");
app.use(cors())
app.use(express.json());

const req = require("./js/routes/requests.js")

const PORT = 8080;

app.get("/", req.welcomeMessage);

app.get("/users", req.getAllUsers);

app.get("/user/:id", req.getUserById);

app.get("/prompts", req.getAllPrompts);

app.get("/prompt/:id", req.getPromptById)

app.get("/suggestions", req.getAllSuggestions);

app.get("/suggestion/:id", req.getSuggestionById);

app.post("/user", req.addUser)

app.post("/prompt", req.addPrompt)

app.post("/suggestion", req.addSuggestion)

app.get("/prompt/:id/suggestions", req.getAllSuggestionsByPrompt)

app.patch("/user/:userId/togglevote/:suggestionId", req.toggleVote)

app.listen(PORT, () => {
  console.log("Running brainstationeerly AF on port " + PORT)
});