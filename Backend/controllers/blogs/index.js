const Joi = require("joi");
const Blog = require('../../models/blogs');
const slugify = require('slugify');
const pick = require('../../utils/pick');


exports.createBlog = async (req, res) => {
    try {
        const blogSchema = Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            content: Joi.string().required(),
            status:Joi.string()
        });
        const { error } = blogSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                error: error.details[0].message
            });
        }

        if(!req.files || !req.files.featured_image){
            return res.status(400).json({
                error:"Featured Image is required."
            })
        }

        const data = { ...req.body };
        const slug = slugify(data.title, { lower: true });
        const file = req.files.featured_image[0];
        const result = await Blog.create({ ...data, featured_image: file, slug });
        return res.status(200).json({
            result,
            message: 'Blog created successfully.'
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message || "Something went wrong."
        });
    }
};

exports.getAllBlogs = async (req, res) => {
    try {
        const options = pick(req.query, ['sortBy', 'limit', 'page']);
        const { status } = pick(req.query,['status'])
        
        if(status && status == "all"){
            const blogs = await Blog.paginate({},options);
            return res.status(200).json(blogs);
        }
        
        const blogs = await Blog.paginate({ 'status':"publish"}, options);
        return res.status(200).json(blogs);
       
    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message || "Something went wrong"
        })
    }
}

exports.getBlogBySlug = async (req, res) => {
    try {
        const slug = req.params.slug;
        const blog = await Blog.findOne({ slug });
        if (!blog) {
            return res.status(404).json({
                error: true,
                message: "Blog not found."
            });
        }
        return res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message || "Something went wrong."
        })
    }
}

exports.updateBlog = async (req, res) => {
    try {
        const blogSchema = Joi.object({
            title: Joi.string(),
            description: Joi.string(),
            content: Joi.string(),
            status:Joi.string()
        });
        const { error } = blogSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                error: error.details[0].message
            });
        }
        const slug = req.params.slug;
        const blog = await Blog.findOne({ slug });
        if (!blog) {
            return res.status(404).json({
                error: true,
                message: "Blog not found."
            });
        }
        const data = { ...req.body };
        if (data.title && data.title !== blog.title) {
            data['slug'] = slugify(data.title, { lower: true });;
        }
        if (req.files && req.files.featured_image) {
            data['featured_image'] = req.files.featured_image[0];
        }
        const updateBlog = await Blog.findByIdAndUpdate(
            blog._id,
            { $set: data },
            { new: true }
        )

        return res.status(200).json({
            updateBlog,
            message: 'Blog updated successfully.'
        });

    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message || "Something went wrong"
        });
    }
};

exports.deleteBlog = async (req, res) => {
    try {

        const slug = req.params.slug;
        const blog = await Blog.findOne({ slug });

        if (!blog) {
            return res.status(404).json({
                error: true,
                message: "Blog not found."
            });
        }

        await Blog.findByIdAndDelete(blog._id);

        return res.status(200).json({
            message: 'Blog deleted successfully.'
        });

    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message || "Something went wrong."
        });
    }
}