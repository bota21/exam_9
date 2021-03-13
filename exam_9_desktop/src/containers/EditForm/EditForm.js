import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  changeValue,
  hideButton,
  changeContact,
  closeModal,
} from "../../store/actions";
import imageNotFound from "../../assets/image-not-found.jpg";
import "./EditForm.css";
import { useHistory } from "react-router";

const EditForm = (props) => {
  const dispatch = useDispatch();
  const editData = useSelector((state) => state.editData);

  const id = props.match.params.id;
  useEffect(() => {
    dispatch(hideButton());
  }, [dispatch]);

  const changeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(changeValue({ ...editData, [name]: value }));
  };
  useEffect(() => {
    if (editData.img === "") {
      editData.img = { imageNotFound };
    }
  }, [editData.img, editData]);

  const submitForm = (e) => {
    e.preventDefault();
    if (
      editData.title !== "" &&
      editData.email !== "" &&
      editData.img !== "" &&
      editData.phone !== ""
    ) {
      dispatch(changeContact(id, editData));
      dispatch(closeModal());
      history.push("/contacts");
    }
  };
  const backToHome = () => {
    history.push("/contacts");
  };
  const history = useHistory();

  return (
    <Form onSubmit={submitForm}>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter name'
          name='name'
          onChange={changeInput}
          value={editData.name}
        />
      </Form.Group>

      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          name='email'
          onChange={changeInput}
          value={editData.email}
        />
      </Form.Group>

      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type='phone'
          placeholder='Enter phone'
          name='phone'
          onChange={changeInput}
          value={editData.phone}
        />
      </Form.Group>

      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Picture</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter picture'
          name='img'
          onChange={changeInput}
          value={editData.img}
        />
      </Form.Group>
      <div className='img_wrapper'>
        <img src={editData.img} alt='' className='form_image' />
      </div>

      <div className='form_buttons'>
        <Button type='submit' className='form_button'>
          Save
        </Button>
        <Button className='form_button' onClick={backToHome}>
          Back to contacts
        </Button>
      </div>
    </Form>
  );
};

export default EditForm;
