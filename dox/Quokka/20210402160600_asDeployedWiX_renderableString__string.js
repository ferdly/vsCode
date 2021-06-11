export function renderableString(string) {
    let renderableStringLength = -777777;
    let thisType = typeof string;
    switch (thisType) {
        case 'number':
            renderableStringLength = -7;
            break;
        case 'object':
            renderableStringLength = -99999;
            break;

        default:
            if(string === null){
                renderableStringLength =  -777;
            } else if (string.length === 0){
                renderableStringLength =  -77;
            } else {
                renderableStringLength =  string.length;
            }
            break;
    }
    return renderableStringLength;
}
