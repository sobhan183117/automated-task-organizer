import React from 'react';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import TaskOrganizerMain from 'containers/TaskOrganizerMain';
import PageNotFound from 'containers/PageNotFound';

export default function AppRoute() {

  return (
    <Switch>
      <Route exact path="/" component={TaskOrganizerMain} />
      <Route path="" component={PageNotFound} />
    </Switch>
  );
}
