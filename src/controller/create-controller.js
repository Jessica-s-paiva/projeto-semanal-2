export function create(app){
    app.get('/create', function (req, res) {
        res.send('Hello World')
      })
}