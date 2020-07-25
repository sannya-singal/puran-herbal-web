import React, { useState } from 'react';
import { Base } from './components/base';
import { StoreContext } from './store';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	const [store, setStore] = useState({});

	return (
		<StoreContext.Provider value={{ store, setStore }}>
			<Router>
				<Base />
			</Router>
		</StoreContext.Provider>
	);
}

export default App;
