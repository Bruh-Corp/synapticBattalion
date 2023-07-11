<style>
    .clock {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 2px solid black;
    position: relative;
    margin-left: auto;
}
  
.clock .number {
    --rotation: 0;
    font-family: 'Mona Sans';
    font-weight: 900;
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    transform: rotate(var(--rotation));
    font-size: 1.5rem;
    color: white;
    text-shadow: black .001em .001em .4em;
}
  
.clock .number1 { --rotation: 30deg; }
.clock .number2 { --rotation: 60deg; }
.clock .number3 { --rotation: 90deg; }
.clock .number4 { --rotation: 120deg; }
.clock .number5 { --rotation: 150deg; }
.clock .number6 { --rotation: 180deg; }
.clock .number7 { --rotation: 210deg; }
.clock .number8 { --rotation: 240deg; }
.clock .number9 { --rotation: 270deg; }
.clock .number10 { --rotation: 300deg; }
.clock .number11 { --rotation: 330deg; }
  
.clock .hand {
    --rotation: 0;
    position: absolute;
    bottom: 50%;
    left: 50%;
    border: 1px solid white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transform-origin: bottom;
    z-index: 10;
    transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg));
}
  
.clock::after {
    content: '';
    position: absolute;
    background-color: black;
    z-index: 11;
    width: 15px;
    height: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
}
  
.clock .hand.second {
    width: 3px;
    height: 45%;
    background-color: red;
}
  
.clock .hand.minute {
    width: 7px;
    height: 40%;
    background-color: black;
}
  
.clock .hand.hour {
    width: 10px;
    height: 35%;
    background-color: black;
}
</style>

<div class="clock">
    <div class="hand hour" data-hour-hand></div>
    <div class="hand minute" data-minute-hand></div>
    <div class="hand second" data-second-hand></div>
    <div class="number number1">1</div>
    <div class="number number2">2</div>
    <div class="number number3">3</div>
    <div class="number number4">4</div>
    <div class="number number5">5</div>
    <div class="number number6">6</div>
    <div class="number number7">7</div>
    <div class="number number8">8</div>
    <div class="number number9">9</div>
    <div class="number number10">10</div>
    <div class="number number11">11</div>
    <div class="number number12">12</div>
</div>