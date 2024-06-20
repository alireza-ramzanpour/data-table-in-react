import DataTable from "./components/DataTable";
// import "./assets/css/style.css"

function App() {
  return (
    <>
      <DataTable
        theme="blue"
        editButton = {true}
        editField = {["name", "family", "retired"]}
        deleteButton={true}
        cols={["name", "family", "retired"]}
        data={[
          { name: "ali", family: "rezaei", retired: 'Yes' },
          { name: "reza", family: "alinia", retired: 'No' },
          { name: "mehdi", family: "hoseini", retired: 'Yes' },
          { name: "amin", family: "amiri", retired: 'Yes' },
          { name: "mehran", family: "kazemi", retired: 'No' },
        ]} 
        />


    </>
  );
}
export default App;
