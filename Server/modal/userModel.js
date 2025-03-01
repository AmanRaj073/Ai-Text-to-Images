import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    creditBalance: { type: Number, default: 5 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
