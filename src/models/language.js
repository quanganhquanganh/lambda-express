import { Schema, model } from 'mongoose';

const languageSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('Language', languageSchema);
