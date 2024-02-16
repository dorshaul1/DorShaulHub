import { HashRouter as Router, Routes, Navigate } from "react-router-dom";
import styles from "./style/App.module.scss";
// import { IntlProvider } from "react-intl";
// import { translations } from "./localization";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Explore from "./containerts/Explore";
import Footer from "./components/Footer";
import Blog from "./containerts/Blog";
import classNames from "classnames";
import { useAtomValue } from "jotai";
import { globalAtoms } from "./state/globalAtoms";

function App() {
  //TODO: implement localization
  const locale = useAtomValue(globalAtoms.systemLanaguage);
  // const messages = translations[locale];

  return (
    // <IntlProvider locale={locale} messages={messages}>
    <div className={classNames(styles.app, { ["rtl"]: locale === "he" })}>
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
    // </IntlProvider>
  );
}

export default App;
