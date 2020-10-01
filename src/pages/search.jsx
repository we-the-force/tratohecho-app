import React from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      products: this.$f7.data.products,
    }
  }
  render() {
    return (
      <Page name="search">
        <Navbar title="Buscar" />
        <List mediaList inset>
          {this.state.products.map((product) => (
            <ListItem
              key={product.id}
              title={product.title}
              link={`/product/${product.id}/`}
            >
              <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg" width="44" />
            </ListItem>
          ))}
        </List>
      </Page>
    );
  }
}