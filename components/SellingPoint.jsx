import styled from "styled-components";

import { HorizontalCenter } from "../styles/styles";

//import images here later

const thinking = "thinking";
const unified = "unified";
const improve = "improve";

const Improve = styled.div`
  /* background: url("/static/assets/improve.png"); */
`;

const SellingPointTitle = styled.h1`
  color: ${props => props.theme.mainColor};
  font-size: 27.5px;
  font-weight: 700;
  text-align: center;
  padding: 0 25px 0 25px;
`;

const SellingPointStyles = styled.div`
  margin: 0 10px 0 10px;
  border-radius: 2px;
  background-color: ${props => props.theme.grey};
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const ContentBody = styled.div`
  color: ${props => props.theme.black};
  padding: 0 22.5px 0 22.5px;
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
`;

const SellingPoint = props => {
  let imageSource = "";
  if (props.index === 0) {
    imageSource = "/static/assets/thinking.png";
  } else if (props.index === 1) {
    imageSource = "/static/assets/extended.png";
  } else {
    imageSource = "/static/assets/improve.png";
  }

  return (
    <SellingPointStyles>
      <HorizontalCenter>
        <ImageWrapper>
          <img src={imageSource} alt={imageSource} />
        </ImageWrapper>
      </HorizontalCenter>
      <HorizontalCenter>
        <SellingPointTitle>{props.title}</SellingPointTitle>
      </HorizontalCenter>
      <HorizontalCenter>
        <ContentBody>{props.content}</ContentBody>
      </HorizontalCenter>
    </SellingPointStyles>
  );
};

export default SellingPoint;
