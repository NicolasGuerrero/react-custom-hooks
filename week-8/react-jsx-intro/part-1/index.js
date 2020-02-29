function App() {
  return <div><FirstName/><NamedComponent name = "John" /></div>
}

ReactDOM.render(<App/>, 
  document.getElementById("root"));