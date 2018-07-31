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
      tagId: '',
      tags: [
        {id: 1, color: '#e91e63', selected: false},
        {id: 2, color: '#2196f3', selected: false},
        {id: 3, color: '#8bc34a', selected: false},
        {id: 4, color: '#ff5722', selected: false},
      ]
    };
  }

  handleOpenDialog = () => {
    this.setState({openDialog: true});
  };

  handleCloseDialog = () => {
    this.setState({openDialog: false});
  };

  handleConfirmDialog = () => {
    // time to store the state in the graphQL db
    console.log(this.state);
    this.setState({openDialog: false});
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSelectedTag = tagId => {
    this.setState({tagId});
  };

  handleSelectedTag = evt => {
    const id = parseInt(evt.target.id, 10);
    this.setState((prevState) => ({
      tags: prevState.tags.map((tag) => ({
        ...tag,
        selected: id === tag.id
      }))
    }));
  };

  render() {
    return (
      <div>
        <ResponsiveDialog
          open={this.state.openDialog}
          onConfirm={this.handleConfirmDialog}
          onCancel={this.handleCloseDialog}>
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
              <Tags tags={this.state.tags} onSelected={this.handleSelectedTag}/>
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
