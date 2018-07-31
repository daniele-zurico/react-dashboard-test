import React from "react";
import {TagsContainer, Tag} from './Tags.style';

const Tags  = ({tags, onSelected}) => {
    const tagsEl = tags.map(({id, color, selected}) =>
      <Tag
        key={id}
        id={id}
        color={color}
        selected={selected}
        onClick={onSelected}/>);
    return (
      <TagsContainer>
        {tagsEl}
      </TagsContainer>
    );
}

export {Tags};