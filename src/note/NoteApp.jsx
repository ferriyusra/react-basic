import { NotesContext, NotesDispatchContext } from './NoteContext';
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

export default function NoteApp() {
	const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

	return (
		<div>
			<NotesContext.Provider value={notes}>
				<NotesDispatchContext.Provider value={dispatch}>
					<h1>Note App</h1>
					<NoteForm />
					<NoteList />
				</NotesDispatchContext.Provider>
			</NotesContext.Provider>
		</div>
	);
}
