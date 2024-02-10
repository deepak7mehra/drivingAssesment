import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

const QuestionComponent = ({ question, options, dispatch,index}) => {
    const [ans,setAns] = useState();
    const [save,setSave]= useState(false);
  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
      <Typography variant="h6" component="div">{question}</Typography>
      <RadioGroup
        name="options"
       /*  value={selectedOption}
        onChange={onChange} */
        style={{ marginTop: '10px' }}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={`${index}`} // Convert index to a string for RadioGroup value
            control={<Radio />}
            label={option}
            onClick={()=>setAns(index+1)}
          />
        ))}
      </RadioGroup>
      <div style={{ marginTop: '16px' }}>
       
        { !save && <Button onClick={ ()=>{
            setSave(true)
            dispatch({type:"newAnswer",payload:ans})}} style={{ marginLeft: '10px' }} variant="contained" color="primary" >
          save
        </Button>}

        {
            (index==9) ? <Button onClick={()=>{
                setSave(false);
                dispatch({type:"finish"})}}  variant="contained" color="primary" style={{ marginLeft: '10px' }}>
              finsih
            </Button> : <Button onClick={()=>{
            setSave(false);
            dispatch({type:"nextQuestion"})}}  variant="contained" color="primary" style={{ marginLeft: '10px' }}>
          Next
        </Button>
        }
        
      </div>
    </Paper>
  );
};

export default QuestionComponent;
