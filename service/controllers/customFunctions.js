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
            var data2 = {
                $set : {
                    stock: 2,
                }
            }
            var data3 = {
                $set : {
                    stock: 3,
                }
            }
            var data4 = {
                $set : {
                    stock: 4,
                }
            }
            var data5 = {
                $set : {
                    stock: 5,
                }
            }
            var data6 = {
                $set : {
                    stock: 6,
                }
            }
            var data7 = {
                $set : {
                    stock: 7,
                }
            }
            var data8 = {
                $set : {
                    stock: 8, 

                }
            }
            var data9 = {
                $set : {
                    stock: 9,
                }
            }
            var data10 = {
                $set : {
                    stock: 10,
                }
            }
            var data11 = {
                $set : {
                    stock: 11,
                }
            }
            var data12 = {
                $set : {
                    stock: 12,
                }
            }
            var data14 = {
                $set : {
                    stock: 14,
                }
            }
            var data15 = {
                $set : {
                    stock: 15,
                }
            }
            var data16 = {
                $set : {
                    stock: 16,
                }
            }
            var data17 = {
                $set : {
                    stock: 17,
                }
            }
            var data18 = {
                $set : {
                    stock: 18,
                }
            }
            var data19 = {
                $set : {
                    stock: 19,
                }
            }
            var data20 = {
                $set : {
                    stock: 20,
                }
            }
            var data22 = {
                $set : {
                    stock: 22,
                }
            }
            var data25 = {
                $set : {
                    stock: 25,
                }
            }
            var data26 = {
                $set : {
                    stock: 26,
                }
            }
            var data29 = {
                $set : {
                    stock: 29,
                }
            }
            var data30 = {
                $set : {
                    stock: 30,
                }
            }
            var data31 = {
                $set : {
                    stock: 31,
                }
            }
            var data35 = {
                $set : {
                    stock: 35,
                }
            }
            var data36 = {
                $set : {
                    stock: 36,
                }
            }
            var data38 = {
                $set : {
                    stock: 38,
                }
            }
            var data41 = {
                $set : {
                    stock: 41,
                }
            }
            var data48 = {
                $set : {
                    stock: 48,
                }
            }
            var data52 = {
                $set : {
                    stock: 52,
                }
            }
            var data54 = {
                $set : {
                    stock: 54,
                }
            }
            var data60 = {
                $set : {
                    stock: 60,
                }
            }
            var data62 = {
                $set : {
                    stock: 62,
                }
            }
            var data70 = {
                $set : {
                    stock: 70,
                }
            }
            var data95 = {
                $set : {
                    stock: 95,
                }
            }
            var data100 = {
                $set : {
                    stock: 100,
                }
            }
         

            /* objectModel.updateMany({line:"ADITIVO"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({line:"SENSORES"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({line:"VARIOS"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({line:"LÍQUIDO DE FRENOS"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } }) */

            
            objectModel.updateMany({key_id:"BD1729-8953"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.16461"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AC D840"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1111CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1141MP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1259CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1321MP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1368MP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1529LP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1541MP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1542LP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1629AMP"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1636LP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1694LP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1746CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1766SF"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1780CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1793"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1838CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1942"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD1977CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD203MP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD25976LP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD560CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD623CP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD808MP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD961MP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"AIMD96MP"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1021"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1033"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1037"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1044"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1047"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1055"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1057"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1058"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1078"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1080"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1081"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1082"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1084"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1087"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1088"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1089"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1100"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1102"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1103"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1124"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1158"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1161"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1164"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1169A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1210"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1211"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1212"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1222"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1258"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1259"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1264"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1273"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1274"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1280"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1281"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1326"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1332"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1338"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1345"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1347"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1354"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1363"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1377"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1391"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1422"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1430"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1468"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1498"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1508"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1522"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1592"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1593"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1596"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1612"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1623"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1649"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1653"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1659"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1665"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1679"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1679A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1697"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1698"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1707"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1711"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1728"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1729"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1784"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1793"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1818"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1818A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1878"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT1886"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT530"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT537"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT606A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT679"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT787A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT824"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT828"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT856"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT868"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT883"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT898"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT909"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT914"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT932"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT945"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT976"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ACT995"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ASP1001"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ASP1784"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ASP1793"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"ASP924"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1018"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1061"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1098"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1099"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1107"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1122"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1123"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1204"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1267"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1294"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1308"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1309"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1314"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1322"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1340"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1341"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1406"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1409"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1456"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1473"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1554"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1561"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1636"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1656"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1760"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1761"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1779"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1796"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1800"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1801"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1865"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR1880"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR340A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR592"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR768A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR840"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR847"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR872"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR874"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR915A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR919"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"EUR984"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"1435"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"602827"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"602835"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"602867"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"602876"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"602937"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"603010"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"603963"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"604047"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"604987"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"605800"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"605965"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"606028"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"607117"}, data5, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"607140"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"607155"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"607168"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"607199"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"P10055 / D1776"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"CFM1405"}, data5, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"D1051"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"D12 / D33"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"D363"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"D404"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQ2156"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"MKD1015"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"MKD600"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"MKD601"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"MKD649"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"MKD790"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"MKD806"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"MKD881"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"MKD965"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"D665"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"9438D2197BS"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"9462D2223BS"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"9464D2225BS"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"9481D2245BS"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"9482D2246BS"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"9483D2247BS"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"9523D2287BS"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"D1036-7939 / D1315"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1095-7957"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1102-8208"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1213-8333"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1277-8393"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1322-8434"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1340-8451"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1349-8459"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1394-8502"}, data6, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1468-8668"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1479-8542"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1506-7656"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1536-8745"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1539-7880"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1728-8952"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1736-8906"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1737-8449"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1774-9004"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1775-9005"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1778-8921"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1787-9014"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1805-9039"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1806-9041"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1811-9046"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1813-8428"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1826-9035"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1827-8904"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1828-8810"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1829-8506"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1830-9061"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1832-8840"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1834-8893"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1840-9068"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1842-9070"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1847-9075"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1848-9076"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1860-9088"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1864-9093"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1878-9106"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1886-9114"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1912-9143"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1913-9144"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1915-9085"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1916-8575"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1917-8929"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1929-9072"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1933-9144"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1939-9164"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1940-9165"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1942-9167"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1946-9170"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1947-9171"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1963-9188"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1970-9195"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1974-9201"}, data8, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD1977-9206"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2005-9235"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2006-9236"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2007-9237"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2009-9236"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2011-9241"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2019-9144"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2024-9254"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2025-9255"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2032B-000"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2035-8505"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2036-8840"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2037-9268"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2038-9269"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2042-9771"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2049-9279"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2050-9280"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2066-9298"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2076-9311"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2089-9324"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2136-9373"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2137-9374"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2173-9418"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD2174-9419"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD340-7234"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD687A-7710"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD815-7318"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD866-7741"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD905-7784"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD931-7834"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"BD932-7835"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"CD1228-8347"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"CD1290-8407"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"CD1381-8490"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"CD1429-8546"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"CD1530-8739"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"CD1531-8740"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"CD1610-8823"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"CD1634-8850"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"CD1652-8879"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })

            

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