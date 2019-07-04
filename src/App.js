import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
{
  'id': '1',
  'image': 'https://placeimg.com/64/64/people1',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': '2',
  'image': 'https://placeimg.com/64/64/people2',
  'name': '임꺽정',
  'birthday': '961222',
  'gender': '남자',
  'job': '프로그래머'
},
{
  'id': '3',
  'image': 'https://placeimg.com/64/64/people3',
  'name': '이순신',
  'birthday': '961222',
  'gender': '남자',
  'job': '디자이너'
},
{
  'id': '4',
  'image': 'https://placeimg.com/64/64/people4',
  'name': '유관순',
  'birthday': '961222',
  'gender': '여자',
  'job': '퍼블리셔'
}
]
function App() {
  return (
    <div>
      {
        customers.map(c => {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
