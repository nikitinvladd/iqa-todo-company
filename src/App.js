  import React, { Component } from 'react';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import axios from 'axios';
  import Header from './components/header/header';
  import Sidebar from './components/sidebar/sidebar';
  import Main from './components/main/main';
  import ItemsList from './components/functionality task/modaltask';
  import Spinner from './components/spinner/spinner';
  // import NewsItem from './components/newsitem/NewsItem';
  import 'react-calendar/dist/Calendar.css';
  import CustomCalendar from './components/calendar/calendar';
  import ClientTask from './components/functionality task/yourtask';
  import UserLogin from './components/UserLogin/userlogin';
  import UserRegister from './components/UserRegister/userregister';


  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        filteredTasks: [],
        isDarkTheme: false,
        selectedDate: new Date(),
        setTaskDay: [],
        term: '',
      };
      this.maxId = 0;
    }

    componentDidMount() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.setState({ isDarkTheme: savedTheme === 'dark' });
      }

      const savedData = JSON.parse(localStorage.getItem('data'));
      if (savedData) {
        this.setState({ data: savedData });
      }

      axios
        .get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=f3f8dfc7357046b3991366743f902250')
        .then((response) => {
          this.setState({ articles: response.data.articles });
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }

    toggleTheme = () => {
      this.setState({ isThemeSwitching: true });

      document.body.classList.add('theme-transition');

      setTimeout(() => {
        this.setState(
          (prevState) => ({
            isDarkTheme: !prevState.isDarkTheme,
            isThemeSwitching: false,
          }),
          () => {
            localStorage.setItem('theme', this.state.isDarkTheme ? 'dark' : 'light');
            document.body.classList.remove('theme-transition');
          }
        );
      }, 300);
    };

    onDelete = (id) => {
      this.setState(({ data }) => {
        const updatedData = data.filter((item) => item.id !== id);
        localStorage.setItem('data', JSON.stringify(updatedData));
        return { data: updatedData };
      });
    };

    onAdd = (task) => {
      if (this.state.data.some(item => item.task === task)) return;
      const newItem = {
        task,
        id: this.maxId++
      };
      this.setState(({ data }) => {
        const newArray = [...data, newItem];
        localStorage.setItem('data', JSON.stringify(newArray));
        return { data: newArray };
      });
    };

    onEdit = (id, updatedTask) => {
      this.setState(({ data }) => {
        const updatedData = data.map((item) =>
          item.id === id ? { ...item, task: updatedTask } : item
        );
        localStorage.setItem('data', JSON.stringify(updatedData));
        return { data: updatedData };
      });
    };
    handleDateChange = (date) => {
      this.setState({ selectedDate: date });
    };

    onFilter = (items, term) => {
      if (term.length === 0){
        return items;
    }
      return items.filter(item => {
        return item.task.indexOf(term) > -1
    })
    };
    onUpdateSearch = (term) => {
      this.setState({term});
  }
    
    render() {
      const { term, data } = this.state;
      const { articles } = this.state;
      const visibleData = this.onFilter(data, term)
      return (
        <Router>
          <div className={`App ${this.state.isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            {this.state.isThemeSwitching && <Spinner />}
            <Sidebar />
            <Header onFilter={this.onUpdateSearch} toggleTheme={this.toggleTheme} isDarkTheme={this.state.isDarkTheme} />
            <Switch>
              <Route exact path="/">
                <Main isDarkTheme={this.state.isDarkTheme} />
                {/* <div className="news-container">
                  {articles && articles.map((newsItem, index) => (
                    <NewsItem key={index} news={newsItem} />
                  ))}
                </div> */}
              </Route>
              <Route exact path="/createtask">
                <ItemsList
                  onDelete={this.onDelete}
                  onEdit={this.onEdit}
                  onAdd={this.onAdd}
                  data={visibleData}
                  textSearch={this.state.textSearch}
                />
              </Route>
              <Route exact path="/calendar">
        <CustomCalendar/>
      </Route>
      <Route exact path="/task/:id">
      <ClientTask data={data}/>
      </Route>
      <Route exact path="/userlogin">
      <UserLogin/>
      </Route>
      <Route exact path="/userregister">
      <UserRegister/>
      </Route>
            </Switch>
          </div>
        </Router>
      );
    }
  }

  export default App;