import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

let url = "";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputValues, setInputValues] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [qsNumber, setQsNumber] = useState(0);
  const [isCorrect, setIsCorrect] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchQuestions = async () => {
    setIsLoading(true);
    const amountUrl = `amount=${inputValues.amount}`;
    const categoryUrl = `&category=${table[inputValues.category]}`;
    const difficultyUrl = `&difficulty=${inputValues.difficulty}`;
    const typeUrl = `&type=multiple`;
    url = `${API_ENDPOINT}${amountUrl}${categoryUrl}${difficultyUrl}${typeUrl}`;
    const fetchedQuestions = await axios.get(url);
    console.log(fetchedQuestions.data.results);
    if (!fetchedQuestions || fetchedQuestions.data.results.length < 1) {
      setIsError(true);
      setIsQuizStarted(false);
    } else {
      setQuestions(fetchedQuestions.data.results);
    }
    setIsLoading(false);
  };

  // useEffect(() => {
  //   fetchQuestions();
  // }, [isQuizStarted]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsError(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [isError]);

  const onStartClick = (e) => {
    e.preventDefault();
    setIsQuizStarted(true);
    fetchQuestions();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
    // console.log(inputValues);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsQuizStarted(false);
    setInputValues({
      amount: 10,
      category: "sports",
      difficulty: "easy",
    });
    setQsNumber(0);
    setIsCorrect(0);
  };

  const nextQuestion = () => {
    setQsNumber((prevValue) => {
      const qsNum = prevValue + 1;
      if (qsNum > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return qsNum;
      }
    });
  };

  const handleOptionClick = (value) => {
    if (value) {
      setIsCorrect(isCorrect + 1);
    }
    nextQuestion();
    console.log(inputValues.amount, qsNumber);
  };

  return (
    <AppContext.Provider
      value={{
        onStartClick,
        handleInputChange,
        inputValues,
        setInputValues,
        isError,
        isModalOpen,
        setIsModalOpen,
        isLoading,
        isQuizStarted,
        setIsQuizStarted,
        questions,
        qsNumber,
        setQsNumber,
        isCorrect,
        setIsCorrect,
        handleOptionClick,
        openModal,
        closeModal,
        nextQuestion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
