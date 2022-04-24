import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AddMovie({ AddMovie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <label htmlFor="">movie title</label>
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <label htmlFor="">movie description</label>
        <input
          type="text"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
        <label htmlFor="">movie url</label>
        <input
          type="text"
          onChange={(event) => setUrl(event.target.value)}
          value={url}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => AddMovie({ title, url, description })}
          ></Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddMovie;