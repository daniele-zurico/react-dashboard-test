import React from 'react';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  margin-top: ${props =>  props.marginTop ? props.marginTop : '0px'};
  margin-bottom: ${props =>  props.marginBottom ? props.marginBottom : '0px'};
  margin-left: ${props =>  props.marginLeft ? props.marginLeft : '0px'};
  margin-right: ${props =>  props.marginRight ? props.marginRight : '0px'};
`;

const Row = (props) => {
  return <FlexRow {...props}></FlexRow>
};

export {Row};