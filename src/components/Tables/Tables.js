import Table from 'react-bootstrap/Table';
import { useState,useEffect} from 'react';
import data from "./data.json"

function DarkExample() {

    const[name,setName]=useState([])
    const[search,setSearch]=useState(name)
    
    
    
    const handleChange=(event)=>{
        setSearch(name.filter(val=>val.names.toLowerCase().includes(event.target.value)))
    }

    useEffect(()=>{
        setName(data)
        setSearch(data)
    },[])

  return (
    <>
    <div>
         <label>Data:</label>
   <input type="text" placeholder="Enter a input data" onChange={handleChange}/>
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