const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRoutes = require('./pokemonsRoutes.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", pokemonsRoutes);


module.exports = router;
