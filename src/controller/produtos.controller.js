
import * as produtoRepository from '../repository/produto.repository.js';


// BUSCAR PRODUTO

export const getAll = async (req, res) => {
  try {
    const produtos = await produtoRepository.getAll();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: error});
  }
};

// BUSCAR PRODUTO (ESPECIFICO)

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id)
    const produtos = await produtoRepository.getOne(id);
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: error});
  }
};

// CRIAR PRODUTO

export const create = async (req, res) => {
  try {
    const data = req.body;
    const produtos = await produtoRepository.create(data);
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: error});
  }
};

// ATUALIZAR PRODUTO

export const update = async (req,res) => {
  const id = req.params.id;
  try{
    const produto = await produtoRepository.update(id,req.body);
    res.status(200).json(produto);
  } catch (error) {
      res.status(500).json(console.log(`${error}`));
  }
};


// DELETAR PRODUTO

export const deletar = async (req,res) => {
    try{
    const id = req.params.id;
    const produtos = await produtoRepository.delete(id);
    res.status(201).json(`Produto deletado com sucesso`);
  } catch (error) {
      res.status(500).json({message: error});
  }
};