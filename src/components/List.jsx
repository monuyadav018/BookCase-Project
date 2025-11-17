import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const ListPage =() =>{
    const [name,setName]=useState("");
    const [isbn,setIsbn] = useState("");
    const [coverPic,setcoverPic]=useState("");
    const [price,setPrice]=useState("");

    const handleSubmit =(e)=>{};
    return(
         <div className="container mt-5">
     <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Book Name </Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Enter bookName" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Isbn Number</Form.Label>
        <Form.Control  onChange={(e)=>setIsbn(e.target.value)} value={isbn} type="text" placeholder="isbnNumber" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>price</Form.Label>
        <Form.Control  onChange={(e)=>setPrice(e.target.value)} value={price} type="text" placeholder="Price" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>coverPic </Form.Label>
        <Form.Control  onChange={(e)=>setcoverPic(e.target.value)} value={price} type="file"  />
      </Form.Group>
      
      <Button variant="primary" type="submit">
       create 
      </Button>
    </Form>
    
   </div>
    )
};

export default ListPage;