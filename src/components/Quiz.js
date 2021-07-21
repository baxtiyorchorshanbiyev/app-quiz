import React,{useState, useContext} from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Context';
const Quiz = () => {
  const {score, setScore, setGameState} = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const nextQuestion = () =>{
    if(Questions[currQuestion].answer == optionChosen){
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };
  const finishQuiz = () =>{
    if(Questions[currQuestion].answer == optionChosen){
      setScore(score + 1);
    }
    setGameState("endScreen")
  }
  return (
    <>
      <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 quiz">
          <h6 className="text-center">{Questions[currQuestion].prompt}</h6>
          <div className="options">
          <button onClick={() => setOptionChosen("optionA")} className="btn btn-block answer">{Questions[currQuestion].optionA}</button>
          <button onClick={() => setOptionChosen("optionB")} className="btn btn-block answer">{Questions[currQuestion].optionB}</button>
          <button onClick={() => setOptionChosen("optionC")} className="btn btn-block answer">{Questions[currQuestion].optionC}</button>
          <button onClick={() => setOptionChosen("optionD")} className="btn btn-block answer">{Questions[currQuestion].optionD}</button> 
          </div>
          {currQuestion == Questions.length - 1 ? (
            <div className="my-4 d-flex justify-content-center">
            <button onClick={finishQuiz} type="button" className="btn next">Oxirgi savol</button>
            </div>
          ):(
          <div className="my-4 d-flex justify-content-center">
          <button onClick={nextQuestion} className="btn next">Keyingi savol</button>
          </div>
          )}
          </div>
        </div>
      </div>
      
      
      </section>
    </>
  );
};

export default Quiz;