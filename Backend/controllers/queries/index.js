const Queries = require("../../models/queries")
const pick = require('../../utils/pick');
const Joi = require("joi");


exports.create = async (req, res) => {
    try {
        const queriesSchema = Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().required(),
            number:Joi.string().required(),
            sigFirstName:Joi.string(),
            sigLastName:Joi.string(),
            eventDate:Joi.string(),
            eventLocation:Joi.string(),
            celebrationDetails:Joi.string()
        });
        const { error } = queriesSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                error: error.details[0].message
            });
        }

        const data = { ...req.body };

        const result = await Queries.create({ ...data });

        return res.status(200).json({
            result,
            message: 'Query created successfully.'
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message || "Something went wrong."
        });
    }
};

exports.getAllQueries = async (req, res) => {
    try {
        const options = pick(req.query, ['sortBy', 'limit', 'page']);

        const queries = await Queries.paginate({ 'status': 'publish' }, options);

        return res.status(200).json(queries);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message || "Something went wrong"
        })
    }
}

exports.deleteQuery = async (req, res) => {
    try {

        const {query_id} = req.params;
        const query = await Queries.findOne({ _id:query_id });

        if (!query) {
            return res.status(404).json({
                error: true,
                message: "Query not found."
            });
        }

        await Queries.findByIdAndDelete(query_id);

        return res.status(200).json({
            message: 'Query deleted successfully.'
        });

    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message || "Something went wrong."
        });
    }
}