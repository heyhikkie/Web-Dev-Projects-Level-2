const express = require("express")
const router = express.Router()

const listRoutes = require("./listRoutes")

router.get("/",(req,res)=>{
	res.json({
		message : "API ROUTES",
	})
})

router.use("/list",listRoutes)


module.exports = router ;