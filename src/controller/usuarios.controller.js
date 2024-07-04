import * as usuariosRepository from '../repository/usuarios.repository.js';


// BUSCAR USUARIO
export const getAll = async (req, res) => {
    try {
      const usuarios = await usuariosRepository.getAll();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ message: error});
    }
  };
// BUSCAR USUARIO - (ESPECIFICO)
export const getOne = async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id)
      const usuarios = await usuariosRepository.getOne(id);
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ message: error});
    }
  };

  // CRIAR PRODUTO

export const create = async (req, res) => {
    try {
      const data = req.body;
      const usuarios = await usuariosRepository.create(data);
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ message: error});
    }
  };
  
  // ATUALIZAR PRODUTO
  
  export const update = async (req,res) => {
    const id = req.params.id;
    try{
      const usuarios = await usuariosRepository.update(id,req.body);
      res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json(console.log(`${error}`));
    }
  };
  
  
  // DELETAR PRODUTO
  
  export const deletar = async (req,res) => {
      try{
      const id = req.params.id;
      const usuarios = await usuariosRepository.deletar(id);
      res.status(201).json(`Usuario deletado com sucesso`);
    } catch (error) {
        res.status(500).json(`error: ${error}`);
    }
  };