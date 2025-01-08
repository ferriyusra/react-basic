import NoteForm from './NoteForm';
import NoteList from './NoteList';
import { useImmerReducer } from 'use-immer';

let id = 0;
const initialNotes = [
	{
		id: id++,
		text: 'belajar react',
		done: false,
	},
	{
		id: id++,
		text: 'belajar vue',
		done: false,
	},
	{
		id: id++,
		text: 'belajar js',
		done: true,
	},
	{
		id: id++,
		text: 'belajar ts',
		done: false,
	},
];

function notesReducer(notes, action) {
	if (action.type === 'ADD_NOTE') {
		return [
			...notes,
			{
				id: id++,
				text: action.text,
				done: false,
			},
		];
	} else if (action.type === 'CHANGE_NOTE') {
		const index = notes.findIndex((note) => note.id === action.id);
		notes[index].text = action.text;
		notes[index].done = action.done;
	} else if (action.type === 'DELETE_NOTE') {
		const index = notes.findIndex((note) => note.id === action.id);
		notes.splice(index, 1);
	}
}

// without immer
// function notesReducer(notes, action) {
// 	switch (action.type) {
// 		case 'ADD_NOTE':
// 			return [
// 				...notes,
// 				{
// 					id: id++,
// 					text: action.text,
// 					done: false,
// 				},
// 			];
// 		case 'CHANGE_NOTE':
// 			return notes.map((note) =>
// 				note.id === action.id
// 					? { ...note, text: action.text, done: action.done }
// 					: note
// 			);
// 		case 'DELETE_NOTE':
// 			return notes.filter((note) => note.id != action.id);
// 		default:
// 			return notes;
// 	}
// }

export default function NoteApp() {
	// const [notes, setNotes] = useImmer(initialNotes); - without reducer
	// const [notes, dispatch] = useReducer(notesReducer, initialNotes); reducer
	const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

	function handleAddNote(text) {
		dispatch({
			type: 'ADD_NOTE',
			text: text,
		});
	}

	function handleChangeNote(note) {
		dispatch({
			type: 'CHANGE_NOTE',
			...note,
		});
	}

	function handleDeleteNote(note) {
		dispatch({
			type: 'DELETE_NOTE',
			id: note.id,
		});
	}

	// WITHOUT REDUCER
	// function handleAddNote(text) {
	// 	setNotes((draft) => {
	// 		draft.push({
	// 			id: id++,
	// 			text: text,
	// 			done: false,
	// 		});
	// 	});
	// }

	// function handleChangeNote(note) {
	// 	setNotes((draft) => {
	// 		const index = draft.findIndex((item) => item.id === note.id);
	// 		draft[index] = note;
	// 	});
	// }

	// function handleDeleteNote(note) {
	// 	setNotes((draft) => {
	// 		const index = draft.findIndex((item) => item.id === note.id);
	// 		draft.splice(index, 1);
	// 	});
	// }

	return (
		<div>
			<h1>Note App</h1>
			<NoteForm onAddNote={handleAddNote} />
			<NoteList
				notes={notes}
				onChange={handleChangeNote}
				onDelete={handleDeleteNote}
			/>
		</div>
	);
}
