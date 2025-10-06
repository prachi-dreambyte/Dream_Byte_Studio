const Joi = require("joi");
const Service = require('../../models/services');
const pick = require('../../utils/pick');

exports.createService = async (req, res) => {
    try {
        const serviceSchema = Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            content: Joi.string().required(),
            status:Joi.string()
        });
        const { error } = serviceSchema.validate(req.body);
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
        const imageFile = req.files.featured_image[0];
        const iconFile = req.files.icon[0];
        const result = await Service.create({ ...data, featured_image: imageFile, icon: iconFile});
        return res.status(200).json({
            result,
            message: 'Service created successfully.'
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message || "Something went wrong."
        });
    }
};

exports.getAllServices = async (req, res) => {
    try {
        const options = pick(req.query, ['sortBy', 'limit', 'page']);

        const { status } = pick(req.query,['status'])
         
        if(status && status == "all"){
            const services = await Service.paginate({}, options);
            return res.status(200).json(services);
        }
        const services = await Service.paginate({ 'status': 'publish' }, options);
        return res.status(200).json(services);

    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message || "Something went wrong"
        })
    }
}

exports.getServiceBySlug = async (req, res) => {
    try {
        const slug = req.params.slug;
        const service = await Service.findOne({ slug });
        if (!service) {
            return res.status(404).json({
                error: true,
                message: "Service not found."
            });
        }
        return res.status(200).json(service);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message || "Something went wrong."
        })
    }
}

exports.updateService = async (req, res) => {
    try {
        const serviceSchema = Joi.object({
            title: Joi.string(),
            description: Joi.string(),
            content: Joi.string(),
            status:Joi.string()
        });
        const { error } = serviceSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                error: error.details[0].message
            });
        }
        const slug = req.params.slug;
        const service = await Service.findOne({ slug });
        if (!service) {
            return res.status(404).json({
                error: true,
                message: "Service not found."
            });
        }
        const data = { ...req.body };
        if (req.files && req.files.featured_image) {
            data['featured_image'] = req.files.featured_image[0];
        }
        if (req.files && req.files.icon) {
            data['icon'] = req.files.icon[0];
        }
        const updateService = await Service.findByIdAndUpdate(
            service._id,
            { $set: data },
            { new: true }
        )

        return res.status(200).json({
            updateService,
            message: 'Service updated successfully.'
        });

    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message || "Something went wrong"
        });
    }
};

exports.deleteService = async (req, res) => {
    try {

        const slug = req.params.slug;
        const service = await Service.findOne({ slug });

        if (!service) {
            return res.status(404).json({
                error: true,
                message: "Service not found."
            });
        }

        await Service.findByIdAndDelete(service._id);

        return res.status(200).json({
            message: 'Service deleted successfully.'
        });

    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message || "Something went wrong."
        });
    }
}