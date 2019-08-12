import styled from "styled-components";

const FooterSection = styled.div`
  width: 33.33%;
  display: flex;
  flex-direction: column;
`;

const FooterStyles = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const Footer = props => {
  return (
    <FooterStyles>
      <FooterSection />
      <FooterSection />
      <FooterSection />
    </FooterStyles>
  );
};

export default Footer;
