import React, { Component } from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Slide from "@material-ui/core/Slide";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
class _ResponsiveDialog extends Component {

  render() {
    return (
      <Dialog
        fullScreen={this.props.fullScreen}
        open={this.props.open}
        TransitionComponent={Transition}
      >
        <DialogTitle id="responsive-dialog-title">
          {"Add a new Category to better organise your expenses"}
        </DialogTitle>
        <DialogContent>
          {this.props.children}
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            aria-label="Close"
            onClick={this.props.cancel}
          >
            <CloseIcon/> Cancel
          </Button>
          <Button
            color="primary"
            aria-label="Close"
            onClick={this.props.confirm}
          >
            <CheckIcon/> Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const ResponsiveDialog = withMobileDialog()(_ResponsiveDialog);

export {ResponsiveDialog};