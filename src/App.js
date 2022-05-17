import { Route, Routes } from 'react-router-dom';
import Overview from './Components/Overview/Overview';
import TicketsPage from './Components/TicketsPage/TicketsPage';

function App() {
	return (
		<div>

			<Routes>
				<Route path='/' element={<Overview/>} />
				<Route path='/overview' element={<Overview/>} />
				<Route path='/ticketspage' element={<TicketsPage/>}/>
			</Routes>
			
		</div>
	);
}

export default App;
