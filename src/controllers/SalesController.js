import db from '../config/connection.js';
import stockController from './StockController.js'

function getSales(req,res){
    db.query('SELECT * from vendas',(err, result)=>{
        if(err){
            console.log(err)
            res.status(500).json('Erro ao buscar produtos');
            return;
        }
        res.status(200).json(result)
    });
}

function saleCart(req,res){
    const dados = req.body;
    let valor_total = 0;    

    dados.pedidos.forEach(pedido => {  
        valor_total += Number(pedido.produto_qtd) * Number(pedido.produto_valor_unidade);        
        pedido.valor_total = Number(pedido.produto_qtd) * Number(pedido.produto_valor_unidade);
    });
    
    db.query(`INSERT INTO vendas(cliente_id,venda_valor_total,venda_forma) VALUES('${dados.cliente_id}','${valor_total}','${dados.forma_pagamento}')`,(err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json('Erro ao cadastrar venda');
            return;
        }        

        let venda_id = result.insertId;        
        dados.pedidos.forEach(pedido => { 
            insertPedidos(venda_id,pedido);                                  
        });

        res.status(201).json(result)
    });    
}

function insertPedidos(venda_id,pedido){
    db.query(`INSERT INTO pedidos(venda_id,produto_id,pedido_qtd,pedido_valor_unidade) VALUES('${venda_id}','${pedido.produto_id}','${pedido.produto_qtd}','${pedido.produto_valor_unidade}')`,(err, result)=>{
        if(err){
            console.log(err)
            res.status(500).json('Erro ao cadastrar pedidos');
            return;
        }                
    });
    stockController.reduceStock(pedido);
}

export default {getSales,saleCart};