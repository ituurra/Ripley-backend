const low = require("lowdb");
const Fileasync = require("lowdb/adapters/FileAsync");

let db;

async function createConnection() {
  const adapter = new Fileasync("db.json");
  db = await low(adapter);

  db.defaults({
    usuario: [
      {
        Nombre: "Daniel Iturra",
        Rut: "1111-1",
        NumCuenta: "1111",
        Saldo: 500000,
      },
      {
        Nombre: "Ana Maria",
        Rut: "2222-2",
        NumCuenta: "2222",
        Saldo: 400000,
      },
    ],
  }).write();
}

const getConnection = () => {
  return db;
};

module.exports = {
  createConnection,
  getConnection,
};
