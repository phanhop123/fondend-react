import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { editBrandAPI } from "../api/brand";
import { toast } from 'react-toastify';

const ModalEditBrand = (props) =>{
    const {show,handleClose, dataBrandEdit, handleEditFrom} = props;
    const [ brandName , setName] = useState("");
    const [ brandId , setId] = useState("");



  

    const handleEditBrand = async () => {
        
            let res = await editBrandAPI( brandId, brandName);
            if ( !res.error){
                handleEditFrom({
                    brandName: brandName,
                    brandId: dataBrandEdit.brandId
                });
                handleClose();
                toast.success("Update Brand success");
            }
            else{
                toast.error("Update Brand error");

            }
        
    }
    
    useEffect(()=>{
        if(show){
            setName(dataBrandEdit.brandName)
            setId(dataBrandEdit.brandId)

        }
    },[dataBrandEdit])

            return (
                <>
                    <Modal show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}>
                    
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Brand</Modal.Title>
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
                            <Button variant="primary" onClick={() => handleEditBrand()}>Save changes</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )
            
}

export default ModalEditBrand; 
