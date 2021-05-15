const BooksModel = require('../model/BooksModel');

const BooksValidation = async (req, res, next) => {

    const { title, description, category  } = req.body;

    if(!title)
    return res.status(400).json({ error: 'título é obrigatório '})
    else if(!description)
    return res.status(400).json({ error: 'descrição é obrigatória' })
    else if(!category)
    return res.status(400).json({ error: 'categoria é obrigatório' })
    else{
        let exists;

        if(req.params.id){
            exists = await BooksModel.findOne({
                '_id': {'$ne': req.params.id},
                'title': {'$in': title}
            });

        }else {
            exists = await BooksModel.findOne({
                'title': {'$eq': title}
            });
        }
        
        if(exists){
            return res.status(400).json({ error: 'este título já está cadastrado' })
        }
        
        next();
    }
    
}

module.exports = BooksValidation;