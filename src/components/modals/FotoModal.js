import React, { useContext } from 'react';
import { Container, Image } from "react-bootstrap";
import { REACT_APP_API_URL } from '../../utils/consts';
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

const FotoModal = observer(({ show, onHide }) => {
    const { foto } = useContext(Context)

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            style={{ background: 'Orchid' }} >

            <Modal.Body style={{ background: 'CornflowerBlue' }}>
                <Container className="mt-3">
                    <Image style={{ objectFit: 'contain' }} width={450} height={500} 
    src={REACT_APP_API_URL + foto.selectedFoto.img||process.env.REACT_APP_API_URL + foto.selectedFoto.img} />
                </Container>
            </Modal.Body>
            <Modal.Footer style={{ background: 'CornflowerBlue' }}>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
            </Modal.Footer>
        </Modal>
    );
}
)
export default FotoModal;
