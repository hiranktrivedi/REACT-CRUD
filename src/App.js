import React, { Component } from "react";
import "./App.css";
import View from "./View";
import Edit from "./Edit";
import Add from "./Add";
import Login from "./Login";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
         {id:1,first_name:"Sheena",last_name:"Bernardt",email:"sbernardt0@google.com.au",gender:"Female",account:"Accounting",age:54},
        {id:3,first_name:"Cody",last_name:"Beers",email:"cbeers2@irs.gov",gender:"Male",account:"Research and Development",age:31},
        {id:4,first_name:"Bertie",last_name:"Beaten",email:"bbeaten3@cmu.edu",gender:"Male",account:"Business Development",age:31},
        {id:5,first_name:"Allan",last_name:"Aron",email:"aaron4@wikipedia.org",gender:"Male",account:"Research and Development",age:29},
        {id:6,first_name:"Shara",last_name:"Hune",email:"shune5@cam.ac.uk",gender:"Female",account:"Product Management",age:26},
        {id:7,first_name:"Nester",last_name:"Denning",email:"ndenning6@wsj.com",gender:"Male",account:"Support",age:55},
        {id:8,first_name:"Preston",last_name:"Domone",email:"pdomone7@weebly.com",gender:"Male",account:"Product Management",age:38},
        {id:9,first_name:"Bobbette",last_name:"Coppenhall",email:"bcoppenhall8@yahoo.com",gender:"Female",account:"Support",age:30},
        {id:10,first_name:"Erminia",last_name:"Annesley",email:"eannesley9@upenn.edu",gender:"Female",account:"Human Resources",age:36},
        {id:2,first_name:"Jude",last_name:"Downing",email:"jdowning1@techcrunch.com",gender:"Male",account:"Sales",age:47}],
      
      edit: false,
      add: false,
      view: false,
      login: true,
      dataForEdit: {},
      fields: { username: "hirank", password: "hirank123" },
      isadmin: false
    };
  }

  toggle = () => {
    this.setState({
      view: !this.state.view,
      add: !this.state.add
      // add: true,
      // view: false,
      // edit: false,
      // login: false
    });
  };
  
  addingData = tempData => {
    this.setState({
      data: [...this.state.data, tempData]
    });
    this.toggle();
  };

  deleteuser = i => {
    const record = [...this.state.data];
    console.log("indelete", record);
    this.setState({ data: record.filter(p => p.id !== i) });
  };

  addEdit = (newdata, dataIndex) => {
    const datax = [...this.state.data];
    console.log(dataIndex);
    datax[dataIndex] = newdata;
    console.log(datax);
    this.setState({ data: datax });
    this.setState({ view: true, add: false, edit: false });
  };

  edituser = user => {
    console.log("user", user);
    const editdata = [...this.state.data];
    console.log("editdata", editdata);

    const indx = editdata[user];
    console.log("data wil delete", indx);
    this.setState({ dataForEdit: indx });
    console.log("dataforedit", this.dataForEdit);
    this.setState({ EditDataIndx: user });

    this.setState({ view: false, add: false, edit: true });
  };


  kk = () => {
    this.setState({ isadmin: true, view: true, login: false });
    console.log("yess", this.props);
  };

  render() {
    let temp = " ";
    console.log(this.state);
    if (this.state.login) {
      temp = <Login data={this.state.fields} admin={() => this.kk()} />;
    } else if (this.state.edit) {
      temp = (
        <Edit
          users={this.state.dataForEdit}
          editInData={(data, i) => this.addEdit(data, i)}
          i={this.state.EditDataIndx}
        />
      );
    } else if (this.state.view && this.state.isadmin) {
      temp = (
        <div>
          <button onClick={this.toggle}> Add Employee </button> 
          <View
            item={[...this.state.data]}
            OnDelete={user => this.deleteuser(user)}
            onEdit={user => this.edituser(user)}
          />
     
        </div>
      );
    } else if (this.state.add) {
      temp = <Add onAdd={this.addingData} />;
    }

    return <div>{temp}</div>;
  }
}

export default App;
