/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useEffect, useState, React } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Media,
  NavItem,
  NavLink,
  Nav,
  Table,
  Container,
  Row,
  Col,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import axios from "axios";

function Index(props){
  const [tasks, setTasks] = useState([]);
  const [sprints, setSprints] = useState([]);

  useEffect(() => {
    axios.get(`https://api-agilis.azurewebsites.net/api/Task/Sprint/1`).then(({data}) => {
      setTasks(data);
    });
  }, []);

  useEffect(() => {
    axios.get(`https://api-agilis.azurewebsites.net/api/Task/Sprint/1`).then(({data}) => {
      setSprints(data);
    });
  }, []);

  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  }

      // Modal open state
      const [modal, setModal] = useState(false);
  
      // Toggle for Modal
      const toggle = () => setModal(!modal);

  const [taskNumber, setTaskNumber] = useState();
  const [taskName, setTaskName] = useState();
  const [description, setDescription] = useState();
  const [createTask, setCreateTask] = useState();

  let postRegister = async (taskNumber, taskName, description) => {
    let response = await axios.post(`https://api-agilis.azurewebsites.net/api/Task`,
    {taskNumber:taskNumber, 
    name:taskName, 
    description:description, 
    status: 1,
    startDate: "2022-06-23T20:32:02.985Z",
    endDate: "2022-06-28T20:32:02.985Z",
    releaseDate: "2022-07-02T20:32:02.985Z",
    idMember: 3,
    idSprint: 1});

    setCreateTask(response.data);
    console.log(createTask);
  }

  function handleSubmit(event){
    event.preventDefault();
    postRegister(taskNumber, taskName, description);
    toggle();
  }


  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="mb-0">Performance do projeto</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Mês</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Semana</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="6">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Tarefas no backlog</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      onClick={toggle}
                      size="sm"
                    >
                      Criar task
                    </Button>
                    <Modal isOpen={modal} toggle={toggle}>
                      <ModalHeader toggle={toggle}>
                        <h3>Criar task</h3>
                      </ModalHeader>
                      <ModalBody>
                        <Form onSubmit={handleSubmit} role="form">
                          <FormGroup className="mb-3">
                          <Label>Número da task</Label>
                            <Input
                              type="text"
                              autoFocus
                              value={taskNumber}
                              onChange={(e) => setTaskNumber(e.target.value)}
                            />
                            <Label>Nome da task</Label>
                            <Input
                              type="text"
                              autoFocus
                              value={taskName}
                              onChange={(e) => setTaskName(e.target.value)}
                            />
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <Label>Descrição</Label>
                            <Input 
                              value={description} 
                              as="textarea" 
                              rows={3}
                              onChange={(e) => setDescription(e.target.value)} />
                          </FormGroup>
                          <Input type="submit" value="Criar task"/>
                        </Form>
                      </ModalBody>
                      <ModalFooter>
                        <Button onClick={toggle}>
                          Cancelar
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Tarefa</th>
                    <th scope="col">Criado em</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks?.map((task) => (
                    <tr key={task.id}>
                    <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="mr-3"
                            href="/projeto/tarefaId"
                            onClick={(e) => e.preventDefault()}
                          >
                            {task.taskNumber}
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              {task.name}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>{task.startDate}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="6">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Sprint ativa</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Ver sprints passadas
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Tarefa</th>
                    <th scope="col">Status</th>
                    <th scope="col">Entrega</th>
                  </tr>
                </thead>
                <tbody>
                  {sprints?.map((sprint) => (
                    <tr key={sprint.id}>
                    <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="mr-3"
                            href="/projeto/tarefaId"
                            onClick={(e) => e.preventDefault()}
                          >
                            {sprint.taskNumber}
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              {sprint.name}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          {sprint.status}
                        </Badge>
                      </td>
                      <td>{sprint.endDate}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Membros do projeto</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Adicionar membros
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Função</th>
                    <th scope="col"/>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <th scope="row">
                      <Media className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip742438047"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../assets/img/theme/team-1-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            $nome
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$email</td>
                    <td>$funcao</td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Excluir membro
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
