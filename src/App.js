import {Component} from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchString: ''
    }
  }

  onSearchChange = (event) => {
    const searchString= event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchString}
    });
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
      this.setState(()=>{
        return {
          monsters : users,
          searchString: ''
        }
      }, ()=>{});
      })
  }



  render(){

    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster)=> {
        return monster.name.toLocaleLowerCase().includes(searchString);
      });

    return (
      <div className="App">
        <h1 className='app-title'>Monster Roledex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className= "search-box" />
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
