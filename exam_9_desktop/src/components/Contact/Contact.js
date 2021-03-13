import "./Contact.css";

const Contact = ({ image, title }) => {
  return (
    <div className='contact_wrapper'>
      <img src={image} alt={title} className='contact_image' />
      <h4 className='contact_title'>{title}</h4>
    </div>
  );
};

export default Contact;
