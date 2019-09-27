import React from "react";
import styled from "styled-components";

export default function Event(props) {
  return <EventItem {...props}>{props.children}</EventItem>;
}

const EventItem = styled.div`
  width: 90%;
  margin: 2px 5%;
  box-sizing: border-box;
  height: 12%;
  background: green;
  border-radius: 4px;
`;
