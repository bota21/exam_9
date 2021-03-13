import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { hideButton, postContacts } from "../../store/actions";
import imageNotFound from "../../assets/image-not-found.jpg";
import "./ContactForm.css";
import { useHistory } from "react-router";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    img: "",
  });

//   console.log(formData);

  useEffect(() => {
    dispatch(hideButton());
  }, [dispatch]);

  const changeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    if (formData.img === "") {
      formData.img = { imageNotFound };
    }
  }, [formData.img, formData]);

  const submitForm = (e) => {
    e.preventDefault();
    if (
      formData.title !== "" &&
      formData.email !== "" &&
      formData.img !== "" &&
      formData.phone !== ""
    ) {
      dispatch(postContacts(formData));
      history.push('/contacts');
    }
  };
  const backToHome = () => {
    history.push('/contacts');
  }
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
        />
      </Form.Group>

      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          name='email'
          onChange={changeInput}
        />
      </Form.Group>

      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type='phone'
          placeholder='Enter phone'
          name='phone'
          onChange={changeInput}
        />
      </Form.Group>

      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Picture</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter picture'
          name='img'
          onChange={changeInput}
        />
      </Form.Group>
      <div className='img_wrapper'>
        <img src={formData.img} alt='' className='form_image' />
      </div>

      <div className='form_buttons'>
        <Button type='submit' className='form_button'>
          Save
        </Button>
        <Button className='form_button' onClick={backToHome}>Back to contacts</Button>
      </div>
    </Form>
  );
};

export default ContactForm;
