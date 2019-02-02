const sellItems = [{
    description: 'DEL ALFA ROMEO GT 147 156 02-07 2.0L 1.9L Ø284.00MM',
    quantity: 2,
    price: 1085.3,
    charge: 2170.3
}, {
    description: 'DEL ALFA ROMEO GT 35432 5432 mm435 1.7L',
    quantity: 2,
    price: 115.3,
    charge: 2270.5
}];

const quotationColumns = [{
    title: 'Cantidad',
    dataIndex: 'quantity',
    key: 'quantity',
}, {
    title: 'Concepto',
    dataIndex: 'description',
    key: 'description',
}, {
    title: 'Precio',
    dataIndex: 'price',
    key: 'price',
}, {
    title: 'Importe',
    dataIndex: 'charge',
    key: 'charge',
}];

export { sellItems, quotationColumns };