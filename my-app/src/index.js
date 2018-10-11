import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Image, Grid, Container, Icon, List, Dropdown} from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <div className='tops'>
       <Container>
        <Menu white relaxed borderless secondary>
          <Menu.Item><Image src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png' right inline /></Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item><Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown></Menu.Item>
            <Menu.Item>St. Patrick's Day</Menu.Item>
            <Menu.Item>Menus</Menu.Item>
            <Menu.Item>Bar</Menu.Item>
            <Menu.Item><Icon name='search' /></Menu.Item>
          </Menu.Menu>
        </Menu>
        </Container>
        </div>
     )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <div className = 'back'>
        <Grid verticalAlign='middle' container centered columns={2}>
          <Grid.Row >
        <Grid.Column>
          <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png' className='image2'/>
        </Grid.Column>
    <Grid.Column >
    <div middle textAllign = 'center'>
      <h3>A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.
      </h3>
    </div>
        </Grid.Column>
  </Grid.Row>
        </Grid>
        </div>

    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className='g'>
          <Grid>
        <Grid.Row className ='pad' container columns={3} >
        <Grid.Column>Lunch<hr/><List>
          <List.Item>Monday – Friday: 11:00am – 2:30pm</List.Item>
          <List.Item>Saturday – Sunday: Not open for lunch</List.Item>
          </List>
        </Grid.Column>
    <Grid.Column>Bar<hr/><List>
      <List.Item>Monday- Friday from 11:00am</List.Item>
      <List.Item>Saturday- Sunday from 4:00pm</List.Item>
    </List></Grid.Column>
    <Grid.Column>Dinner<hr/><List>
      <List.Item>Monday – Saturday: 5:30pm – 10:00pm</List.Item>
      <List.Item>Sunday: 5:00pm – 9:00pm</List.Item>
    </List></Grid.Column>
  </Grid.Row>
  </Grid>
        </div>
    )
  }
}

class Murphys extends React.Component {

  render() {
          return (
          <div>
          <TopMenu/>
          <FullWidthImage/>
          <FooterMenu/>
          </div>
          );
  }
}


ReactDOM.render(<Murphys/>, document.getElementById('root'));
