const router = require("express").Router();

const { create, getAllQueries, deleteQuery } = require('./index')

router.post('/create-query', create)
router.get('/get-all-queries', getAllQueries)
router.delete('/delete-query/:query_id',deleteQuery)

module.exports = router