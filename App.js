import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
  'Oslo,no',
  'Washington DC.,us',
  'Reykjavik,is',
  'Tabasco,mx',
  'Amsterdam,nl',
  'Denver,us',
  'Villahermosa,mx',
  'Ottawa,ca'
];
class App extends Component {

  constructor(){
    super();
    this.state= {city: null};
    //this.state= just can be used in the constructor of the component in another place we need to use set.state
  }
  handleSelectedLocation = city => {
    this.setState({city});
    //Mira aqui city es una propiedad y a la vez el parametro que vamos a pasar por ese motivo no ponemos ({city:city}) mejor lo simplificamos porque es ECMA6
    console.log(`handleSelectedLocation ${city}`);
  }
  render() {
    const { city } = this.state;
    //destructuring for using in the line 49 beacouse in otherwise city={this.state.city}
    // Inicialmente se genera nuestro componente app.js con el valor inicaial que le damos al state le establecemos city al valor nueva ciudad L24 una vez que nuestro location list genera el evento L47 y lo pasa como parametro L27, establecemos un nuevo estado L28 oscea establecemos un nuevo valor para la propiedad city L24 lo igualamos con los parametros en la L33
    return (

    <MuiThemeProvider>
      <Grid>
        <Row>
          <Col xs={12} sm={12}>
          <AppBar title='WeatherApp'></AppBar>
        </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
          </Col>
          <Col xs= {12} md={6}>
            <Paper zDepth={4}>
              <div className='detail'>
                {
                  city &&
                  <ForecastExtended city={city}></ForecastExtended>
                }
              </div>
          </Paper>
          </Col>
        </Row>
      </Grid>
    </MuiThemeProvider>
  );
  }
}

export default App;
