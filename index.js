import styled from "styled-components";

const FlexStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  align-items: ${(props) =>
    props.center ? "center" : props.end ? "flex-end" : "flex-start"};
  justify-content: ${(props) =>
    props.between
      ? "space-between"
      : props.around
      ? "space-around"
      : props.evenly
      ? "space-evenly"
      : "center"};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
`;
export default FlexStyle;
