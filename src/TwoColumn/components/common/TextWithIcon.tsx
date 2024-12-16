export default function TextWithIcon({text, icon}) {
    return <div className="icon-text">
    {icon}
    <div>{text}</div>
    </div>
  }