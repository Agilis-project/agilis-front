import { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

const Task = () => {
  return (
    <>
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-x1-1" xl="9">
              <Card className="bg-secondary shadow">
                <CardBody>
                  <Row>
                    <Col lg="9">
                      
                        <h2>
                          Nome da Task
                        </h2>
                        <span>
                          $idDaTask
                        </span>
                     
                      
                        <h3>
                          Descrição
                        </h3>
                        <p>
                        Evidentemente, o surgimento do comércio virtual causa impacto indireto na reavaliação do processo de comunicação como um todo.
                        Todavia, a competitividade nas transações comerciais apresenta tendências no sentido de aprovar a manutenção da gestão inovadora da qual fazemos parte.
                        Todavia, a competitividade nas transações comerciais apresenta tendências no sentido de aprovar a manutenção da gestão inovadora da qual fazemos parte.
                        </p>
                      

                    </Col>
                    <Col className="bg-grey" lg="3">
                      <h4>Status</h4>
                      <h4>Responsável</h4>
                      <h4>Projeto</h4>
                      <h4>Sprint</h4>
                      <h4>Data de entrega</h4>
                      <h5>Criador por</h5>
                      <h5>Criado em</h5>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
          </Col>
        </Row>
       
      </Container>
    </>
  );
};
export default Task;