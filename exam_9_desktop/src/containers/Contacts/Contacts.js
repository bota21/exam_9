import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../../components/Contact/Contact";
import Spinner from "../../components/UI/Spinner/Spinner";
import "./Contacts.css";
import {
  fetchContacts,
  fetchModal,
  openModal,
  closeModal,
  removeContact,
  changeValueContact,
} from "../../store/actions";
import ModalContact from "../../components/ModalContact/ModalContact";

const Contacts = (props) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const loading = useSelector((state) => state.loading);
  const editData = useSelector((state) => state.editData);
  const showModal = useSelector((state) => state.showModal);

  const [contactId, setContactId] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const clicked = (id) => {
    setContactId(id);
    dispatch(openModal());
  };
  const shutUpModal = () => {
    dispatch(closeModal());
  };
  console.log(editData);

  useEffect(() => {
    dispatch(fetchModal(contactId));
  }, [dispatch, contactId]);

  const deleteContact = () => {
    dispatch(removeContact(contactId));
  };

  const goToEditContact = () => {
    props.history.push("/contacts/" + contactId + "/edit");
  };

  const renderContacts = contacts.map((item) => {
    return (
      <Contact
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        click={clicked}
      />
    );
  });

  return (
    <div className='contacts'>
      <Spinner open={loading} />
      {renderContacts}
      <ModalContact
        showModal={showModal}
        title={editData.name}
        email={editData.email}
        phone={editData.phone}
        img={editData.img}
        close={shutUpModal}
        deleteContact={deleteContact}
        editContact={goToEditContact}
      />
    </div>
  );
};

export default Contacts;
