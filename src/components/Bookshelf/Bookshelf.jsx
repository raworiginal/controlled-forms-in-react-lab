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
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="title">Title: </label>
						<input
							type="text"
							name="title"
							id="title"
							value={newBook.title}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="author">Author:</label>
						<input
							type="text"
							name="author"
							id="author"
							value={newBook.author}
							onChange={handleInputChange}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
			<div className="bookCardsDiv">{/* Book cards will display here */}</div>
		</div>
	);
};

export default Bookshelf;
