import React,
{ Component }
from "react";
import Counter
from "./Counter";
import "./App.css";
class App extends Component { render() { return (
    < div  className = "Apps" > 
        < h1 > This is the blank slate we 're working with </h1>
    <Counter/>
    </div>
    );
    }
}

export default App;
