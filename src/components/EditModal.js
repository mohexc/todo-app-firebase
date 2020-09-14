import { Modal } from '@material-ui/core'
import React, { useImperativeHandle, useState } from 'react'
import { Modal } from "@material-ui/core";

const EditModal = (prop, ref) => {
    const [visble, setVisble] = useState(false)

    useImperativeHandle(ref, () => ({
        showModal: () => {

        }
    })


    )
    return (
        <Modal>

        </Modal>
    )
}

export default React.forwardRef(EditModal)
