const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile('views/velkommen.html', {root: __dirname});
});

router.get('/jegangrerpaaatjegjuksetpaasnake', (req, res) => {
    res.sendFile('views/det_bor_du.html', {root: __dirname});
})

router.get('/qmhm', (req, res) => {
    res.sendFile('views/caesar.html', {root: __dirname});
})

router.get('/dontscanme', (req, res) => {
    res.sendFile('views/dontscanme.html', {root: __dirname});
})

router.get('/batman', (req, res) => {
    res.sendFile('views/batman.html', {root: __dirname});
})

router.get('/whydidyouscanme', (req, res) => {
    res.sendFile('views/whyscan.html', {root: __dirname});
})

module.exports = router;