function App() {
  return <div>
          <Person name="John" age="10" hobbies={["fishing","running", "traveling"]}/>
         </div>
}

ReactDOM.render(<App/>, 
  document.getElementById("root"));