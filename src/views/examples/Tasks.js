import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
  } from "reactstrap";
  // core components
  import UserHeader from "components/Headers/UserHeader.js";
  import Task from "components/Task/Task.js";
  
  const Tasks = () => {
    return (
        <>
            <UserHeader/>
            <Task/>
        </>
    );
};

export default Tasks;