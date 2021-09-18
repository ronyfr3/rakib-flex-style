What is Flexbox?
Flexbox is a one-dimensional layout method for arranging items in rows or columns.
Items flex (expand) to fill additional space or shrink to fit into smaller spaces.

How to use this package?
import FlexStyle from "rakib-flex-style";

const fn=()=>{
return(
<FlexStyle row center className="YOUR OWN CLASSNAME">

   <p>TOTAL POINTS</p>
   <p>480</p>
</FlexStyle>
)}
export default fn;

You can check code below:::

import styled from "styled-components";

const FlexStyle = styled.div` display: flex; flex-direction: ${(props) => (props.row ? "row" : "column")}; align-items: ${(props) => props.center ? "center" : props.end ? "flex-end" : "flex-start"}; justify-content: ${(props) => props.between ? "space-between" : props.around ? "space-around" : props.evenly ? "space-evenly" : "center"}; flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};`;
export default FlexStyle;

It's very simple.Isn't it?

Pray for me & support me!
