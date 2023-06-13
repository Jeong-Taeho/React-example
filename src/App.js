/*eslint-disable*/ // WARNING(경고) 메세지 없애기 = Lint 없애기

import './App.css';
import { useState } from 'react';

function App() { //jsx임 js파일에서 쓰는 html 대용품
  
  let [title,change] = useState(['남자 코트 추천','여자 코트 추천','신상품']);
  let [good, good변경] = useState(0);
  // a는 보관했던 자료
  // b는 state 변경을 도와주는 함수
  // 변동 시 자동으로 html에 반영되게 만들고 싶으면 state

  // state 변경하는 법 : 등호x 

  let [modal, setModal] = useState(false);
  let countModal = 1;
  return (
    <div className="App">
        <div className ='black-nav'>
          <h4>블로그임</h4>
        </div>

        <button onClick={ () => {
          let copy = [...title];
          copy[0] = '여자 패딩 추천';
          chan
          ge(copy);
        }}>click</button>

        <button onClick={ () => {
          let sorted = [...title].sort();
          change(sorted)
        }}> 정렬 </button>
G
        <div className='list'>
          <h4>{title[0]} <span onClick={() => good변경(good+1) }>👍</span>{good}</h4>
          <p>06월 09일 발행</p>
        </div>

        <div className='list'>
          <h4>{title[1]} <span onClick={() => good변경(good+1) }>👍</span>{good}</h4>
          <p>06월 09일 발행</p>
        </div>

        <div className='list'>
          <h4 onClick={() => {
             countModal += 1;
             console.log(countModal);
             countModal % 2 === 0 ? setModal(true) : setModal(false)
             }}> {title[2]} </h4>
              <p>06월 09일 발행</p>
        </div>

       {
          modal == true ? <Modal/> : null
       }   
        
    </div>
  );
}

function Modal(){
  return(
    <>
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App;
