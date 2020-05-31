/**
 *
 * TaskOrganizerMain
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import makeSelectTaskOrganizerMain from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

import {
  Container, Row, Col, Button,
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input, FormFeedback, FormText
} from "reactstrap";

import { makeSelectTaskName, makeSelectTaskDuration } from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class TaskOrganizerMain extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    }
  }

  addTaskDialogVisible = () => { this.setState({ modal: !this.state.modal }) };
  render() {

    return (
      <div>
        <Container>

          <Row><Col style={{ height: '60px' }}></Col></Row>

          <Card>

            <Row>
              <Col className='m-t-10'>
                <div><Button color="secondary" className="float-right" onClick={this.addTaskDialogVisible}><i class="fas fa-plus"></i> Add Task</Button></div>
              </Col>
            </Row>
            <Row>

              <Col xs="6" sm="6">

                Live Timer

            </Col>
              <Col xs="6" sm="6">
                Task Table
            </Col>
            </Row>

          </Card>

          <Modal isOpen={this.state.modal} toggle={this.addTaskDialogVisible} >
            <ModalHeader toggle={this.addTaskDialogVisible}>Add Task</ModalHeader>
            <ModalBody>

              <Form>

                <FormGroup>
                  <Label for="taskName">Task Name</Label>
                  <Input valid
                    type="text"
                    name="text"
                    id="taskName"
                    placeholder="Enter Task Name" />

                  <FormFeedback valid>Sweet! that name is available</FormFeedback>
                  <FormFeedback valid>Sweet! that name is available</FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for="taskDuration">Task Duration</Label>
                  <Input invalid
                    type="text"
                    name="text"
                    id="taskDuration"
                    placeholder="Enter Task Name" />

                  <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                  <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                </FormGroup>

              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.addTaskDialogVisible}><i class="fas fa-save"></i> Save</Button>{' '}
            </ModalFooter>
          </Modal>

          {/* <Card body> */}

        </Container>

      </div>
    );
  }
}

TaskOrganizerMain.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  taskOrganizerMain: makeSelectTaskOrganizerMain()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "taskOrganizerMain", reducer });
const withSaga = injectSaga({ key: "taskOrganizerMain", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(TaskOrganizerMain);
