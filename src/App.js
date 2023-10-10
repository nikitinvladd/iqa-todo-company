import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';
import Tasks from './components/tasks/tasks';
import ItemsList from './components/functionality task/modaltask';
import Spinner from './components/spinner/spinner';
import NewsItem from './components/newsitem/NewsItem';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        // New Tasks will be added this
      ],
      isDarkTheme: false,
    };
    this.maxId = 2;
  }

  componentDidMount() {
    // this.fetchData(); // Вызываем функцию при монтировании компонента
    // При загрузке приложения проверяем значение из localStorage
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
      console.log('Ответ от API:', response.data);
      this.setState({ articles: response.data.articles });
    })
    .catch((error) => {
      console.error('Ошибка при выполнении запроса:', error);
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
    }, 300); // Подождите 300 миллисекунд (зависит от времени вашего перехода)
  };

  onDelete = (id) => {
    this.setState(({ data }) => {
      const updatedData = data.filter((item) => item.id !== id);
      // Сохраняем обновленные данные в localStorage
      localStorage.setItem('data', JSON.stringify(updatedData));
      return { data: updatedData };
    });
  };

  onAdd = (task) => {
    const newItem = {
      task,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArray = [...data, newItem];
      // Сохраняем обновленные данные в localStorage
      localStorage.setItem('data', JSON.stringify(newArray));
      return { data: newArray };
    });
  };

  onEdit = (id, updatedTask) => {
    this.setState(({ data }) => {
      const updatedData = data.map((item) =>
        item.id === id ? { ...item, task: updatedTask } : item
      );
      // Сохраняем обновленные данные в localStorage
      localStorage.setItem('data', JSON.stringify(updatedData));
      return { data: updatedData };
    });
  };

  render() {
    const { articles } = this.state;
    return (
      <Router>
         <div className={`App ${this.state.isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
          {this.state.isThemeSwitching && <Spinner />} {/* Отобразите спиннер при переключении темы */}
          <Sidebar />
          <Header toggleTheme={this.toggleTheme} isDarkTheme={this.state.isDarkTheme} />
          <Switch>
            <Route exact path="/">
              <Main isDarkTheme={this.state.isDarkTheme} />
              <div className="news-container">
              {articles && articles.map((newsItem, index) => (
          <NewsItem key={index} news={newsItem} />
                ))}
      </div>
            </Route>
            <Route exact path="/tasks">
              <Tasks />
            </Route>
            <Route exact path="/functionality task">
              <ItemsList
                onDelete={this.onDelete}
                onEdit={this.onEdit}
                onAdd={this.onAdd}
                data={this.state.data}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;