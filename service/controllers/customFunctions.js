errs = require('restify-errors');
module.exports =  {
    update_stock:  (req, res, next) => {
        const objectModel = require("../models/product");
        let Filter = {
            subsidiary_id: req.body.subsidiary_id,
        };
        let NewProperties = {};
        

        //Modify price percentage
        if (req.body.brand && req.body.quantity_percent) { // update by brand 
            Filter.brand = req.body.brand;

            var data = {
                $set : {
                    stock: 4,
                }
            }
            var data2 = {
                $set : {
                    stock: 5,
                }
            }
            //4
               objectModel.updateMany({key_id:"P10028N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P11011N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P11016N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P11019N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P11025N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P15002N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24077N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24157N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P44025N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P49049N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50113N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P54031N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P54034N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P59038N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P65011N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83088N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83101N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85093N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85120N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06052"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P09010"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10070"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P37020"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P49041"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P49050"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50084"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50120"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50124"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
//5
 objectModel.updateMany({key_id:"P06073N"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10058N"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24061N"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P49053N"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50119N"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P56040N"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P68050N"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83062N"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85020N"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06071"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P23087"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P68027"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85075"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85131"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85137"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })



        } else {
            return res.json({ success: false, message: "Producto no encontrado" });
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
        if (req.body.key_id && req.body._id) {
            objectModel.remove({ key_id: req.body.key_id, _id: { '$ne': req.body._id }}, (err, response) => {
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
        
        const objectModel = require("../models/product");
        if (req.body.key_id && req.body._id) {
            objectModel.findById({ key_id: req.body.key_id}, (err, response) => {
                if(err){
                    return next(new errs.InternalServerError(err));                    
                } else if (response) {
                    return res.json({ success: true, obj: response});                    
                } else {
                    return next(new errs.BadRequestError("El elemento no existe."));
                }
            });
        }
        
    },
}