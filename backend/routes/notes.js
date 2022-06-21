const express = require("express");
const router = express.Router();
const User = require("../modules/Notes");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middlewear/fetchuser");
const Notes = require("../modules/Notes");
//get all the notes using get login required
router.get("/fetchnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Interval server error occured");
  }
});
//add a new node using post login required
router.post(
  "/addnotes",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 5 }),
    body("description", "Enter the description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const { title, description, tag } = req.body;
    const errors = validationResult(req); // checking for errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const notes = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savednote = await notes.save();

      res.json(savednote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Interval server error occured");
    }
  }
);
// route 3 update the notes login required
router.put("/updateallnotes/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  const newnote = {};
  if (title) {
    newnote.title = title;
  }
  if (description) {
    newnote.description = description;
  }
  if (tag) {
    newnote.tag = tag;
  }

  const note = await Notes.findById(req.params.id);
  if (!note) {
    return res.status(404).send("Not found");
  }
  if (note.user.toString() != req.user.id) {
    return res.status(401).send("Not allowed");
  }
  try {
    const notew = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newnote },
      { new: true }
    );
    res.json({ notew });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Interval server error occured");
  }
});
//deletion
router.delete("/deletenotes/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;

  const note = await Notes.findById(req.params.id);
  if (!note) {
    return res.status(404).send("Not found");
  }
  if (note.user.toString() != req.user.id) {
    return res.status(401).send("Not allowed");
  }
  try {
    const notew = await Notes.findByIdAndDelete(req.params.id);
    res.json({ sucess: "Notes has been deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Interval server error occured");
  }
});
module.exports = router;
