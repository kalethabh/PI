const {Router} = require("express")
const router = Router();
const { Pokemon } = require("../db");

router.post("/creat", async (req, res) => {
    try {
        
    } catch (error) {
    return res.status(500).json({ msg: "postError" });
        
    }
})
router.get("/", async (req, res) => {
  try {
    let reponse = await Pokemon.findAll();
    return res.status(200).json({msg:"Todos los pokémons"});
  } catch (error) {
    return res.status(500).json({ msg: "getError" });
  }
});
/! VER VIDEOS DE JORGE SOBRE CONTROLADORES Y RUTAS!/


module.exports = router;
