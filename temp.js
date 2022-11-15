const days = document.getElementById('dias')
 const hours = document.getElementById('horas')
 const minutes = document.getElementById('minutos')
 const seconds = document.getElementById('segundos')

 //fecha-de-salida
  const countdownDate = new Date('may 5, 2023 00:00:00').getTime();
  

let interval = setInterval(function(){
     const now = new Date().getTime();

     let distance = countdownDate - now;

     let $days = Math.floor (distance / (1000 * 60 * 60 * 24));
     let $hours = Math.floor ((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     let $minutes = Math.floor ((distance % (1000 * 60 * 60 )) / (1000 * 60));
     let $seconds = Math.floor ((distance % (1000 * 60 )) / (1000));

     //resultados
     days.innerHTML = $days;
     hours.innerHTML = $hours;
     minutes.innerHTML = $minutes;
     seconds.innerHTML = ('0'+ $seconds).slice(-2);
    if(distance <0){
         alert(" el juego ya salio, ahora vende tu riñon para comprarlo ¯\_(ツ)_/¯ ")
    }
},1000);
