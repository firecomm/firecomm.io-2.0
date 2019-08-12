import styled from "styled-components";

import { HorizontalCenter } from "../styles/styles";

//import images here later

const thinking = "thinking";
const unified = "unified";
const improve = "improve";

const SellingPointStyles = styled.div`
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  width: 200px;

  img {
    width: 100%;
    height: auto;
  }
`;

const ContentBody = styled.div`
  background-color: purple;
`;

const ImageWrapper = styled.div`
  min-width: 100%;
`;

const SellingPoint = props => {
  let imageSource = "";
  if (props.index === 0) {
    imageSource = thinking;
  } else if (props.index === 1) {
    imageSource = unified;
  } else {
    imageSource = improve;
  }

  return (
    <SellingPointStyles>
      <HorizontalCenter>
        <ImageWrapper>
          <img src="" alt={imageSource} />
        </ImageWrapper>
      </HorizontalCenter>
      <HorizontalCenter>
        <h1>{props.title}</h1>
      </HorizontalCenter>
      <HorizontalCenter>
        <ContentBody>{props.content}</ContentBody>
      </HorizontalCenter>
    </SellingPointStyles>
  );
};

export default SellingPoint;
