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
                    stock: 0,
                }
            }

            objectModel.updateMany({key_id:"AIMD1111CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1141MP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1259CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1321MP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1368MP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1471CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1529LP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1541MP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1542LP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1629AMP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1636LP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1746CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1766SF"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1780CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1830CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1838CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD203MP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD25976LP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD560CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD808MP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1033"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1037"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1047"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1055"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1057"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1078"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1080"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1081"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1082"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1084"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1086"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1087"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1088"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1100"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1102"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1103"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1124"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1158"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1161"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1169A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1194"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1210"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1211"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1212"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1222"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1258"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1259"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1264"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1273"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1274"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1275"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1280"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1281"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1286"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1303"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1325"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1326"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1332"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1338"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1345"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1347"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1354"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1363"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1377"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1391"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1414"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1422"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1430"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1455"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1468"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1498"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1508"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1522"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1589"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1592"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1593"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1596"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1611"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1612"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1623"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1653"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1665"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1679"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1679A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1697"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1698"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1707"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1711"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1728"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1729"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1784"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1793"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1818"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1818A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1846"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1878"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1886"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT465A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT537"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT606A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT787A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT824"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT856"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT868"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT883"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT898"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT905"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT909"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT932"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT945"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT976"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT995"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ASP1001"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ASP1304"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ASP1784"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ASP1793"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ASP924"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1018"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1061"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1095"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1098"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1099"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1107"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1122"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1123"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1267"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1294"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1308"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1314"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1322"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1340"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1341"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1375"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1406"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1456"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1473"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1554"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1561"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1630A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1636"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1656"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1760"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1761"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1779"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1880"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR340A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR592"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR768A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR840"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR847"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR874"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR984"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"001435"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"602827"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"602835"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"602867"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"602876"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"602937"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"603010"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"603963"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"604047"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"604987"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"605800"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"605965"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"606028"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"607117"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"607140"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"607155"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"607168"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"607169"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"607195"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"607199"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P10016"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"D363"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"D404"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"D908"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQ2156"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"D946"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P59042"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P59055N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P65018N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P78020"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P85064N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P85069N"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P24076X"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P85020X"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P85073X"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P85075X"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P85098X"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P85112X"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P85113X"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P85126X"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P85144X"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"102.15030"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"102.60100"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"103.0667"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"103.06941"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"103.07250"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"103.07400"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"103.09040"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto' + response) } else { return console.log('Se actualizo correctamente el producto') } })



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