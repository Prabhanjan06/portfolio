function Skill(props) {
  return (
    <div className="d-flex align-items-center justify-content-center skill">
      <img
        // src="/assets/1.png"
        src={props.src}
        alt={props.name}
      />
      <p>Figma</p>
    </div>
  );
}

export default Skill;
