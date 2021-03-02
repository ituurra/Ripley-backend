const { Router } = require("express");
const { consultarSaldo, Transferencia, getUsuarios } = require("../controllers/usuario.controller");
const { getindicadores } = require("../controllers/externo.controller");
const router = Router();

router.post("/consultarSaldo", consultarSaldo);
router.post("/transferencia", Transferencia);
router.get("/usuarios", getUsuarios);
router.post("/indicadores", getindicadores )

module.exports = router;
