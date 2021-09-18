
const bmiCalculator = ( height:number, mass:number,) : string => {
  const height_m = height / 100;
  const bmi = mass / ( height_m * height_m );
  
  if ( bmi >= 40 ) {
    return 'Obese (Class III)';
  } else if ( bmi >= 35 ) {
    return 'Obese (Class II)';
  } else if ( bmi >= 30 ) {
    return 'Obese (Class I)';
  } else if ( bmi >= 25 ) {
    return 'Overweight (Pre-obese)';
  } else if ( bmi >= 18.5 ) {
    return 'Normal (healthy weight)';
  } else if ( bmi >= 17 ) {
    return 'Underweight (Mild thingness)';
  } else if ( bmi >= 16 ) {
    return 'Underweight (Moderate thinness)';
  } else if ( bmi < 16 ) {
    return 'Underweight (Severe thinness)';
  } else {
    return 'BMI could not be categorised.';
  }
};

const height = Number(process.argv[2]);
const mass = Number(process.argv[3]);

console.log(bmiCalculator(height, mass));

export default bmiCalculator;