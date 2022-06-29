const express = require("express")
const router = express.Router()
const visitService = require("./visit.service")

// routes
router.post("/visit", visit)
router.get("/", getAll)

module.exports = router

function visit(req, res, next) {
	visitService
		.visit(req.body)
		.then((visit) =>
			visit
				? res.json(visit)
				: res.status(400).json({ message: "Invalid input" })
		)
		.catch((err) => next(err))
}

function getAll(req, res, next) {
	visitService
		.getAll()
		.then((visits) => res.json(visits))
		.catch((err) => next(err))
}
