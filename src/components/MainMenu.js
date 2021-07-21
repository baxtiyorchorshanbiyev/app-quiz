import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
const MainMenu = () => {
  const {gameState, setGameState} = useContext(QuizContext);
  return (
    <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 menu">
            <h2 className="text-center">Html dan testlar</h2>
            <p className="text-center title-p">O'zingizni sinab ko'ring va oxirida nechta topganizni menga javobini albatta yuboring,  test haqida fikrlar bo'lsa yozib qoldirishingz mumkin.</p>
            <h6 className="text-center titleLogo">ExplorersCoding1</h6>
            <div className="my-4 d-flex justify-content-center">
            <button onClick={() =>setGameState("quiz")} className="btn btn-primary start-quiz">Testni boslash</button>
            </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default MainMenu;