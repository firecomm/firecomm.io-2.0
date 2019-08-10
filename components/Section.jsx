const Section = ({ title, collapsed, subsections, toggle }) => {
  console.log(toggle, collapsed);
  if (collapsed) {
    return <h1 onClick={() => toggle(title)}>{title}</h1>;
  } else {
    return (
      <div>
        <h1 onClick={() => toggle(title)}>{title}</h1>
        {subsections.map(subtitle => (
          <h1>{subtitle}</h1>
        ))}
      </div>
    );
  }
};

export default Section;
