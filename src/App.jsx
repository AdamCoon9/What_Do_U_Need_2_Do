import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import HomePage from './components/HomePage.jsx';
import TodoList from './components/ToDoList.jsx';
import ContactForm from './components/ContactForm.jsx';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;
