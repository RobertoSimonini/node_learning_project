const sayHi = (name, surname = "Ciccio") => {
  console.log(`Hi ${name} ${surname}`);
};

const os = require("os");

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);

//I take the names from the names.js file module
const data = require("./names");

data.names.forEach((user) => sayHi(user.name, user.surname));
