import React, {useState, useEffect} from 'react';
import './App.css';
import './index.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
   
function App() {
  const [key, setKey] = useState('home');

  const [accordianToggle, setAccordianToggle] = useState('none');

  const [width, setWidth] = useState(window.innerWidth);

  function on1NextBtnClicked() {
    width <= 768 ? setAccordianToggle("1") : setKey("profile");
    console.log(accordianToggle);
  }
  function on2NextBtnClicked() {
    width <= 768 ? setAccordianToggle("2") : setKey("setting");
    console.log(accordianToggle);
  }
  function on2PrevBtnClicked() {
    width <= 768 ? setAccordianToggle("0") : setKey("home");
    console.log(accordianToggle);
  }
  function on3PrevBtnClicked() {
    width <= 768 ? setAccordianToggle("1") : setKey("profile");
    console.log(accordianToggle);
  }

  useEffect(() => {
    setInterval(function(){ setWidth(window.innerWidth);}, 100);
  });

  return (
    <div className="container">
      { width <= 768 ? <div>
        <Accordion defaultActiveKey={accordianToggle}>
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
        <button onClick={on1NextBtnClicked} style={{marginTop:"50px"}} class="nxtBtn">Next</button>
        <button onClick={on3PrevBtnClicked} style={{marginTop:"50px", float: "right"}} class="nxtBtn" disabled>Previous</button>
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
        <button onClick={on2NextBtnClicked} style={{marginTop:"50px"}} class="nxtBtn">Next</button>
        <button onClick={on2PrevBtnClicked} style={{marginTop:"50px", float: "right"}} class="nxtBtn">Previous</button>
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
        <button onClick={on1NextBtnClicked} style={{marginTop:"50px"}} class="nxtBtn" disabled>Next</button>
        <button onClick={on3PrevBtnClicked} style={{marginTop:"50px", float: "right"}} class="nxtBtn">Previous</button>
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