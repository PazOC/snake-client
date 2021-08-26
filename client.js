const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "135.23.223.133", // IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: Paz');
    setTimeout(() => {
      conn.write("Move: left");
    }, 100);
    setTimeout(() => {
      conn.write("Move: down");
    }, 1000);
  });

  conn.on("data", (data) => {
    console.log(`Server said: ${data}`);
  });

  return conn;

    };

module.exports = connect;
