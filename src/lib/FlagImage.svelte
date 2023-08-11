<script>
    export let ccode;
    let flagsrc = "/flags/" + ccode + ".svg"
</script>

<img src={flagsrc} alt="flag"/>

<style>
    img {
        width: 200px;
    }
</style>