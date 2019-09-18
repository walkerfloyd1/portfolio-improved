import React, { Component } from 'react';

import Navbar from '../Components/Navbar';

import "../styles/contact.css";

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          open: !this.state.open
        });
      }

    render() {
        const { open } = this.state;
        return (
            <div>
                <Navbar />
                    <h1>Contact Me:</h1>
                    <Button onClick={this.toggle}>Phone:</Button>
                        <Modal open={open} toggle={this.toggle}>
                            <ModalHeader>Phone:</ModalHeader>
                            <ModalBody>843-271-3434</ModalBody>
                        </Modal>
                    <Button onClick={this.toggle}>Email:</Button>
                        <Modal open={open} toggle={this.toggle}>
                            <ModalBody>walkerkeatley@yahoo.com</ModalBody>
                        </Modal>
                    {/* <h1>Email: walkerkeatley@yahoo.com</h1>
                    <h1>Social Media:</h1>
                        <ul>
                            <li><a href="https://twitter.com/blackfalcon_unc">Twitter</a></li>
                            <li><a href="https://www.instagram.com/floyds_fotos/">Instagram</a></li>
                            <li><a href="https://github.com/walkerfloyd1">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/walker-floyd-b53182123/">LinkedIn</a></li>
                        </ul> */}

            </div>
        )
    }
}

export default Contact;