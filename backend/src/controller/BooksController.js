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
        const page = (req.query.page) ? parseInt(req.query.page) : 1;
        const perPage = (req.query.limit) ? parseInt(req.query.limit) : 10;

        const counter = await BooksModel.find().count()

        BooksModel.find()
        .skip((page - 1) * perPage) 
        .limit(perPage)
        .then(response => {
            const results = {
                count: counter,
                results: response
            }
            res.status(200).json(results)
        })
        .catch(e => res.status(500).json(e))
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

    async search(req, res) {

        const term = req.query.term;
        
        const page = (req.query.page) ? parseInt(req.query.page) : 1;
        const perPage = (req.query.limit) ? parseInt(req.query.limit) : 10;

        const counter = await BooksModel.find().count()

        BooksModel.find({ 'title': new RegExp('.*' + term + '*.', 'i')})
        .skip((page - 1) * perPage) 
        .limit(perPage)
        .then(response => {
            const results = {
                count: counter,
                results: response
            }
            res.status(200).json(results)
        })
        .catch(e => res.status(500).json(e))
    }

}

module.exports = new BooksController();