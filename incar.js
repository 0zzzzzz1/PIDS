// get time -> 00:00
    function getCurrentTime() {
        let currentDate = new Date();
        let hours = currentDate.getHours().toString().padStart(2, '0');
        let minutes = currentDate.getMinutes().toString().padStart(2, '0');
        return hours + ':' + minutes;
    }
    
    // 時間初始化
    function updateTime() {
        let currentTime = getCurrentTime();
        let getUpdateTime = document.getElementsByClassName('now')[0];
        getUpdateTime.innerHTML = currentTime.replace(':', '<span class="blink">:</span>'); // 將 ':' 替換成 <span>
    }

    window.addEventListener('DOMContentLoaded', (event) => {
        updateTime();
        setInterval(updateTime, 1000); // 1 second
    });

// 取得 跑馬燈容器 寬度
    const getMarquee = document.getElementsByClassName("marquee")[0];
    const marqueeWidth = getMarquee.offsetWidth;
    // console.log(marqueeWidth);

// 列車到站時間
let travelTime = 3; // 假定 3min
let getTravelTime = document.getElementsByClassName('travelTime')[0];
getTravelTime.innerHTML = travelTime+' min';

    // 3-- to 0 循環
    function updateTravelTime(){
        travelTime--;
        if(travelTime < 0){
            travelTime = 3;
        }

        getTravelTime = document.getElementsByClassName('travelTime')[0];
        getTravelTime.innerHTML = travelTime+' min';
    }

    window.addEventListener('DOMContentLoaded', (event) => {
        // updateTravelTime();
        setInterval(updateTravelTime, 3000); // 3s
    });

// 全線車站名稱 12個
let stations = ['Nangang', 'Taipei', 'Banqiao', 'Taoyuan', 'Hsinchu', 'Miaoli', 'Taichung', 'Changhua', 'Yunlin', 'Chiayi', 'Tainan', 'Zuoying'];
let stationsLength = stations.length;
// 隨機選擇車站
let stationIndex;
function randomStation(){
    stationIndex = Math.floor(Math.random() * stationsLength); //0到11的整數;
    console.log('random')
}

// 計算下站名稱
function nextStation(){
    stationIndex++;
    console.log(stationIndex);
    let nextStationIndex, next2StationIndex;

    if(stationIndex == stationsLength){ // 12 左營
        stationIndex = 0; 
        nextStationIndex = stationIndex+1; 
        next2StationIndex = nextStationIndex+1;
    }else if(stationIndex == stationsLength - 1){ // 11 台南
        nextStationIndex = 0; 
        next2StationIndex = 1;
    }else if(stationIndex == stationsLength - 2){ // 10 嘉義
        nextStationIndex = stationIndex+1; 
        next2StationIndex = 0;
    }else{
        nextStationIndex = stationIndex+1; 
        next2StationIndex = nextStationIndex+1;
    }

    // console.log(stationIndex,nextStationIndex,next2StationIndex);
    let stationValue = stations[stationIndex];
    let stationValueTwo = stations[nextStationIndex];
    let stationValueThree = stations[next2StationIndex];

    // 初始化車站
    let getTravel = document.getElementsByClassName('station')[0];
    let getTravelTwo = document.getElementsByClassName('station')[1];
    let getTravelThree = document.getElementsByClassName('station')[2];
    getTravel.innerHTML = stationValue;
    getTravelTwo.innerHTML = stationValueTwo;
    getTravelThree.innerHTML = stationValueThree;
}

window.addEventListener('DOMContentLoaded', (event) => {
    randomStation(); 
    nextStation();
    // console.log(stationIndex);
    setInterval(() => nextStation(), 12000); // 12s
});