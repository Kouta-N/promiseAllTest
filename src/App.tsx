import "./styles.css";

function someAsyncFunction1() {
  console.log("1");
}

function someAsyncFunction2() {
  console.log("2");
}

function someAsyncFunction3() {
  console.log("3");
}

async function myAsyncFunction() {
  const [result1, result2, result3] = await Promise.all([
    someAsyncFunction1(),
    someAsyncFunction3(),
    someAsyncFunction2()
  ]);
  console.log(result1, result2, result3);
}

export default function App() {
  myAsyncFunction();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
