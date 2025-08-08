import { useState } from "react";

const Bookshelf = () => {
	const [books, setbooks] = useState([
		{ title: "Dungeon Crawler Carl", author: "Matt Dinniman" },
		{ title: "The Parable of The Sower", author: "Octavia Butler" },
	]);

	const [newBook, setNewBook] = useState({
		title: "",
		author: "",
	});

	const handleInputChange = (event) => {
		setNewBook({
			...newBook,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setbooks(...books, newBook);
		setNewBook({
			title: "",
			author: "",
		});
	};

	return (
		<div className="bookshelfDiv">
			<div className="formDiv">
				<h3>Add a Book</h3>
				{/* Form will go here */}
			</div>
			<div className="bookCardsDiv">{/* Book cards will display here */}</div>
		</div>
	);
};

export default Bookshelf;
