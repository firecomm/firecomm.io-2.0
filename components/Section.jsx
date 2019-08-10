const Section = ({
  title,
  collapsed,
  subsections,
  toggle,
  changeActiveSection
}) => {
  if (collapsed) {
    return <h1 onClick={() => toggle(title)}>{title}</h1>;
  } else {
    return (
      <div>
        <h1 onClick={() => toggle(title)}>{title}</h1>
        {subsections.map(subtitle => {
          const section = title.toLowerCase().replace(" ", "");
          const subsection = subtitle.toLowerCase().replace(" ", "");
          return (
            <a href={`/docs/${section}/${subsection}`}>
              <h1 onClick={() => changeActiveSection(subtitle)}>{subtitle}</h1>
            </a>
          );
        })}
      </div>
    );
  }
};

export default Section;
