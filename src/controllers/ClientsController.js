import db from '../config/connection.js';

function getClients(req,res){
    db.query('SELECT * from clientes',(err, result)=>{
        if(err){
            console.log(err)
            res.status(500).json('Erro ao buscar clientes');
            return;
        }
        res.status(200).json(result)
    });
}

function insertClients(req,res){
    const dados = req.body;
    console.log(dados);
    db.query(`INSERT INTO clientes(cliente_nome,cliente_documento,cliente_email,cliente_telefone) VALUES('${dados.cliente_nome}','${dados.cliente_documento}','${dados.cliente_email}','${dados.cliente_telefone}')`,(err, result)=>{
        if(err){
            console.log(err)
            res.status(500).json('Erro ao inserir cliente');
            return;
        }
        res.status(201).json(result)
    });
}

export default {getClients,insertClients};