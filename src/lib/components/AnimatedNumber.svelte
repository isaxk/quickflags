<script>

    export let format;

	export let number;
	export let delay = 200;

	let displayedNumber = 0;
    let calculatedNumber = 0;

    function minimate(min, val) {
        if(min >= val) {
            return min;
        }
        else {
            return val;
        }
    }


	function incrementNumber() {
        calculatedNumber += minimate(1, number / 101);
        if(format) {
            displayedNumber = format.format(calculatedNumber);
        }
        else {
            displayedNumber = calculatedNumber;
        }
		if (calculatedNumber >= number) {
			if(format) {
            displayedNumber = format.format(number);
        }
        else {
            displayedNumber = number;
        }
			return;
            // test
		}
		window.setTimeout(incrementNumber, minimate(15, number/3000));
	}

	window.setTimeout(incrementNumber, delay);
</script>

<span>{displayedNumber}</span>



<style>
    span {
        font-family: 'PT Mono', monospace;
    }
</style>