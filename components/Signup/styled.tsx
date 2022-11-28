import styled from "@emotion/styled";

export const EmotionTest = styled.div`
  width: 700px;
  margin: 0 auto;
  background-color: ${(props) => (props.color ? props.color : "black")};
`;
