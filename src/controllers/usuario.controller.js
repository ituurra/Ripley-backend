const { getConnection } = require("../database");

const consultarSaldo = (req, res) => {
  const rut = req.body.rut;
  const usuario = getConnection().get("usuario").find({ Rut: rut }).value();
  if (!usuario) return res.status(200).json({ message: "Rut no existe !" });

  res.status(200).json({ message: `su saldo es $${usuario.Saldo} pesos` });
};

const Transferencia = async (req, res) => {
  const ctaOri = req.body.cuentaOrigen;
  const ctaDes = req.body.cuentaDestino;
  const monto = req.body.monto;

  const usuarioOrigen = getConnection()
    .get("usuario")
    .find({ NumCuenta: ctaOri })
    .value();
    
  if (!usuarioOrigen)
    return res.status(200).json({ message: "Cuenta de origen no existe !" });

  const usuarioDestino = getConnection()
    .get("usuario")
    .find({ NumCuenta: ctaDes })
    .value();

  if (!usuarioDestino)
    return res.status(200).json({ message: "Cuenta de destino no existe !" });

  if (monto > usuarioOrigen.Saldo)
    return res
      .status(200)
      .json({
        message: "No tienes saldo suficiente para realizar esta transaccion",
      });

  usuarioOrigen.Saldo = Number(usuarioOrigen.Saldo - monto);
  usuarioDestino.Saldo = Number(usuarioDestino.Saldo) + Number(monto);

  await getConnection()
    .get("usuario")
    .find({ NumCuenta: ctaOri })
    .assign({ Saldo: usuarioOrigen.Saldo })
    .write();
  await getConnection()
    .get("usuario")
    .find({ NumCuenta: ctaDes })
    .assign({ Saldo: usuarioDestino.Saldo })
    .write();

  return res
    .status(200)
    .json({ message: "la transaccion se realizo correctamente" });
};

const getUsuarios = (req,res) => {
  const usuarios = getConnection().get("usuario").value();
  res.status(200).json(usuarios);
}

module.exports = { consultarSaldo, Transferencia,getUsuarios };
