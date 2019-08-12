import styled from "styled-components";

export const VerticalCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HorizontalCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WhiteSpacer = styled.section`
  width: 100%;
  background-color: ${props => props.theme.white};
  height: ${props => props.height}px;
`;
