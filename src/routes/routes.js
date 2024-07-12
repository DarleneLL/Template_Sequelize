const { Router } = require("express");
const usuariosRoutes = require("./usuarios.routes");

const router = Router();

router.use("/users", usuariosRoutes);

module.exports = router;
