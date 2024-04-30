import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { addBrandAPI } from "../api/brand";
import { toast } from 'react-toastify';

const ModalAddBrand = (props) =>{
    const {show,handleClose } = props;
    const [brandName , setName] = useState("");

    const handleSaveBrand = async () =>{
        let res = await addBrandAPI(brandName);
        if( !res.error){
            handleClose(); 
            setName(''); 
            toast.success("A Brand is created succeed");

        }
        else{
            toast.error("A Brand is created orror");

        }
       
    }
    
// setName('');
            // toast.success("A Brand is created succeed");
    return(
        <>
            <Modal show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
      >
            
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={brandName}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSaveBrand}>Save changes</Button>
                </Modal.Footer>
            </Modal>
            
          
        </>
    )
}

export default ModalAddBrand; 
