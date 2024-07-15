import React, { useEffect, useRef, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import "../assets/css/main-style.css"
import "../assets/css/default-style.css"
import "../assets/css/blue-style.css"
import "../assets/css/red-style.css"
import "../assets/css/green-style.css"
import "../assets/css/modal-style.css"

function DataTable(props) {

    const [cols, setCols] = useState([])
    const [data, setData] = useState([])
    const [editingData, setEditingData] = useState([]);
    const fieldRefs = useRef([])

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / props.rowsPerPage);
    const startIndex = (currentPage - 1) * props.rowsPerPage;
    const endIndex = startIndex + props.rowsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    useEffect(() => {
        setCols(props.cols)
        setData(props.data)
    }, [props])

    const handleEditingData = () => {
        const updatedData = data.map((item, i) => {
            if (i == editingData[0].index) {
                const updatedItem = { ...item };

                props.editField.forEach((field, index) => {
                    updatedItem[field] = fieldRefs.current[index].type == 'checkbox' ? fieldRefs.current[index].checked ? 'Yes' : 'No' : fieldRefs.current[index].value;
                });
                return updatedItem;
            }
            return item;
        });

        setData(updatedData);
        closeModal();
    };


    // Modal Codes

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = (rowData) => {
        setEditingData([rowData])
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    // Modal Codes

    return (
        <>
            <div className={`${props.theme} table-holder`}>
                <table>
                    <thead className="tableRowHeader">
                        <tr className="head-row">
                            {
                                cols.map((col) => (
                                    <th className="tableHeader">{col}</th>
                                ))
                            }
                            <th className="tableHeader">operation</th>
                            {/* {props.deleteButton && <th>peration</th>} */}
                            {/* {props.editButton && <th>peration</th>} */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentData.map((d, index) => (
                                <tr key={index} className="tableRowItems">
                                    {
                                        cols.map((col) => (
                                            <td className="tableCell">{d[col]}</td>
                                        ))
                                    }
                                    <td className="buttonWrapper">
                                        {props.deleteButton &&
                                            <FaTrash className="delete-btn icon" onClick={() => {
                                                const newData = [...data.slice(0, index), ...data.slice(index + 1)];
                                                setData(newData);
                                            }} />
                                        }
                                        {
                                            props.editButton &&
                                            <FaEdit className="table-btn icon" onClick={() => openModal({ ...d, index })} />
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="tableFooter">

                    {Array.from({ length: totalPages }, (_, index) => {
                        const pageNumber = index + 1;
                        if (
                            pageNumber == 1 ||
                            pageNumber == totalPages ||
                            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                        ) {
                            return (
                                <div
                                    className={`button ${pageNumber == currentPage ? 'activeButton' : 'inactiveButton'}`}
                                    onClick={() => handlePageChange(pageNumber)}
                                >
                                    {pageNumber}
                                </div>
                            )
                        } else if (
                            pageNumber == 2 ||
                            pageNumber == totalPages - 1
                        ) {
                            return (
                                <div className="dotButton">...</div>
                            )
                        }
                    })}

                </div>

                {modalIsOpen &&
                    <div className='modal'>
                        <div className="modal-background"></div>
                        <div className="modal-content">
                            <h2>Enter the field</h2>
                            <form>
                                {props.editField.map((field, index) => (
                                    editingData.map((item) => {
                                        if (item[field] == "Yes" || item[field] == "No") {
                                            return (
                                                <div >
                                                    <input
                                                        type="checkbox"
                                                        ref={(element) => fieldRefs.current[index] = element}
                                                        defaultChecked={item[field] == 'Yes' ? true : false}
                                                    />
                                                    <span>{field}</span>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <input
                                                    type="text"
                                                    ref={(element) => fieldRefs.current[index] = element}
                                                    className={field}
                                                    defaultValue={item[field]}
                                                />
                                            )
                                        }
                                    })
                                ))}
                                <div className="button-wrapper">
                                    <input type="button" className="custom-button ok-btn" value="Ok" onClick={handleEditingData} />
                                    <input type="button" className="custom-button cancel-btn" value="Cancel" onClick={closeModal} />
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default DataTable;