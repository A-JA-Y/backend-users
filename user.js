import { getAllUsers, getOneUser, deleteUser, createUser  } from "./controller/user.js";
import express from "express";



const router = express.Router();
router.get('/',getAllUsers);
router.get('/:userId',getOneUser);
router.post('/',createUser);
router.delete('/:userId',deleteUser);

export default router;