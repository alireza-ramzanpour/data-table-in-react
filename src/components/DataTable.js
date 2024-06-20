import React, { useEffect, useRef, useState } from "react";
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
                                    </td>
                                }
                            </tr>

                        ))

                    }
                </tbody>
            </table>
            {modalIsOpen &&
                <div className='modal'>
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
            }

        </>
    )
}

export default DataTable;