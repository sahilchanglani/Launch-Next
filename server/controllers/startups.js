import express from 'express';
import mongoose from 'mongoose';

import StartupModel from '../models/startupModel.js';

const router = express.Router();

export const getStartups = async (req, res) => { 
    try {
        const startups = await StartupModel.find();
                
        res.status(200).json(startups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getStartup = async (req, res) => { 
    const { id } = req.params;

    try {
        const startup = await StartupModel.findById(id);
        
        res.status(200).json(startup);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createStartup = async (req, res) => {
    const { name, website, headline, description, image, tags} = req.body;

    const newStartup = new StartupModel({ name, website, headline, description, image, tags})

    try {
        await newStartup.save();

        res.status(201).json(newStartup );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateStartup = async (req, res) => {
    const { id } = req.params;
    const { name, website, headline, description, image, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No startup with id: ${id}`);

    const updatedStartup = { name, website, headline, description, image, tags, _id: id };

    await StartupModel.findByIdAndUpdate(id, updatedStartup, { new: true });

    res.json(updatedStartup);
}

export const deleteStartup = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No startup with id: ${id}`);

    await StartupModel.findByIdAndRemove(id);

    res.json({ message: "Startup deleted successfully." });
}

export const likeStartup = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No startup with id: ${id}`);
    
    const startup = await StartupModel.findById(id);

    const updatedStartup = await StartupModel.findByIdAndUpdate(id, { likeCount: startup.likeCount + 1 }, { new: true });
    
    res.json(updatedStartup);
}


export default router;