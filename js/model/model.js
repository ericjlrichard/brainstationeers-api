//All json manipulation here: read, write, modify

const SUGGESTIONS = "./data/suggestions.json"
const PROMPTS = "./data/prompts.json"
const USERS = "./data/users.json"

const {uuid} = require("uuidv4");

const fs = require("node:fs");

function readFile(fileName) {
  return JSON.parse(fs.readFileSync(fileName));
}

//stringify with null, 2 actually makes the thing semi-readable.
function writeFile(fileName, data) {
  return fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
}

exports.getAllFrom = (table) => {
  switch (table) {
    case "user":
      return readFile(USERS)
      
    case "suggestion":
      return readFile(SUGGESTIONS)
      
    case "prompt":
      return readFile(PROMPTS)
    
    default:
      return "Unrecognized command"
  }
}

exports.writeAllTo = (table, data) => {
  switch (table) {
    case "user":
      return writeFile(USERS, data)
      
    case "suggestion":
      return writeFile(SUGGESTIONS, data)
      
    case "prompt":
      return writeFile(PROMPTS, data)
    
    default:
      return "Unrecognized command"
  }
}

exports.getAllUsers = () => {
  
  return readFile(USERS);
}

exports.getObjectFrom = (table, id) => {

  return this.getAllFrom(table).find(item => item.id === id)
}

exports.addObjectTo = (table, object) => {
  let oldData = this.getAllFrom(table);

  //breaks are left out by design - suggestion also gets a timestamp.

  switch (table) {
    case "suggestion": {
      object.votes = 0;
    }

    case "prompt": {
      object.timestamp = Date.now()
    }

    default: {
      object.id = uuid();
    }
  }

  console.log(object);

  oldData.push(object)
  this.writeAllTo(table, oldData)

  return object;

}

//replaces an object with the updated object
exports.updateObj = (table, object) => {
  let oldData = this.getAllFrom(table)

  oldData = oldData.filter(item => item.id !== object.id)
  oldData.push(object)

  this.writeAllTo(table, oldData)
  
}