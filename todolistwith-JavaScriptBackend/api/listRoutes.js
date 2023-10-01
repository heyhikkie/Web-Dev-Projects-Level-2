
const express = require("express")
const router = express.Router()

const listController = require("../controller/listController")

router.get("/", listController.findAll);
router.post("/", listController.createOne);
router.put("/",listController.updateOne)
router.delete("/",listController.deleteOne)

router.get("/list")


module.exports = router ;