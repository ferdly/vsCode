//! Overall:
//! • leading spaces don't matter (including for '//')
//! • lowercase/UPPERCASE does matter for sybols
//! • lowercase/UPPERCASE doesn't matter for letters
//! • you need to quit for changes to go into effect
//! • sometimes you can type faster than the extension can modify your text
//! • it takes the first character/symbol 'tag' and runs with it, hence the bullets here aren't indicating 'Done'
//!     also, TODO works, but any fewer characters don't
//!     also, (my attempt) to distinguis between Q, A, QAQ and QAA didin't work
//!     weird exception, using '////' with 'A' or 'Q' after pushes it to 'A' or 'Q'
//!     above hasn't been fully tested at this time
//! • 'TODO' obviates 'ToDo Highlighter' extension (could add 'FIXME' if you liked)

//plain
// plain

//// really comment this out
// // really comment this out
/**
 * // really comment this out
 */

// ! Important
/**
 * ! Important
 */

// @doxygen(same as opening/closing tags for now) (because of doxygen, expected no space between '@' and tag)
/**
 * @doxygen(?)
 */

// ? defualt question
/**
 * ? default question
 */
// Q alt for Questions (bold)
// A Answer (to, presumably the question above it) (italics)
/**
 * Q alt for Questions (bold)
 * A Answer (to, presumably the question above it) (italics)
 */

//// to disable Q alt for Questions (bold) (see above)
//// to disable A Answer (to, presumably question above it) (italics) (see above)
/**
 * // to disable Q alt for Questions (bold) (see above)
 * //to disable A Answer (to, presumably question above it) (italics) (see above)
 */

//TODO obviously ToDo, but THIS obviates the ToDo Highlighter Extension
/**
 * TODO obviously ToDo, but THIS obviates the ToDo Highlighter Extension
 */
//TOD doesn't work (properly)
//TO doesn't work (properly)
//T doesn't work (properly)
// ø the symbol for ToDo
// • the symbol for Completed (ToDo Done)
/**
 * ø the symbol for ToDo
 * • the symbol for Completed (ToDo Done)
 */
//<opening tag>
//</closing tag> (really the same, but this is the use case)
/**
 * <opening tag>
 * ! alternative so that you have an extensive opneing tag expression 
 * ! (although this coiuld be right under the one above)
 */

