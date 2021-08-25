const connect = require('./play.js')

conn.on("connect", () => {
  console.log("")
  conn.write("Name: PO")
});