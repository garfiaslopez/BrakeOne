import React from 'react';
import PropTypes from 'prop-types';
import Form from 'antd/lib/form';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import Alert from 'antd/lib/alert';
import Select from 'antd/lib/select';
import moment from 'moment-timezone';

import getMessage from './formGeneratorMessages';

const propTypes = {
  modal: PropTypes.bool,
  title: PropTypes.string,
  classes: PropTypes.object,
  modalStatus: PropTypes.bool,
  submitText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  schema: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  error: PropTypes.string,
  width: PropTypes.number,
};

const defaultProps = {
  title: '',
  classes: {},
  modal: false,
  modalStatus: false,
  submitText: 'Enviar',
  error: '',
  width: 520,
};

const FormItem = Form.Item;

class FormGenerator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmLoading: false,
      modalStatus: props.modalStatus,
      errorMsg: props.error,
    };

    this.timezonesOptions = moment.tz.names().map((item, index) => (
      <Select.Option
        value={item}
        key={`${item} - ${index}`} 
      >
        {item}
      </Select.Option>
    ));

    this.onSubmitForm = this.submitForm.bind(this);
    this.onCloseModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error !== '') {
      this.setState({
        confirmLoading: false,
        errorMsg: nextProps.error,
        modalStatus: nextProps.modalStatus,
      });
    } 

    this.setState({
      ...this.state,
      modalStatus: nextProps.modalStatus,
    });
  }

  submitForm(event) {
    event.preventDefault();

    // Validate form
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          ...this.state,
          confirmLoading: true,
        });

        // Call submit function
        this.props.onSubmit(values);
      }
    });
  }

  closeModal(event) {
    event.preventDefault();

    this.setState({
      ...this.state,
      modalStatus: false,
    });
  }

  renderSimpleForm() {
    const { classes } = this.props;
    const { errorMsg } = this.state;

    const renderAlert = errorMessage => (
      <Alert
        showIcon
        type="error"
        message={errorMessage}
      />
    );

    return (
      <Form
        onSubmit={this.onSubmitForm}
        className={classes.container}
      >
        {this.renderFields()}

        {errorMsg !== '' ? renderAlert(errorMsg) : ''}

        {this.renderSubmitButtom()}

      </Form>
    );
  }

  renderModalForm() {
    const { confirmLoading, errorMsg, modalStatus } = this.state;
    const {
      classes,
      title,
      submitText,
      width,
    } = this.props;

    const renderAlert = errorMessage => (
      <Alert
        showIcon
        type="error"
        message={errorMessage}
      />
    );

    return (
      <Modal
        title={title}
        width={width}
        okText={submitText}
        visible={modalStatus}
        onOk={this.onSubmitForm}
        onCancel={this.onCloseModal}
        confirmLoading={confirmLoading}
      >

        <Form
          width="80%"
          onSubmit={this.onSubmitForm}
          className={classes.container}
        >
          {this.renderFields()}

          {errorMsg !== '' ? renderAlert(errorMsg) : ''}
        </Form>
      </Modal>
    );
  }

  renderStringField(fieldKey, fieldItem) {
    const { getFieldDecorator } = this.props.form;

    const FieldRender = (
      <Input
        prefix={
          fieldItem.prefixIcon ? (
            <Icon
              type={fieldItem.prefixIcon}
              className="field-icon"
            />
          ) : ''
        }
        type={fieldItem.fieldType || 'text'}
        placeholder={fieldItem.placeholder || ''}
      />
    );

    return (
      <FormItem key={fieldKey}>
        {getFieldDecorator(fieldKey, {
          rules: fieldItem.rules.map(rule => getMessage(rule)),
        })(FieldRender)}
      </FormItem>
    );
  }

  renderTagsField(fieldKey, fieldItem) {
    const { getFieldDecorator } = this.props.form;

    const children = [];
    const FieldRender = (
      <Select
        mode="tags"
        notFoundContent=""
        placeholder={fieldItem.placeholder || ''}
      >
        {children}
      </Select>
    );

    return (
      <FormItem key={fieldKey}>
        {getFieldDecorator(fieldKey, {
          rules: fieldItem.rules.map(rule => getMessage(rule)),
        })(FieldRender)}
      </FormItem>
    );
  }

  renderAreaField(fieldKey, fieldItem) {
    const { getFieldDecorator } = this.props.form;

    const FieldRender = (
      <Input.TextArea
        autosize={{ minRows: 2, maxRows: 6 }}
        placeholder={fieldItem.placeholder || ''}
      />
    );

    return (
      <FormItem key={fieldKey}>
        {getFieldDecorator(fieldKey, {
          rules: fieldItem.rules.map(rule => getMessage(rule)),
        })(FieldRender)}
      </FormItem>
    );
  }

  renderTimezoneField(fieldKey, fieldItem) {
    const { getFieldDecorator } = this.props.form;

    const FieldRender = (
      <Select
        showSearch
        optionFilterProp="children"
        placeholder={fieldItem.placeholder || ''}
      >
        {this.timezonesOptions}
      </Select>
    );

    return (
      <FormItem key={fieldKey}>
        {getFieldDecorator(fieldKey, {
          rules: fieldItem.rules.map(rule => getMessage(rule)),
        })(FieldRender)}
      </FormItem>
    );
  }

  renderFields() {
    const { schema } = this.props;

    return Object.keys(schema).map((fieldKey) => {
      const fieldItem = schema[fieldKey];
      let result;

      switch (fieldItem.type) {
        case 'String': {
          result = this.renderStringField(fieldKey, fieldItem);
          break;
        }
        case 'LongString': {
          result = this.renderAreaField(fieldKey, fieldItem);
          break;
        }
        case 'Tags': {
          result = this.renderTagsField(fieldKey, fieldItem);
          break;
        }
        case 'Timezone': {
          result = this.renderTimezoneField(fieldKey, fieldItem);
          break;
        }
        case 'Custom': {
          result = (
            <FormItem key={fieldItem}>
              {fieldItem.component}
            </FormItem>
          );
          break;
        }
        default:
          break;
      }

      return result;
    });
  }

  renderSubmitButtom() {
    return (
      <FormItem>
        <Button
          type="primary"
          htmlType="submit"
          className="submit-form-button"
        >
          {this.props.submitText}
        </Button>
      </FormItem>
    );
  }

  render() {
    const { modal } = this.props;

    return modal ? this.renderModalForm() : this.renderSimpleForm();
  }
}

FormGenerator.propTypes = propTypes;
FormGenerator.defaultProps = defaultProps;

const WrapperForm = Form.create({})(FormGenerator);

export default WrapperForm;
