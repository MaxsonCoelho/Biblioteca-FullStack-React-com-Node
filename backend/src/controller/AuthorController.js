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
        
        const page = (req.query.page) ? parseInt(req.query.page) : 1;
        const perPage = (req.query.limit) ? parseInt(req.query.limit) : 10;

        const counter = await AuthorModel.find().count()

        AuthorModel.find()
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
        
        await AuthorModel.findById(req.params.id)
        .then(response => {
            if(response)
            return res.status(200).json(response);
            else
            return res.status(404).json({ error: 'Autor não encontrado' })
        })
        .catch(e => res.status(500).json(e));
    }

    async delete(req, res) {
        
        await AuthorModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(e => res.status(500).json(e));
    }

    async search(req, res) {

        const term = req.query.term;
        
        const page = (req.query.page) ? parseInt(req.query.page) : 1;
        const perPage = (req.query.limit) ? parseInt(req.query.limit) : 10;

        const counter = await AuthorModel.find().count()

        AuthorModel.find({ 'name': new RegExp('.*' + term + '*.', 'i')})
        .skip((page - 1) * perPage) 
        .limit(perPage)
        .then(response => {
            const results = {
                count: counter,
                results: response
            }
            console.log(response)
            res.status(200).json(results)
        })
        .catch(e => res.status(500).json(e))
    }

}

module.exports = new AuthorController();