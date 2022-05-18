import { Layout } from "Pages/Layout";
import { Routes, Route } from "react-router";
import { MainPage } from "Pages/MainPage";

export const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};
