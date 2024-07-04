// app.js
import express from 'express';
import produtoRoutes from "./src/routes/produto.routes.js";
import usuariosRoutes from "./src/routes/usuarios.routes.js"

// LEMBRAR DE FAZER IMPORT

const app = express();
const PORT = 666;

// ADICIONAR AS ROTAS!

app.use(express.json());
app.use('/produtos', produtoRoutes);
app.use('/usuarios', usuariosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
