import React from "react";
import { useGlobalContext } from "./context";
import Error from "./Error";
import Loading from "./Loading";
import Modal from "./Modal";

const SetupForm = () => {
  const {
    handleInputChange,
    inputValues,
    onStartClick,
    isLoading,
    isError,
    isQuizStarted,
    questions,
    qsNumber,
    isCorrect,
    nextQuestion,
    handleOptionClick,
  } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (!isQuizStarted) {
    return (
      <section className="quiz quiz-small">
        <form className="setup-form" onSubmit={onStartClick}>
          <h2>Setup Quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">Number of Questions</label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="form-input"
              min={1}
              max={50}
              value={inputValues.amount}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              className="form-input"
              name="category"
              onChange={handleInputChange}
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">Select Difficulty</label>
            <select
              id="difficulty"
              className="form-input"
              name="difficulty"
              onChange={handleInputChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {isError && <Error />}
          <button type="submit" className="submit-btn">
            Start
          </button>
        </form>
      </section>
    );
  }

  const { question, correct_answer, incorrect_answers } = questions[qsNumber];
  // const optionValues = [correct_answer, ...incorrect_answers];
  let optionValues = [...incorrect_answers];
  const randomNumber = Math.round(Math.random() * 4);
  if (randomNumber === 3) {
    optionValues.push(correct_answer);
  } else {
    optionValues.push(optionValues[randomNumber]);
    optionValues[randomNumber] = correct_answer;
  }

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          Correct Answers: {isCorrect}/{qsNumber}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {optionValues.map((option, i) => {
              return (
                <button
                  className="answer-btn"
                  key={i}
                  onClick={() => handleOptionClick(option === correct_answer)}
                  dangerouslySetInnerHTML={{ __html: option }}
                />
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion}>
          Next Question
        </button>
      </section>
    </main>
  );
};

export default SetupForm;
