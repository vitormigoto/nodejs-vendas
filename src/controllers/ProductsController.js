import db from '../config/connection.js';

function getProducts(req,res){
    db.query('SELECT * from produtos',(err, result)=>{
        if(err){
            console.log(err)
            res.status(500).json('Erro ao buscar produtos');
            return;
        }
        res.status(200).json(result)
    });
}

function insertProducts(req,res){
    const dados = req.body;
    console.log(dados);
    db.query(`INSERT INTO produtos(produto_nome,produto_valor) VALUES('${dados.produto_nome}','${dados.produto_valor}')`,(err, result)=>{
        if(err){
            console.log(err)
            res.status(500).json('Erro ao buscar produtos');
            return;
        }
        res.status(201).json(result)
    });
}

export default {getProducts,insertProducts};