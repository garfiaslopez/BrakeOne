export default {
    email: [{ required: true }, { min: 3 }, { max: 32 }, { pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }],
    string: [{ required: true }, { min: 2 }, { max: 32 }],
    string_no_req: [{ min: 2 }, { max: 32 }],
    city: [{ required: false }, { max: 32 }],
    text: [{ required: true }, { min: 3 }, { max: 512 }],
    text_no_req: [{ required: true }, { min: 3 }, { max: 512 }],
    rfc: [{ required: true }, { min: 13 }, { max: 13 }],
    phone: [{ required: true }, { min: 10 }, { max: 10 }],
    number: [{ required: true }],
    number_credit: [{ required: true }],
    date: [{ required: true }],
    contacts: [{ min: 1 }]
}