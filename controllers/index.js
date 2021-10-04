const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardRoutes')

router.use('/', homeRoutes); // homeroutes
router.use('/api', apiRoutes); // api routes
router.use('./dashboard', dashboardRoutes); // dashboard routes

module.exports = router;