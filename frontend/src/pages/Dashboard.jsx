import React, { useEffect, useReducer, useState } from 'react'
import Navbar from '../component/Navbar'
import { Button } from '@mui/material'
import QuestionComponent from '../component/QuestionComponent';


const initalState = {
  questions : [],
  // loading,error,ready,active,finished
  status:"loading",
  index:0,
  answer: null,
  points:0,
  secondRemaining: 10,
};

function reducer(state,action){
  switch(action.type){
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status:"ready"
      }
    
    case "dataFailed":
      return {
        ...state,
        status:"error"
      }
    
    case "start":
      return {...state,status:"active"}

    case 'newAnswer':
      const question = state.questions.at(state.index);

      return {
        ...state,answer:action.payload,
        points: action.payload === question.correctAnswer?state.points+1: state.points
      }
    
    case 'nextQuestion':
      return {...state,index: state.index+1,answer:null};

    case 'finish':
      return {...state,status:"finished"};


    
   
    /* case "tick":
      return {
        ...state,secondRemaining:state.secondRemaining-1,
        status: state.secondRemaining ===0? "finished": state.status
      } */

    default:
      throw new Error("Action unknown")
  }
}



export default function Dashboard() {
  const [{questions,status,index, answer,points},dispatch] = useReducer(reducer,initalState);
  const numQuestions = questions.length;
  const [isProfile,setIsProfile] = useState(false);
  console.log(points);


  function handleClick(){
    fetch('http://localhost:8000/questions')
    .then((res)=> res.json())
    .then((data)=>dispatch({type:"dataReceived",payload:data}))
    .catch((err)=>dispatch({type:"dataFailed"}));

  }

  return (
    <div>
      <Navbar/>
      { !isProfile && <p className='bg-rose-300 text-center text-red-700'>complete your profile to start test</p>}
      <div className='text-center mt-[20px]'>
        { status === "loading" && <Button onClick={handleClick} variant="contained" color="primary">
          Start Test
        </Button>}
        {}
        { status==="ready" && <QuestionComponent question={questions[index].question} options={questions[index].options} dispatch = {dispatch} index={index} />}
        {status==="finished" && <div> test is finished your score {points} </div> }
      </div>
    </div>
  )
}
