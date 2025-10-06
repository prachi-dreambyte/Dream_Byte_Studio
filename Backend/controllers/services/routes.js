const router = require("express").Router();
const upload = require('../../config/multer')

const { createService, getAllServices, getServiceBySlug, updateService, deleteService } = require('./index')

router.post('/create-service',upload.fields([{name: 'featured_image'},{name : "icon"}]), createService)
router.get('/get-all-services', getAllServices)
router.get('/get-service-by-slug/:slug', getServiceBySlug)
router.patch('/update-service/:slug',upload.fields([{name: 'featured_image'},{name : "icon"}]), updateService)
router.delete('/delete-service/:slug', deleteService)

module.exports = router