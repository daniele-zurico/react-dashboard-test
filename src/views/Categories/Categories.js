import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import styled from 'styled-components';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as PropTypes from "prop-types";


import {Tags, Row, MARGIN} from "../../components";

const Footer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
`;

const Label = styled.label`
  color: rgba(0, 0, 0, 0.54);
  padding: 0;
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  line-height: 1.7;
`;

function Transition(props) {
  return <Slide direction="up" {...props} />;
}



class CategoriesDialog extends Component {
  render() {
    return (
      <Dialog
        fullScreen={this.props.fullScreen}
        open={this.props.open}
        onClose={this.props.closeDialog}
        TransitionComponent={Transition}
      >
        <DialogTitle id="responsive-dialog-title">
          {"Add a new Category to better organise your expenses"}
        </DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <TextField
              required
              fullWidth
              id="required"
              label="Category name"
              margin="normal"
            />
            <Row marginTop={MARGIN.TOP}>
              <div>Tags:</div>
              <Tags/>
            </Row>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            aria-label="Close"
            onClick={this.props.closeDialog}
          >
            <CloseIcon/> Cancel
          </Button>
          <Button
            color="primary"
            aria-label="Close"
            onClick={this.props.closeDialog}
          >
            <CheckIcon/> Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

CategoriesDialog.propTypes = {
  fullScreen: PropTypes.bool,
  open: PropTypes.any,
  closeDialog: PropTypes.func
};

class _Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  openDialog = () => {
    this.setState({
      open: true,
    });
  };

  closeDialog = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <CategoriesDialog fullScreen={this.props.fullScreen} open={this.state.open} closeDialog={this.closeDialog}/>

        <Footer>
          <Button
            variant="fab"
            color="primary"
            aria-label="Add"
            onClick={this.openDialog}
          >
            <AddIcon/>
          </Button>
        </Footer>
      </div>
    );
  }
}
const Categories = withMobileDialog()(_Categories);
export { Categories };
