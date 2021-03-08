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

            
            objectModel.updateMany({key_id:"GCD1211"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1226"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1259"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1260"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1275"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1281"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1295"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1303"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1304"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1307"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1326"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1327"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1341"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1346"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1354"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1358"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1361"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1377"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1378"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1386"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1391"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1398"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1422"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1430"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1447"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1451"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1454"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1455"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1456"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1467"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1468"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1471"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1477"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1498"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1499"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1537"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1553"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1592"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1611"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1613"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1624"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1654"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1694"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1697"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1698"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1702"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1707"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1719"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1724"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1728"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1729|"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1736"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1760"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1776"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1779"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1783"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1794"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1795"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1800"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1801"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1808"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1813"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1814"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1818"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1820"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1821"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1828"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1831"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1833"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1839"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1841"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1844"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1850"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1852"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1855"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1864"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1869"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1871"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1872"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1874"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1878"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1894"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1895"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1898"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1926"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1934"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1935"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1942"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD1962"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD2010"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD2032"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD2036"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD2037"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD2042"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD2058"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD2074"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD2172"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD2247"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD340"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD536"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD680"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD782"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD793"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD812"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD815"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD833"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD868"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD883"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD885"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD888"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD905"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD906A"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD908"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD953"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD961"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD969"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GCD987"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1018"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1042A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1046"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1051"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1060"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1095"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1098"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1142"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1143"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1146"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1173"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1174"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1194"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1268"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1274"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1294"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1309"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1318"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1319"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1321"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1322"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1328"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1329"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1373"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1435"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1484"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1489"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD153"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1532"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1555"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1561"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1571"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1572"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1612"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1628"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1631"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1641"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1646"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1666"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1678"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1689"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1711"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1730"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1746"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1775"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1786"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1787"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1863"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD1994"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD2024"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD215"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD350"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD396"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD569A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD623"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD664"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD679"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD681"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD711"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD757"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD768"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD768A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD777"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD785"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD819"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD824"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD841"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD843"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD866"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD867"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD872"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD876"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD880"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD914"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD915"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD939"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD945"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD946"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GMD949"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HB585B.660"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HB586B.660"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HB657F.667"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2055"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2063A"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2068"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2127A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2172A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2280A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2281A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2283"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2286"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2292A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2297"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2299A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2312A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2313A"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2319"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"HQJ2321"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"MORSE D510"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1813"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1042"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1200"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1258"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1259"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1274"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1286"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1332"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1430"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1519"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1556"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1676"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1709"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1717"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1718"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1729"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1730"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1734"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1766"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1802"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1816"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1820"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1831"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1844"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1846"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1864"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1874"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1877"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1911"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1920"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1923"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1946"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1948"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1949"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1950"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1968"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1968"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD2013"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD2032"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD2036"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD2037"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD2058"}, data5, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD2074"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD2087"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD2089"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD2096"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD2186"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD2218"}, data5, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD2219"}, data6, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD333"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD369"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD683"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD865"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD867"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"XYD3039"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"MFD1682"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OCD1830"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"D1156"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"D1189"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"D1194"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"D1532"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"D1864"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"FER9206F"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D1222"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D1334"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D1377"}, data15, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D1414"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D1473"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D1729"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D1761"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D1794"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D1841"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D1850"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D2019"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D2074"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D2087"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D2092"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D20Y08"}, data6, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D2173"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D2174"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D2179"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D2186"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D2216"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D2219"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D2223"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D2250"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D2280"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D2315"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE D-BLAZER"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE ONIX"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"OE SILVERADO"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"T7300-D412"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"T1448"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"T5050"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.01451"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.0983"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.0991"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1024"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1130"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1223"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1252"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1271"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1274"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1300"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1350"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1358"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1453"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1531"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1535"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1598"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1607"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.16181"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1666"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.16811"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.17381"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1781"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1792"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1853"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1854"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"104.1905"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0114"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0374"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0495"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0532"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0536"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0666"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0702"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0731"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0733"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0764"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0770"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0792"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0793"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0797"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0815"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0829"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0847"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0858"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0867"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0868"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0883"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0888"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0904"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0905"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0910"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0914"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0929"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0945"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0952"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0969"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.09741"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.0976"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1004"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1018"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1021"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1037"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1041"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.10472"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1057"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1071"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1080"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1081"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1082"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1086"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1088"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1100"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1102"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1103"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1108"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1119"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1120"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1156"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1157"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1169"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1180"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1188"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1194"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1210"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1211"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1212"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1264"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1273"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1275"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1281"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1295"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1325"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1337"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1338"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1342"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1345"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1346"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1347"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1354"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1386"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1404"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1422"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1430"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1451"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.14541"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1473"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1508"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1521"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1544"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1561"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1585"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1592"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1602"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1610"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1613"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1623"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1624"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1628"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1645"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1649"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1650"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1654"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1658"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1663"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1677"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1679"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1698"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1711"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1718"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1719"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1729"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1731"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1734"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1735"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1736"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1737"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1759"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1761"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1784"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1791"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1793"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1795"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1800"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1801"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1802"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1805"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1806"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1812"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1814"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1815"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1816"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1818"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1827"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1828"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1829"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1839"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1843"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1844"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1847"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1848"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1855"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1857"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1868"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1871"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1874"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1878"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1886"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1892"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1897"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1912"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1913"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1914"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.1923"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.2032"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.2036"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.2037"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.6011"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"105.6062"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"106.0031"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"106.0512"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"106.0653"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"106.0756"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"106.0784"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"106.0785"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"106.0833"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"106.0834"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"106.0945"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"106.0974"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"106.1080"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"106.1082"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })

            

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