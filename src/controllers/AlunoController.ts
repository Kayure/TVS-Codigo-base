import { Request, Response } from "express";
import { Aluno } from "../models/Aluno";

// 🔹 Listar todos os alunos
export const listarAlunos = async (req: Request, res: Response) => {
    const alunos = await Aluno.findAll();
    return res.json(alunos);
};


// 🔹 Cadastrar um novo aluno
export const cadastrarAluno = async (req: Request, res: Response) => {
    const { nome, email, matricula } = req.body;

    // 🔹 Criando o aluno sem verificações adicionais
    let novoAluno = await Aluno.create({ nome, email, matricula });

    res.status(201).json({
        message: "Aluno cadastrado com sucesso.",
        novoAluno
    });
};



