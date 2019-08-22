import React, { Component } from 'react';

import Container from '@material-ui/core/Container';

import Box from './box';



class homeContainer extends Component {
    render () {
        return (
            <Container>
                <h1>Welcome to my Portfolio. Please select one of the buttons below:</h1>
                <Box
                
                            style={{
                                width: '100%',
                                textAlign: "center",
                                justifyContent: "center",
                                height: 50,
                            }}
                            onClick={this.routeProfile}
                        >Profile</Box>
                <Button type="submit"
                            // disabled={!isEnabled}
                            className="btn btn-lg btn-primary btn-block"
                            waves="light"
                            node="a"
                            large
                            style={{

                                width: '500px',
                                textAlign: "center",
                                justifyContent: "center",
                                height: 50,
                            }}
                            onClick={this.routeContact}
                        >Contact</Button>
                <Button type="submit"
                            // disabled={!isEnabled}
                            className="btn btn-lg btn-primary btn-block"
                            waves="light"
                            node="a"
                            large
                            style={{
                                width: '100%',
                                textAlign: "center",
                                justifyContent: "center",
                                height: 50,
                            }}
                            onClick={this.routePortfolio}
                >Portfolio</Button>
            </Container>
        )
    }
}

export default homeContainer;