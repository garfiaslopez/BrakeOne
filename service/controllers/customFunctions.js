var errs = require('restify-errors');

module.exports =  {
    update_stock:  (req, res, next) => {

        const objectModel = require("../models/product");

        let Filter = {
            subsidiary_id: req.body.subsidiary_id,
        };
        let NewProperties = {};

        if (req.body.brand && req.body.quantity_percent) { // update by brand 
            Filter.brand = req.body.brand;

            const multiplier = (Number(req.body.quantity_percent) / 100) + 1;
            NewProperties.price = multiplier;
            NewProperties.price_public = multiplier;
            NewProperties.price_workshop = multiplier;
            NewProperties.price_wholesale = multiplier;

            objectModel.update(
                Filter,
                { $mul: NewProperties },
                { multi: true },
                (err, response) => {
                    if(err){
                        return next(new errs.InternalServerError(err));
                    } else {
                        return res.json({ success: true, message: "Succesfully updated.", obj: response });
                    }
                }
            );
        } else {
            return res.json({ success: false, message: "Missing fields." });
        }
    }
}