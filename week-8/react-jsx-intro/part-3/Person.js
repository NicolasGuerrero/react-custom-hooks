function Person(props) {
  return <div>
            <p>Learn some information about this person</p>
            <p>Name: {props.name} Age: {props.age}</p>
            <h3>{props.age >= 18 ? "please go vote!": "you must be 18"}</h3>
            <ul>
              {props.hobbies.map(h => <li>{h}</li>)}
            </ul>
         </div>
}