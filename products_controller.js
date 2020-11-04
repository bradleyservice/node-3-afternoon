module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        const {name, description, price, image_url} = req.body;
        db.create_product([name, description, price, image_url])
        .then(product => {
            res.status(200).send(product)
        }).catch(err => {
            console.log(err);
            res.status(500).send('No product was found')
        })
    },
    getOne: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.read_product(id)
        .then(product => {
            res.status(200).send(product)
        }).catch(err => {
            console.log(err);
            res.status(500).send('No product was found')
        })
    },
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.read_products()
        .then(product => {
            res.status(200).send(product)
        }).catch(err => {
            console.log(err);
            res.status(500).send('No product was found')
        })
    },
    update: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {desc} = req.query;
        console.log(req.params)
        db.update_product([id, desc])
        .then(() => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err);
            res.status(500).send('Product could not be updated')
        })
    },
    delete: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_product(id)
        .then(product => {
            res.status(200).send(product)
        }).catch(err => {
            console.log(err);
            res.status(500).send('Product could not be deleted')
        })
    }
}