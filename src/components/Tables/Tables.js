import Table from 'react-bootstrap/Table';
import { useState,useEffect} from 'react';
import data from "./data.json"
import "./Tables.css"

function DarkExample() {

    const[name,setName]=useState([])
    const[search,setSearch]=useState(name)
    
    
    const handleChange=(event)=>{
      const searchTerm = event.target.value.toLowerCase();
        setSearch(name.filter(val=>val.names.toUpperCase().toLowerCase().includes(searchTerm)))
    }

    useEffect(()=>{
        setName(data)
        setSearch(data)
    },[])

  return (
    <>
    <div className='container'>
    <h1>
      Fruits Benifits
    </h1>
    <div className='tabl'>
         <label>Data:</label>
   <input type="text" class="input-field" placeholder="Enter a Fruits name" onChange={handleChange}/>
    </div>
    </div>
    <Table striped bordered hover variant="dark">

  
      <thead>
        <tr>
          <th>ID</th>
          <th>Fruits Name</th>
          <th>Benifits</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {search.map((value,index)=>(
          <tr key={index}>
          <td>{value.id}</td>
          <td>{value.names}</td>
          <td>{value.benifit}</td>
          <td> <img src={value.image} alt="" width="200" height="150" /></td>
        </tr>
        ))}
        
       
       
      </tbody>
    </Table>
    </>
  );
}

export default DarkExample;