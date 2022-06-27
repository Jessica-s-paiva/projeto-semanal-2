export function tips(app){
    app.get('/tips', function (req, res) {
        res.send(bd.tips);
      })
}
