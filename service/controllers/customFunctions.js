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
    update_percent: (req, res, next) => {

        const objectModel = require("../models/product");

        let Filter = {
            subsidiary_id: req.body.subsidiary_id,
        };
        let NewProperties = {};

        //Update percents 
      /*   if (req.body.brand) { 
            Filter.brand = req.body.brand;            

            var data = {
                $set : {
                    percent_public: 1,
                }
            }
            var data_percent_workshop = {
                $set: {
                    percent_workshop: 1
                }
            }
            var percent_credit_workshop = {
                $set: {
                    percent_credit_workshop: 1
                }
            } 
            var percent_wholesale = {
                $set: {
                    percent_wholesale: 1
                }
            }
            objectModel.updateMany({}, data, function(err, response) { 
                if (err) { 
                    return console.log('No se pudo actualizar los productos...');
                } else { 
                    return console.log('Se actualizo correctamente el producto..') 
                } 
            });
            objectModel.updateMany({}, data_percent_workshop, function(err, response) { 
                if (err) { 
                    return console.log('No se pudo actualizar el producto') 
                } else { return console.log('Se actualizo correctamente el producto') 
            } });
            objectModel.updateMany({}, percent_credit_workshop, function(err, response) { 
                if (err) { 
                    return console.log('No se pudo actualizar el producto') 
                } else { return console.log('Se actualizo correctamente el producto') 
            } });
            objectModel.updateMany({}, percent_wholesale, function(err, response) { 
                if (err) {
                     return console.log('No se pudo actualizar el producto') 
                } else { 
                    return console.log('Se actualizo correctamente el producto') 
            } });
        } */
        if (req.body.brand === 'ANGEL') { // update by brand 
                    
            console.log('Llegaste aqui...');

            
                                              
            objectModel.findOneAndUpdate(
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
        }else if (req.body.brand === 'AIMCO') { // update by brand 
            Filter.brand = req.body.brand;            

            NewProperties.percent_public = 68;
            NewProperties.percent_workshop = 40;
            NewProperties.percent_credit_workshop = 61;
            NewProperties.percent_wholesale = 29;  
                                              
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
        } else if(req.body.brand === 'BREMBO') {
            Filter.brand = req.body.brand;            

            NewProperties.percent_public = 113;
            NewProperties.percent_workshop = 78;
            NewProperties.percent_credit_workshop = 88;
            NewProperties.percent_wholesale = 40;  
                                              
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
        }else if(req.body.brand === 'ORIGINAL') {
            Filter.brand = req.body.brand;            

            NewProperties.percent_public = 60;
            NewProperties.percent_workshop = 33;
            NewProperties.percent_credit_workshop = 53;
            NewProperties.percent_wholesale = 22;  
                                              
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
        }else if(req.body.brand === 'TEXTAR'){
            Filter.brand = req.body.brand;            

            NewProperties.percent_public = 68;
            NewProperties.percent_workshop = 40;
            NewProperties.percent_credit_workshop = 61;
            NewProperties.percent_wholesale = 29;  
                                              
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
        }else if(req.body.brand === 'GRC ULTRA'){
            Filter.brand = req.body.brand;            

            NewProperties.percent_public = 98;
            NewProperties.percent_workshop = 49;
            NewProperties.percent_credit_workshop = 71;
            NewProperties.percent_wholesale = 24;  
                                              
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
        }else if(req.body.brand === 'FREMAX'){
            Filter.brand = req.body.brand;            

            NewProperties.percent_public = 80;
            NewProperties.percent_workshop = 55;
            NewProperties.percent_credit_workshop = 70;
            NewProperties.percent_wholesale = 40;  
                                              
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
        }else if(req.body.brand === 'DFC'){
            Filter.brand = req.body.brand;            

            NewProperties.percent_public = 120;
            NewProperties.percent_workshop = 48;
            NewProperties.percent_credit_workshop = 68;
            NewProperties.percent_wholesale = 35;  
                                              
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
        }else if(req.body.brand === 'TRW'){
            Filter.brand = req.body.brand;            

            NewProperties.percent_public = 60;
            NewProperties.percent_workshop = 33;
            NewProperties.percent_credit_workshop = 53;
            NewProperties.percent_wholesale = 23;  
                                              
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
        }else if(req.body.brand === 'CENTRIC'){
            Filter.brand = req.body.brand;            

            NewProperties.percent_public = 68;
            NewProperties.percent_workshop = 40;
            NewProperties.percent_credit_workshop = 61;
            NewProperties.percent_wholesale = 29;  
                                              
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
        }else if(req.body.brand === 'AKEBONO'){
            Filter.brand = req.body.brand;            

            NewProperties.percent_public = 68;
            NewProperties.percent_workshop = 40;
            NewProperties.percent_credit_workshop = 45;
            NewProperties.percent_wholesale = 28;  
                                              
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
        }else if(req.body.brand === 'BEST BRAKES'){
            Filter.brand = req.body.brand;            

            NewProperties.percent_public = 114;
            NewProperties.percent_workshop = 78;
            NewProperties.percent_credit_workshop = 88;
            NewProperties.percent_wholesale = 40;  
                                              
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
        }else if(req.body.brand === 'LIGHTNING'){
            Filter.brand = req.body.brand;            

            NewProperties.percent_public = 124;
            NewProperties.percent_workshop = 68;
            NewProperties.percent_credit_workshop = 93;
            NewProperties.percent_wholesale = 35;  
                                              
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
        }else if(req.body.brand === 'OE SUPER CERAMIC'){
            Filter.brand = req.body.brand;            

            NewProperties.percent_public = 68;
            NewProperties.percent_workshop = 40;
            NewProperties.percent_credit_workshop = 61;
            NewProperties.percent_wholesale = 29;  
                                              
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
        }else if(req.body.brand === 'BRAKEONE'){
            Filter.brand = req.body.brand;            

            NewProperties.percent_public = 60;
            NewProperties.percent_workshop = 43;
            NewProperties.percent_credit_workshop = 53;
            NewProperties.percent_wholesale = 30;  
                                              
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
        }else{      
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