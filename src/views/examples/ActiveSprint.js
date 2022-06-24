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
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardFooter,
  Col,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useState, useEffect } from "react";
import axios from "axios";

function ActiveSprint(){
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`https://api-agilis.azurewebsites.net/api/Task/Sprint/1`).then(({data}) => {
      setTasks(data);
    });
    console.log(tasks);
    // eslint-disable-next-line
  }, []);


  const deleteTask = (id) => {
    axios.delete(`https://api-agilis.azurewebsites.net/api/Task/${id}`);
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };


  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              
                
                <CardHeader className="border-0">
                <Row>
                  <Col>
                    <h3 className="mb-0">Sprint #Xablau</h3>
                    <h5>
                      objetivo sjdfskjdfnskjdfsjdkfsdjkf
                    </h5>
                  </Col>
                  <Col>
                    <Button>
                      Criar Sprint
                    </Button>
                    <Button>
                      Finalizar Sprint
                    </Button>
                  </Col>
                  </Row>
                </CardHeader>
                
              
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Tarefa</th>
                    <th scope="col">Entrega</th>
                    <th scope="col">Status</th>
                    <th scope="col">Responsável</th>
                    <th scope="col">Completion</th>
                    <th scope="col" />
                  </tr>
                </thead>
                {/*Fazer map para popular tabela*/}
                <tbody>
                  {tasks?.map((task) => (
                  <tr key={task.id}>
                    <th scope="row"
                    key={task.id}>
                      <Media className="align-items-center">
                        <a
                          className="mr-3"
                          href="#pablo"
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
                    <td>{task.endDate}</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        {task.status}
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
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
                              require("../../assets/img/theme/team-1-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip742438047"
                        >
                          $nomeDoResponsavel
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    
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
                            Editar tarefa
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Mover tarefa para backlog
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={() => deleteTask(task.id)}
                          >
                            Excluir tarefa
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  ))}
                  
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  {/*Definir paginação*/}
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ActiveSprint;
