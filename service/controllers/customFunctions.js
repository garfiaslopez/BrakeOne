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
            var data14 = {
                $set : {
                    stock: 14,
                }
            }
            var data16 = {
                $set : {
                    stock: 16,
                }
            }
            var data20 = {
                $set : {
                    stock: 20,
                }
            }
            var data129 = {
                $set : {
                    stock: 129,
                }
            }
            
            objectModel.updateMany({key_id:"2021701"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2078401"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2099501"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2130503"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2148703"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2191901"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2203401"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2206201"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2207601"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2214101"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2231701"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2238301"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2238601"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2260101"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2307003"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2309902"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2312401"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2313901"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2315402"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2317203"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2318302"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2319002"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2321502"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2322201"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2327102"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2328101"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2328702"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2332601"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2332603"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2332902"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2333403"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2334001"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2335301"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2341401"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2342401"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2344704"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2345201"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2358101"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2370502"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2370802"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2372301"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2373201"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2374303"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2375101"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2379101"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2381101"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2395501"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2398001"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2398401"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2400701"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2404901"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2409801"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2415001"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2417001"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2419101"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2426001"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2430101"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2431601"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2433401"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2434901"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2439901"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2440903"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2446501"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2447301"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2448404"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2454101"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2456101"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2460601"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2465901"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2466401"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2470301"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2487001"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2491401"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2502201"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2502902"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2504501"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2507101"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2508501"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2511401"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2513301"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2517903"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2521201"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2521402"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2533101"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2534801"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2551401"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2553101"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2553103"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2560301"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2561701"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2563201"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2919001"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2920002"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2331281"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1012MM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1030"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1048"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1094"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1108"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1110"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1123"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1156"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1157MM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1174MM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1220"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1261"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1262"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1265"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1288"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1293"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1305"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1307"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1316"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1321"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1342"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1350"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1354"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1367"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1371"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1373"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1381"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1386DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1399"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1403"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1454"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1457"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1459"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1463"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1469"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1477"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1478"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1492"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1505"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1510"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1528"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1529"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1530"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1531"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1541"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1549"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1553"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1555"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1557"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1558"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1570MM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1576"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1584"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1590"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1591"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1600"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1612"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1623"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1628"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1642"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1675"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1685"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1693"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1696"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1699"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1718"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1722"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1723"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1724"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1726"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1734"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1737"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1740"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1754DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1764"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1768"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1775"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1779"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1791"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1792"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1794"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1799"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1822"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1827"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1847"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1906"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1920"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1926"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1950"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1956"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1959"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1961"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1963"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1967"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1970"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1978DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB1979"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB2014"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB2019"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB2032"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB2045"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB2052"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB2066"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB2069"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB2079"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB2094"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB2131"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB2166"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB2172"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3088"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3129"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3165"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB317"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3239"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3247"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3250"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3279"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3328"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3349"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3350"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3369"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3381"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3400"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3402"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3404"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3404DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3440"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3466"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3472"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3480"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3482DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3484DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3488"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3494"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3522"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3524"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3528"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3529"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3532"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3539"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3549"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3563"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3580"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3592"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3629"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3633"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB3646"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4017"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4045"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4055MM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4104"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4105"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4110DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4118"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4119DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4124MM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4125DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4127DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4130DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4134"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4135"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4136DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4137"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4140"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4156"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4162"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4163"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4163DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4165DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4176DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4229DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4451"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4458"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4605"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4606"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4713DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4717DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4733DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4734DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4741DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4742DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4743DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4744DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4748DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4768MM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4769"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4774DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4779MM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4782"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4810DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4811DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4812DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4814DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4817DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4827DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4839DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4857"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4864"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4867"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4869"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4871"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4872"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4873"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4874"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4876"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4888"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4889"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4958"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4959"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4963"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4967"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4971"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4975"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4977"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4981"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4983"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4997DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB4998DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB742MM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB7686DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB7689"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB7881DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB7938"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB7965"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB797"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB8026"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB856DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB870"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB894DTM"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB917"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"GDB979"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"T1046C"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"T1338C"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"T881C"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"T7618-D749"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"T7644-D777"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"T7949-D1046"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"T8204-D1101"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"T8214-D1109"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"T8309-D1190"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"T8543-D1426"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"92159603"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"98034800"}, data, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
            objectModel.updateMany({key_id:"2115305"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2166404"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2179203"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2193702"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2203501"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2207201"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2214701"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2221801"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2230801"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2234401"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2342301"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2347801"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2351705"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2373101"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2388101"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2391401"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2392301"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2392701"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2396201"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2396601"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2400801"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2404301"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2413501"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2416201"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2428901"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2430601"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2431001"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2431501"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2443601"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2445901"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2446701"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2446902"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2448501"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2449602"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2453703"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2453801"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2455901"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2470601"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2470901"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2472101"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2473701"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2486701"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2486901"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2497401"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2497601"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2511001"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2515802"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2518701"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2521501"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2521905"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2530701"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2535301"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2547801"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2583301"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2599701"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1153MM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1222MM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1306"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1365"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1413"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1452"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1456"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1476"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1502"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1516"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1536"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1548"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1550"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1551DTM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1552"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1560"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1561"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1583"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1610"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1631"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1632"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1690"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1698"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1705"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1708"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1716DTM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1728"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1759MM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1761"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1763"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1765"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1774"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1783DTM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1798"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1802"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1828"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1835"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1838"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1843"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1856"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1882"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1884"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1900"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1918"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1989"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2016"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2031"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2060"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2072"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2078"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2080"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2097"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2106"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2110"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2122"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2127"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2135"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2142"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2146"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2151"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2153"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2169"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3156MM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3251"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3332"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3341DTM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3489MM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3517DTM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3583"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3639"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4148DTM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4720DTM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4729DTM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4820MM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4824DTM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4836DTM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4845DTM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4848DTM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4858"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4875"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4877"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4878"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4882"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4887"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4972"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB766MM"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB7780"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB7792"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"92106303"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"92133103"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"92140703"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"92151403"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"92160005"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"92160603"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"92176705"}, data2, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2206101"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2313803"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2355405"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2404903"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2408401"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2447801"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2457801"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2469602"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2482001"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2484805"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2500301"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2500701"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2532601"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2550601"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2568301"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2572001"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2582701"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2596801"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1287DTM"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1433"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1472"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1648"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1689"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1725"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1738"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1814"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1866"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1911"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1942"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1968"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1972"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2020"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2027"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2029"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2063"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2067"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2068"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2070"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2077"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2087"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3276"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3330"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3358"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3493"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3545"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3548"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3632"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4829DTM"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4850"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4860"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4870"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4885"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4886"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4892"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4964"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB7983"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"98057400"}, data3, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2203102"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2218701"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2326903"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2347101"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2375601"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2456301"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2484803"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2519901"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1729"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1766"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1795"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1840"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1907"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1933"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1948"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2088"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB3460"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4748"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB4884"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB7771DTM"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB7914"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB7975"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"98030900"}, data4, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2355001"}, data5, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1611"}, data5, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1869"}, data5, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1919"}, data5, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2028"}, data5, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB2061"}, data5, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2598001"}, data6, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1571"}, data6, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1712"}, data6, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"92238505"}, data6, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"2425401"}, data7, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"GDB1937"}, data10, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"98031000"}, data10, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })
objectModel.updateMany({key_id:"98053800"}, data11, function(err, response) { if (err) { return console.log('No se pudo actualizar el producto') } else { return console.log('Se actualizo correctamente el producto') } })



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