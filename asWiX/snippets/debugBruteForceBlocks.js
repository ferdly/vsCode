//dox WiX 'brute force', but relatively elegant debug 
//scenario for WiX or other 'black-box' situations 

//<devel Instantiate>
let devel = true;
// devel = false;// ! uncomment to turn Devel Off
let devReturnObject = {};
devReturnObject.devMessage = 'holder';
devReturnObject.devMessageArray = [];
let devMessage = '~LINE 21||Instantiated';
if(devel === true){
    devMessage = '~LINE 21||Instantiated';
    devReturnObject.devMessageArray.push(devMessage);
    devReturnObject.paramObject = paramObject;
    devReturnObject.devBoolean = false;
    // devel = false;
    // return devReturnObject;
}

//<devel Call Instances>

//<devel Step> (no return)
if(devel === true){
    devMessage =  "~LINE 42|| doxKeyElement)";
    devReturnObject.devMessage = devMessage;
    devReturnObject.devMessageArray.push(devMessage);
    devReturnObject.element = doxKeyElement;
    // devel = false;
    // return devReturnObject;
}
//</devel Step>

//<devel Step> (no return continue without calling any following Steps)
if(devel === true){
    devMessage =  "~LINE 74|| instantiate new object)";
    devReturnObject.devMessage = devMessage;
    devReturnObject.devMessageArray.push(devMessage);
    devReturnObject.element = doxKeyElement;
    devel = false;// ! uncommented prevents calling any following Steps
    // return devReturnObject;
}
//</devel Step>

//<devel Step>  (return the entire develReturnObject)
if(devel === true){
    devReturnObject.devBoolean = paramObject.chkbxKeyArray.includes('company');
    devMessage =  devReturnObject.devBoolean ? 'TTRUE' : 'FFALSE';
    devMessage =  "~LINE 186|| paramObject.chkbxKeyArray 'company' " + devMessage;
    devReturnObject.devMessage = devMessage;
    devReturnObject.devMessageArray.push(devMessage);
    devReturnObject.element = element;
    devel = false;// ! the 'return' below makes this moot
    return devReturnObject;
}//</devel Step>

//</devel Call Instances>

