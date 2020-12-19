import React, { Fragment } from 'react';
import {
    Input,
    Form,
    Icon,
    InputNumber,
    Select,
    DatePicker,
    Divider,
    Button
} from 'antd';
import ColorPicker from '../ColorPicker';
import toPairs from 'lodash/toPairs';
import styles from './Styles';
import locale_es from 'antd/lib/date-picker/locale/es_ES';
import init_postal_codes from '../postal_code';
import Barcode from 'react-barcode';
import ReactToPrint from 'react-to-print';

const FormItem = Form.Item;

// Reference rules
// https://github.com/yiminghe/async-validator/blob/master/src/messages.js
const rules = {
	required: 'Campo requerido',
	min: 'Ingrese los caracteres minimos para el campo',
	max: 'Se ha excedido del mínimo',
	pattern: 'Ingresa un email valido',
	types: {
		email: 'Ingresa un email valido',
		array: 'Ingresa almenos un elemento',
	},
};

const getMessage = (currentRule) => {
    const rulePairs = toPairs(currentRule)[0];
        if (rulePairs[0] === 'type') {
        return Object.assign({}, currentRule, {
            message: rules.types[rulePairs[1]],
        });
    }
    return Object.assign({}, currentRule, {
        message: rules[rulePairs[0]],
    });
};

class FormRender {
    constructor(form) {
        this.getFieldDecorator = form.getFieldDecorator;
        this.setFieldsValue = form.setFieldsValue;
        this.getFieldValue = form.getFieldValue;
        this.getFieldsValue = form.getFieldsValue;

        this.postal_codes = [];
    }
    public

    renderDivider(field_input) {
        return (
            <Divider
                style={styles.divider} 
                key={field_input.id}
                style={styles.divider}
            >
                    {field_input.placeholder}
            </Divider>
        );
    }

    renderStringField(field_input, is_disabled) {
        const getFieldDecorator = this.getFieldDecorator;
        const FieldRender = (
            <Input
                style={styles.inputElement}
                disabled={is_disabled}
                prefix={
                    field_input.prefixIcon ? (
                        <Icon
                            type={field_input.prefixIcon}
                            className="field-icon"
                        />
                    ) : ''
                }
                type={field_input.type || 'text'}
                placeholder={field_input.placeholder || ''}
                
            />
        );
        return (
            <FormItem
                key={field_input.id}
                style={styles.formComponent}
            >
                {getFieldDecorator(field_input.id, {
                    rules: field_input.rules.map(rule => getMessage(rule)),
                    })(FieldRender)
                }
            </FormItem>
        );
    }

    renderBarcodeField(field_input, is_disabled) {
        const getFieldDecorator = this.getFieldDecorator;
        const FieldRender = (
            <Input
                disabled={is_disabled}
                prefix={
                    field_input.prefixIcon ? (
                        <Icon
                            type={field_input.prefixIcon}
                            className="field-icon"
                        />
                    ) : ''
                }
                type={field_input.type || 'text'}
                placeholder={field_input.placeholder || ''}
                
            />
        );
        const barcode_options = {
            width: 2.8,
            height: 70,
            format: "CODE128",
            displayValue: true,
            background: "#ffffff",
            lineColor: "#000000",
        };
        const BarcodeRender = (
            <div
                ref={el => (this.barcodeToPrint = el)}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <div
                    style={{
                        display:'flex',
                        flexDirection: 'column',
                    }}
                >
                    <img
                        src={process.env.REACT_APP_CDN + '/images/BrakeOneChristmas.png'}
                        style={{
                            marginTop: 25,
                            marginLeft: 10,
                            display: 'block',
                            width: 100,
                            height: 40
                        }}
                        alt="enterpriseImage"
                    />
                    <p
                        style={{
                            fontSize: 11,
                            marginLeft: 10,
                            display: 'block',
                        }}
                    >www.brakeone.mx</p>
                </div>

                <Barcode
                    {...barcode_options}
                    value={this.getFieldValue(field_input.id)} 
                />
            </div>

        );
        return (
            <div
                style={styles.barcodeContainer}
            >
                <FormItem 
                    key={field_input.id}
                    style={styles.formComponent}
                >
                    {getFieldDecorator(field_input.id, {
                        rules: field_input.rules.map(rule => getMessage(rule)),
                        })(FieldRender)
                    }
                </FormItem>
                <div>
                    {BarcodeRender}
                </div>
                <ReactToPrint
                    trigger={() => (
                        <Button 
                            key="print_barcode" 
                            type="primary" 
                        > 
                            Imprimir
                        </Button>
                    )}
                    content={() => this.barcodeToPrint}
                />
                
            </div>
            

        );
    }

    renderPostalCode(field_input, is_disabled) {
        init_postal_codes();
        const getFieldDecorator = this.getFieldDecorator;
        const FieldRender = (
            <Input
                disabled={is_disabled}
                prefix={
                    field_input.prefixIcon ? (
                        <Icon
                            type={field_input.prefixIcon}
                            className="field-icon"
                        />
                    ) : ''
                }
                onPressEnter={(e) => {
                    const info = window.postal_codes[e.target.value];
                    if (info) {
                        this.postal_codes = info;
                        this.setFieldsValue({
                            'address_city': info[0].address_city,
                            'address_country': info[0].address_country,
                            'address_state': info[0].address_state
                        });
                    }
                }}
                type={field_input.type || 'text'}
                placeholder={field_input.placeholder || ''}
                
            />
        );

        return (
            <FormItem 
                key={field_input.id}
                style={styles.formComponent}
            >
                {getFieldDecorator(field_input.id, {
                    rules: field_input.rules.map(rule => getMessage(rule)),
                    })(FieldRender)
                }
            </FormItem>
        );
    }

    renderDropdownPostalCode(field_input, is_disabled) {
        const getFieldDecorator = this.getFieldDecorator;
        const Options = this.postal_codes.map((item, index) => {
            return (
                <Select.Option
                    value={item[field_input.id]}
                    key={`${item} - ${index}`} 
                >
                    {item[field_input.id]}
                </Select.Option>
            );
        });
        const FieldRender = (
            <Select
                disabled={is_disabled}
                showSearch
                optionFilterProp="children"
                placeholder={field_input.placeholder || ''}
                
            >
                {Options}
            </Select>
        );
        return (
            <FormItem 
                key={field_input.id}
                style={styles.formComponent}
            >
                {getFieldDecorator(field_input.id, {
                    rules: field_input.rules.map(rule => getMessage(rule)),
                    })(FieldRender)
                }
            </FormItem>
        );
    }

    renderTextAreaField(field_input, is_disabled) {
        const getFieldDecorator = this.getFieldDecorator;
        const FieldRender = (
            <Input.TextArea
                disabled={is_disabled}
                prefix={
                    field_input.prefixIcon ? (
                        <Icon
                            type={field_input.prefixIcon}
                            className="field-icon"
                        />
                    ) : ''
                }
                autosize={{ minRows: 2, maxRows: 6 }}
                placeholder={field_input.placeholder || ''}
                
            />
        );
        return (
            <FormItem 
                key={field_input.id}
                style={styles.formComponent}
            >
                {getFieldDecorator(field_input.id, {
                    rules: field_input.rules.map(rule => getMessage(rule)),
                    })(FieldRender)
                }
            </FormItem>
        );
    }

    renderNumberField(field_input,is_disabled) {
        const getFieldDecorator = this.getFieldDecorator;
        const FieldRender = (
            <InputNumber
                disabled={is_disabled}
                size="100%"
                max={field_input.options.max}
                min={field_input.options.min}
                step={field_input.options.step}
            />
        );
        return (
            <FormItem 
                key={field_input.id}
                style={styles.formComponent}
            >
                <div style={styles.inputNumberContainer}>
                    <p style={styles.labelInputNumber}>{field_input.placeholder}</p>
                    {getFieldDecorator(field_input.id, {
                        rules: field_input.rules.map(rule => getMessage(rule)),
                        })(FieldRender)
                    }
                </div>
            </FormItem>
        );
    }

    renderNumberMoneyField(field_input, is_disabled) {
        const getFieldDecorator = this.getFieldDecorator;
        const FieldRender = (
            <InputNumber
                disabled={is_disabled}
                size="100%"
                max={field_input.options.max}
                min={field_input.options.min}
                step={field_input.options.step}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
            />
        );
        return (
            <FormItem 
                key={field_input.id}
                style={styles.formComponent}
            >
                <div style={styles.inputNumberContainer}>
                    <p style={styles.labelInputNumber}>{field_input.placeholder}</p>
                    {getFieldDecorator(field_input.id, {
                        rules: field_input.rules.map(rule => getMessage(rule)),
                        })(FieldRender)
                    }
                </div>
            </FormItem>
        );
    }

    renderColorPicker(field_input, is_disabled) {
        const getFieldDecorator = this.getFieldDecorator;
        const color_picker = this.getFieldValue(field_input.id);
        const ColorField = (
            <div style={styles.inputNumberContainer} >
                    <p style={styles.labelInputNumber} >Color </p>
                    <ColorPicker
                        disabled={is_disabled}
                        value={color_picker}
                        onClose={(color) => {
                            this.setFieldsValue({'color': color});
                        }}
                    />
            </div>
        );
        return (
            <FormItem 
                key={field_input.id}
                style={styles.formComponent}
            >
                {getFieldDecorator(field_input.id, {
                    rules: field_input.rules.map(rule => getMessage(rule)),
                    })(ColorField)
                }
            </FormItem>
        );
    }

    renderDropdown(field_input, is_disabled) {
        const getFieldDecorator = this.getFieldDecorator;
        const Options = field_input.options.map((item, index) => {
            return (
                <Select.Option 
                    value={item}
                    key={`${item} - ${index}`} 
                >
                    {item}
                </Select.Option>
            );
        });
        const FieldRender = (
            <Select
                disabled={is_disabled}
                showSearch
                optionFilterProp="children"
                placeholder={field_input.placeholder || ''}
                
            >
                {Options}
            </Select>
        );
        return (
            <FormItem 
                key={field_input.id}
                style={styles.formComponent}
            >
                {getFieldDecorator(field_input.id, {
                    rules: field_input.rules.map(rule => getMessage(rule)),
                    })(FieldRender)
                }
            </FormItem>
        );
    }

    renderDropdownDataDB(field_input, data, data_id, is_disabled) {
        const getFieldDecorator = this.getFieldDecorator;
        if (data) {
            const Options = data.map((obj, index) => {
                return (
                    <Select.Option
                        value={obj._id}
                        key={obj._id} 
                    >
                        {obj[field_input.label]}
                    </Select.Option>
                );
            });
            const FieldRender = (
                <Select
                    disabled={is_disabled}
                    showSearch
                    optionFilterProp="children"
                    placeholder={field_input.placeholder || ''}
                    
                >
                    {Options}
                </Select>
            );
            return (
                <FormItem 
                    key={field_input.id}
                    style={styles.formComponent}
                >
                    {getFieldDecorator(field_input.id, {
                        rules: field_input.rules.map(rule => getMessage(rule)),
                        })(FieldRender)
                    }
                </FormItem>
            );
        }
        return (
            <div key="loading_label">"Cargando Proovedores..."</div>
        );
    }

    renderDate(field_input, is_disabled) {
        const getFieldDecorator = this.getFieldDecorator;
        const FieldRender = (
            <DatePicker
                disabled={is_disabled}
                placeholder={field_input.placeholder}
                size="medium"
                locale={locale_es}
                
                style={styles.datePickerContainer}
            />
        );
        return (
            <FormItem 
                key={field_input.id}
                style={styles.formComponent}
            >
                {getFieldDecorator(field_input.id, {
                    rules: field_input.rules.map(rule => getMessage(rule)),
                    })(FieldRender)
                }
            </FormItem>
        );
        
    }
}

export default FormRender;