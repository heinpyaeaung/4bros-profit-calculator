const Joi = require('joi')

module.exports = function (infos) {
    const Schema = Joi.object({
        name: Joi.string().required(),
        original_price: Joi.number().required(),
        sale_price: Joi.number().required(),
        image_infos: Joi.object()
    })
    return Schema.validate(infos)
}