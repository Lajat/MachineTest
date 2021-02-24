// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import FirstTab from './components/FirstTab';

// function App() {
//   return (
//     <div className="App">
//       <FirstTab/>
//     </div>
//   );
// }

// export default App;





import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
   
function App() {
  const [key, setKey] = useState('home');

  const [eventKey, seteventKey] = useState('0');

  const [width, setWidth] = useState(1920);

  function on1NextBtnClicked() {
    console.log(window.innerWidth);
    setKey("profile");
    seteventKey("1");
  }
  function on2NextBtnClicked() {
    setKey("setting");
    seteventKey("2");
  }
  function on2PrevBtnClicked() {
    setKey("home");
    seteventKey("0");
  }
  function on3PrevBtnClicked() {
    setKey("profile");
    seteventKey("2");
  }

  useEffect(() => {
    setInterval(function(){ setWidth(window.innerWidth);}, 1000);
  });

  return (
    <div className="container">
      { width <= 768 ? <div>
        <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Accordian1
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <form style={{marginTop:"50px"}}>
          <input style={{width:"100%", marginBottom:"20px"}} type="text" placeholder="First Name" />
          <input style={{width:"100%"}} type="text" placeholder="Second Name"/>
        </form>
        {/* <button onClick={on1NextBtnClicked} style={{marginTop:"50px"}} class="nxtBtn">Next</button> */}
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Accordian2
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <form style={{marginTop:"50px"}}>
          <input style={{width:"100%", marginBottom:"20px"}} type="text" placeholder="Email ID" />
          <input style={{width:"100%"}} type="text" placeholder="Contact Number"/>
        </form>
        {/* <div style={{display: "flex", justifyContent: "space-between", marginTop:"50px"}}>
          <button class="nxtBtn" onClick={on2NextBtnClicked}>Next</button>
          <button onClick={on2PrevBtnClicked} class="nxtBtn">Previous</button>
        </div> */}
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
      Accordian3
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
        <form style={{marginTop:"50px"}}>
          <input style={{width:"100%", marginBottom:"20px"}} type="text" placeholder="City" />
          <input style={{width:"100%"}} type="text" placeholder="Country"/>
        </form>
        {/* <button onClick={on3PrevBtnClicked} style={{marginTop:"50px", float: "right"}} class="nxtBtn">Previous</button> */}
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
      </div>
      :
      <div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
   
          <Tab eventKey="home" title="Tab1">
            <form style={{marginTop:"50px"}}>
              <input style={{width:"48%", marginRight:"4%"}} type="text" placeholder="First Name" />
              <input style={{width:"48%"}} type="text" placeholder="Second Name"/>
            </form>
            <button onClick={on1NextBtnClicked} style={{marginTop:"50px"}} class="nxtBtn">Next</button>
            <button onClick={on3PrevBtnClicked} style={{marginTop:"50px", float: "right"}} class="nxtBtn" disabled>Previous</button>
          </Tab>
          <Tab eventKey="profile" title="Tab2">
            <form style={{marginTop:"50px"}}>
              <input style={{width:"48%", marginRight:"4%"}} type="text" placeholder="Email ID" />
              <input style={{width:"48%"}} type="text" placeholder="Contact Number"/>
            </form>
            <div style={{display: "flex", justifyContent: "space-between", marginTop:"50px"}}>
              <button class="nxtBtn" onClick={on2NextBtnClicked}>Next</button>
              <button onClick={on2PrevBtnClicked} class="nxtBtn">Previous</button>
            </div>
          </Tab>
          <Tab eventKey="setting" title="Tab3">
            <form style={{marginTop:"50px"}}>
              <input style={{width:"48%", marginRight:"4%"}} type="text" placeholder="City" />
              <input style={{width:"48%"}} type="text" placeholder="Country"/>
            </form>
            <button onClick={on1NextBtnClicked} style={{marginTop:"50px"}} class="nxtBtn" disabled>Next</button>
            <button onClick={on3PrevBtnClicked} style={{marginTop:"50px", float: "right"}} class="nxtBtn">Previous</button>
          </Tab>
       
        </Tabs>
      </div>
      }
      
   </div> 
  );
}
   
export default App;