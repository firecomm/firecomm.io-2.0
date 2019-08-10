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
        {subsections.map(subtitle => (
          <h1 onClick={() => changeActiveSection(subtitle)}>{subtitle}</h1>
        ))}
      </div>
    );
  }
};

export default Section;
