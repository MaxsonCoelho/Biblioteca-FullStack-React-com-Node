const AuthorModel = require('../model/AuthorModel');

class AuthorController {

    async create(req, res) {
        const author = new AuthorModel(req.body);

        await author.save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(e => res.status(500).json(e));
    }

    async update(req, res) {
        
        await AuthorModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(e => res.status(500).json(e));
    }

    async all(req, res) {
        
        await AuthorModel.find()
        .sort('name')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(e => res.status(500).json(e));
    }

    async show(req, res) {
        
        await AuthorModel.findById(req.params.id)
        .then(response => {
            if(response)
            return res.status(200).json(response);
            else
            return res.status(404).json({ error: 'Autor não encontrado' })
        })
        .catch(e => res.status(500).json(e));
    }

}

module.exports = new AuthorController();