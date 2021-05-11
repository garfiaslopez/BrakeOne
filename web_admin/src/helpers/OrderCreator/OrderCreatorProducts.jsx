import Schema from '../../components/Products/ProductsSchema';
import CrudLayoutProducts from '../../components/CrudLayout/CrudLayoutProducts';


class OrderCreatorProducts extends CrudLayoutProducts {
    constructor(props) {
		
		super(props);
		this.schema = Schema;
		this.state = { // render vars:
			filters_layout: ['search']
		};
        this.model = {
			name: 'product',
			singular: 'product',
			plural: 'products',
			label: 'Productos'
		};
		this.additional_submit_data = {
			account_id: this.props.session.user.account_id
		}
		this.additional_get_data = {
			account_id: this.props.session.user.account_id
		}
	
	}

}

// wrap a HOC to handle the inject of the fields?
export default OrderCreatorProducts;
