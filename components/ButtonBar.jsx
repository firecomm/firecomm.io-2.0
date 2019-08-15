import styled from "styled-components";

import { mobileBreakpoint } from "../constants";

const ButtonBarStyles = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;

  button {
    width: 130px;
    padding: 10px;
    color: ${props => props.theme.mainColor};
    border: ${props => props.theme.mainColor} 2px solid;
    border-radius: 4px;
  }

  button i {
    font-size: 15px;
    font-weight: 100;
  }

  button .fa-arrow-left {
    margin-right: 5px;
  }

  button .fa-arrow-right {
    margin-left: 5px;
  }

  button:hover {
    cursor: pointer;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.mainColor};
    border: ${props => props.theme.white} 2px solid;
  }
`;
const ButtonBar = props => {
  try {
    const index = props.sectionIndeces[props.subsection];
    return (
      <ButtonBarStyles>
        {index !== 0 ? (
          <a href={props.linksArray[index - 1].link}>
            <button>
              <i class="fa fa-arrow-left" />
              {props.linksArray[index - 1].title.toUpperCase()}
            </button>
          </a>
        ) : (
          <div />
        )}
        {index !== props.linksArray.length - 1 ? (
          <a href={props.linksArray[index + 1].link}>
            <button>
              {props.linksArray[index + 1].title.toUpperCase()}{" "}
              <i class="fa fa-arrow-right" />
            </button>
          </a>
        ) : (
          <div />
        )}
      </ButtonBarStyles>
    );
  } catch {
    return null;
  }
};

export default ButtonBar;
