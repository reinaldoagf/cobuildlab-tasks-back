const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
{
    name: { type: String, required: false, unique: false },   
    checked: { type: Boolean, default: false },    
},
{
    versionKey: false,
    timestamps: true,
}
);
module.exports = mongoose.model("task", taskSchema);
