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
      categoryName: '',
      tagId: -1,
      tags: [
        {id: 1, color: '#e91e63', selected: false},
        {id: 2, color: '#2196f3', selected: false},
        {id: 3, color: '#8bc34a', selected: false},
        {id: 4, color: '#ff5722', selected: false},
      ]
    };
  }

  handleToggleDialog = () => {
    this.setState((prevState) => ({
      openDialog: !prevState.openDialog
    }));
  };

  handleConfirmDialog = () => {
    const { categoryName, tagId } = this.state;
    const payload = {
      categoryName,
      tagId
    };
    // send to graphQL
    console.log(payload);
    this.handleToggleDialog();
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSelectedTag = evt => {
    const id = parseInt(evt.target.id, 10);
    this.setState((prevState) => ({
      tagId: id,
      tags: prevState.tags.map((tag) => ({
        ...tag,
        selected: id === tag.id
      }))
    }));
  };

  render() {
    const {openDialog, tagId, categoryName, tags} = this.state;
    const formDisabled = tagId === -1 || categoryName === '';
    return (
      <div>
        <ResponsiveDialog
          open={openDialog}
          onConfirm={this.handleConfirmDialog}
          onCancel={this.handleToggleDialog}
          disabled={formDisabled}>
          <form noValidate autoComplete="off">
            <TextField
              required
              fullWidth
              id="categoryName"
              label="Category name"
              margin="normal"
              value = {categoryName}
              onChange={this.handleChange('categoryName')}/>
            <Row marginTop={MARGIN.TOP}>
              <div>Tags:</div>
              <Tags tags={tags} onSelected={this.handleSelectedTag}/>
            </Row>
          </form>
        </ResponsiveDialog>
        <Footer>
          <Button
            variant="fab"
            color="primary"
            aria-label="Add"
            onClick={this.handleToggleDialog}>
            <AddIcon/>
          </Button>
        </Footer>
      </div>
    );
  }
}
export { Categories };
