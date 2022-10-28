const con = require("../controller/controller");

exports.welcomeMessage = (_req, res) => {
  res.status(200).send("Welcome to the Brainstationeers API!")
}

exports.getAllUsers = (_req, res) => {
  res.status(200).send(con.getAllUsers())
}

exports.getUserById = (req, res) => {
  res.status(200).send(con.getUserById(req.params.id))
}

exports.getAllSuggestions = (_req, res) => {
  res.status(200).send(con.getAllSuggestions())
}

exports.getSuggestionById = (req, res) => {
  res.status(200).send(con.getSuggestionById(req.params.id))
}

exports.getAllPrompts = (_req, res) => {
  res.status(200).send(con.getAllPrompts())
}

exports.getPromptById = (req, res) => {
  res.status(200).send(con.getPromptById(req.params.id))
}

exports.addUser = (req, res) => {
  console.log(req.body)
  res.status(200).send(con.addObjectTo("user", req.body))
}

exports.addPrompt = (req, res) => {
  console.log(req.body)
  res.status(200).send(con.addObjectTo("prompt", req.body))
}

exports.addSuggestion = (req, res) => {
  res.status(200).send(con.addObjectTo("suggestion", req.body))
}

exports.getAllSuggestionsByPrompt = (req, res) => {
  res.status(200).send(con.getAllSuggestionsByPrompt(req.params.id))
}

exports.toggleVote = (req, res) => {
  res.status(200).send(con.toggleVote(req.params.userId, req.params.suggestionId))
}