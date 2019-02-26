import React, { Component, Fragment } from 'react';
import styles from './Styles';
import moment from 'moment';
import PropTypes from 'prop-types';
import { 
	Layout, 
	Menu, 
	Icon, 
	Divider, 
	Avatar,
	Dropdown,
	Button
} from 'antd';
import Menus from './Menu';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Home extends React.Component {
	state = {
		collapsed: false,
		selectedMenu: '0'
	};

	onCollapse = (collapsed) => {
		this.setState({ collapsed });
	}
	onSelectMenu = (index) => {
		this.setState({ selectedMenu: index });
	}

	handleMenuClick = (e) => {
		if (e.key === "logout") {
			localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE);
			this.props.history.push('/login');
		} else if (e.key === "subsidiarys") {
			this.props.history.push('/subsidiarys');
		}
	}

	getSelectedMenu = () => {
		const MenuCategories = Menus[this.props.session.user.rol];
		console.log(MenuCategories);
		if (this.state.selectedMenu) {
			let indices = this.state.selectedMenu.split('.');
			if (MenuCategories[indices[0]].sub_menus) {
				if (MenuCategories[indices[0]].sub_menus.length > 0) {
					return MenuCategories[indices[0]].sub_menus[indices[1]];
				}
			}
			return MenuCategories[indices[0]];
		}
		return 'BrakeOne';
	}

	render() {
		const MenuCategories = Menus[this.props.session.user.rol];
		let selectedMenu = this.getSelectedMenu();
		const menu = (
			<Menu onClick={this.handleMenuClick}>
				{(()=>{
					if(this.props.session.user.rol !== 'MANAGER' || this.props.session.user.rol !== 'ADMIN') {
						return(<Menu.Item key="subsidiarys"><Icon type="user" />Cambiar sucursal</Menu.Item>);
					}
				})()}
				<Menu.Item key="logout"><Icon type="logout" />Cerrar Sesión</Menu.Item>
			</Menu>
		);

		let sessionInfo = '';
		if (!this.state.collapsed) {
			sessionInfo = (
				<Fragment>
					<Divider style={styles.divider}>Sesión</Divider>
					<p style={styles.sessionLabel}>Sucursal: {this.props.session.subsidiary.denomination}</p>
					<p style={styles.sessionLabel}>Usuario: {this.props.session.user.name}</p>
				</Fragment>
			);
		}

		let menuCat = MenuCategories.map((m, k) => {
			if (!m.sub_menus) {
				return (
					<Menu.Item 
						key={k}
						onClick={() => {this.onSelectMenu(k.toString())}}
					>
						<Icon type={m.icon} />
						<span>{m.name}</span>
					</Menu.Item>
				);
			} else {
				let submenus = m.sub_menus.map((sm, ik) => (
					<Menu.Item
						key={k + '.' + ik}
						onClick={() => {this.onSelectMenu(k + '.' + ik)}}
					>
						<Icon type={sm.icon} />
						<span>{sm.name}</span>
					</Menu.Item>
				));
				return (
					<SubMenu
						key={k}
						title={<span><Icon type={m.icon} /><span>{m.name}</span></span>}
					>
						{submenus}
					</SubMenu>
				);
			}
		});
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider
					collapsible
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
					style={{ overflow: 'auto', height: window.innerHeight - 45}}
				>
					<img
						src={process.env.REACT_APP_CDN + '/images/MainLogo.png'}
						style={styles.mainLogo}
						alt="enterpriseImage"
					/>
					{sessionInfo}
					<Divider style={styles.divider}>Menu</Divider>
					<Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
						{menuCat}
					</Menu>
				</Sider>
				<Layout
					style={{ height: window.innerHeight - 20}}
				>
					<Header 
						style={styles.header}
					>
						{selectedMenu.name}
						<Dropdown 
							overlay={menu}
							placement="bottomRight"
						>
							<Avatar 
								style={styles.avatar}
								icon="user"
								
							/>
						</Dropdown>
					</Header>
					<Content style={styles.content}>
						<selectedMenu.component {...this.props} />
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default Home;
