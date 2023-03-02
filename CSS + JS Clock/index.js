const hoursHand = document.querySelector('[data-hour-hand]');
const minutesHand = document.querySelector('[data-minute-hand]');
const secondsHand = document.querySelector('[data-second-hand]');

function getTime(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeInterval = 6;

    secondsHand.style.transform = 'rotate(60deg)';
    

    
}
getTime();