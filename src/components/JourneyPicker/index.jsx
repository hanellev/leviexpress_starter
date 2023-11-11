import React, { useEffect, useState } from 'react';
import './style.css';

// Ve svém projektu již máte vytvořen základy komponenty s názvem JourneyPicker. Ta je součástí komponenty HomePage a zatím vrací pouze statické JSX. V tomto cvičení propojíme výběr měst a data se stavem komponenty.

// 1. V komponentě JourneyPicker si připravte funkci handleSubmit(event), která se bude volat při odeslání formuláře. Ošetřete, aby prohlížeč sám neodesílal formulář a zatím si ve funkci jen vypište do konzole text 'Odesílám formulář s cestou'.
// 2. Napojte funkci handleSubmit na událost submit ve formuláři. Ověřte v prohlížeči, že po kliknutí na Vyhledat spoj se v konzoli objeví výše uvedený text.
// 3. Pomocí useState si v komponentě připravte tři stavy: fromCity, toCity a date. Výchozí hodnotou bude ve všech třech případech prázdný řetězec '';
// 4. Napojte každý ze stavů na správý <select> tak, aby select zobrazoval vybraný stav a změna v selectu se promítla do stavu. Vytvoříte tedy dvoucestný databinding, kdy se např. stav fromCity bude promítat do value příslušného selectu, a při události onChange na selectu se nová hodnota zapíše do stavu fromCity. Obdobně i pro další dva selecty a stavy toCity a date.
// 5. Upravte funkci handleSubmit tak, aby do konzole vypsala všechny tři stavy. Vyzkoušejte, že výběrem stavu v selectu se změní stav – po kliknutí na tlačítko se do konzole vypíše změněný stav. Tím, že si dočasně změnít výchozí hodnotu v useState('') na některou z hodnot (atribut value) v <option> můžete ověřit, že funguje správně nastavení výchozího stavu selectu.
// 6. Commitněte změny.

export const JourneyPicker = ({ onJourneyChange }) => {
	const [fromCity, setFromCity] = useState('');
	const [toCity, setToCity] = useState('');
	const [date, setDate] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Odesílám formulář s cestou', { fromCity, toCity, date });
	};

	return (
		<div className="journey-picker container">
			<h2 className="journey-picker__head">Kam chcete jet?</h2>
			<div className="journey-picker__body">
				<form className="journey-picker__form" onSubmit={handleSubmit}>
					<label>
						<div className="journey-picker__label">Odkud:</div>
						<select
							value={fromCity}
							onChange={(e) => setFromCity(e.target.value)}
						>
							<option value="">Vyberte</option>
							<option value="mesto01">Město 01</option>
							<option value="mesto02">Město 02</option>
							<option value="mesto03">Město 03</option>
							<option value="mesto04">Město 04</option>
							<option value="mesto05">Město 05</option>
						</select>
					</label>
					<label>
						<div className="journey-picker__label">Kam:</div>
						<select value={toCity} onChange={(e) => setToCity(e.target.value)}>
							<option value="">Vyberte</option>
							<option value="mesto01">Město 01</option>
							<option value="mesto02">Město 02</option>
							<option value="mesto03">Město 03</option>
							<option value="mesto04">Město 04</option>
							<option value="mesto05">Město 05</option>
						</select>
					</label>
					<label>
						<div className="journey-picker__label">Datum:</div>
						<select value={date} onChange={(e) => setDate(e.target.value)}>
							<option value="">Vyberte</option>
							<option value="datum01">Datum 01</option>
							<option value="datum02">Datum 02</option>
							<option value="datum03">Datum 03</option>
							<option value="datum04">Datum 04</option>
							<option value="datum05">Datum 05</option>
						</select>
					</label>
					<div className="journey-picker__controls">
						<button className="btn" type="submit">
							Vyhledat spoj
						</button>
					</div>
				</form>
				<img className="journey-picker__map" src="/map.svg" />
			</div>
		</div>
	);
};
