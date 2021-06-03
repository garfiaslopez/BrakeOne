errs = require('restify-errors');
module.exports =  {
    update_stockPublico:  (req, res, next) => {
       
        const objectModel = require("../models/product");

        let Filter = {
            subsidiary_id: req.body.subsidiary_id,
        };
        let NewProperties = {};

        if (req.body.brand && req.body.quantity_percent) { // update by brand 
            Filter.brand = req.body.brand;

            const multiplier = (Number(req.body.quantity_percent) / 100) + 1;
           
            NewProperties.price_public = multiplier;
            
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
    },
    update_stockTaller:  (req, res, next) => {

        const objectModel = require("../models/product");

        let Filter = {
            subsidiary_id: req.body.subsidiary_id,
        };
        let NewProperties = {};

        if (req.body.brand && req.body.quantity_percent) { // update by brand 
            Filter.brand = req.body.brand;

            const multiplier = (Number(req.body.quantity_percent) / 100) + 1;
           
            NewProperties.price_workshop = multiplier;
            
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
    },
    update_stockCredito:  (req, res, next) => {

        const objectModel = require("../models/product");

        let Filter = {
            subsidiary_id: req.body.subsidiary_id,
        };
        let NewProperties = {};

        if (req.body.brand && req.body.quantity_percent) { // update by brand 
            Filter.brand = req.body.brand;

            const multiplier = (Number(req.body.quantity_percent) / 100) + 1;
           
            NewProperties.price_credit_workshop = multiplier;
            
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
    },
    update_stockMayoreo:  (req, res, next) => {

        const objectModel = require("../models/product");

        let Filter = {
            subsidiary_id: req.body.subsidiary_id,
        };
        let NewProperties = {};

        if (req.body.brand && req.body.quantity_percent) { // update by brand 
            Filter.brand = req.body.brand;

            const multiplier = (Number(req.body.quantity_percent) / 100) + 1;
           
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
    },       
    update_stockCosto:  (req, res, next) => {

        const objectModel = require("../models/product");

        let Filter = {
            subsidiary_id: req.body.subsidiary_id,
        };
        let NewProperties = {};

        if (req.body.brand && req.body.quantity_percent) { // update by brand 
            Filter.brand = req.body.brand;

            const multiplier = (Number(req.body.quantity_percent) / 100) + 1;
           
            NewProperties.price = multiplier;
            
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
    },
    update_stockCPTCM:  (req, res, next) => {

        const objectModel = require("../models/product");

        let Filter = {
            subsidiary_id: req.body.subsidiary_id,
        };
        let NewProperties = {};

        if (req.body.brand && req.body.quantity_percent) { // update by brand 
            Filter.brand = req.body.brand;            

            const multiplier = (Number(req.body.quantity_percent) / 100) +1;
            NewProperties.price = multiplier;
            NewProperties.price_credit_workshop = multiplier;
            NewProperties.price_public = multiplier;
            NewProperties.price_wholesale = multiplier;
            NewProperties.price_workshop = multiplier;
                        
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
    },   
    update_percent:  (req, res, next) => {

        const objectModel = require("../models/product");

        let Filter = {
            subsidiary_id: req.body.subsidiary_id,
        };
        let NewProperties = {};

        if (req.body.brand) { // update by brand 
            Filter.brand = req.body.brand;            

            const multiplierPublic = ((NewProperties.price_public / NewProperties.price) * 100) + 100;
            const multiplierWorkshop = ((NewProperties.price_workshop / NewProperties.price) * 100) + 100;  
            const multiplier_credit_workshop = ((NewProperties.price_credit_workshop / NewProperties.price) * 100) + 100;  
            const multiplier_wholesale = ((NewProperties.price_wholesale / NewProperties.price) * 100) + 100;  
           
            NewProperties.percent_public = multiplierPublic;
            NewProperties.percent_workshop = multiplierWorkshop;
            NewProperties.percent_credit_workshop = multiplier_credit_workshop;
            NewProperties.percent_wholesale = multiplier_wholesale;           
                        
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
    },  

    car_makes:  (req, res, next) => {
        const objectModel = require("../models/car");
        objectModel.distinct('make', (err, makes) => {
            if(err){
                return next(new errs.InternalServerError(err));
            } else {
                return res.json({ success: true, objs: makes });
            }
        });
    },
    car_models:  (req, res, next) => {
        const objectModel = require("../models/car");
        objectModel.distinct('model', { make: req.body.make },  (err, models) => {
            if(err){
                return next(new errs.InternalServerError(err));
            } else {
                return res.json({ success: true, objs: models });
            }
        });
    },
    car_trims:  (req, res, next) => {
        const objectModel = require("../models/car");
        objectModel.distinct('trim', { make: req.body.make, model: req.body.model },  (err, trims) => {
            if(err){
                return next(new errs.InternalServerError(err));
            } else {
                return res.json({ success: true, objs: trims });
            }
        });
    },
    replicate_product:  async (req, res, next) => {
        const objectModel = require("../models/product");
        const subsidiaryModel = require("../models/subsidiary");
        if (req.body.data) {
            let newSet = Object.assign({},req.body.data);
            if (req.body.method === 'PUT') {
                console.log(req.body.data);
                const product = await objectModel.findById(req.body.id);
                console.log(product)
                const key_id = product.key_id;
                delete newSet.subsidiary_id;
                delete newSet.stock;
                if (key_id !== null && key_id !== "") {
                    objectModel.update(
                        { 'key_id': key_id },
                        newSet,
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
                    return res.json({ success: true, message: "Succesfully updated." });
                }
            } else {
                // Create a new obj per subsidiary. (except actual )
                const actual_subsidiary = req.body.data.subsidiary_id;
                subsidiaryModel.find({}, ( err , subsidiaries ) => {
                    if (err) {
                        console.log(err);
                        return next(new errs.InternalServerError(err));
                    } else {
                        subsidiaries.forEach(async (s) => {
                            if (String(s._id) !== actual_subsidiary) {
                                let obj = new objectModel();
                                let modelFields = Object.keys(obj.schema.obj);
                                modelFields.forEach((field) => {
                                    if (newSet[field] !== undefined) {
                                        obj[field] = newSet[field];
                                    }
                                });
                                obj['subsidiary_id'] = s._id;
                                await obj.save();
                            }
                        });
                        return res.json({ success: true, message: "Succesfully updated." });
                    }
                });
            }
        } else {
            return res.json({ success: false, message: "Error on propagation." });
        }
    },

    
    delete_product:  async (req, res, next) => {
        
        const objectModel = require("../models/product");
        if (req.body._id) {
            objectModel.findByIdAndRemove({ _id: req.body._id }, (err, response) => {
                if(err){
                    return next(new errs.InternalServerError(err));
                } else if (response) {
                    return res.json({ success: true, message: "Succesfully deleted." });                                      
                } else {
                    return next(new errs.BadRequestError("El elemento no existe."));                   
                }
            });
        }
        
    },

    search_product:  async (req, res, next) => {

        console.log(`search_product ${req.body.key_id}`);                

        const objectModel = require("../models/product");
        if (req.body.key_id && req.body._id) {

            objectModel.findById({ key_id: req.body.key_id}, (err, response) => {               
                if(err){
                    return next(new errs.InternalServerError(err));                    
                } else if (response) {
                    console.log(response);
                    return res.json({ success: true, obj: response});                    
                } else {
                    return next(new errs.BadRequestError("El elemento no existe."));
                }
            });

        }
        
    },
}