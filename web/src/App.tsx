import './styles/global.css'
import {Header} from "./components/header";
import {SummaryTable} from "./components/SummaryTable";

// import {HabitDay} from "./components/HabitDay";

export function App() {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="w-full max-w-5xl px-6 flex-col gap-16">
				<Header/>
				<SummaryTable/>
			</div>
		</div>
	)
}