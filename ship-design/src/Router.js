import { Switch, Route } from 'react-router-dom';
import Typography from './Typography';
import ColorPalette from './ColorPalette';
import Component from './Component';
import Asset from './Asset';
import LandingPage from './LandingPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/typography" component={Typography} />
      <Route path="/colorpalette" component={ColorPalette} />
      <Route path="/component" component={Component} />
      <Route path="/asset" component={Asset} />
    </Switch>
  );
}

export default Routes;
