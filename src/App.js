import React,{Component} from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      text:'',
      word:''
    }
    this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
    this.setState({text: event.target.value})
}
render() {
    const splitted =this.state.text.split(" ");
    const words=[]
    for(let i=0; i<splitted.length; i++){
      words[splitted[i]] = ( typeof words[splitted[i]] != 'undefined' ) ? words[splitted[i]]+=1 : 1 
    }

    return(
        <div className="App">
            <h1>ttt word frequency counter</h1>
            <input type="text" placeholder="Enter a number" value={this.state.text} onChange={this.handleChange} />
            <br/>
           
            <div className="container">
                <table align="center">
                  <tr>
                    <h4>5 Character</h4>
                     {Object.keys(words).map((key,index)=>{
                     if(key.length===5){
                       return<tr>
                           <td key={index}>{key}</td>
                           <td key={index+1}>{words[key]}</td>
                         </tr>
                     }
                   })}
                   </tr>
                   <tr>
                   <h4> 4 Character</h4>
                   {Object.keys(words).map((key,index)=>{
                    if(key.length===4){
                      return<tr>
                          <td key={index}>{key}</td>
                          <td key={index+1}>{words[key]}</td>
                        </tr>
                    }
                  })}
                   </tr>
                   <tr>
                   <h4> 3 Character</h4>
                   {Object.keys(words).map((key,index)=>{
                    if(key.length===3){
                      return<tr>
                          <td key={index}>{key}</td>
                          <td key={index+1}>{words[key]}</td>
                        </tr>
                    }
                  })}
                   </tr>
                   <tr>
                     <t4> 2 Character</t4>
                   {Object.keys(words).map((key,index)=>{
                    if(key.length===2){
                      return<tr>
                          <td key={index}>{key}</td>
                          <td key={index+1}>{words[key]}</td>
                        </tr>
                    }
                  })}
                   </tr>
                </table>
            </div>
            <br/>
            
        </div>
    )
}
 
}
export default App;
