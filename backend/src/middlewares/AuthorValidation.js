const AuthorModel = require('../model/AuthorModel');

const AuthorValidation = async (req, res, next) => {

    const { name, age, email  } = req.body;

    if(!name)
    return res.status(400).json({ error: 'nome é obrigatório '})
    else if(!age)
    return res.status(400).json({ error: 'idade é obrigatória' })
    else if(!email)
    return res.status(400).json({ error: 'email é obrigatório' })
    else{
        let exists = await AuthorModel.findOne({
            'email': {'$eq': email}
        });
        if(exists){
            return res.status(400).json({ error: 'este email já está cadastrado' })
        }
    }
    next();
}

module.exports = AuthorValidation;