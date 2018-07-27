import { Component } from "react";
import React from "react";
import { TagsContainer, Tag } from './Tags.style';


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
  toggleSelected = _id => {

    // this.setState(state => ({
    //   ...state,
    //   tags: state.tags.map(tag => ({
    //     ...tag,
    //     selected: tag.id === _id,
    //   })),
    // }), () => console.log(this.state));

    // It will create 2 variables;
    // tags which will be the value of state.tags,
    // rest which will be the value of state WITHOUT the tags key.
    this.setState(({ tags, ...rest }) => ({
      ...rest,
      tags: tags.map(({ id, selected, ...rest }) => ({
        ...rest,
        id,
        selected: id === _id,
      })),
    }), () => console.log(this.state));
  };

  render() {
    const {tags} = this.state;
    const tagsEl = tags.map(({id,color, selected}) =>
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