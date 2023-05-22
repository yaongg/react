import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App(){

  let post = '강남 우동 맛집'; //서버에서 가져온 데이터로 가정
  let [글제목,글제목변경] = useState(['남자 코트 추천','가가','제목3']) // 자료 잠깐 저장할떄, 변동시 자동으로 html에 반영되게 하고싶다면 state 사용
  let [logo,setLogo] = useState('ReactBlog');
  let [따봉, 따봉변경] = useState(0);

  // let num = [1,2];
  // let a = num[0];
  // let c = num[1];
  // let [a,c] = [1,2]

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'red', fontSize: '16px'}}>{logo}</h4>
      </div> 
      {/* <h4>{post}</h4> */}

      <button onClick={() =>{
        let 글제목1 = [...글제목];
        글제목1.sort();
        글제목변경(글제목1);
      }}>가나다순정렬</button>

      <button onClick={() => {

        let arr = [1,2,3];

        let copy = [...글제목];
        copy[0] = '여자코트  추천'
        글제목변경(copy);
        }}>글수정</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={() => { 따봉변경(따봉+1)}}>좋아요</span>{따봉}</h4>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 16일 발행</p>
      </div>

      <Modal></Modal>
      {/* <Modal/> */}

    </div>
  )
}

function Modal(){
  return (
    <>
    <div className="modal">
      <h4 style={{width: '30px', height: '30px',background:'blue'}}>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    <div></div>
    </>
  )
}
// function Article(props){
//   return <article>
//     <h2>{props.title}</h2>
//     {props.body}
//   </article>
// }
// function Header(props) {
//   // console.log('props','props,props.title')
//   return <header>
//     <h1><a href="/" onClick={(event)=>{
//       event.preventDefault();
//       props.onChangeMode();
//     }}>{props.title}</a></h1>
//   </header>
// }
// function Nav(props){
//   const lis= []
//   for( let i=0; i<props.topics.length; i++){
//     let t = props.topics[i];
//     lis.push(<li key={t.id}>
//       <a id={t.id} href={'/read/'+t.id} onClick={event=>{
//         event.preventDefault();
//         props.onChangeMode(Number(event.target.id));
//       }}>{t.title}</a>
//       </li>)
//   }
//   return <nav>
//     <ol>
//       {lis}
//     </ol>
//   </nav>
// }
// function App() {
//   // const _mode = useState('WELCOME');
//   // const mode = _mode[0];
//   // const setMode= _mode[1];
//   // console.log('_mode', _mode);
//   const [mode, setMode] = useState('WELCOME');
//   const [id, setId] = useState(null);
//   const topics = [
//     //바뀌지않을 값이라서 const 
//     {id:1, title:'html', body: 'html is ...'},
//     {id:2, title:'css', body: 'css is ...'},
//     {id:3, title:'javascript', body: 'javascript is ...'}
//   ]
//   let content = null;
//   if(mode === 'WELCOME'){
//     content = <Article title="Welcome" body="hello,WEB"></Article>
//   }else if(mode === 'READ'){
//     let title,body = null;
//     for(let i =0; i<topics.length; i++){
//       console.log(topics[i].id, id);
//       if(topics[i].id === id){
//         title = topics[i].title;
//         body = topics[i].body;
//       }
//     }
//     content = <Article title={title} body={body}></Article>
//   }
//   return (
//     <div className="App">
//       <Header title="WEB" onChangeMode={()=>{
//         setMode('WELCOME');
//       }}></Header>
//       <Nav topics={topics} onChangeMode={(_id)=>{
//         setMode('READ');
//         setId(_id);
//       }}></Nav>
//       {content}
//     </div>
//   );
// }

export default App;
