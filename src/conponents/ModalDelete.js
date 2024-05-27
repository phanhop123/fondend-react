import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteBrandAPI  } from "../api/brand";
import { toast } from 'react-toastify';

const ModalDelete = (props) => {
    const { handleClose, show, dataBrandDelete, handleDeleteFrom } = props;


    const handleDeleteBrand = async () => {
            let res = await deleteBrandAPI(dataBrandDelete.brandId);
            if (res && res.statusCode === 204) {
                toast.success("Delete Brand succeeded!");
                handleClose();
                handleDeleteFrom(dataBrandDelete);
                window.location.reload(2000);

            } else {
                toast.error("Error deleting brand");
            }
       
    }

    return (
        <>
            {
                <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete a Brand</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Do you want to delete it? <br />
                            <b>Brand name = {dataBrandDelete.brandName}</b>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleDeleteBrand}>
                                Confirm
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            }
        </>
    )
}
export default ModalDelete; 
