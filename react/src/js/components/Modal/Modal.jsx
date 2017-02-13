import React from 'react';
import shortId from 'shortid';

export default class Modal extends React.Component {
  defaultProps = {
    title: '',
    modalId: `myModal_${shortId.generate()}`,
    isOpened: false,
    onOpenModal: null,
    onCloseModal: null,
    onClickYes: null,
    onClickNo: null,
  };
  propTypes = {
    title: React.PropTypes.string.isRequired,
    modalId: React.PropTypes.string,
    isOpened: React.PropTypes.bool,
    onOpenModal: React.PropTypes.func,
    onCloseModal: React.PropTypes.func,
    onClickYes: React.PropTypes.func,
    onClickNo: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.setState({ ...props });
    if (this.state.isOpened) {
      this.show(this.state.isOpened);
    }
  }

  show(toggleShow) {
    if (toggleShow) {
      $('#{this.state.modalId}').show();
    } else {
      $('#{this.state.modalId}').hide();
    }
  }

  render() {
    return (
      <div
        class="modal fade"
        id={this.state.modalId}
        tabindex={this.state.isOpened}
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
