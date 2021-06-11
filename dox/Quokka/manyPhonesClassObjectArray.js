//<Classes>
const PhoneObject = function (phone, role, who, kind, usage) {
// const PhoneObject = function (phone, role, who) {
    phone = phone.replace(/[^0-9]/g, '');
    this.phone = "(" + phone.substr(0, 3) + ") "
        + phone.substr(3, 3) + "-"
        + phone.substr(-4);
    this.role = role.trim();
    this.who = who.trim();
    this.kind = kind ?? "cell";
    this.usage = usage ?? "Personal";
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

const phones = [];
if (phoneParentPrimary.length > 0) {
    phoneThis = new PhoneObject(phoneParentPrimary, "Primary Parent", parentFirst);
    phones.push(phoneThis);
}
if (phoneParentSecondary.length > 0) {
    phoneThis = new PhoneObject(phoneParentSecondary, "Secondary Parent", parentFirstSecondary);
    phones.push(phoneThis);
}
console.log(phones);
