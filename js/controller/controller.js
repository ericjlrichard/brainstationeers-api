const mod = require("../model/model")

exports.getAllUsers = () => {
  return mod.getAllFrom("user");
}

exports.getUserById = (id) => {
  return mod.getObjectFrom("user", id)
}

exports.getAllPrompts = () => {
  return mod.getAllFrom("prompt");
}

exports.getPromptById = (id) => {
  return mod.getObjectFrom("prompt", id)
}

exports.getAllSuggestions = () => {
  return mod.getAllFrom("suggestion");
}

exports.getSuggestionById = (id) => {
  return mod.getObjectFrom("suggestion", id)
}

exports.addObjectTo = (table, object) => {
  return mod.addObjectTo(table, object);
}

exports.getAllSuggestionsByPrompt = (id) => {
  return mod.getAllFrom("suggestion").filter(suggestion => suggestion.promptId === id)
}

exports.toggleVote = (userId, suggId) => {
  const user = mod.getObjectFrom("user", userId)

  if (user.votedFor.find(item => item === suggId)) {
    user.votedFor = user.votedFor.filter(item => item !== suggId)
  } else {
    user.votedFor.push(suggId)
  }

  mod.updateObj("user", user)
}