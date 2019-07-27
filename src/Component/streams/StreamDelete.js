import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  deleteStream = () => {
    if(this.props.stream){
      this.props.deleteStream(this.props.match.params.id);
    }
  }

  renderActions() {
    return (
      <React.Fragment>
        <button onClick={this.deleteStream} className="ui primary button">
          Delete
        </button>
        <Link to={"/"} className="ui cancel button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you Sure you want to delete this stream?";
    }
    return `Are you Sure you want to delete this stream: ${
      this.props.stream.title
    }`;
  }

  render() {
    return (
      <div>
        <Modal
          title="Stream Delete"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateProps,
  { fetchStream, deleteStream }
)(StreamDelete);
