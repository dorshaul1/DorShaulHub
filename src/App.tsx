import { useEffect } from "react";
import { HashRouter as Router, Routes, Navigate } from "react-router-dom";
import styles from "./style/App.module.scss";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Explore from "./containers/Explore";
import Blog from "./containers/Blog";
import Footer from "./components/Footer";
import { useAtomValue } from "jotai";
import { globalAtoms } from "./state/globalAtoms";

function App() {
  const appTheme = useAtomValue(globalAtoms.appTheme);

  useEffect(() => {
    document.body.setAttribute(
      "data-theme",
      appTheme === "dark" ? "dark" : "light"
    );
  }, [appTheme]);

  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/blogs" />} />
          <Route path="/blogs" element={<Explore />} />
          <Route path="/blogs/:blogId" element={<Blog />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
