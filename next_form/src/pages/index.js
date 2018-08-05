import React from 'react';

import Button from 'antd/lib/button';

import { gatewayFormSchema } from '../schemas/gateways';
import FormGenerator from '../components/FormGenerator';

const propTypes = {};
const defaultProps = {};

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      createModalShow:  false,
      createModalErrorMsg: '',
    };

    this.onOpenCreateModal = this.openCreateModal.bind(this);
    this.onSubimitCreate = this.subimitCreate.bind(this);
  }

  async subimitCreate(dataModel) {
    console.og(dataModel);
  }

  openCreateModal() {
    this.setState({
      ...this.state,
      createModalShow: true,
    });
  }

  render() {
    const { createModalShow, createModalErrorMsg } = this.state;

    return (
      <section className="generic-page">
        <Button
          className="item"
          type="primary"
          icon="plus-circle-o"
          onClick={this.onOpenCreateModal}
        >
          Nuevo gateway
        </Button>

        <FormGenerator
          modal
          modalStatus={createModalShow}
          submitText="Guardar"
          title="Crear nuevo gateway"
          schema={gatewayFormSchema}
          onSubmit={this.onSubimitCreate}
          error={createModalErrorMsg}
        />

        <br/>
        <br/>
        <br/>

        <div style={{ width: 520 }}>
          <FormGenerator
            submitText="Guardar"
            title="Crear nuevo gateway"
            schema={gatewayFormSchema}
            onSubmit={this.onSubimitCreate}
            error={createModalErrorMsg}
          />
        </div>
      </section>
    );
  }
}

IndexPage.propTypes = propTypes;
IndexPage.defaultProps = defaultProps;

export default IndexPage;
