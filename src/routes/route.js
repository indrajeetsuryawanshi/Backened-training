const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/getBydistrictid", CowinController.getvaccinationbydistrict)

router.get("/wheather/oflondon", CowinController.getwheatheroflondon)
router.get("/gettempallcities", CowinController.getweatherofcities)
router.get("/getallmemes", CowinController.getmames)
router.post("/gememesimage", CowinController.getmemesimage)



module.exports = router;