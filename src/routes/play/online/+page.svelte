<script lang="ts">
    import { goto } from '$app/navigation';

    let value:string;

    const handleSubmit = () => {
        
        if(value.toString().length === 6) {
            goto('/play/online/'+value);
        }
    }
</script>

<div class="content">
	<h2>Online Play</h2>
    <p>1v1 your friends</p>
    <hr/>
	<form on:submit|preventDefault={handleSubmit}>
		<fieldset role="group">
			<input type="number" placeholder="Enter 6 digit lobby code..." bind:value={value}/>
            <button type="submit">Next</button>
		</fieldset>
        <h3>or</h3>
        <button>Create Lobby</button>
	</form>
</div>
