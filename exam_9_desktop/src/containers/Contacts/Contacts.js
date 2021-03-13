import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../../components/Contact/Contact";
import Layout from "../../components/Layout/Layout";
import Spinner from "../../components/UI/Spinner";
import "./Contacts.css";
import { fetchContacts } from "../../store/actions";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  console.log(contacts)
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const renderContacts = contacts.map(item => {
    return <Contact key={item.title} image={item.image} title={item.title}/>
  })

  return (
    <div className='App'>
      <Spinner open={false} />
      <Layout>
        {renderContacts}
      </Layout>
    </div>
  );
};

export default Contacts;
