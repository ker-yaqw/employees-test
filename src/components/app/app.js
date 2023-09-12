import FormPanel from '../form-panel/form-panel';
import EmployeesList from '../employees-list/employees-list';
import './app.scss';

function App() {
  const data = [
    {name: "John Smith", age: 32, status: "Subcription", work: "Employment", id: 1},
    {name: "Jane Doe", age: 24, status: "Not Subcription", work: "Employment", id: 2},
    {name: "Bob Johnson", age: 45, status: "Subcription", work: "Employment", id: 3},
    {name: "Alice Wong", age: 38, status: "Other", work: "Employment", id: 4},
    {name: "Mark Lee", age: 28, status: "Subcription", work: "Unemployed", id: 5},
    {name: "Emily Chen", age: 31, status: "Not Subcription", work: "Unemployed", id: 6},
    {name: "David Kim", age: 29, status: "Subcription", work: "Employment", id: 7},
    {name: "Karen Wu", age: 37, status: "Subcription", work: "Unemployed", id: 8},
    {name: "Tom Brown", age: 43, status: "Other", work: "Unemployed", id: 9},
    {name: "Lisa Park", age: 26, status: "Not Subcription", work: "Employment", id: 10},
    {name: "John Smith", age: 32, status: "Subcription", work: "Employment", id: 11},
    {name: "Jane Doe", age: 24, status: "Not Subcription", work: "Employment", id: 12},
    {name: "Bob Johnson", age: 45, status: "Subcription", work: "Employment", id: 13},
    {name: "Alice Wong", age: 38, status: "Other", work: "Employment", id: 14},
    {name: "Mark Lee", age: 28, status: "Subcription", work: "Unemployed", id: 15},
    {name: "Emily Chen", age: 31, status: "Not Subcription", work: "Unemployed", id: 16},
    {name: "David Kim", age: 29, status: "Subcription", work: "Employment", id: 17},
    {name: "Karen Wu", age: 37, status: "Subcription", work: "Unemployed", id: 18},
    {name: "Tom Brown", age: 43, status: "Other", work: "Unemployed" , id: 19},
    {name: "Lisa Park", age: 26, status: "Not Subcription", work: "Employment", id: 20},
    {name: "Karen Wu", age: 37, status: "Subcription", work: "Unemployed", id: 21},
    {name: "Tom Brown", age: 43, status: "Other", work: "Unemployed", id: 22},
    {name: "Lisa Park", age: 26, status: "Not Subcription", work: "Employment", id: 23},
    {name: "John Smith", age: 32, status: "Subcription", work: "Employment", id: 24},
    {name: "Jane Doe", age: 24, status: "Not Subcription", work: "Employment", id: 25},
    {name: "Bob Johnson", age: 45, status: "Subcription", work: "Employment", id: 26},
    {name: "Alice Wong", age: 38, status: "Other", work: "Employment", id: 27},
    {name: "Mark Lee", age: 28, status: "Subcription", work: "Unemployed", id: 28},
    {name: "Emily Chen", age: 31, status: "Not Subcription", work: "Unemployed", id: 29},
    {name: "David Kim", age: 29, status: "Subcription", work: "Employment", id: 30},
    {name: "Karen Wu", age: 37, status: "Subcription", work: "Unemployed", id: 31},
    {name: "Tom Brown", age: 43, status: "Other", work: "Unemployed" , id: 32},
    {name: "Lisa Park", age: 26, status: "Not Subcription", work: "Employment", id: 33},
  ];
  localStorage.setItem("user-info", JSON.stringify(data));

  return (
    <div className="app">
        <FormPanel/>
        <EmployeesList data={data}/>    
    </div>
  );
}

export default App;
