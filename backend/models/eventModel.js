import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    date: { type: String, require: true },
    time: { type: String, required: true },
    location: { type: String, requied: true },
    organizer: { type: String, requied: true },
    description: { type: String, requied: true },
    preferences: { type: [String], required: true },
    allergies: { type: [String], required: true },
    image: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
