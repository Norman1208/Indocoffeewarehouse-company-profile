import { FC } from "react"; 
import { Container, Row, Col } from "reactstrap";



const Overview: FC = () => {
    return (
        <div className="pt-10 bg-[F8F4E1]">
            <div className="flex justify-center align-center text-3xl font-bold">
                <h1>Overview</h1>
            </div>

            <div className="d-flex justify-center">
                <Container>
                    <Row>
                        <Col xs='6'>
                            <span> 1 of 3 (wider)</span>
                        </Col>
                        <Col>
                            <span> 2 of 3 </span>
                        </Col>
                        <Col xs='6'>
                            <span> 3 of 3 (wider) </span>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs='6'>
                            <span> 1 of 3 (wider)</span>
                        </Col>
                        <Col>
                            <span> 2 of 3 </span>
                        </Col>
                        <Col xs='6'>
                            <span> 3 of 3 (wider) </span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Overview;