import mongoose from "mongoose";

const Schema= mongoose.Schema;

const ContactInfoSchema = new Schema({
    name: String,
    company: String,
    notes: String,
    email: String,
    phone: String,
  });

  const ContactInfo = mongoose.model("ContactInfo", ContactInfoSchema);

  export default ContactInfo;