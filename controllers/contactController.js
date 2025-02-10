const Contact = require("../models/Contact");
const Joi = require("joi");

// Validation Schema
const contactSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).max(15).required(),
  address: Joi.string().optional(),
});

// GET all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET single contact
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create new contact
exports.createContact = async (req, res) => {
  const { error } = contactSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT update a contact
exports.updateContact = async (req, res) => {
  const { error } = contactSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE a contact
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET search contacts by name or email
exports.searchContacts = async (req, res) => {
  try {
    const query = req.params.query;
    const contacts = await Contact.find({
      $or: [{ name: { $regex: query, $options: "i" } }, { email: { $regex: query, $options: "i" } }],
    });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
