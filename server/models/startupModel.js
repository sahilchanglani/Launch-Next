import mongoose from "mongoose";

const startupSchema = mongoose.Schema({
    name: String,
    website: String,
    headline: String,
    description: String,
    image: String,
    tags: [String],
    likes: {
        type: [String],
        default: []
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});

const startupModel = mongoose.model("startupModel", startupSchema);

export default startupModel;
