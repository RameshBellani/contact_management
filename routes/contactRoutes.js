const express = require("express");
const { getContacts, getContactById, createContact, updateContact, deleteContact, searchContacts } = require("../controllers/contactController");
const router = express.Router();

router.get("/", getContacts);
router.post("/", createContact);
router.get("/:id", getContactById);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);
router.get("/search/:query", searchContacts); 

module.exports = router;
