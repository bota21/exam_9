import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../../components/Contact/Contact";
import Spinner from "../../components/UI/Spinner/Spinner";
import "./Contacts.css";
import { fetchContacts } from "../../store/actions";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const renderContacts = contacts.map(item => {
    return <Contact key={item.title} image={item.image} title={item.title}/>
  })

  return (
    <div className='contacts'>
      <Spinner open={loading} />
        {renderContacts}
    </div>
  );
};

export default Contacts;
