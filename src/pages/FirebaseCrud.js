import {
  Container,
  Grid,
  Segment,
  Form,
  Input,
  Button,
  Label,
  Table,
  Header,
  Icon,
} from "semantic-ui-react";
import { useState, useEffect } from "react";
import firebase from "../firebase";

const FirebaseCrud = () => {
  //Add
  const [aFirstname, setaFirstname] = useState("");
  const [aLastname, setaLastname] = useState("");
  const [aAddress, setaAddress] = useState("");
  const [aTelephone, setaTelephone] = useState("");
  const [aStatus, setaStatus] = useState("");
  //Update
  const [uFirstname, setuFirstname] = useState("");
  const [uLastname, setuLastname] = useState("");
  const [uAddress, setuAddress] = useState("");
  const [uTelephone, setuTelephone] = useState("");
  const [uStatus, setuStatus] = useState("");

  //Update Variable
  const [customerId, setCustomerId] = useState("");
  //View Variable
  const [customerData, setCustomerData] = useState([]);

  //View
  useEffect(() => {
    const firestore = firebase.database().ref("/crud-project-firebase");
    firestore.on("value", (response) => {
      const data = response.val();
      let customerInfo = [];
      for (let id in data) {
        customerInfo.push({
          id: id,
          Firstname: data[id].Firstname,
          Lastname: data[id].Lastname,
          Address: data[id].Address,
          Telephone: data[id].Telephone,
          Status: data[id].Status,
        });
      }
      setCustomerData(customerInfo);
    });
  }, []);

  //Add Customer Function
  const handleAddCustomer = () => {
    const firestore = firebase.database().ref("/crud-project-firebase");
    let data = {
      Firstname: aFirstname,
      Lastname: aLastname,
      Address: aAddress,
      Telephone: aTelephone,
      Status: aStatus,
    };
    firestore.push(data);
    setaFirstname("");
    setaLastname("");
    setaAddress("");
    setaTelephone("");
    setaStatus("");
  };

  //Update Customer Function
  const handleUpdateCustomer = () => {
    const firestore = firebase
      .database()
      .ref("/crud-project-firebase")
      .child(customerId);
    firestore.update({
      Firstname: uFirstname,
      Lastname: uLastname,
      Address: uAddress,
      Telephone: uTelephone,
      Status: uStatus,
    });
    setuFirstname("");
    setuLastname("");
    setuAddress("");
    setuTelephone("");
    setuStatus("");
  };
  //select update customer
  const handleUpdateClick = (data) => {
    setuFirstname(data.Firstname);
    setuLastname(data.Lastname);
    setuAddress(data.Address);
    setuTelephone(data.Telephone);
    setuStatus(data.Status);
    setCustomerId(data.id);
  };

  const handleDelete = (id) => {
    const firestore = firebase.database().ref('crud-project-firebase').child(id);
    firestore.remove();
  };

  return (
    <div class="ui hidden divider">
      <Container>
        <Header as="h1">Admin Information</Header>
        <Grid>
        <Grid.Row columns="1">
            <Grid.Column>
              {customerData.length === 0 ? (
                <Segment padded="very">
                  <Header textAlign="center">No Data Available.</Header>
                </Segment>
              ) : (
                <Segment padded="very">
                  <Table celled fixed singleLine>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Firstname</Table.HeaderCell>
                        <Table.HeaderCell>Lastname</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Telephone</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell> </Table.HeaderCell>
                        <Table.HeaderCell> </Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    {customerData.map((data, index) => {
                      return (
                        <Table.Body>
                          <Table.Cell>{data.Firstname}</Table.Cell>
                          <Table.Cell>{data.Lastname}</Table.Cell>
                          <Table.Cell>{data.Address}</Table.Cell>
                          <Table.Cell>{data.Telephone}</Table.Cell>
                          <Table.Cell>{data.Status}</Table.Cell>
                          <Table.Cell>
                            <Button
                              primary
                              onClick={() => {
                                handleUpdateClick(data);
                              }}
                            >
                              <Icon name="edit"></Icon>
                              update
                            </Button>
                          </Table.Cell>
                          <Table.Cell>
                            <Button color="youtube" onClick={() => {handleDelete(data.id)}}>
                              <Icon name="delete"></Icon>
                              Deleted
                            </Button>
                          </Table.Cell>
                        </Table.Body>
                      );
                    })}
                  </Table>
                </Segment>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns="2">
            <Grid.Column>
              <Segment padded="very">
                <Form>
                  <Form.Field>
                    <Label>First name</Label>
                    <Input
                      placeholder="First name"
                      focus
                      value={aFirstname}
                      onChange={(event) => {
                        setaFirstname(event.target.value);
                      }}
                    ></Input>
                    <Label>Last name</Label>
                    <Input
                      placeholder="Last name"
                      focus
                      value={aLastname}
                      onChange={(event) => {
                        setaLastname(event.target.value);
                      }}
                    ></Input>
                    <Label>Address</Label>
                    <Input
                      placeholder="Address"
                      focus
                      value={aAddress}
                      onChange={(event) => {
                        setaAddress(event.target.value);
                      }}
                    ></Input>
                    <Label>Telephone</Label>
                    <Input
                      placeholder="Address"
                      focus
                      value={aTelephone}
                      onChange={(event) => {
                        setaTelephone(event.target.value);
                      }}
                    ></Input>
                    <Label>Status</Label>
                    <select value={aStatus} onChange={(event) => {
                          setaStatus(event.target.value);
                        }}>
                        <option></option>
                        <option value="submitted">Submitted</option>
                        <option value="Reviewing">Reviewing</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                  </Form.Field>
                  <Form.Field>
                    <Button
                      onClick={() => {
                        handleAddCustomer();
                      }}
                      positive
                    >
                      <Icon name="add circle"></Icon>
                      Add Customer
                    </Button>
                  </Form.Field>
                </Form>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment padded="very">
                <Form>
                  <Form.Field>
                    <Label>First name</Label>
                    <Input
                      placeholder="First name"
                      focus
                      value={uFirstname}
                      onChange={(event) => {
                        setuFirstname(event.target.value);
                      }}
                    ></Input>
                    <Label>Last name</Label>
                    <Input
                      placeholder="Last name"
                      focus
                      value={uLastname}
                      onChange={(event) => {
                        setuLastname(event.target.value);
                      }}
                    ></Input>
                    <Label>Address</Label>
                    <Input
                      placeholder="Address"
                      focus
                      value={uAddress}
                      onChange={(event) => {
                        setuAddress(event.target.value);
                      }}
                    ></Input>
                    <Label>Telephone</Label>
                    <Input
                      placeholder="Address"
                      focus
                      value={uTelephone}
                      onChange={(event) => {
                        setuTelephone(event.target.value);
                      }}
                    ></Input>
                    <Label>Status</Label>
                    <select value={uStatus} onChange={(event) => {
                          setuStatus(event.target.value);
                        }}>
                        <option></option>
                        <option value="submitted">Submitted</option>
                        <option value="Reviewing">Reviewing</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                  </Form.Field>
                  <Form.Field>
                    <Button
                      onClick={() => {
                        handleUpdateCustomer();
                      }}
                      primary
                    >
                      <Icon name="edit"></Icon>
                      Update Customer
                    </Button>
                  </Form.Field>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default FirebaseCrud;
