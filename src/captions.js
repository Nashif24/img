import React, { Component } from 'react';
import './index.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default class Temples extends Component {
   constructor(props){
     super(props)
     this.state ={
        tasks: [{id: "1", description:"The ancient theatre of Delos: was one of a few ancient Greek theatres completely built in marble.It had a capacity of 6,500 people.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ancient_Greek_theatre_in_Delos_01.jpg/1024px-Ancient_Greek_theatre_in_Delos_01.jpg"}, 
                      {id: "2", description:"The Parthenon: is a former temple on the Athenian Acroplis, Greece, dedicated to the goddess Athena", image: "https://c.pxhere.com/images/98/80/40486a701776cb6703fccb19edb0-1597698.jpg!d"}, 
                      {id: "3", description: "The Temple of Hephaestus: is a well-preserved Greek Temple, still standing today and is largely intact", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Hephaistos_Temple.JPG/960px-Hephaistos_Temple.JPG"},
                       {id: "4", description: "The Temple of Olympian Zeus: was renowned as the largest temple in Greece and housed one of the largest cult staues in Greece", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tempio_di_Zeus_Olimpo_apr2005_02.jpg/1001px-Tempio_di_Zeus_Olimpo_apr2005_02.jpg"},
                        {id: "5", description: "The Temple of Hera: is an ancient Greek temple in Olympia, Greece, that is deciated to Hera, queen of the Greek Gods.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/20090725_olympia15.jpg/1076px-20090725_olympia15.jpg"}]                     
     }
   }

  description() {
    const tasks = this.state.tasks;
     const listTasks = tasks.map((task) =>
      <Col>
        <Card>
  <Card.Body>
    <img  className="pic" src={task.image} alt="elect"/>
    <Card.Text className="text">
      {task.description}
    </Card.Text>
  </Card.Body>
</Card>
</Col>
    );

     return(
<Container>
  <Row>
   {listTasks} 
  </Row>
</Container>
       )
  }

  leftArrow() {
    let last = this.state.tasks.slice(-1)
    let rest = this.state.tasks.slice(0, -1)
    let tasks = [...last,...rest]
    this.setState({tasks: tasks});
  }

  rightArrow() {
    let [first,...rest] = this.state.tasks;
    let tasks = [...rest,first];
    this.setState({tasks: tasks});
  }


moveImage() {
    return (
      <div className="slider-arrows">
        <i className="arrow left" onClick={() => this.leftArrow()}>
          <img src={require('./img/arrow-left.png')} alt='pic1'/>
        </i>
        <i className="arrow right" onClick={() => this.rightArrow()}>
          <img src={require('./img/arrow-right.png')} alt='pic2' />
        </i>
      </div>
    )
  }



  render() {
    return (
      <div className="slider">
        {this.moveImage()}
        {this.description()}
      </div>
    )
  }
}