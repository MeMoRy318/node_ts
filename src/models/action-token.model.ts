import { model, Schema, Types } from "mongoose";

import { IActionToken } from "../types";
import { Person } from "./user.model";

const schema = new Schema(
  {
    token: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
    },
    _userId: {
      type: Types.ObjectId,
      required: true,
      ref: Person,
    },
  },
  { versionKey: false, timestamps: true },
);

const ActionToken = model<IActionToken>("action-tokens", schema);

export { ActionToken };
