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
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect, Route } from "react-router-dom";

const urlApi = "https://api-agilis.azurewebsites.net/"

function Login() {
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();
  const [autenticado, setAutenticado] = useState();

  let postLogin = async (login, senha) => {
    let response = await axios.post(urlApi+`LoginUser`,{email:login,password:senha});
    setAutenticado(response.data);
    localStorage.setItem('login',login);
    
  }
  function handleSubmit(event){
      event.preventDefault();
      postLogin(login,senha);
      console.log(autenticado);
  }

    if (autenticado == undefined) {
      return(
        <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
       
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Faça seu login</small>
            </div>
            <Form onSubmit={handleSubmit} role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Senha"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Lembrar minha senha</span>
                </label>
              </div>
              <div className="text-center">
                <Input className="my-4" color="primary" type="submit" value="Acessar"/>
                  
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Perder a senha?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Criar nova conta</small>
            </a>
          </Col>
        </Row>
      </Col>
      )
    }
    else if(autenticado){
      return(
        <Route exact path="/">
          {console.log(autenticado)}
        </Route>
      )
    }
    else{
      return(
        <h1>
          Login inválido
        </h1>
      )
    }
}


export default Login;
