import React from 'react';
import { Page, Navbar, List, ListItem, Icon } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      products: this.$f7.data.products,
    }
  }
  render() {
    return (
      <Page name="profile" >
        <Navbar title="Perfil" />
        <List>
          <ListItem title="Mis anuncios" link="#">
            <Icon slot="media" icon="demo-list-icon"/>
          </ListItem>
          <ListItem title="Monedas" link="#">
            <Icon slot="media" icon="demo-list-icon"/>
          </ListItem>
          <ListItem title="Favoritos" link="#">
            <Icon slot="media" icon="demo-list-icon"/>
          </ListItem>
          <ListItem title="Alertas" link="#">
            <Icon slot="media" icon="demo-list-icon"/>
          </ListItem>
          <ListItem title="Direcciones" link="#">
            <Icon slot="media" icon="demo-list-icon"/>
          </ListItem>
          {/* {this.state.products.map((product) => (
            <ListItem
              key={product.id}
              title={product.title}
              link={`/product/${product.id}/`}
            />
          ))} */}
        </List>
      </Page>
    );
  }
}