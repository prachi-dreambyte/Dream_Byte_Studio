const router = require("express").Router();
const upload = require('../../config/multer')

const { createBlog, getAllBlogs, getBlogBySlug, updateBlog, deleteBlog } = require('./index')

router.post('/create-blog',upload.fields([{name: 'featured_image'}]), createBlog)
router.get('/get-all-blogs', getAllBlogs)
router.get('/get-blog-by-slug/:slug', getBlogBySlug)
router.patch('/update-blog/:slug',upload.fields([{name: 'featured_image'}]), updateBlog)
router.delete('/delete-blog/:slug', deleteBlog)

module.exports = router