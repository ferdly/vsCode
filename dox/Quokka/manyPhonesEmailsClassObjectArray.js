//manyPhonesEmailsObjectArray.js
//<Classes>
// emailThis = new EmailObject(emailParentPrimary, "Primary Parent", parentFirst );
class EmailObject {
    constuctor (email, role, who, kind, usage) {
        this.email = email.trim();
        this.role = role.trim();
        this.who = who.trim();
        this.kind = kind ?? "home";
        this.usage = usage ?? "Personal";
    };
    // getEmailObject(){
    //     return JSON.stringify(this, undefined, 4);
    // }
}
// phoneThis = new PhoneObject(phoneParentPrimary, "Primary Parent", parentFirst);
// const PhoneObject = function (phone, role, who, kind = "cell", usage = "Personal") {
const PhoneObject = function (phone, role, who) {
    phone = phone.replace(/[^0-9]/g, '');
    this.phone = "(" + phone.substr(0, 3) + ") "
        + phone.substr(3, 3) + "-"
        + phone.substr(-4);
    this.role = role.trim();
    this.who = who.trim();
    this.kind = kind;
    this.usage = usage;
};
//</Classes>

let parentFirst = "Marais";
let parentLast = "Davis";
let emailParentPrimary = 'bradlowry+marais@gmail.com   ';
let phoneParentPrimary = '218!310*5+1$5#3';
let parentFirstSecondary = "Chester"
let parentLastSecondary = "Davis"
let emailParentSecondary = '   bradlowry+chester@gmail.com';
let phoneParentSecondary = '2+&1%^8.595(0499)';

//<prep>
/**
 * Now this is done within the
 * phoneParentPrimary = phoneParentPrimary.replace(/[^0-9]/g, '');
 * console.log(phoneParentPrimary)
 * phoneParentSecondary = phoneParentSecondary.replace(/[^0-9]/g, '');
 * console.log(phoneParentSecondary)
 */
//</prep>

const emails = [];
let emailThis = new EmailObject(emailParentPrimary, "Primary Parent", parentFirst);
// console.log(emailThis.getEmailObject);
console.log(emailThis.role);
emails.push(emailThis);
// if (emailParentSecondary.trim().length > 0) {
//     emailThis = new EmailObject(emailParentPrimary, "Primary Parent", parentFirst);
//     // emails.push(JSON.parse(JSON.stringify(emailThis)));
//     emails.push(emailThis);
// }
console.log(emails);

// const phones = [];
// if (phoneParentPrimary.length > 0) {
//     phoneThis = new PhoneObject(phoneParentPrimary, "Primary Parent", parentFirst);
//     // phones.push(JSON.parse(JSON.stringify(phoneThis)));
//     phones.push(phoneThis);
// }
// if (phoneParentSecondary.length > 0) {
//     phoneThis = new PhoneObject(phoneParentSecondary, "Secondary Parent", parentFirstSecondary);
//     // phones.push(JSON.parse(JSON.stringify(phoneThis)));
//     phones.push(phoneThis);
// }
// console.log(phones);
