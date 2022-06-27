import {Tipsmodel} from '../models/Tipsmodel.js';

export function create(app, bd){
    app.post('/create', function (req, res) {
        const body = req.body
        const createTest = new Tipsmodel(body.tip);
        bd.tip.push(createTest);
        res.send(req.body)
      })
}