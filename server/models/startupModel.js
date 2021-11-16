import mongoose from "mongoose";

const startupSchema = mongoose.Schema({
    name: String,
    url: String,
    headline: String,
    description: String,
    tags: [String],
    members: [{
        name:String, 
        role: String
    }],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});

const startupModel = mongoose.model("startupModel", startupSchema);

export default startupModel;
