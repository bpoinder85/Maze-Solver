var map = [];
var visited = [];
var queue = [];
var start = [0, 0];
function fillMap() {
  for (var i=0; i<10; i++) {
    map.push("");  }
  }
  
class Cell extends React.Component {
  render() {
    return (
      <div className="cell" id={"x" + this.props.id}>
      </div>    
    );  
  }
}
class CellRow extends React.Component {
  render() {
    return (
      <div class="cellRow" id={"y" + this.props.id}>
        <Cell id={"0" + "y" + this.props.id}/>
        <Cell id={"1" + "y" + this.props.id}/>
        <Cell id={"2" + "y" + this.props.id}/>
        <Cell id={"3" + "y" + this.props.id}/>
        <Cell id={"4" + "y" + this.props.id}/>
        <Cell id={"5" + "y" + this.props.id}/>
        <Cell id={"6" + "y" + this.props.id}/>
        <Cell id={"7" + "y" + this.props.id}/>
        <Cell id={"8" + "y" + this.props.id}/>
        <Cell id={"9" + "y" + this.props.id}/>
      </div>    
    );  
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
  render() {
    return (
      <div className="mazeShell">
        <CellRow id="0"/>       
        <CellRow id="1"/>        
        <CellRow id="2"/>        
        <CellRow id="3"/>        
        <CellRow id="4"/>        
        <CellRow id="5"/>        
        <CellRow id="6"/>        
        <CellRow id="7"/>        
        <CellRow id="8"/>        
        <CellRow id="9"/>      
      </div>    
    );
  }
}

ReactDOM.render(  
  <App />,  
  document.getElementById('root')
);
