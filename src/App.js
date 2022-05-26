import { Routers } from "./Routers";
import {
  fetchGetCategories,
  fetchGetBlockMenu,
} from "./redux/middleware/articlesPost";
import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { toggleEditMod } = useSelector((state) => state.contentReducer);
  useEffect(() => {
    dispatch(fetchGetCategories());
    dispatch(fetchGetBlockMenu());
  }, [toggleEditMod]);

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
