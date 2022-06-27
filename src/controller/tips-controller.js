export function tips(app, bd){
    app.get('/tips', function (req, res) {
        res.send(bd.tip);
      })
}
