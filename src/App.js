import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
// import PostList from './components/PostList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      color: 'black',
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
        });
        this.setState({users: data});
      })

      //    handleDelete = itemId => {
      //   const items = this.state.items.filter(item => item.id !== itemId);
      //   this.setState({ items: items });
      // };

  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => response.json())
  //   .then(data => {
  //     data = data.filter((posts) => posts.id <= 5)
  //     this.setState({posts: data})
  //   })
 }


  changeColor(event) {
    this.setState({background: event.target.value});
  }

  changeColorText(event) {
    this.setState({color: event.target.value});
  }


  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  updateUsers(newUser) {
    this.setState((prevState) => {
      return {
        users: [
          ...prevState.users,
          newUser
        ]
      }
    })

  }

  clickUserButton () {
    this.setState({displayUsers : true})
    console.log(this.setState.displayUsers)
  }

  clickPostButton () {
    this.setState({displayUsers : false})
    console.log(this.setState.displayPosts)
  }

  submitAddForm(event, image, name, email, salary, isGoldClient) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            image,
            name,
            email,
            salary,
            isGoldClient
          }
        ]
      }
    });
  }

  render() {
    return(
      <div className="app" style={{background: this.state.background, color: this.state.color}}>
        <h1>Admin panel - Proiectul 1</h1>
        <UserAddForm updateUsers={(user) => this.updateUsers(user)}/>
        <button onClick={() => this.clickUserButton()}>Show Users</button>
        <button onClick={() => this.clickPostButton()}>Show Posts</button>
        <UserAddForm submitAddForm={(event, image, name, email, salary, isGoldClient) => this.submitAddForm(event, image, name, email, salary, isGoldClient)}/>
        <UserList users={this.state.users}/>
        <button
              onClick={() => this.props.onDelete(this.props.item.id)}
              className="btn btn-lg btn-outline-danger ml-4"
            >
              Remove User
            </button>
        {/* <PostList users={this.state.users}/> */}
        <input type="color" onChange={(event) => this.changeColor(event)}/>
        <input type="color" onChange={(event) => this.changeColorText(event)}/>
      </div>
    );
  }
}

export default App;
