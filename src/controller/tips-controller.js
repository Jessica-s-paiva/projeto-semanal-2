export function tips(app, bd){
    app.get('/tips', function (req, res) {
        const tip1 = bd.tip;
        const tipRamdom = Math.floor(Math.random() * tip1.length);
        res.send(tip1[tipRamdom]); // resultado aleatório
        //res.send(bd.tip);
      })
}
