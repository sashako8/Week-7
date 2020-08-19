const { Router } = require('express');
const router = Router();

const weatherDAO = require('../daos/weather');

router.get("/landing/", (req, res, next) => {
    res.render('index');
})

router.get("/weather", (req, res, next) => {
    res.render('weather');
})

router.get("/weather/location", async (req, res, next) => {
    const locationString = req.query.name;
    console.log(locationString);
    if (!locationString || locationString === "") {
        res.redirect(302, '/weather');
    }
    const location = await weatherDAO.getByQuery(locationString);
    if (location){
        res.render('weatherlocation', { place: locationString, temperature: location.temperature });
    } else {
        res.status(404).render('error', { place: locationString });
    }
})

module.exports = router;