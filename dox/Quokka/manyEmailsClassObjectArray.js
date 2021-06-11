//<Classes>
// emailThis = new EmailObject(emailParentPrimary, "Primary Parent", parentFirst );
class EmailObject {
    constructor (email, role, who, kind, usage) {
        this.email = email.trim();
        this.role = role.trim();
        this.who = who.trim();
        this.kind = kind ?? "home";
        this.usage = usage ?? "Personal";
    };
}
//</Classes>

let parentFirst = "Marais";
let parentLast = "Davis";
let emailParentPrimary = 'bradlowry+marais@gmail.com   ';
let phoneParentPrimary = '218!310*5+1$5#3';
let parentFirstSecondary = "Chester"
let parentLastSecondary = "Davis"
let emailParentSecondary = '   bradlowry+chester@gmail.com';
let phoneParentSecondary = '2+&1%^8.595(0499)';

const emails = [];
let emailThis = new EmailObject(emailParentPrimary, "Primary Parent", parentFirst);
console.log(emailThis);
console.log(emailThis.role);
emails.push(emailThis);
if (emailParentSecondary.trim().length > 0) {
    emailThis = new EmailObject(emailParentSecondary, "Family", parentFirstSecondary);
    console.log(emailThis);
    emails.push(emailThis);
}
console.log(emails);
