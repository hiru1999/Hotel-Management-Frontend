import Header from "./components/header"
import './App.css';

function App() {
  

  return (
    <>
      <Header/>
      <div className="w-full h-screen bg-blue-900 flex">

        <div className="border border-white bg-white h-[100px] w-[700px] rounded-lg">
            <input type="date"/>
            <input type="date"/>
            <select>
              <option>Luxury</option>
              <option>Standard</option>
              <option>Low</option>
            </select>
        </div>

      </div>
    </>
  )
}

export default App
