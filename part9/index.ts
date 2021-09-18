import express from 'express';
import bmiCalculator from './bmiCalculator';
import calculateExercises from './exerciseCalculator';


const app = express();

app.use(express.json());


app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack');
});

app.get('/bmi', (req, res) => {
  
  const height = Number(req.query.height);
  const mass = Number(req.query.weight);
  
  if ( isNaN(height) || isNaN(mass) ) {
    res.send( { error: "malformatted parameters" });
  } 

  const bmi:string = bmiCalculator(height, mass);
  res.send( { bmi: bmi }); 
  }
);

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,  @typescript-eslint/no-unsafe-assignment
  const {daily_exercises, target}: any = req.body;

  if ( !daily_exercises || !target ) {
    res.status(400).json( { error: "parameters missing " })
  };

  const result = calculateExercises(JSON.parse(daily_exercises), Number(target))
  console.log(result)

  if ( isNaN(result.average) || isNaN(result.target) ){
    res.status(400).json({ error: "malformatted parameters" })
  } 

  res.status(200).send(result)


});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});