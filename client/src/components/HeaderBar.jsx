import React from 'react';
import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap';

const HeaderBar = (props) => (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand onClick={props.showSearch} style={{cursor: "pointer"}}>YouNote</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <NavDropdown title="Playlists" id="basic-nav-dropdown">
          {
            props.playlists.map((playlist, i) => 
              <NavDropdown.Item key={i} onClick={() => {
                props.showPlaylist(props.playlists[i]);
              }}>{playlist}</NavDropdown.Item>
            )
          }
        </NavDropdown>              
        <NavDropdown title="Recent Videos" id="basic-nav-dropdown">
        {
          (props.videos.slice(0,9)).map((video, i) => <NavDropdown.Item key={i} onClick={() => {
            props.selectVideo(video.videoId)
          }}>{video.name === '' ? video.videoTitle : video.name}</NavDropdown.Item>)
        }            
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={props.showVideoList}>Show All Videos</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline onChange={(e)=>{props.searchKeyTerm(e.target.value)}}>
        <FormControl type="text" placeholder="Search Notes" className="mr-sm-2" />
        {/* <Button variant="outline-success" onClick={(e) => {console.log(e.target.value)}}>Search</Button> */}
      </Form>
    </Navbar.Collapse>
    </Navbar>     
  )

export default HeaderBar;