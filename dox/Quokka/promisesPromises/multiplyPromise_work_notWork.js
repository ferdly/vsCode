/**
 * <Does NOT Work>
 * ø all console.log()'s work
 * ø the result is accurate
 * ø BUT the product is not put in the $w('#product') element
 */
export function btnMultiply_click(event) {
    let operand1 = $w('#operand1').value;
	console.log('operand1: ' + operand1 + '|' + $w('#operand1').value);
	let operand2 = $w('#operand2').value;
	console.log('operand2: ' + operand2 + '|' + $w('#operand2').value);
	let product = multiply(operand1,operand2)
    .then(result => {
        console.log(operand1 + ' * ' + operand2 + ' = ' + result);
		return result;
    });
	$w('#product').value = product;
    
}
//</Does NOT Work>

/**
 * <Does Work>
 * ø all console.log()'s work
 * ø the result is accurate
 * ø AND the product is put in the $w('#product') element
 * ø     ↪ but the 'result' can't be passed outside?  
 */
 export function btnMultiply_click(event) {
	let operand1 = $w('#operand1').value;
	console.log('operand1: ' + operand1 + '|' + $w('#operand1').value);
	let operand2 = $w('#operand2').value;
	console.log('operand2: ' + operand2 + '|' + $w('#operand2').value);
	let product = multiply(operand1,operand2)
		.then(result => {
		console.log(operand1 + ' * ' + operand2 + ' = ' + result);
		$w('#product').value = result;
		return result;
		});

}//</Does NOT Work>
