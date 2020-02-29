function App() {
  return [<Tweet username= "user1" name="name1" date="01/01/20" message = "Test Message"/>,
          <Tweet username= "user2" name="name2" date="01/01/20" message = "Test Message"/> ]
}

ReactDOM.render(<App/>, 
  document.getElementById("root"));