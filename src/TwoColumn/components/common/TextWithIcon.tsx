export default function TextWithIcon({text, icon, coloredIcon=false}) {
    return <div className="icon-text">
    <div className={coloredIcon ? "colored-icon" : ""}>
      {icon}
    </div>
    <div>{text}</div>
    </div>
  }