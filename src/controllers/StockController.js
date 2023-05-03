import db from '../config/connection.js';

function getStock(req,res){
    db.query('SELECT * from estoque',(err, result)=>{
        if(err){
            console.log(err)
            res.status(500).json('Erro ao buscar estoque');
            return;
        }
        res.status(200).json(result)
    });
}

function getOneStock(req,res){
    let produto_id = req.params.id;
    db.query(`SELECT * from estoque WHERE produto_id = ${produto_id}`,(err, result)=>{
        if(err){
            console.log(err)
            res.status(500).json('Erro ao buscar estoque do produto selecionado');
            return;
        }
        res.status(200).json(result)
    });
}

function insertStock(req,res){
    const dados = req.body;
    console.log(dados);
    db.query(`INSERT INTO estoque(produto_id,estoque_qtd) VALUES('${dados.produto_id}','${dados.estoque_qtd}') `,(err, result)=>{
        if(err){
            console.log(err)
            res.status(500).json('Erro ao buscar produtos');
            return;
        }
        res.status(201).json(result)
    });
}


function updateStock(req,res){
    const dados = req.body;
    console.log(dados);
    db.query(`UPDATE estoque SET estoque_qtd = estoque_qtd + ${dados.estoque_qtd} WHERE produto_id = ${dados.produto_id}`,(err, result)=>{
        if(err){
            console.log(err)
            res.status(500).json('Erro ao atualizar estoque de produtos');
            return;
        }
        res.status(201).json(result)
    });
}

function reduceStock(pedido){
    db.query(`UPDATE estoque SET estoque_qtd=estoque_qtd-${pedido.produto_qtd} WHERE produto_id=${pedido.produto_id}`,(err, result)=>{
        if(err){
            console.log(err)
            res.status(500).json('Erro ao cadastrar pedidos');
            return;
        }                
    });
}

export default {getStock, getOneStock, insertStock, updateStock, reduceStock};