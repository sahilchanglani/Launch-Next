import StartupModel from "../models/startupModel.js";

export const getStartups = async (req, res) => {
    try {
        const startups = await StartupModel.find();
        res.status(200).json(startups);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};


export const submitStartup = async (req, res) => {
    const body = req.body;
    const newStartup = new StartupModel(body);
    try {
        await newStartup.save();
        res.status(201).json(newStartup);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}