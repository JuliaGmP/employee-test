import React from "react";
import Layout from "./layouts/Layout";

import EmployeeForm from "./components/employeeForm/container/EmployeeForm";
import EmployeeList from "./components/employeeList/container/EmployeeList";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {    
    return (
      <Router>
        <div className="App">
            <Switch>
              <Layout>
                <Route path="/" exact={true}>
                    <Redirect to="/employee-list" />
                </Route>
                <Route path="/employee-list">
                    <EmployeeList />
                </Route>
                <Route path="/employee-form">
                    <EmployeeForm />
                </Route>
              </Layout>
            </Switch>
        </div>
      </Router>
    );
}

export default App;

