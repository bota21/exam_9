import { Route } from "react-router"
import ContactForm from "../ContactForm/ContactForm";
import Contacts from '../Contacts/Contacts';
import Layout from "../../components/Layout/Layout";
import EditForm from '../EditForm/EditForm';

const Main = () => {
    return <>
    <Layout>
    <Route path='/' exact component={Contacts}/>
    <Route path='/contacts' exact component={Contacts}/>
    <Route path='/contacts/add' component={ContactForm}/>
    <Route path='/contacts/:id/edit' component={EditForm}/>
    </Layout>
    
    </>
}

export default Main;