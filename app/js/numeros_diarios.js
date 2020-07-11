// COMO MUDAR OS NUMEROS EM UM DETERMINADO TEMPO = 24horas
// 
// 
// Will return a joke id between the min and max values. Once the joke ID has 
// been generated for the day, it is persisted in a cookie until midnight.
function getJokeId(minId, maxId) {
    var jokeId = getCookie('joke');

    if (jokeId !== null) {
        return jokeId;
    }

    var expire = new Date();
    var number = [];
    expire.setHours(23, 59, 59, 0);
    for (var i = 0; i < 6; i++) {
        jokeId = Math.floor(Math.random() * (maxId - minId + 1) + minId);
        number.push(jokeId);
    }

    document.cookie = 'joke=' + number + ';expires=' + expire.toGMTString() + ';path=/';

    return number;
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");

    if (parts.length == 2) {
        console.log('Found joke ID from cookie');
        return parts.pop().split(";").shift();
    }

    console.log('No joke ID found - new one needed');
    return null;
}

getJokeId(0, 60);



// um outro jeito de tentar recuperar os valores do cookie //
//////////////////// The getCookie() function ////////////////

<script type="text/javascript">

    function getCookie(name)
  {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }

</script>

    // To display the value of a cookie called 'joke' we simply use the following:

    <script type="text/javascript">
        document.write(getCookie("joke"));
</script>

