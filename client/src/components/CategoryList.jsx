import React from 'react';
import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Accordion, Button } from 'react-bootstrap';
import AddCategoryForm from './AddCategoryForm.jsx';

const FlexContainer = styled.div `
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
`

//refactor to stateful and allow for hovering effect
class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
    this.mouseIn = this.mouseIn.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }
  mouseIn() {
    this.setState({hovered: true})
  }

  mouseOut() {
    this.setState({hovered:false})
  }

  render() {
    return (
      <div>
    <AddCategoryForm add={this.props.add} />
    <FlexContainer>
      {this.props.category.map((category) =>
        <Card className="bg-dark text-white text-center" style={{ width: '20rem', margin: '2rem'}} style={{width: '20rem'}}  onMouseOver={this.mouseIn} onMouseLeave={this.mouseOut} onClick={(e) => {
          this.props.expand(e.target.innerText);
      }}>
        {
          category[1] !== undefined ? <Card.Img src={category[1].items[0].snippet.thumbnails.high.url} alt="Card image" /> :
          <Card.Img src="https://cnet2.cbsistatic.com/img/sHY0SZAGwLXvzyb7eBZtVXuqSCY=/1092x0/2019/07/03/26a103f5-0aa3-471c-a6bb-ef4b4fd0c6b1/halle-bailey-ariel.jpg" alt="Card image" />
        }
        <Card.ImgOverlay>
          <Card.Title>{category[0]}</Card.Title>
        </Card.ImgOverlay>
        
      </Card>
      )}
    </FlexContainer>
  </div>
    )
    
  }
}

// var CategoryList = (props) => (
//   <div>
//     <AddCategoryForm add={props.add} />
//     <FlexContainer>
//       {props.category.map((category, i) =>
//         <Card className="bg-dark text-white text-center" style={{ width: '20rem', margin: '2rem'}} onClick={(e) => {
//           props.expand(e.target.innerText);
//       }}>
//         {
//           category[1] !== undefined ? <Card.Img src={category[1].items[0].snippet.thumbnails.high.url} alt="Card image" /> :
//           <Card.Img src="https://cnet2.cbsistatic.com/img/sHY0SZAGwLXvzyb7eBZtVXuqSCY=/1092x0/2019/07/03/26a103f5-0aa3-471c-a6bb-ef4b4fd0c6b1/halle-bailey-ariel.jpg" alt="Card image" />
//         }
//         <Card.ImgOverlay>
//           <Card.Title>{category[0]}</Card.Title>
//         </Card.ImgOverlay>
        
//       </Card>
//       )}
//     </FlexContainer>
//   </div>
// );

export default CategoryList;