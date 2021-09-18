interface exerciseOutput {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: String;
  target: number;
  average: number
}

const calculateExercises = (hoursPerWeek: Array<number>, target:number): exerciseOutput => {
  const periodLength = hoursPerWeek.length
  const trainingDays = hoursPerWeek.filter(hours => hours !== 0).length
  const average = hoursPerWeek.reduce((a, b) => a + b, 0) / periodLength  
  const success = average >= target ? true : false
  const rating = average < 0.5 ? 0 : average < 1 ? 1 : 2

  const ratingDescription = [
    'Needs improvement',
    'Good',
    'Excellent'
  ]

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription: ratingDescription[rating],
    target,
    average
  }
}


console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1] ,2))


