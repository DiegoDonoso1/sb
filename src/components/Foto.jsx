import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon, ArrowIconLeft } from './ArrowIcon';
import sabri from '../assets/img/sabriIlustrada.jpg';
import ilustracion from '../assets/img/ilustracion.jpg';
import otaku from '../assets/img/otaku.jpg';
import poligonos from '../assets/img/poligonos.jpg';
import terrorifica from '../assets/img/terrorifica.jpg';
import abstracta from '../assets/img/abstracta.jpg';
import rara from '../assets/img/rara.jpg';
import taylor from '../assets/img/taylor.jpg';

export default function Foto() {
	const [revealEffect, setRevealEffect] = useState(false);
	const [selectedEffect, setSelectedEffect] = useState('ilustracion');

	const handleRevealClick = () => {
		setRevealEffect(true);
	};

	const images = {
		ilustracion: ilustracion,
		otaku: otaku,
		poligonos: poligonos,
		terrorifica: terrorifica,
		abstracta: abstracta,
		rara: rara,
		taylor: taylor,
	};

	return (
		<div className="relative p-10 bg-e6fffd z-0">
			<svg width="1200" height="820" viewBox="-20 -20 1240 860">
				<rect
					x="20"
					y="20"
					width="1200"
					height="800"
					fill="#f3e8ff"
					rx="30"
					ry="30"
					filter="url(#shadow)"
				/>

				{/* Líneas de la hoja */}
				{[...Array(40)].map((_, i) => (
					<line
						key={i}
						x1="20"
						y1={20 + i * 20}
						x2="1220"
						y2={20 + i * 20}
						stroke="#e6fffd"
						strokeWidth="1"
					/>
				))}

				<defs>
					<filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
						<feGaussianBlur in="SourceAlpha" stdDeviation="5" />
						<feOffset dx="5" dy="5" result="offsetblur" />
						<feComponentTransfer>
							<feFuncA type="linear" slope="0.5" />
						</feComponentTransfer>
						<feMerge>
							<feMergeNode />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>

				{/* Título del Poema */}
				<foreignObject x="20" y="20" width="1200" height="50">
					<div
						xmlns="http://www.w3.org/1999/xhtml"
						style={{
							fontSize: '32px',
							fontWeight: 'bold',
							color: '#FFA07A', // Letras moradas
							fontFamily: '"Sacramento", cursive',
							textAlign: 'center',
							lineHeight: '1.5em',
							padding: '10px',
							animation: 'fadeIn 2s',
						}}
					>
						Sabris de otros universos
					</div>
				</foreignObject>

				{/* Tarjeta de Imagen Original */}
				<foreignObject x="200" y="150" width="400" height="500">
					<div className="border-4 border-noseHover rounded-lg overflow-hidden shadow-md">
						<img src={sabri} alt="Original" className=" object-contain" />
					</div>
				</foreignObject>

				{/* Tarjeta de Imagen con Efecto */}
				<foreignObject x="650" y="150" width="400" height="500">
					<div className="border-4 border-noseHover rounded-lg overflow-hidden shadow-md">
						{revealEffect ? (
							<img
								src={images[selectedEffect]}
								alt="Con Efecto"
								className="w-full h-full object-cover"
							/>
						) : (
							<div className="flex items-center justify-center h-full bg-f3e8ff text-7e3aa8 font-bold text-xl">
								Haz clic para revelar
							</div>
						)}
					</div>
				</foreignObject>

				{/* Selector de Efectos */}
				<foreignObject x="450" y="680" width="400" height="40">
					<select
						value={selectedEffect}
						onChange={(e) => setSelectedEffect(e.target.value)}
						onBlur={() => setRevealEffect(false)} // Restablecer enfoque cuando se selecciona una opción
						className="w-full p-2 border-2 border-noseHover rounded-md bg-f3e8ff text-7e3aa8 shadow-sm focus:border-morado focus:ring-1 focus:ring-morado focus:outline-none transition-colors duration-300"
						style={{
							color: '#7e3aa8', // Color de texto para opciones no seleccionadas
							backgroundColor: '#f3e8ff', // Color de fondo para opciones no seleccionadas
						}}
					>
						<option value="ilustracion">Ilustración</option>
						<option value="otaku">Anime</option>
						<option value="poligonos">Poligonos</option>
						<option value="terrorifica">Terrorifica</option>
						<option value="abstracta">Abstracta</option>
						<option value="rara">Sabri nose</option>
						<option value="taylor">taylor valenzuela</option>
					</select>
				</foreignObject>

				{/* Botón de Revelar */}
				<foreignObject x="450" y="730" width="400" height="50">
					<button
						onClick={handleRevealClick}
						className="w-full bg-noseFondo text-white hover:bg-noseHover px-6 py-2 rounded transition-colors duration-300 shadow-md border-2 border-noseHover"
					>
						¡Revelar Efecto!
					</button>
				</foreignObject>

				{/* Flecha izquierda */}
				<foreignObject x="40" y="370" width="100" height="200">
					<Link to="/sabri">
						<ArrowIconLeft />
					</Link>
				</foreignObject>
				{/* Flecha derecha */}
				<foreignObject x="1150" y="370" width="100" height="200">
					<Link to="/poema">
						<ArrowIcon />
					</Link>
				</foreignObject>
			</svg>
		</div>
	);
}
