function Tweet(props) {
  const colors = {
    color: "blue"
  }
  return <div><h4 style={colors}>{props.username} {props.name} {props.date}</h4> <p>{props.message}</p></div>

}