import styled from "styled-components";

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  span:first-of-type {
    margin-left: 10px;
  }
`;
const Tag = styled.span`
  margin-right: 5px;
  width: 23px;
  height: 23px;
  border-radius: 13px;
  cursor: pointer;
  border: ${props =>  props.selected && props.selected === true ? '2px solid gray' : '2px solid white' };
  background-color: ${props => props.color};
`;

export {TagsContainer, Tag};