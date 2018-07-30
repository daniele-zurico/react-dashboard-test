import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {ResponsiveDialog, Tags} from "../../components";
import {Footer} from "./categories.style";
import {MARGIN, Row} from "../../components/styles";
import TextField from "@material-ui/core/TextField/TextField";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      categoryName: 'category',
      tagId: ''
    };
  }

  handleOpenDialog = () => {
    this.setState({openDialog: true});
  };

  handleCloseDialog = () => {
    debugger
    this.setState({openDialog: false});
  };

  handleConfirmDialog = () => {
    // time to store the state in the graphQL db
    debugger
    console.log(this.state);
    this.setState({openDialog: false});
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSelectedTag = tagId => {
    this.setState({tagId});
  };


  render() {
    return (
      <div>
        <ResponsiveDialog
          open={this.state.openDialog}
          confirm={this.handleConfirmDialog}
          cancel={this.handleCloseDialog}>
          <form noValidate autoComplete="off">
            <TextField
              required
              fullWidth
              id="categoryName"
              label="Category name"
              margin="normal"
              value = {this.state.categoryName}
              onChange={this.handleChange('categoryName')}/>
            <Row marginTop={MARGIN.TOP}>
              <div>Tags:</div>
              <Tags selected={this.handleSelectedTag}/>
            </Row>
          </form>
        </ResponsiveDialog>
        <Footer>
          <Button
            variant="fab"
            color="primary"
            aria-label="Add"
            onClick={() => this.handleOpenDialog()}>
            <AddIcon/>
          </Button>
        </Footer>
      </div>
    );
  }
}
export { Categories };
