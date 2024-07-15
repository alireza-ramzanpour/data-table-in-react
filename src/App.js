import DataTable from "./components/DataTable";

function App() {
  return (
    <>
      <DataTable
        theme="default"
        editButton={true}
        editField={["name", "family", "retired"]}
        deleteButton={true}
        cols={["name", "family", "retired"]}
        data={[
          { name: "Ronaldo", family: "Nazário", retired: 'Yes' },
          { name: "Zinedine", family: "Zidane", retired: 'Yes' },
          { name: "Diego", family: "Maradona", retired: 'Yes' },
          { name: "Franz", family: "Beckenbauer", retired: 'Yes' },
          { name: "Ali", family: "Daei", retired: 'Yes' },
          { name: "Kylian ", family: "Mbappe", retired: 'No' },
          { name: "Cristiano", family: "Ronaldo", retired: 'No' },
          { name: "Ashkan", family: "Dejagah", retired: 'No' },
          { name: "Jude ", family: "Bellingham", retired: 'No' },
          { name: "Pele", family: "da Silva", retired: 'Yes' },
          { name: "Johan", family: "Cruyff", retired: 'Yes' },
          { name: "Michel", family: "Platini", retired: 'Yes' },
          { name: "Xavi", family: "Hernandez", retired: 'No' },
          { name: "Erling ", family: "Haaland", retired: 'No' },
          { name: "Mehdi", family: "Mahdavikia", retired: 'Yes' },
          { name: "Harry", family: "Kane", retired: 'No' },
          { name: "Ali", family: "Karimi", retired: 'Yes' },
          { name: "Lionel", family: "Messi", retired: 'No' },
          { name: "Alisson", family: "Becker", retired: 'No' },
          { name: "George", family: "Best", retired: 'Yes' },
          { name: "Mohamed", family: "Salah", retired: 'No' },
          { name: "Hiroki", family: "Sakai", retired: 'No' },
          { name: "Sardar", family: "Azmoun", retired: 'No' },
          { name: "Bernardo", family: "Silva", retired: 'Yes' },
          { name: "Alfredo", family: "Di Stefano", retired: 'Yes' },
          { name: "Andranik", family: "Teymourian", retired: 'Yes' },
          { name: "Lamine", family: "Yamal", retired: 'No' },
          { name: "Son", family: "Heung-min", retired: 'No' },
          { name: "Antoine", family: "Griezmann", retired: 'No' },
          { name: "Takashi", family: "Inui", retired: 'No' },
          { name: "Bobby", family: "Charlton", retired: 'Yes' },
          { name: "Javad", family: "Nekounam", retired: 'Yes' },
          { name: "Shinji", family: "Kagawa", retired: 'No' },
          { name: "Koya", family: "Kitagawa", retired: 'No' },
          { name: "Paolo", family: "Maldini", retired: 'Yes' },
          { name: "Franco", family: "Baresi", retired: 'Yes' },
          { name: "Andrea", family: "Pirlo", retired: 'Yes' },
          { name: "Maya", family: "Yoshida", retired: 'No' },
          { name: "Kim", family: "Bo-kyung", retired: 'No' },
          { name: "Alireza", family: "Jahanbakhsh", retired: 'No' },
          { name: "Keisuke", family: "Honda", retired: 'Yes' },
          { name: "Shinji", family: "Okazaki", retired: 'Yes' },
          { name: "Genki", family: "Haraguchi", retired: 'No' },
          { name: "Andres", family: "Iniesta", retired: 'Yes' },
          { name: "Lev", family: "Yashin", retired: 'Yes' },
          { name: "Yuto", family: "Nagatomo", retired: 'No' },
        ]}
        rowsPerPage={5}
      />


    </>
  );
}
export default App;
