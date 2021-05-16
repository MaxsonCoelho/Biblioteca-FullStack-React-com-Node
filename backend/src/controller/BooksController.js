const BooksModel = require('../model/BooksModel');

class BooksController {

    async create(req, res) {
        const Books = new BooksModel(req.body);

        await Books.save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(e => res.status(500).json(e));
    }

    async update(req, res) {
        
        await BooksModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(e => res.status(500).json(e));
    }

    async all(req, res) {
        
        await BooksModel.find()
        .sort('name')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(e => res.status(500).json(e));
    }

    async show(req, res) {
        
        await BooksModel.findById(req.params.id)
        .then(response => {
            if(response)
            return res.status(200).json(response);
            else
            return res.status(404).json({ error: 'Título não encontrado' })
        })
        .catch(e => res.status(500).json(e));
    }

    async delete(req, res) {
        
        await BooksModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(e => res.status(500).json(e));
    }

}

module.exports = new BooksController();