import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// bootstrap

const StyledSurveyList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .card {
        width: 400px;
        /* height: 300px; */
        .card-body {
            padding: 30px;
            /* background-color: light-grey !important; */
        }
    }
`;

function SurveyList() {
    return (
        <StyledSurveyList>
            <Card>
                {/* <Card.Header as="h5">Featured</Card.Header> */}
                <Card.Body>
                    <Card.Title>Forest High School</Card.Title>
                    <Card.Text>CA, Mountain View</Card.Text>
                    <Card.Text>In Progress</Card.Text>
                    <Button variant="primary">Take Survey</Button>
                </Card.Body>
            </Card>
            <Card>
                {/* <Card.Header as="h5">Featured</Card.Header> */}
                <Card.Body>
                    <Card.Title>Silver Spring High School</Card.Title>
                    <Card.Text>MD, Silver Spring</Card.Text>
                    <Card.Text>In Progress</Card.Text>
                    <Button variant="primary">Take Survey</Button>
                </Card.Body>
            </Card>
            <Card>
                {/* <Card.Header as="h5">Featured</Card.Header> */}
                <Card.Body>
                    <Card.Title>Brook High School</Card.Title>
                    <Card.Text>NY, Brooktown</Card.Text>
                    <Card.Text>New Survey</Card.Text>
                    <Button variant="primary">Take Survey</Button>
                </Card.Body>
            </Card>
            <Card>
                {/* <Card.Header as="h5">Featured</Card.Header> */}
                <Card.Body>
                    <Card.Title>Syracuse High School</Card.Title>
                    <Card.Text>NY, Syracuse</Card.Text>
                    <Card.Text>New Survey</Card.Text>
                    <Button variant="primary">Take Survey</Button>
                </Card.Body>
            </Card>
        </StyledSurveyList>
    );
}

export default SurveyList;
