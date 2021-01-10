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
                    stock: 1,
                }
            }
             objectModel.updateMany({key_id:"P06012N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06019N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06020N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06025N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06028N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06032N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06038N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06043N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06049N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06052N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06076N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06077N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06078N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06087N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06088N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P07007N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P09004N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P09006N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P09012N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P09016N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10009N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10010N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10012N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10025N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10026N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10027N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10031N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10032N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10036N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10041N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10042N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10044N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10046N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10050N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10053N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10054B"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10054N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P11008N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P11015N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P11032N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P11037N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P18002N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P18011N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P18013N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P18014N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P18020N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P23039N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P23064N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P23156N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24037N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24041N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24048N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24058N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24080N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24082N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24085N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24103N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24109N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24114N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24115N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24121N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24123N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24125N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24128N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24130N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24137N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24164N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24168N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28023N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28026N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28032N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28034N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28045N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28050N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28055N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28057N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28059N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28067N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28082N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P30022N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P30050N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P30066N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P30070N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P34007N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P36012N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P37004N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P37010N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P37011N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P37020N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P44014N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P44016N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P44021N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P49039N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P49044N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50039N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50057N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50060N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50085N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50087N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50095N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50102N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50109N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P54012N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P54014N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P54018N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P54025N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P54041N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P56024N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P56026N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P56029N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P56036N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P56048N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P56073N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P56078N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P56079N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P56082N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P56091N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P56098N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P59020N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P59030N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P59046N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P59060N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P59065N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P59077N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P61060N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P61063N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P65008N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P65014N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P65018N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P65036N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P78020N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P79008N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P79014N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83006N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83011N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83055N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83066N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83078N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83086N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83105N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83107N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83110N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83118N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83137N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83140N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85016N D227 SOLIDO"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85036N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85064N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85065N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85069N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85072N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85085N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85100N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85114N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85115N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85122N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P86016N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P86018N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P86019N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P86022N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P86023N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06022"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06032"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06044"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06060"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06068"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06075"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P06078"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10002B"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10004"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P10012"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P11012"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P16011"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P16013"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P18024"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P18025"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24068"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24078"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P24188"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28025"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28034"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28042"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28046"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P28049"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P30025"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P30032"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P30034"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P30047"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P30067"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P34005"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P36022"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P37012"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P44013"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P44014"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P49047"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50023"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50035"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50042"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50048"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50052"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50062"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P50067"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P54012"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P56038"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P56065"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P59036"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P59045"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P59077"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P59080"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P61058"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P61068"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P68008"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P68036"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P68050"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P78020"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P79006"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P79018"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P83089"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85059"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85061"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85064"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85065"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85067"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85069"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85072"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85081"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85084"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85085"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85100"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85104"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85122"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85148"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P85149"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P86017"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
 objectModel.updateMany({key_id:"P86023"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })




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