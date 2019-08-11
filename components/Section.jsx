import styled from "styled-components";

const SubsectionStyled = styled.h1`
  font-weight: 100;
  font-size: 15px;
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 20px;
  color: ${props => props.theme.black};

  :hover {
    color: ${props => props.theme.mainColor};
  }
`;

import { VerticalCenter } from "../styles/styles";

const SectionStyled = styled.div`
  h1 {
    font-size: 17.5px;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;

  i {
    font-size: 23px;
    transition: 200ms linear;
  }

  .rotate0 {
    transform: rotate(0deg);
  }

  .rotate90 {
    transform: rotate(90deg);
  }
`;

const Section = ({
  title,
  collapsed,
  subsections,
  toggle,
  changeActiveSection
}) => {
  const subsectionsToRender = subsections.map(subtitle => {
    const section = title.toLowerCase().replace(" ", "");
    const subsection = subtitle.toLowerCase().replace(" ", "");
    return (
      <a href={`/docs/${section}/${subsection}`}>
        <SubsectionStyled onClick={() => changeActiveSection(subtitle)}>
          {subtitle}
        </SubsectionStyled>
      </a>
    );
  });
  return (
    <>
      <SectionStyled onClick={() => toggle(title)}>
        <h1>{title}</h1>
        <VerticalCenter>
          {collapsed ? (
            <i class="fa fa-angle-right rotate0" />
          ) : (
            <i class="fa fa-angle-right rotate90" />
          )}
        </VerticalCenter>
      </SectionStyled>
      {collapsed ? null : subsectionsToRender}
    </>
  );
};

export default Section;
