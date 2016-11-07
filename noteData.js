import { AsyncStorage } from 'react-native';

const STORAGE_KEY = "Notes:key";
var notes = [];

export default class NoteData {
	static loadNotes() {
		var promise = AsyncStorage.getItem(STORAGE_KEY);
		promise.then((result) => {
			notes = JSON.parse(result);
		});
		return promise;
	}

	static getNotes() {
		return notes;
	}

	static addNote(note) {
		notes.push(note);
		NoteData.saveNotes();
	}

	static removeNote(note) {
		var index = notes.indexOf(note);
		//console.log(index);
		notes.splice(index, 1);
		NoteData.saveNotes();
	}

	static saveNotes() {
		AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
	}
}
