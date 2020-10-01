import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  ListInput,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Searchbar,
  Subnavbar,
  Icon,
  Swiper,
  SwiperSlide,
  Card,
  CardContent,
  CardHeader,
  CardFooter
} from 'framework7-react';

export default () => (
  <Page name="home" className="home">
    {/* Top Navbar */}
    <Navbar large sliding={false} noHairline transparent hidden>
      <NavLeft>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>TratoHecho</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
      {/* <NavTitleLarge>TratoHecho</NavTitleLarge> */}
      <Subnavbar inner={false} noHairline>
        <Searchbar
          noHairline
          searchContainer=""
          searchIn=""
          placeholder="Buscar"
          // disableButton={!this.$theme.aurora}
        ></Searchbar>
      </Subnavbar>
    </Navbar>
    <div className="home-splash">
      <img className="logo" src="static/img/home-logo.png" alt=""/>
      <Block strong inset className="searchBlock">
      <List noHairlines className="searchForm">
      <ListInput
          label="Tipo de inmueble"
          type="select"
          defaultValue="Todos"
          noHairline
          placeholder="Selecciona uno..."
          className="select-search"
        >
          <Icon icon="demo-list-icon" slot="media"/>
          <option value="Male">Todos</option>
          <option value="Female">Casa</option>
          <option value="Female">Departamento</option>
          <option value="Female">Terreno</option>
        </ListInput>
      <ListInput
          label="Ubicación"
          type="select"
          defaultValue="Todos"
          placeholder="Selecciona una..."
          className="select-search"
        >
          <Icon icon="demo-list-icon" slot="media"/>
          <option value="Male">Todos</option>
          <option value="Female">Coahuila</option>
          <option value="Female">Durango</option>
          <option value="Female">Nuevo León</option>
        </ListInput>
      <ListInput
          label="Delegación o Municipio"
          type="select"
          defaultValue="Todos"
          placeholder="Selecciona uno..."
          className="select-search"
        >
          <Icon icon="demo-list-icon" slot="media"/>
          <option value="Male">Todos</option>
          <option value="Female">Saltillo</option>
          <option value="Female">Ramos Arispe</option>
          <option value="Female">Torreón</option>
        </ListInput>
      </List>
      <Button className="searchBtn" fill round iconIos="material:search">Buscar</Button>
      </Block>
    </div>
    {/* Page content */}
    
    
    <BlockTitle>Inmuebles Recomendados</BlockTitle>
    <Swiper className="realstateSwiper" params={{speed:500, slidesPerView: 1.5, spaceBetween: 10}}>
      <SwiperSlide>
      <Card className="demo-card-header-pic realstate-card">
          <CardHeader
            className="no-border card-img"
            valign="bottom"
            style={{ backgroundImage: 'url(static/img/casa-card.jpg)' }}
          ></CardHeader>
          <CardContent>
            <p className="price">Desde<br/><b>$1,234,567.00</b></p>
            <p className="place">Lugar: Loma Larga<br/>Estado: Nuevo León</p>
          </CardContent>
          {/* <CardFooter>
            <Link>Like</Link>
            <Link>Read more</Link>
          </CardFooter> */}
        </Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card className="demo-card-header-pic realstate-card">
          <CardHeader
            className="no-border card-img"
            valign="bottom"
            style={{ backgroundImage: 'url(static/img/casa-card.jpg)' }}
          ></CardHeader>
          <CardContent>
            <p className="price">Desde<br/><b>$1,234,567.00</b></p>
            <p className="place">Lugar: Loma Larga<br/>Estado: Nuevo León</p>
          </CardContent>
          {/* <CardFooter>
            <Link>Like</Link>
            <Link>Read more</Link>
          </CardFooter> */}
        </Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card className="demo-card-header-pic realstate-card">
          <CardHeader
            className="no-border card-img"
            valign="bottom"
            style={{ backgroundImage: 'url(static/img/casa-card.jpg)' }}
          ></CardHeader>
          <CardContent>
            <p className="price">Desde<br/><b>$1,234,567.00</b></p>
            <p className="place">Lugar: Loma Larga<br/>Estado: Nuevo León</p>
          </CardContent>
          {/* <CardFooter>
            <Link>Like</Link>
            <Link>Read more</Link>
          </CardFooter> */}
        </Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card className="demo-card-header-pic realstate-card">
          <CardHeader
            className="no-border card-img"
            valign="bottom"
            style={{ backgroundImage: 'url(static/img/casa-card.jpg)' }}
          ></CardHeader>
          <CardContent>
            <p className="price">Desde<br/><b>$1,234,567.00</b></p>
            <p className="place">Lugar: Loma Larga<br/>Estado: Nuevo León</p>
          </CardContent>
          {/* <CardFooter>
            <Link>Like</Link>
            <Link>Read more</Link>
          </CardFooter> */}
        </Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card className="demo-card-header-pic realstate-card">
          <CardHeader
            className="no-border card-img"
            valign="bottom"
            style={{ backgroundImage: 'url(static/img/casa-card.jpg)' }}
          ></CardHeader>
          <CardContent>
            <p className="price">Desde<br/><b>$1,234,567.00</b></p>
            <p className="place">Lugar: Loma Larga<br/>Estado: Nuevo León</p>
          </CardContent>
          {/* <CardFooter>
            <Link>Like</Link>
            <Link>Read more</Link>
          </CardFooter> */}
        </Card>
      </SwiperSlide>
      
    </Swiper>

    {/* <BlockTitle>Modals</BlockTitle> */}
    <Block strong>
      <Row>
        {/* <Col width="50">
          <Button fill raised popupOpen="#my-popup">Popup</Button>
        </Col> */}
        {/* <Col width="50">
          <Button fill raised loginScreenOpen="#my-login-screen">Login Screen</Button>
        </Col> */}
      </Row>
    </Block>

    {/* <BlockTitle>Panels</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised panelOpen="left">Left Panel</Button>
        </Col>
        <Col width="50">
          <Button fill raised panelOpen="right">Right Panel</Button>
        </Col>
      </Row>
    </Block> */}

    <List>
      {/* <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      /> */}
      <ListItem
        title="Login Screen"
        loginScreenOpen="#my-login-screen"
        link="#"
      />
    </List>
  </Page>
);