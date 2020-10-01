import React from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();
    // this.$f7.toolBar.show();
    this.state = {
      messages: this.$f7.data.messages,
      
    }
  }
  render() {
    return (
      <Page name="messages">
        <Navbar title="Mensajes" />
        <List mediaList inset>
          {this.state.messages.map((message) => (
            <ListItem
              key={message.id}
              title={message.title}
              link={`/message/${message.id}/`}
            >
              <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg" width="44" />
            </ListItem>
          ))}
        </List>
      </Page>
    );
  }
}