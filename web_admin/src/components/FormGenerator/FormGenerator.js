import React, { Component, Fragment } from 'react';
import toPairs from 'lodash/toPairs';
import {
    Form,
    Input,
    Icon,
    Modal,
    Button,
    Select,
    DatePicker
} from 'antd';
import styles from './Styles';
import locale_es from 'antd/lib/date-picker/locale/es_ES';

const FormItem = Form.Item;

// Reference rules
// https://github.com/yiminghe/async-validator/blob/master/src/messages.js
const rules = {
	required: 'Campo requerido',
	min: 'Ingrese los caracteres minimos para el campo',
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

class FormGenerator extends Component {

    state = {
        open: false,
        loading: false
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open,
            loading: nextProps.loading
        });
    }

    onSubmit = (event) => {
        console.log("on submit on user form");
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit(values);
            }
        });
    }

    renderStringField(field_input) {
        const { getFieldDecorator } = this.props.form;
        const FieldRender = (
            <Input
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

    renderDropdown(field_input) {
        const { getFieldDecorator } = this.props.form;
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

    renderDate(field_input) {
        const { getFieldDecorator } = this.props.form;
        const FieldRender = (
            <DatePicker 
                size="medium"
                locale={locale_es}
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

    renderFields() {
        const fieldsToReturn = [];
        if (this.props.schema) {
            this.props.schema.forEach((row_components, i) => {
                const rows = [];
                row_components.forEach((field_input, j) => {
                    if (field_input.type === 'String') {
                        rows.push(this.renderStringField(field_input));
                    }
                    if (field_input.type === 'Dropdown') {
                        rows.push(this.renderDropdown(field_input));
                    }
                    if (field_input.type === 'Date') {
                        rows.push(this.renderDate(field_input));
                    }
                });
                fieldsToReturn.push(
                    <div 
                        style={styles.rowFormContainer}
                        key={`rowForm_${i}`}
                    >
                        {rows}
                    </div>
                );
            });
        } else {
            fieldsToReturn.push(<div>No schema</div>);
        }
        return fieldsToReturn;
    }
    render() {
        const Fields = this.renderFields();
        return (
            <Modal
                width="80%"
                style={styles.modalContainer}
                visible={this.state.open}
                title={this.props.title}
                onCancel={this.props.onClose}
                footer={[
                    <Button 
                        key="cancel"
                        onClick={this.props.onClose}
                    >
                        Cancelar
                    </Button>,
                    <Button 
                        key="submit" 
                        type="primary" 
                        loading={this.state.loading}
                        onClick={this.onSubmit}
                    >
                        Guardar
                    </Button>,
                ]}
                >
                <Fragment>
                    <Form
                        width="100%"
                        style={styles.modalFormContainer}
                    >
                        {Fields}
                    </Form>
                </Fragment>
			</Modal>
        );
    }
}

export default Form.create({})(FormGenerator);