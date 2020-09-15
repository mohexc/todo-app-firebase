import { Button, Modal } from '@material-ui/core'
import React, { useImperativeHandle, useState } from 'react'


const EditModal = (prop, ref) => {
    const [visble, setVisble] = useState(false)
    const [record, setRecord] = useState()

    useImperativeHandle(ref, () => ({
        showModal: (data) => {
            setRecord(data)
            setVisble(true)

        }
    })

    )
    return (
        <Modal
            open={visble}
            onClose={() => setVisble(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div>
                <p>{JSON.stringify(record)}</p>
                <Button variant="contained" color="primary" onClick={() => setVisble(false)}>Close</Button>
            </div>
        </Modal>
    )
}

export default React.forwardRef(EditModal)
