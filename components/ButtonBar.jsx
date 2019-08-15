import styled from "styled-components";
const ButtonBarStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .left {
    position: relative;
    left: 0;
  }

  .right {
    position: relative;
    right: 0;
  }

  button {
    width: 200px;
    color: black;
    border: black 2px solid;
  }
`;
const ButtonBar = props => {
  console.log(props);
  const index = props.sectionIndeces[props.subsection];

  console.log(index);
  return (
    <ButtonBarStyles>
      {index !== 0 ? (
        <a class="left" href={props.linksArray[index - 1].link}>
          <button>hello</button>
        </a>
      ) : (
        <div />
      )}
      {index !== props.linksArray.length - 1 ? (
        <a class="right" href={props.linksArray[index + 1].link}>
          <button>hello</button>
        </a>
      ) : (
        <div />
      )}
    </ButtonBarStyles>
  );
};

export default ButtonBar;
