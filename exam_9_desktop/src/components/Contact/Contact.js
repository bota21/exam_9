import "./Contact.css";

const Contact = ({ image, title, click, id }) => {
  return (
    <div className='contact_wrapper' onClick={() => click(id)}>
      <img src={image} alt={title} className='contact_image' />
      <h4 className='contact_title'>{title}</h4>
    </div>
  );
};

export default Contact;
