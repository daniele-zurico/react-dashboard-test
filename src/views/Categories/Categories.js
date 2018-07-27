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
import Typography from '@material-ui/core/Typography';
const Footer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: coloumn;
  margin-top: 30px;
  span:first-of-type {
    margin-left: 10px;
  }
`;
const Tag = styled.span`
  margin-right: 5px;
  width: 23px;
  height: 23px;
  border-radius: 13px;
  background-color: ${props => {
    if (props.pink) {
      return '#e91e63';
    } else if (props.cyan) {
      return '#2196f3';
    } else if (props.green) {
      return '#8bc34a';
    } else if (props.orange) {
      return '#ff5722';
    }
  }};
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
        <Dialog
          fullScreen={this.props.fullScreen}
          open={this.state.open}
          onClose={this.closeDialog}
          TransitionComponent={Transition}
        >
          <DialogTitle id="responsive-dialog-title">
            {'Add a new Category to better organise your expenses'}
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
              <Tags>
                <Label>Tag:</Label>
                <Tag pink />
                <Tag cyan />
                <Tag green />
                <Tag orange />
              </Tags>
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              color="secondary"
              aria-label="Close"
              onClick={this.closeDialog}
            >
              <CloseIcon /> Cancel
            </Button>
            <Button
              color="primary"
              aria-label="Close"
              onClick={this.closeDialog}
            >
              <CheckIcon /> Confirm
            </Button>
          </DialogActions>
        </Dialog>

        <Footer>
          <Button
            variant="fab"
            color="primary"
            aria-label="Add"
            onClick={this.openDialog}
          >
            <AddIcon />
          </Button>
        </Footer>
      </div>
    );
  }
}
const Categories = withMobileDialog()(_Categories);
export { Categories };
