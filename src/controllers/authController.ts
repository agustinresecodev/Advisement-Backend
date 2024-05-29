import {Request, Response} from 'express';
import {User} from '../models/User';
import bcrypt from 'bcrypt';
import { UserRoles } from '../constants/UserRoles';
import { TokenData } from '../types/types';
import jwt from 'jsonwebtoken';


export const authController= {
    //REGISTER
    async register(req: Request, res: Response){
        
        try {
            const {firstName, lastName, email, phone, password} = req.body;
            
            //Check if all fields are filled    
            
            if(!firstName || !lastName || !email || !phone || !password){
                return res.status(400).json({message: "Please fill all fields"});
            }

            //Check if user already exists
            const userExists = await User.findOne({
                where:
                {email:email}
            });

            if(userExists){
                return res.status(400).json({message: "User already exists"});
            }

            //Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = User.create({
                firstName,
                lastName,
                email,
                phone,
                password: hashedPassword,
                isActive: true,
                role: UserRoles.TECHNICIANS
            });

          
            
            //Save the user
            await user.save();

            

            //Return success message
            res.status(201).json( {message: "User created successfully"});
        
        } catch (error) {
            //Return error message
            res.status(500).json({message: "Internal server error"});
        }
    },

    //LOGIN
    async login(req: Request, res: Response): Promise<void>{
        try{
        
            //Get email and password from the request body
            const {email, password} = req.body;

            //Check if all fields are filled
            if(!email || !password){
                res.status(400).json({message: "Please fill all fields"});
                return;
            }

            //Find the user by email
            const user = await User.findOne({
                relations:{
                    role:true
                },
                select:{
                    id:true,
                    firstName:true,
                    lastName:true,
                    email:true,
                    phone:true,
                    password:true,
                    isActive:true,
                    role:{                    
                            name:true
                        }
                    },
                where: {email: email}
                })
            
            //Check if the user exists
            if(!user){
                res.status(404).json({message: "Bad credentials"});
                return;
            }
            // Check if password is valid
            const isValidPassword = bcrypt.compareSync(password, user.password);

            // Check if password is valid
            if (!isValidPassword) {
                res.status(400).json({ message: "Bad Credentials" });
                return;
            }

            // Get user role name
            const userRoleName = user.role.name;

            // Payload
            const tokenPayload: TokenData = {
                userId: user.id,
                userRole: userRoleName,
                userName: user.firstName,
            };

            // Generate token
            const token = jwt.sign(tokenPayload, process.env.JWT_SECRET as string, {
                expiresIn: "1h",
            });

            // Send token
            res.status(200).json({ message:"Login Succesfully",token: token }).status(200);

        }catch(error){
            //Return error message
            res.status(500).json({message: "Internal server error"});
        }

    }
                
                
            
        
}