class arrayOfNotes {
    constructor () {
        let element = {};
        element.status = "INSTANTIATE";
        element.kind = 'initializing element';
        element.note = 'instantiate';
        let date = new Date();
        element.MDYdate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
        element.ISOdate = date.toISOString().replace(/[^0-9]/g,'')
        this.array = [];
        this.array.push(element);
    };
    updateStatus (status, note){
        let element = {};
        let standardStatusValues = ["PENDING","ONHOLD","APPROVED","RESOLVED","REJECTED"]
        element.status = status;
        element.kind = standardStatusValues.includes(status) ? "status" : "custom status";
        if (this.status === "CUSTOM"){
            element.kind = status;
        }
        element.note = note;
        let date = new Date();
        element.MDYdate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
        element.ISOdate = date.toISOString().replace(/[^0-9]/g,'')
        this.array.unshift(element);
    };
    newNote (note){
        let element = {};
        element.status = "NOTE";
        element.note = note;
        element.kind = "note";
        let date = new Date();
        element.MDYdate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
        element.ISOdate = date.toISOString().replace(/[^0-9]/g,'')
        this.array.push(element);
    };
}
async function tickTock(){ 
    for (let index = 0; index < 10000; index++) {
        let twindex = 2 * index;
    }
    setTimeout(function(){ console.log("Tick-Tock"); }, 10000);
}

dogOne = "Chester";
let statusStatusOne = "PARENT";
let statusNoteOne = "waiting for phone call"
let noteNoteOne = "problem with wait list"
let noteNoteTwo = "broken leg, holding until doctor gives go-ahead"
let statusStatusTwo = "RESOLVED";
let statusNoteTwo = "may sign up for more later"
myStatusObject = new arrayOfNotes ();
console.log(myStatusObject)
tickTock();
myStatusObject.newNote(noteNoteOne);
console.log(myStatusObject)
tickTock();
myStatusObject.updateStatus(statusStatusOne, statusNoteOne);
console.log(myStatusObject)
tickTock();
myStatusObject.newNote(noteNoteTwo);
console.log(myStatusObject)
tickTock();
myStatusObject.updateStatus(statusStatusTwo, statusNoteTwo);
console.log(myStatusObject)