let connection 
const setupInput = function(connection) {
  connection = connection
  const stdin = process.stdin;
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    } if (key === "q") {
      connection.write('Say: Hello')
    } if ( key === "w") {
      connection.write("Move: up")
    } if ( key === "a") {
      connection.write("Move: left")
    } if ( key === "s") {
      connection.write("Move: down")
    } if ( key === "d") {
      connection.write("Move: right")
    }
  };

  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;

};

module.exports = setupInput;