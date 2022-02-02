import "./App.css";

//1. Compute the factorial of a given number
function factorial(num) {
  if (num < 0) {
    return "Error! factorial for negative number does not exist.";
  } else if (num === 0) {
    return `The factorial of ${num} is 1.`;
  } else {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
      fact *= i;
    }

    return `Factorial of ${num} =  ${fact}`;
  }
}

//2. Write a function to see if a number is contained within a sorted array.
function in_array(num, arr) {
  let foundValue;
  for (let i = 0; i <= arr.length; i++) {
    if (num === arr[i]) {
      foundValue = `${num} is exist`;
      break;
    }
    foundValue = `${num} does not exist`;
  }
  return `[${arr.join(",")}] = ${foundValue}`;
}

//3. Randomize an array.
function rand_array(arr) {
  const randomize = [...arr];

  for (let i = randomize.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [randomize[i], randomize[j]] = [randomize[j], randomize[i]];
  }
  return `[${arr.join(",")}] = [${randomize.join(",")}]`;
}

//4. Remove duplicate
function unique_array(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return `[${arr.join(",")}] = [${newArr.join(",")}]`;
}

//5. Regular expression that match all formats: mm/dd/yyyy, m/d/yyyy, mm/d/yyyy, m/dd/yyyy
function formatDate(dateString) {
  const pattern = /^(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/(\d{4})$/;
  const matchedPattern = dateString.match(pattern);
  if (matchedPattern?.length > 0) {
    return `${dateString} valid format`;
  }
  return `${dateString} invalid format`;
}

function App() {
  return (
    <div className="App">
      Answers:
      <div>
        <p>1. Write a function to compute the factorial of a given number.</p>
        <div>
          <strong>{factorial(5)}</strong>
        </div>
      </div>
      <div>
        <p>
          2. Write a function to see if a number is contained within a sorted
          array.
        </p>
        <div>
          <strong>{in_array(101, [4, 20, 35, 66, 101])}</strong>
        </div>
      </div>
      <div>
        <p>3. Randomize an array.</p>
        <div>
          <strong>{rand_array([4, 20, 35, 66, 101])}</strong>
        </div>
      </div>
      <div>
        <p>4. Remove duplicate in array.</p>
        <div>
          <strong>{unique_array([1, 1, 3, 45, 89, 45, 101])}</strong>
        </div>
      </div>
      <div>
        <p>
          5. Write a single regular expression that can be used to match all of
          these date formats: mm/dd/yyyy, m/d/yyyy, mm/d/yyyy, m/dd/yyyy
        </p>
        <div>
          <strong>{formatDate("02/10/2022")}</strong>
        </div>
      </div>
    </div>
  );
}

export default App;
