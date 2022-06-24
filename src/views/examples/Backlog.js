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
  Card,
  CardHeader,
  CardFooter,
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
import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import api from "api";

function Backlog() {
  const [tasks, setTasks] = useState([]);
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios.get(`https://api-agilis.azurewebsites.net/api/Task`).then(({data}) => {
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
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Backlog</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Tarefa</th>
                    <th scope="col">Entrega</th>
                    <th scope="col">Criado em</th>
                    <th scope="col">Responsável</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {tasks?.map((task) => (
                  <tr key={task.id}>
                    
                      <th scope="row"
                      key={task.id}>
                      <Media className="align-items-center">
                        <a
                          
                          className="mr-3"
                          href="/projeto/tarefaId"
                          onClick={(e) => e.preventDefault()}
                        >
                          <div>
                          {task.taskNumber}
                          </div>
                          
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            {task.name}
                          </span>
                        </Media>
                      </Media>
                    </th>
                    
                    <td>{task.endDate}</td>
                    <td>{task.startDate}</td>
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
                            Mover tarefa para sprint
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
                
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Backlog;
