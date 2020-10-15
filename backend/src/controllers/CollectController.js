const Collect = require ('./../models/Collect');
const { Op } = require("sequelize");
module.exports={
    async store(req, res){
        const {
            nome,
            rg,
            cpf,
            dt_nascimento,
            telefone,
            convenio,
            num_carteira,
            endereco,
            ponto_ref,
            exames,
            dt_coleta,
            obs,
            valor_total,
            recebido,
        } = req.body;
        
        const collect = await Collect.create({
            
            nome,
            rg,
            cpf,
            dt_nascimento,
            telefone,
            convenio,
            num_carteira,
            endereco,
            ponto_ref,
            exames,
            dt_coleta,
            obs,
            valor_total,
            recebido,
        });
        
       return res.json(collect);
    },
    async index (req, res){
        const collect = await Collect.findAll();
        return res.json(collect);
    },
    async indexDate (req, res){
        const date = Date.now();
        
        const { count, rows } = await Collect.findAndCountAll({
            where: {
                dt_coleta : {
                [Op.like]: date
              }
            },
            
          });
          return res.json(rows);
    }
}