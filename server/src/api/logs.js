const { Router } = require("express");

const LogEntry = require("../models/LogEntry");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const logEntry = await LogEntry.find();
    res.status(200).json({ data: logEntry });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const logEntry = await LogEntry.create(req.body);
    res.status(201).json({ data: logEntry });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
