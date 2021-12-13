import mongoose from "mongoose";

const startupSchema = mongoose.Schema({
    name: String,
    website: String,
    headline: String,
    description: String,
    image: String,
    tags: [String],
    // members: [{
    //     name:String, 
    //     role: String
    // }],
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
