const sellSource = [{
    key: 1,
    datakey: 121.1244,
    description: 'DEL ALFA ROMEO GT 147 156 02-07 2.0L 1.9L Ø284.00MM',
    quantity: 2,
    price: 1085.3,
    charge: 2170.3
}, {
    key: 2,
    datakey: 131.1244,
    description: 'DEL ALFA ROMEO GT 35432 5432 mm435 1.7L',
    quantity: 2,
    price: 115.3,
    charge: 2270.5
}];

const sellColumns = [{
    title: 'Clave',
    dataIndex: 'datakey',
    key: 'datakey',
}, {
    title: 'Descripción',
    dataIndex: 'description',
    key: 'description',
}, {
    title: 'Cantidad',
    dataIndex: 'quantity',
    key: 'qantity',
}, {
    title: 'Precio',
    dataIndex: 'price',
    key: 'price',
}, {
    title: 'Importe',
    dataIndex: 'charge',
    key: 'charge',
}];

export { sellSource, sellColumns };