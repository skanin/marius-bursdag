const express = require('express');
const router = express.Router();

const fs = require('fs')
const stream = require('stream')


router.get('/', (req, res) => {
	res.json({'Hei': 'heihei'});
});

router.get('/img',(req, res) => {
    // const r = fs.createReadStream('./hall_of_masters.png') // or any other way to get a readable stream
    // const ps = new stream.PassThrough() // <---- this makes a trick with stream error handling
    // stream.pipeline(
    //  r,
    //  ps, // <---- this makes a trick with stream error handling
    //  (err) => {
    //   if (err) {
    //     console.log(err) // No such file or any other kind of error
    //     return res.sendStatus(400); 
    //   }
    // })
    // ps.pipe(res) // <---- this makes a trick with stream error handling
    res.sendFile('hall_of_masters.png', {root: __dirname})
})

router.get('/jegangrerpaaatjegjuksetpaasnake', (req, res) => {
    res.sendFile('views/det_bor_du.html', {root: __dirname})
})

module.exports = router;