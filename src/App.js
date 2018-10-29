import React, {Component} from 'react';
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
  Container,
} from 'reactstrap';
import classnames from 'classnames';

import './App.css';
import CourseList from './components/courseList/courseList';
import Header from './components/header/header';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.makeCall = this.makeCall.bind(this);
    this.deleteCall = this.deleteCall.bind(this);
    this.state = {
      activeTab: '1',
      queue: 0,
    };
    this.interval = null;
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  makeCall() {
    this.toggle('3');
    this.getQueue();
  }

  deleteCall() {
    this.props.deleteKutsuApiCallAction(this.props.call.kID);
    this.props.call.kID = 0;
    this.stopQueue();
    this.toggle('2');
  }

  render() {
    return (
        <Container fluid>
          <Header/>
          <main className={'row main'}>
            <Col lg={3}/>
            <div className={'col'}>
              <Nav tabs>
                <NavItem>
                  <NavLink className={classnames(
                      {active: this.state.activeTab === '1'})}
                           onClick={() => {
                             this.toggle('1');
                           }}
                           disabled={this.state.activeTab !== 1}
                  >
                    Select course
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                      className={classnames(
                          {active: this.state.activeTab === '2'})}
                      onClick={() => {
                        this.toggle('2');
                      }}
                      disabled={this.state.activeTab !== 2}
                  >
                    Call teacher
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <CourseList toggle={this.toggle}/>
                </TabPane>
                <TabPane tabId="2">
                  <h3>Do you want help with coding or to submit tasks?</h3>
                </TabPane>
              </TabContent>
            </div>
            <Col lg={3}/>
          </main>
        </Container>
    );
  }
}

export default App;
