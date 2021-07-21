import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/QuestionBank';
import emailjs from 'emailjs-com';
const EndScreen = () => {
  const {score, setScore, setGameState} = useContext(QuizContext);
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'you tube tempalate', e.target, 'user_GQe7ppCOCHIzlkrh52sHU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  const restartQuiz = () =>{
    setScore(0);
    setGameState("menu");
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 endScreen">
            <h2>Savollar tugadi</h2>
            <h3>{score} / {Questions.length}</h3>
            <form onSubmit={sendEmail}>
              <div>
              <label htmlFor="from_name">Ismingizni kiriting</label>
              <input type="text" required placeholder="Ism" className="form-control" id="from_name" name="from_name" />
              </div>
              <div>
              <label htmlFor="to_name">Familyangizni kiriting</label>
              <input type="text" required placeholder="Familya" id="to_name" name="to_name" className="form-control" />
              </div>
              <div>
              <label htmlFor="message">Test haqida fikringiz va qancha topganizni yozib yuboring</label>
              <textarea cols="5" required rows="2" className="form-control" id="message" name="message"></textarea>
              </div>
              <input type="submit" value="Yuborish" className="form-control send"/>
            </form>
            <div className="my-4 d-flex justify-content-center">
            <button onClick={restartQuiz} type="button" className="btn restart">Qaytadan boshlash</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndScreen;