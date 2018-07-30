import {Component} from "react";
import React from "react";
import {TagsContainer, Tag} from './Tags.style';
import deepFreeze from 'deep-freeze';

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [
        {id: 1, color: 'pink', selected: false},
        {id: 2, color: 'cyan', selected: true},
        {id: 3, color: 'green', selected: false},
        {id: 4, color: 'orange', selected: false},
      ]
    };
  }

  // toggle the selected tag
  toggleSelected = id => {
    this.setState((prevState) => {
      deepFreeze(prevState);
      return {
        ...prevState,
        tags: prevState.tags.map((tag) => ({
          ...tag,
          selected: id === tag.id
        }))
      }
    }
    );
  };

  render() {
    const {tags} = this.state;
    const tagsEl = tags.map(({id, color, selected}) =>
      <Tag
        key={id}
        color={color}
        selected={selected}
        onClick={() => this.toggleSelected(id)}/>);
    return (
      <TagsContainer>
        {tagsEl}
      </TagsContainer>
    );
  }
}

export {Tags};