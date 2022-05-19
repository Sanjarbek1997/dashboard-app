import { Route, Routes } from 'react-router-dom';
import Overview from './Components/Overview/Overview';
import TicketsPage from './Components/TicketsPage/TicketsPage';
import Agents from './Pages/Agents';
import Articles from './Pages/Articles';
import Contacts from './Pages/Contacts';
import Ideas from './Pages/Ideas';
import Settings from './Pages/Settings';
import Subscriptions from './Pages/Subscription';

function App() {
	return (
		<div>

			<Routes>
				<Route path='/' element={<Overview/>} />
				
				<Route path='/ticketspage' element={<TicketsPage/>}/>
				<Route path='/ideas' element={<Ideas/>}/>
				<Route path='/contacts' element={<Contacts/>}/>
				<Route path='/agents' element={<Agents/>}/>
				<Route path='/articles' element={<Articles/>}/>
				<Route path='/settings' element={<Settings/>}/>
				<Route path='/subscription' element={<Subscriptions/>}/>
			</Routes>
			
		</div>
	);
}

export default App;
