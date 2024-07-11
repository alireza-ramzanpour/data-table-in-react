import DataTable from "./components/DataTable";

function App() {
  return (
    <>
      <DataTable
        theme="newStyle"
        editButton={true}
        editField={["name", "family", "retired"]}
        deleteButton={true}
        cols={["name", "family", "retired"]}
        data={[
          { name: "ali", family: "rezaei", retired: 'Yes' },
          { name: "reza", family: "alinia", retired: 'No' },
          { name: "mehdi", family: "hoseini", retired: 'Yes' },
          { name: "amin", family: "amiri", retired: 'Yes' },
          { name: "mehran", family: "kazemi", retired: 'No' },
          { name: "ramin", family: "kazemi", retired: 'Yes' },
          { name: "javad", family: "saeidi", retired: 'No' },
          { name: "hamid", family: "ahmadi", retired: 'No' },
          { name: "ali", family: "rezaei", retired: 'Yes' },
          { name: "reza", family: "alinia", retired: 'No' },
          { name: "mehdi", family: "hoseini", retired: 'Yes' },
          { name: "amin", family: "amiri", retired: 'Yes' },
          { name: "mehran", family: "kazemi", retired: 'No' },
          { name: "ramin", family: "kazemi", retired: 'Yes' },
          { name: "javad", family: "saeidi", retired: 'No' },
          { name: "hamid", family: "ahmadi", retired: 'No' },
          { name: "ali", family: "rezaei", retired: 'Yes' },
          { name: "reza", family: "alinia", retired: 'No' },
          { name: "mehdi", family: "hoseini", retired: 'Yes' },
          { name: "amin", family: "amiri", retired: 'Yes' },
          { name: "mehran", family: "kazemi", retired: 'No' },
          { name: "ramin", family: "kazemi", retired: 'Yes' },
          { name: "javad", family: "saeidi", retired: 'No' },
          { name: "hamid", family: "ahmadi", retired: 'No' },
          { name: "ali", family: "rezaei", retired: 'Yes' },
          { name: "reza", family: "alinia", retired: 'No' },
          { name: "mehdi", family: "hoseini", retired: 'Yes' },
          { name: "amin", family: "amiri", retired: 'Yes' },
          { name: "mehran", family: "kazemi", retired: 'No' },
          { name: "ramin", family: "mohammadi", retired: 'Yes' },
          { name: "javad", family: "saeidi", retired: 'No' },
          { name: "hamid", family: "ahmadi", retired: 'No' },
        ]}
        rowsPerPage={4}
      />


    </>
  );
}
export default App;
