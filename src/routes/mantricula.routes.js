import express from "express";
import { createMatricula, getMatricualas,updateMatriculaById, deleteMatriculaById } from '../controllers/matricula.controller.js'
import { verfyToken } from "../middlewares/authJwt.js";
import { ValidarMatriculaLeccion } from "../middlewares/utilidades.js";


const router = express.Router();

router.post('/create', [verfyToken,ValidarMatriculaLeccion], createMatricula)
router.get('/', getMatricualas)
router.put('/:matriculaId',[verfyToken], updateMatriculaById)
router.delete('/:matriculaId', [verfyToken], deleteMatriculaById)



export default router