module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', {"title":"Homepage"});
      res.send()
      console.log("Home")
   });

   app.get('/produkt', (req, res, next) => {
      res.render('produkt');
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });
};