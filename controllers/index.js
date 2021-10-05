const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardRoutes')

router.use('/', homeRoutes); // homeroutes
router.use('/dashboard', dashboardRoutes); // dashboard routes
router.use('/api', apiRoutes); // api routes

module.exports = router;