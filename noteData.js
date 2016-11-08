import { AsyncStorage } from 'react-native';

const STORAGE_KEY = "Notes:key";
var notes = [];

export class Note {
	constructor(noteText) {
		this.noteText = noteText;
	}

	toJSON() {
		return {
			noteText: this.noteText
		};
	}
}

export default class NoteData {
	static loadNotes() {
		var promise = AsyncStorage.getItem(STORAGE_KEY);
		promise.then((result) => {
			var loadedNotes = JSON.parse(result);
			notes = loadedNotes !== null ? loadedNotes : notes;
			console.log("Logging notes");
			console.log(notes);
		});
		return promise;
	}

	static getNotes() {
		return notes;
	}

	static addNote(note) {
		console.log(notes);
		notes.push(note);
		NoteData.saveNotes();
	}

	static removeNote(note) {
		var index = notes.indexOf(note);
		notes.splice(index, 1);
		NoteData.saveNotes();
	}

	static saveNotes() {
		AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
	}
}
