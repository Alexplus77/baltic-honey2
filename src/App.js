import { Routers } from "./Routers";
import { fetchGetCategories } from "./redux/middleware/articlesPost";
import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.contentReducer);
  useEffect(() => {
    dispatch(fetchGetCategories());
  }, []);
  console.log(categories);
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
