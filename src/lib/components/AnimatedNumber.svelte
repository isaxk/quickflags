<script>

    export let format;

	export let number;
	export let delay = 200;

	let displayedNumber = 0;
    let calculatedNumber = 0;

	function incrementNumber() {
        calculatedNumber += number / 101;
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
		}
		window.setTimeout(incrementNumber, number/3000);
	}

	window.setTimeout(incrementNumber, delay);
</script>

<span>{displayedNumber}</span>



<style>
    span {
        font-family: 'PT Mono', monospace;
    }
</style>