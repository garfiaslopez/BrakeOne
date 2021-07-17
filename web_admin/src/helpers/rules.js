export default {
    email: [{ required: false }, { min: 3 }, { max: 512 }, { pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }],
    string: [{ required: true }, { min: 2 }, { max: 512 }],
    clav: [{ required: true }, { min: 2 }, { max: 512 }],
    string_no_req: [{ required: false,  min: 2 }, { max: 512 }],
    city: [{ required: false }, { max: 512 }],
    text: [{ required: false }, { min: 3 }, { max: 512 }],
    text_no_req: [{ required: false }, { min: 3 }, { max: 512 }],
    rfc: [{ required: false }, { min: 12 }, { max: 13 }],
    phone: [{ required: false }, { min: 10 }, { max: 10 }],
    number: [{ required: false }],
    prices: [{ required: true }],
    number_credit: [{ required: false }],
    date: [{ required: false }],
    contacts: [{ required: false}]
}