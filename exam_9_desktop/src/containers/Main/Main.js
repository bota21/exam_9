import { Route } from "react-router"
import ContactForm from "../ContactForm/ContactForm";
import Contacts from '../Contacts/Contacts';
import Layout from "../../components/Layout/Layout";

const Main = () => {
    return <>
    <Layout>
    <Route path='/' exact component={Contacts}/>
    <Route path='/contacts' exact component={Contacts}/>
    <Route path='/contacts/add' component={ContactForm}/>
    <Route path='/contacts/:id/edit' component={ContactForm}/>
    </Layout>
    
    </>
}

export default Main;