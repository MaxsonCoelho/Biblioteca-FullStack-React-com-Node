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

}

module.exports = new AuthorController();