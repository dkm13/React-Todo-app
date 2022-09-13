import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllTodos from "./pages/AllTodos";
import NewTodo from "./pages/NewTodo";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllTodos />} />
        <Route path="/new-todo" element={<NewTodo />} />
      </Routes>
    </Layout>
  );
}

export default App;
