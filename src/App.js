import DataTable from "./components/DataTable";
// import "./assets/css/style.css"

function App() {
  return (
    <>
      <DataTable
        theme="blue"
        editButton = {true}
        editField = {["name", "family"]}
        deleteButton={true}
        cols={["name", "family"]}
        data={[
          { name: "ali", family: "rezaei" },
          { name: "reza", family: "alinia" },
          { name: "mehdi", family: "hoseini" },
          { name: "amin", family: "amiri" },
          { name: "mehran", family: "kazemi" },
        ]} />


    </>
  );
}
export default App;
