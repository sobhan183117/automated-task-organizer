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
  Form, FormGroup, Label, Input, FormFeedback, FormText, Table
} from "reactstrap";

import {
  makeSelectTaskName, makeSelectTaskDuration, makeSelectTaskList,
  makeSelectModalVisibleStatus
} from './selectors';
import {
  setTaskName, setTaskDuration, setModalVisibleStatus, submitAdd
} from "./actions";

/* eslint-disable react/prefer-stateless-function */
export class TaskOrganizerMain extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  onChangeTaskName = (e) => { this.props.onChangeTaskName(e.target.value) };
  onChangeTaskDuration = (e) => { this.props.onChangeTaskDuration(e.target.value) };

  renderTableData = () => {

    return this.props.taskList.map((task, index) => {
      console.log('renderTbl', task);

      //  const { id, name, age, email } = student //destructuring
      return (
        <tr key={task.taskId}>
          <td>{task.taskId}</td>
          <td>{task.taskName}</td>
          <td>{task.taskDuration}</td>
          <td><span className='table-action-btn'> Edit </span> <span className='table-action-btn'>Delete</span></td>
        </tr>
      )
    })
  }
  render() {

    console.log('task-list', this.props.taskList);

    return (
      <div>
        <Container>

          <Row><Col style={{ height: '60px' }}></Col></Row>

          <Card>

            <Row>
              <Col className='m-t-10'>
                <div><Button color="secondary" className="float-right" onClick={this.props.onChangeModalStatus}><i class="fas fa-plus"></i> Add Task</Button></div>
              </Col>
            </Row>
            <Row>

              <Col xs="6" sm="6">

                Live Timer

            </Col>
              <Col xs="6" sm="6">
                Task Table

                {this.props.taskList.length ?
                  <Table striped>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Task Name</th>
                        <th>Task Duration</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.renderTableData()}
                      {/* <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr> */}
                    </tbody>
                  </Table>
                  : <p style={{ color: '#525258', padding: '40px 0px 0px 62px' }}> No task added yet. </p>}

              </Col>
            </Row>

          </Card>

          <Modal isOpen={this.props.modalVisibleStatus} toggle={this.props.onChangeModalStatus} >
            <ModalHeader toggle={this.props.onChangeModalStatus}>Add Task</ModalHeader>
            <ModalBody>

              <FormGroup>
                <Label for="taskName">Task Name</Label>
                <Input valid
                  type="text"
                  name="text"
                  id="taskName"
                  placeholder="Enter Task Name"
                  value={this.props.taskDuration}
                  onChange={(e) => this.onChangeTaskName(e)}
                />

                <FormFeedback valid>Sweet! that name is available</FormFeedback>
                <FormFeedback valid>Sweet! that name is available</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="taskDuration">Task Duration</Label>
                <Input
                  type="text"
                  name="text"
                  id="taskDuration"
                  placeholder="Enter Task Name"
                  value={this.props.taskDuration}
                  onChange={(e) => this.onChangeTaskDuration(e)}
                />

                <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                <FormFeedback>Oh noes! that name is already taken</FormFeedback>
              </FormGroup>

            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.props.submitAddTask}><i className="fas fa-save"></i> Save</Button>{' '}
            </ModalFooter>
          </Modal>

          {/* <Card body> */}

        </Container>

      </div>
    );
  }
}

TaskOrganizerMain.propTypes = {
  dispatch: PropTypes.func.isRequired,
  submitAddTask: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  taskOrganizerMain: makeSelectTaskOrganizerMain(),
  modalVisibleStatus: makeSelectModalVisibleStatus(),
  taskList: makeSelectTaskList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeTaskName: (value) => dispatch(setTaskName(value)),
    onChangeTaskDuration: (value) => dispatch(setTaskDuration(value)),

    onChangeModalStatus: () => dispatch(setModalVisibleStatus()),

    submitAddTask: () => dispatch(submitAdd()),

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
