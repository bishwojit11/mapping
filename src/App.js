import './App.css';
import Counter from './Componenes/Counter';
import Employees from './Componenes/Employees';

const employeeInfo = [
  {
    firstName: "Salam",
    lastName: "Uddin",
    designation: "Head of Area",
    age: 23
  },
  {
    firstName: "Jack",
    lastName: "Smith",
    designation: "Field Agent",
    age: 21
  },
  {
    firstName: "Kuddus",
    lastName: "Ali",
    designation: "Head of Upazilla",
    age: 22
  },
  {
    firstName: "Bakkar",
    lastName: "Uddin",
    designation: "Head of Area",
    age: 23
  },
]
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Counter/>
       
        {/* Method 1  */}
       {employeeInfo.map((employee) => {
         return(
           <Employees {...employee}/>
         )
       })}

       {/* Method 2 */}

       {/* {employeeInfo.map(employee => {
         const {firstName, lastName,designation, age } = employee;
         return (
           <Employees firstName={firstName} lastName={lastName} designation={designation} age={age}/>
         )
       })} */}
       
        
        
      </header>
    </div>
  );
}

export default App;
