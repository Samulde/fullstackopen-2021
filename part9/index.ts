import express from 'express';
import bmiCalculator from './bmiCalculator';

const app = express()

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack')
})

app.get('/bmi', (req, res) => {
  
  const height:number = Number(req.query.height);
  const mass:number = Number(req.query.weight);
  
  if ( isNaN(height) || isNaN(mass) ) {
    res.send( { error: "malformatted parameters" });
  } 

  const bmi:String = bmiCalculator(height, mass);
  res.send( { bmi: bmi }); 
  }
)

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})