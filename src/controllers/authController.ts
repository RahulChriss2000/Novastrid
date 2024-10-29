import {Request, Response} from 'express';
import bcrypt from  'bcryptjs';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import { where } from 'sequelize';

export const registerUser = async (req: Request, res: Response) => {
    const {username, email, password} = req.body;

    try{
        const hashedPassword = await bcrypt.hash(password,10);
        const  newUser = await User.create({username, email, password: hashedPassword});
        res.status(201).json({message: 'User registered  successfully', user: newUser});
    } catch(error){
        res.status(500).json({message: 'Error registering user', error});
    }
};

export const loginUser = async (req: Request, res: Response)=> {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({where: {email}});
        if (!user){
            return  res.status(404).json({message: 'User not found'});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid){
            return  res.status(401).json({message: 'Invalid password'});
        }
        const token = jwt.sign({id: user.id}, process.env.SECRET_KEY as string, {
            expiresIn: '1h',
        });
        return res.status(200).json({token});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'Error logging in user', error});
    }
};