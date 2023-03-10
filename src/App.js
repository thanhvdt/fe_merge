import "./App.css";
import React, { useState } from "react";
import Home from "./components/EnPage/Home";
import Footer from "./components/EnPage/Footer";
import Result from "./components/EnPage/Result";
import Test from "./components/Test";

import "./components/style/base.css";
import "./components/style/main.css";
import "./components/style/responsive.css";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(false);

  const [result, setResult] = useState({
    en: "",
    vn: "",
    type: "",
    type_vn: "",
  });
  const [fromEng, setFromEng] = useState(false);
  const handleClick = () => {
    setFromEng(!fromEng);
  };

  // convert unicode to string in Vietnamese
  function unicodeToChar(text) {
    return text.replace(/\\u[\dA-F]{4}/gi, function (match) {
      return String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16));
    });
  }

  return (
    <>
      {/* Home: tất cả trừ footer */}
      <Home
        result={result}
        setResult={setResult}
        showResult={showResult}
        setShowResult={setShowResult}
        fromEng={fromEng}
        setFromEng={setFromEng}
        handleClick={handleClick}
        handleUnicodeToChar={unicodeToChar}
        showSearchMobile={showSearchMobile}
        setShowSearchMobile={setShowSearchMobile}
      />
      <Footer />
      <Result
        showResult={showResult}
        setShowResult={setShowResult}
        result={result}
        setResult={setResult}
        fromEng={fromEng}
        setFromEng={setFromEng}
      />
    </>
  );
}

export default App;
