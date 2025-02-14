import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { ContactList } from "./views/contactList";
import injectContext from "./store/appContext";
import { AddContacts } from "./views/addContacts";
import { CreateSlug } from "./views/createSlug";
import { Modal } from "./views/editContactsModal";
import { DeleteContactModal } from "./views/deleteContactModal";
import { SingleContact } from "./views/singleContact";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/contactList" element={<ContactList />} />
						<Route path="/editContactsModal/:id" element={<Modal />} />
						<Route path="/addContacts" element={<AddContacts />} />
						<Route path="/deleteContactModal" element={<DeleteContactModal />} />
						<Route path="/createSlug" element={<CreateSlug />} />
						<Route path="/singleContact/:contactId" element={<SingleContact />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
