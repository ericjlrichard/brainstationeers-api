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

  if (table === "user") {
    object.timesVoted = 0;
    object.votedFor = []
    
  }
  return mod.addObjectTo(table, object);
}

exports.getAllSuggestionsByPrompt = (id) => {
  return mod.getAllFrom("suggestion").filter(suggestion => suggestion.promptId === id)
}

exports.toggleVote = (userId, suggId) => {
  const user = mod.getObjectFrom("user", userId)
  const suggestion = mod.getObjectFrom("suggestion", suggId)

  if (user.votedFor.find(item => item === suggId)) {
    user.votedFor = user.votedFor.filter(item => item !== suggId)
    suggestion.votes--
  } else {
    user.votedFor.push(suggId)
    suggestion.votes++
  }

  mod.updateObj("suggestion", suggestion)

  mod.updateObj("user", user)
}