const UserData = require("./UserData");
const f = require ("fs");
const yargs = require('yargs');



yargs.command({
command: 'add',
describe: 'Add data for a person',
builder: {
id: {
  describe: 'ID of the person',
  demandOption: true,
  type: 'string',
},
firstName: {
  describe: 'First name of the person',
  demandOption: true,
  type: 'string',
},
lastName: {
  describe: 'Last name of the person',
  demandOption: true,
  type: 'string',
},
age: {
  describe: 'Age of the person',
  demandOption: true,
  type: 'number',
},
city: {
  describe: 'City of the person',
  demandOption: true,
  type: 'string',
},
},
handler: (x) => {
UserData.addPerson(x.id, x.firstName, x.lastName, x.city, x.age);
}
});



yargs.command({
  command: 'readData',
  describe: 'View data of a specific person',
  builder: {
    id: {
      describe: 'ID of the person to view',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (x) => {
    UserData.readData(x.id)
  }
});

yargs.command({
  command: 'readallData',
  describe: 'View data of persons',
  builder: {
    id: {
      describe: 'view all data',
      demandOption: true,
      type: 'string',
    },
  },
  handler: () => {
    UserData.readallData();
  }
});

yargs.command({
  command: "deleteonedata",
  describe: "to delete an item",
  builder: {
    id: {
      describe: "this is id desc in deleteonedata command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    UserData.deleteOneData(x.id);
  },
});

yargs.command({
  command: 'deleteallData',
  describe: 'Delete data of all people',
  handler() {
    UserData.deleteAllData();
  }
});

yargs.parse();
