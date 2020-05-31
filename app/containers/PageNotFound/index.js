/**
 *
 * PageNotFound
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
import makeSelectPageNotFound from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

/* eslint-disable react/prefer-stateless-function */
export class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PageNotFound</title>
          <meta name="description" content="Description of PageNotFound" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

PageNotFound.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  pageNotFound: makeSelectPageNotFound()
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

const withReducer = injectReducer({ key: "pageNotFound", reducer });
const withSaga = injectSaga({ key: "pageNotFound", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(PageNotFound);
