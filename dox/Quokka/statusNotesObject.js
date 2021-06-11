class StatusNoteObject {
    constructor (status, note) {
        this.status = status;
        this.note = note;

        let date = new Date ();
        // console.log(date);
        // this.MDYdate =  date.toString()
        this.ISOdate = date.toISOString().replace(/[^0-9]/g,'');
    };
}
class statusNoteObjectArray {
    constructor (){
        this.array = this.array ?? [];
    }
    newStatus (status, note) {
        let element = new StatusNoteObject(status, note)
        this.array = this.array ?? [];
        this.array.push(element)
    }
}


let status = "PENDING";
let note = "instantiate Status-Note Object";
// let statusNotesArray = new statusNoteObjectArray();
// statusNotesArray.newSstatus

let thisStatusNote = new StatusNoteObject();
// thisStatusNote = thisStatusNote.newStatus(status, note);
console.log(thisStatusNote);

