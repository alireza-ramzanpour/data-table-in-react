import React, { useEffect, useRef, useState } from "react";
import Modal from 'react-modal';
import "../assets/css/style.css"


function DataTable(props) {

    const [cols, setCols] = useState([])
    const [data, setData] = useState([])
    const [editingData, setEditingData] = useState([]);
    const fieldRefs = useRef([])

    useEffect(() => {
        setCols(props.cols)
        setData(props.data)
    }, [props])


    const handleEditingData = () => {
        const updatedItem = { ...editingData[0] }
        props.editField.forEach((field, index) => {
            updatedItem[field] = fieldRefs.current[index].value;
        });

        const updatedData = data.map((item, i) => {
            if (i == updatedItem.index) {
                return updatedItem
            }
            return item
        });

        setData(updatedData)
        closeModal()
    };


    // Modal Codes

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = (rowData) => {
        setEditingData([rowData]);
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const customStyles = {
        content: {
            width: '300px',
            height: '200px',
            marginTop: '20vh',
            marginRight: 'auto',
            marginLeft: 'auto',
            backgroundColor: '#e8e8e8',
            boxShadow: '0 5px 30px rgba(70, 72, 77, 0.08)',
        },
    };

    // Modal Codes

    return (
        <>
            <table className={props.theme}>
                <thead>
                    <tr className="head-row">
                        {
                            cols.map((col) => (
                                <th>{col}</th>
                            ))
                        }
                        {props.deleteButton && <th>Delete</th>}
                        {props.editButton && <th>Edit</th>}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d, index) => (
                            <tr key={index} className="content-row">
                                {
                                    cols.map((col) => (
                                        <td>{d[col]}</td>
                                    ))
                                }
                                {props.deleteButton &&
                                    <td>
                                        <input type="button" value='delete' className="delete-btn" onClick={() => {
                                            const newData = [...data.slice(0, index), ...data.slice(index + 1)];
                                            setData(newData);
                                        }} />
                                    </td>
                                }
                                {
                                    props.editButton &&
                                    <td>
                                        <input type="button" className="table-btn" value="edit" onClick={() => openModal({ ...d, index })} />
                                        <Modal
                                            isOpen={modalIsOpen}
                                            onRequestClose={closeModal}
                                            style={customStyles}
                                        >
                                            <div>Enter the field</div>

                                            <form>
                                                {
                                                    props.editField.map((field, index) => (
                                                        editingData.map((item) => (
                                                            <input
                                                                type="text"
                                                                ref={(element) => fieldRefs.current[index] = element}
                                                                className={field}
                                                                defaultValue={item[field]}
                                                            />
                                                        ))
                                                    ))
                                                }
                                                <div className="button-wrapper">
                                                    <input type="button" className="custom-button ok-btn" value="Ok" onClick={handleEditingData} />
                                                    <input type="button" className="custom-button cancel-btn" value="Cancel" onClick={closeModal} />
                                                </div>
                                            </form>
                                        </Modal>
                                    </td>
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </>
    )
}

export default DataTable;