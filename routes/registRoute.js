const { registUser } = require('../controllers/registController');
const router = require('express').Router();

router.get('/', (req, res) => res.send('test'));
router.post('/auth/signup', registUser);

module.exports = router;