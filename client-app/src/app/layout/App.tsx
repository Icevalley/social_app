import React, { Fragment } from 'react';
import {  Container } from 'semantic-ui-react';
import NavBar from './navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';


function App() {
    return (
      <Fragment>
        <NavBar />
        <Container style={{ marginTop: '7em' }}>
          <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/activities' element={<ActivityDashboard />} />
          <Route path='/activities/:id' element={<ActivityDetails />} />
          <Route path='/createActivity' element={<ActivityForm />} />
          <Route path='/manage/:id' element={<ActivityForm />} />
          </Routes>
        </Container>
      </Fragment>
    );
  }

export default observer(App);