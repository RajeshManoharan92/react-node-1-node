const express = require('express');
const router = express.Router();
const nodemodule = require('../module/node')

router.get('/get', nodemodule.getproductdetails);
router.post('/post',nodemodule.postproductdata);
router.put('/update/:id',nodemodule.Updateproductdata);
router.delete('/delete/:id',nodemodule.deleteproductdata);

module.exports = router