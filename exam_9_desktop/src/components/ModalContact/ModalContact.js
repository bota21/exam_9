import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import CloseIcon from "@material-ui/icons/Close";
import "./ModalContact.css";

const ModalContact = ({
  title,
  img,
  phone,
  email,
  showModal,
  close,
  editContact,
  deleteContact,
}) => {
  return (
    <>
      <div className='modal' style={{ display: showModal }}>
        <CloseIcon onClick={close} />
        <div className='modal_wrapper'>
          <img src={img} alt={title} className='modal_img' />
          <div className='modal_wrapper_text'>
            <h3>{title}</h3>
            <div className='modal_email'>
              <AlternateEmailIcon />
              <a href='mailto:{{email}}'>{email}</a>
            </div>

            <div className='modal_phone'>
              <AddIcCallIcon />
              <a href='tel:{phone}'>{phone}</a>
            </div>
          </div>          
        </div>
        <div className='modal_buttons'>
            <button onClick={editContact}>Edit</button>
            <button onClick={deleteContact}>Delete</button>
          </div>
      </div>
    </>
  );
};
export default ModalContact;
