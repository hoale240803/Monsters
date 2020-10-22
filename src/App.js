import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // ####### khai báo một mảng user
      monsters: [],
      searchField: "",
    };
  }
  // đây là thời điểm thích hợp để nhận data vì lúc này  a component is mounted its meanin that inserted into the tree
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        // console.log(users);
        this.setState({
          monsters: users,
          searchField: "",
        });
      });
  }
  //

  onHandleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    // ta nên để là const bởi vì lúc vào render thì không cho chúng được thay đổi nữa nếu không nó render lại
    const { searchField, monsters } = this.state;

    // từ array monsters nhận đc từ api thì kiểm
    //tra xem từng monster trong list monsters có tồn
    //tại ký tự mà người dùng nhập vào hay k
    //và trả về mảng monster tương ứng

    const filteredMonster = monsters.filter((mon) =>
      mon.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Gallary</h1>
        {/* Search bar */}
        <Search
          placeholder="search monsters"
          handleChange={this.onHandleChange}
        />

        {/* <SearchBox onSearchChange={this.onSearchChange} /> */}
        {/* list monsters */}
        <CardList monsters1={filteredMonster}></CardList>
        {/* <CardList monsters={filteredMonster} /> */}
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <h1>{this.state.string}</h1>
//       <button>Change text</button>
//     </div>
//   );
// }

export default App;
