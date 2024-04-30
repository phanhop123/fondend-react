import { useEffect, useState } from "react";
import { getBrandAPI, getTotalPage } from "../api/brand";
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';
import ModalAddBrand from './ModalAddBrand';
import ModalEdit from './ModalEdit'; 
//import ModalDelete from "./ModalDelete"
import _, { debounce } from 'lodash';
// import './Brand.css';

const Brand = () => {
    const [Brand, setBrand] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

// add
    const [isShowModalAddBrand, setIsShowModalAddBrand] = useState(false);
//edit
    const [isShowModalEditBrand, setIsShowModalEditBrand] = useState(false);
    const [dataBrandEdit, setDataBrandEdit] = useState({});
//delete
    const [isShowModalDeleteBrand, setIsShowModalDelteBrand] = useState(false);
    const [dataBrandDelete, setDataBrandDelete] = useState({});

    const handleClose = () => {
        setIsShowModalAddBrand(false);
        setIsShowModalEditBrand(false);
        setIsShowModalDelteBrand(false);
    };
    const handUpdateBrand = (user) =>{
        setBrand([user , ...Brand]);
    }
   
    useEffect(() => {
        fetchBrand(1);
        fetchTotalPages();
    }, []); 
    const fetchBrand = async (page) => {
        const fetchedBrand = await getBrandAPI(page);
        setBrand(fetchedBrand);
      
    }

    const fetchTotalPages = async () => {
        const total = await getTotalPage();
        setTotalPages(total);
    }

    const handlePageClick = (event) => {
        fetchBrand(+event.selected +1);
    }
    const handleEdit = (user) =>{
    setDataBrandEdit(user);
    setIsShowModalEditBrand(true)
    }
    const handleDelete = (user) => {
        setDataBrandDelete(user);
        setIsShowModalDelteBrand(true)
    }
    const handleEditFrom = (user) => {
        let cloneListBrand = _.cloneDeep(Brand);
        let index = Brand.findIndex(item => item.brandId === user.brandId);
        cloneListBrand[index].brandName = user.brandName;
        setBrand(cloneListBrand);
    }
    const handleAddFrom = (user) => {
        let cloneListBrand = _.cloneDeep(Brand);
        let index = Brand.findIndex(item => item.brandId === user.brandId);
        cloneListBrand[index].brandName = user.brandName;
        setBrand(cloneListBrand);
    }
    const handleDeleteFrom = (user) => {
        let cloneListBrand = [...Brand]; 
        cloneListBrand = cloneListBrand.filter(item => item.brandId !== user.brandId);
        setBrand(cloneListBrand);
    }
    const hanldSearch = debounce((event) => {
        let term = event.target.value;
        if (term) {
            fetch(`https://localhost:7147/api/brand/search?search=${term}`)
                .then(response => response.json())
                .then(data => {
                    setBrand(data);
                })
                .catch(error => {
                    console.error('Lỗi khi gửi yêu cầu API:', error);
                });
        } else {
            fetch('https://localhost:7147/api/brand')
                .then(response => response.json())
                .then(data => {
                    setBrand(data);
                })
                .catch(error => {
                    console.error('Lỗi khi gửi yêu cầu API:', error);
                });
        }
    },300);
    return (
        <main id="todolist">
         
            <div className='my-3 add-Brand d-flex justify-content-between'>
          <span>
            <h2>
              <b>List Brand:</b>
            </h2>
          </span>
          <button
            className='btn btn-success'
            onClick={() => setIsShowModalAddBrand(true)}
          >
            Add Brand brand
          </button>
          
        </div>
        <div className="col-4 my-3">
            <input className="form-control" 
            placeholder="Search"
            onChange={(event ) => hanldSearch(event)}
            >
                
            </input>
        </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            <div className="sort-header">
                           <span>ID</span>  
                           {/* <span>
                             <i class="fa-solid fa-arrow-down-long"
                            onClick={() =>{
                                setSortBy("desc"); 
                                setSortField("BrandId")} }

                             >
                             </i>
                             <i class="fa-solid fa-arrow-up-long"
                            onClick={() =>setSortBy("acs")} 
                             ></i>
                             </span> */}
                            </div>
                           
                        </th>


                      
                        <th>
                        <div className="sort-header">
                           <span>Brand Name</span>  
                           {/* <span>
                             <i class="fa-solid fa-arrow-down-long"></i>
                             <i class="fa-solid fa-arrow-up-long"></i>
                             </span> */}
                            </div>
                        </th>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Brand.map((item, key) => (
                            <tr key={key}>
                                <td>{item.brandId}</td>
                                <td>{item.brandName}</td>
                                <td>
                                    <button 
                                    className="btn btn-warning mx-1"
                                    onClick={() => handleEdit(item)}
                                    >Edit</button>
                                    <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(item)}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                // Số trang được tính toán từ số items và kích thước trang
                previousLabel="< previous"
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
            />
              <ModalAddBrand
              show={isShowModalAddBrand}
              handleClose={handleClose} 
              handUpdateBrand={handleAddFrom }
              />
              <ModalEdit
              show={isShowModalEditBrand}
              dataBrandEdit={dataBrandEdit}
              handleClose={handleClose}
              handleEditFrom={handleEditFrom }
              />

            {/* <ModalDelete
            show={isShowModalDeleteBrand}
            handleClose={handleClose}
            dataBrandDelete={dataBrandDelete}
            handleDeleteFrom= {handleDeleteFrom}
            /> */}


        </main>
    )
}

export default Brand;
 