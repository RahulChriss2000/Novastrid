import { Request, Response } from "express";
import { parseExcelFile } from "../utils/excelParser";
import Chat from "../models/chat";

export const importChatHistory = async  (req: Request, res: Response) => {
    const {filePath} = req.body;
    try {
        const chatMessages = parseExcelFile(filePath);
        if (chatMessages.length===0){
            return res.status(400).json({message: "No data in the file"})
        }
    await Chat.bulkCreate(chatMessages);

    return res.status(201).json({message: 'Imported', chatMessages});
}
catch(error){
    console.error(error);
    return res.status(500).json({message: 'Error', error})
}
};

