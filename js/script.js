
// 時間顯示function
function showTime() {
    var time = new Date();
    var year = time.getFullYear().toString();
    var month = (time.getMonth() + 1).toString().padStart(2, '0');
    var date = time.getDate().toString().padStart(2, '0');
    var hour = time.getHours().toString().padStart(2, '0');
    var minute = time.getMinutes().toString().padStart(2, '0');
    var second = time.getSeconds().toString().padStart(2, '0');
    document.getElementById("showTimeID").innerHTML = `${year}/${month}/${date} ${hour}:${minute}:${second}`
    var nextTime = new Date()
    nextTime.setMonth(nextTime.getMonth() + 1);
    nextTime.setDate(0);
    var dateDiff = nextTime.getDate() - time.getDate();
    document.getElementById("timerID").innerHTML = `距離季賽開始還有${dateDiff}天`
    document.getElementById("timerID2").innerHTML = `距離下一場比賽開始<br>還有${dateDiff}天`
}
// 時間自動更新
if (true) {
    setInterval(function () { showTime(); }, 1000);  //1000毫秒自動重複執行showTime()函數
}
// 點擊連至管理頁面
function toManage() {
    window.location.assign("./manage.html")
}
// 共用參數
var player = [];
var playernum = 0;
var order = [];
var basicPosition = ['1B', '2B', '3B', 'SS', 'LF', 'CF', 'RF', 'C', 'P']
var getOrderName = [];
var getOrderPosition = [];
var Positioncheck = [];
let player_h = function (data) {
    this.name = data.name;
    this.strength = data.strength;
    this.hitting = data.hitting;
    this.speed = data.speed;
    this.pass = data.pass;
    this.defense = data.defense;
    this.position = data.position;
};
let player_p = function (data) {
    this.name = data.name;
    this.strength = data.strength;
    this.hitting = data.hitting;
    this.speed = data.speed;
    this.pass = data.pass;
    this.defense = data.defense;
    this.pitch = data.pitch;
    this.position = data.position;
};
// 基本隊員
basicPlayer();
function basicPlayer() {
    let A_Mark = new player_h({ name: 'A.Mark', strength: 60, hitting: 60, speed: 60, pass: 60, defense: 60, position: '2B' });
    let C_Allen = new player_h({ name: 'C.Allen', strength: 60, hitting: 60, speed: 60, pass: 60, defense: 60, position: '1B' });
    let L_Edward = new player_h({ name: 'L.Edward', strength: 60, hitting: 60, speed: 60, pass: 60, defense: 60, position: 'LF' });
    let K_Glen = new player_h({ name: 'K.Glen', strength: 60, hitting: 60, speed: 60, pass: 60, defense: 60, position: 'RF' });
    let Y_Owen = new player_h({ name: 'Y.Owen', strength: 60, hitting: 60, speed: 60, pass: 60, defense: 60, position: '3B' });
    let W_Teddy = new player_h({ name: 'W.Teddy', strength: 60, hitting: 60, speed: 60, pass: 60, defense: 60, position: 'CF' });
    let A_Victor = new player_h({ name: 'A.Victor', strength: 60, hitting: 60, speed: 60, pass: 60, defense: 60, position: 'C' });
    let W_Louis = new player_h({ name: 'W.Louis', strength: 60, hitting: 60, speed: 60, pass: 60, defense: 60, position: 'SS' });
    let C_Peter = new player_p({ name: 'C.Peter', strength: 60, hitting: 60, speed: 60, pass: 60, defense: 60, pitch: 60, position: 'P' });

    player.push(A_Mark, C_Allen, L_Edward, K_Glen, Y_Owen, W_Teddy, A_Victor, W_Louis, C_Peter);
    for (let i = 0; i < 9; i++) {
        order[i] = player[i];
    }
    order[0] = player[0];
    basicOrderset();
    for (var i = 0; i < 9; i++) {
        playernum = playernum + 1;
        var temp0 = document.createElement('tr');
        temp0.setAttribute('id', `playerList${playernum}`)
        document.getElementById('playerList').appendChild(temp0);

        var temp1 = document.createElement('th');
        temp1.textContent = playernum;
        document.getElementById(`playerList${playernum}`).appendChild(temp1);

        var temp2 = document.createElement('th');
        temp2.textContent = player[playernum - 1].name;
        document.getElementById(`playerList${playernum}`).appendChild(temp2);

        var temp3 = document.createElement('th');
        temp3.textContent = player[playernum - 1].position;
        document.getElementById(`playerList${playernum}`).appendChild(temp3);

        var temp4 = document.createElement('th');
        temp4.textContent = player[playernum - 1].strength;
        document.getElementById(`playerList${playernum}`).appendChild(temp4);

        var temp5 = document.createElement('th');
        temp5.textContent = player[playernum - 1].hitting;
        document.getElementById(`playerList${playernum}`).appendChild(temp5);

        var temp6 = document.createElement('th');
        temp6.textContent = player[playernum - 1].speed;
        document.getElementById(`playerList${playernum}`).appendChild(temp6);

        var temp7 = document.createElement('th');
        temp7.textContent = player[playernum - 1].pass;
        document.getElementById(`playerList${playernum}`).appendChild(temp7);

        var temp8 = document.createElement('th');
        temp8.textContent = player[playernum - 1].defense;
        document.getElementById(`playerList${playernum}`).appendChild(temp8);

        var temp9 = document.createElement('th');
        temp9.textContent = player[playernum - 1].pitch;
        document.getElementById(`playerList${playernum}`).appendChild(temp9);
    }
}
// 隨機抽卡
function newCard() {
    var firstName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lastName = ['Abel', 'Adam', 'Andrew', 'Bryan', 'Bert', 'Carl', 'Chris', 'Daniel', 'Duncan', 'Dustin', 'Edmund', 'Felix', 'Floyd', 'Frank', 'Gerard', 'Greg', 'Gideon', 'Howard', 'Ivan', 'Jean', 'Jerry', 'John', 'Joshua', 'Karl', 'Kenny', 'Lee', 'Leon', 'Michael', 'Napoleon', 'Noah', 'Neal', 'Owen', 'Otto', 'Ozzie', 'Percy', 'Pius', 'Ralph', 'Raymond', 'Robbie', 'Ross', 'Seamas', 'Steven', 'Scott', 'Terry', 'Timmy', 'Victor', 'Walter', 'Wilbur', 'Willis', 'Vincent']
    var randomFirstName = Math.floor(Math.random() * 26);
    var randomLastName = Math.floor(Math.random() * 50);
    var fullName = `${firstName[randomFirstName]}.${lastName[randomLastName]}`;


    var ran1 = Math.random();
    if (ran1 > 0.8) {
        let newPlayer = new player_p({ name: fullName, strength: qualityset(), hitting: qualityset(), speed: qualityset(), pass: qualityset(), defense: qualityset(), pitch: qualityset(), position: 'P' });
        player.push(newPlayer);
        document.getElementById("newCardName").innerHTML = `${newPlayer.name} &emsp; ${newPlayer.position}`;
        document.getElementById("newCardQuality").innerHTML = `力量 &emsp; ${newPlayer.strength} &emsp; 打擊 &emsp; ${newPlayer.hitting} <br>速度 &emsp; ${newPlayer.speed} &emsp; 傳球 &emsp; ${newPlayer.pass}<br>守備 &emsp; ${newPlayer.defense} &emsp; 投球 &emsp; ${newPlayer.pitch}`;
        var sum = 0;
        sum = sum + newPlayer.strength;
        sum = sum + newPlayer.hitting;
        sum = sum + newPlayer.speed;
        sum = sum + newPlayer.pass;
        sum = sum + newPlayer.defense;
        sum = sum + newPlayer.pitch;
        if (sum > 480) {
            document.getElementById('difCard2').style = "background-color: gold;"
        } else if (sum > 450) {
            document.getElementById('difCard2').style = "background-color: plum;"
        } else if (sum > 420) {
            document.getElementById('difCard2').style = "background-color: skyblue;"
        } else {
            document.getElementById('difCard2').style = "background-color: white;"
        }
    } else {
        let newPlayer = new player_h({ name: fullName, strength: qualityset(), hitting: qualityset(), speed: qualityset(), pass: qualityset(), defense: qualityset(), position: positionset() });
        player.push(newPlayer);
        document.getElementById("newCardName").innerHTML = `${newPlayer.name} &emsp; ${newPlayer.position}`;
        document.getElementById("newCardQuality").innerHTML = `力量 &emsp; ${newPlayer.strength} &emsp; 打擊 &emsp; ${newPlayer.hitting} <br>速度 &emsp; ${newPlayer.speed} &emsp; 傳球 &emsp; ${newPlayer.pass}<br>守備 &emsp; ${newPlayer.defense}`;
        var sum = 0;
        sum = sum + newPlayer.strength;
        sum = sum + newPlayer.hitting;
        sum = sum + newPlayer.speed;
        sum = sum + newPlayer.pass;
        sum = sum + newPlayer.defense;
        if (sum > 400) {
            document.getElementById('difCard2').style = "background-color: gold;"
        } else if (sum > 375) {
            document.getElementById('difCard2').style = "background-color: plum;"
        } else if (sum > 350) {
            document.getElementById('difCard2').style = "background-color: skyblue;"
        } else {
            document.getElementById('difCard2').style = "background-color: white;"
        }
    }
    var ran4 = Math.random();
    if (ran4 > 0.8) {
        document.getElementById('difCard').src = './images/player01.jfif'
    } else if (ran4 > 0.6) {
        document.getElementById('difCard').src = './images/player02.jfif'
    } else if (ran4 > 0.4) {
        document.getElementById('difCard').src = './images/player03.jfif'
    } else if (ran4 > 0.2) {
        document.getElementById('difCard').src = './images/player04.jfif'
    } else {
        document.getElementById('difCard').src = './images/player05.jfif'
    }

}
function qualityset() {
    var ran2 = Math.random();
    if (ran2 > 0.97) {
        var num = 90 + Math.floor(Math.random() * 10);
    } else if (ran2 > 0.7) {
        var num = 80 + Math.floor(Math.random() * 10);
    } else if (ran2 > 0.2) {
        var num = 70 + Math.floor(Math.random() * 10);
    } else {
        var num = 60 + Math.floor(Math.random() * 10);
    }
    return num;
}
function positionset() {
    var ran3 = Math.random() * 0.8;
    if (ran3 > 0.7) {
        var pos = '1B'
    } else if (ran3 > 0.6) {
        var pos = "2B"
    } else if (ran3 > 0.5) {
        var pos = "3B"
    } else if (ran3 > 0.4) {
        var pos = "SS"
    } else if (ran3 > 0.3) {
        var pos = "LF"
    } else if (ran3 > 0.2) {
        var pos = "CF"
    } else if (ran3 > 0.1) {
        var pos = "RF"
    } else {
        var pos = "C"
    }
    return pos;
}
function basicOrderset() {
    for (var i = 0; i < 9; i++) {
        document.getElementById(`player${i + 1}_n`).innerHTML = order[i].name;
        document.getElementById(`player${i + 1}_p`).innerHTML = order[i].position;
    }
}
function notsign() {
    player.splice(-1, 1);
}
function sign() {
    playernum = playernum + 1;
    var temp0 = document.createElement('tr');
    temp0.setAttribute('id', `playerList${playernum}`)
    document.getElementById('playerList').appendChild(temp0);

    var temp1 = document.createElement('th');
    temp1.textContent = playernum;
    document.getElementById(`playerList${playernum}`).appendChild(temp1);

    var temp2 = document.createElement('th');
    temp2.textContent = player[playernum - 1].name;
    document.getElementById(`playerList${playernum}`).appendChild(temp2);

    var temp3 = document.createElement('th');
    temp3.textContent = player[playernum - 1].position;
    document.getElementById(`playerList${playernum}`).appendChild(temp3);

    var temp4 = document.createElement('th');
    temp4.textContent = player[playernum - 1].strength;
    document.getElementById(`playerList${playernum}`).appendChild(temp4);

    var temp5 = document.createElement('th');
    temp5.textContent = player[playernum - 1].hitting;
    document.getElementById(`playerList${playernum}`).appendChild(temp5);

    var temp6 = document.createElement('th');
    temp6.textContent = player[playernum - 1].speed;
    document.getElementById(`playerList${playernum}`).appendChild(temp6);

    var temp7 = document.createElement('th');
    temp7.textContent = player[playernum - 1].pass;
    document.getElementById(`playerList${playernum}`).appendChild(temp7);

    var temp8 = document.createElement('th');
    temp8.textContent = player[playernum - 1].defense;
    document.getElementById(`playerList${playernum}`).appendChild(temp8);

    var temp9 = document.createElement('th');
    temp9.textContent = player[playernum - 1].pitch;
    document.getElementById(`playerList${playernum}`).appendChild(temp9);
}
function orderChoice() {
    for (var i = 0; i < 9; i++) {
        var element1 = document.querySelectorAll('.orderChoiceName');
        var element2 = document.querySelectorAll('.orderChoicePosition');
        while (element1[i].firstChild) {
            element1[i].removeChild(element1[i].firstChild);
            element2[i].removeChild(element2[i].firstChild);
        }
        tempNameClear = document.createElement('option');
        tempNameClear.setAttribute('selected', '');
        tempNameClear.textContent = "--請選擇球員--";
        tempNameClear1 = document.querySelectorAll('.orderChoiceName')
        tempNameClear1[i].appendChild(tempNameClear);
        for (var j = 0; j < player.length; j++) {
            tempName = document.createElement('option');
            tempName.setAttribute('value', j);
            tempName.textContent = player[j].name;
            tempName1 = document.querySelectorAll('.orderChoiceName')
            tempName1[i].appendChild(tempName);
        }

        tempPositionClear = document.createElement('option');
        tempPositionClear.setAttribute('selected', '');
        tempPositionClear.textContent = "--請選擇位置--";
        tempPositionClear1 = document.querySelectorAll('.orderChoicePosition')
        tempPositionClear1[i].appendChild(tempPositionClear);
        for (var j = 0; j < 9; j++) {
            tempPosition = document.createElement('option');
            tempPosition.setAttribute('value', j);
            tempPosition.textContent = basicPosition[j];
            tempPosition1 = document.querySelectorAll('.orderChoicePosition')
            tempPosition1[i].appendChild(tempPosition);
        }
    }
}
function orderset() {
    var newOrder = [];
    for (var i = 0; i < 9; i++) {
        getOrderName[i] = document.getElementById(`orderName${i + 1}`).value;
        getOrderPosition[i] = document.getElementById(`orderPosition${i + 1}`).value;
        newOrder[i] = player[getOrderName[i]];
        if (getOrderName[i] == "--請選擇球員--") {
            alert('有未設定的球員');
            return;
        } else if (getOrderPosition[i] == "--請選擇位置--") {
            alert('有未設定的位置');
            return;
        } else if (newOrder[i].position != basicPosition[getOrderPosition[i]]) {
            alert('有不符合位置的球員');
            return;
        }
    }
    for (var j = 0; j < 8; j++) {
        for (var k = j + 1; k < 9; k++) {
            if (newOrder[j] == newOrder[k]) {
                alert('有重複球員');
                return;
            } else if (newOrder[j].position == newOrder[k].position) {
                alert('有重複位置');
                return;
            }
        }
    }
    for (var p = 0; p < 9; p++) {
        document.getElementById(`player${p + 1}_n`).innerHTML = newOrder[p].name;
        document.getElementById(`player${p + 1}_p`).innerHTML = newOrder[p].position;
        order[p] = newOrder[p];
        order[p] = newOrder[p];
    }
}
function contest() {
    var team1 = 0;
    var team2 = 3000;
    var sumteam1 = 0;
    var sumteam2 = 0;
    var result = [];
    for (var i = 0; i < 9; i++) {
        team1 = team1 + Number(order[i].strength);
        team1 = team1 + Number(order[i].hitting);
        team1 = team1 + Number(order[i].speed);
        team1 = team1 + Number(order[i].pass);
        team1 = team1 + Number(order[i].defense);
        // team1 = team1 + Number(order[i].pitch);                
    }
    for (var j = 1; j < 19; j++) {
        if (j % 2 == 1) {
            result[j] = Math.floor(Math.random() * team1 / 500 - (Math.random() * team2 / 500));
            if (result[j] < 0) {
                result[j] = 0;
            }
        } else {
            result[j] = Math.floor(Math.random() * team2 / 500 - (Math.random() * team1 / 500));
            if (result[j] < 0) {
                result[j] = 0;
            }
        }
    }
    var element1 = document.querySelectorAll('.contestResult1');
    var element2 = document.querySelectorAll('.contestResult2');
    console.log();

    var element1 = document.querySelectorAll('.contestResult1');
    var element2 = document.querySelectorAll('.contestResult2');
    console.log(element2[0]);
    while (element1[0].firstChild) {
        element1[0].removeChild(element1[0].firstChild);
    }
    while (element2[0].firstChild) {
        element2[0].removeChild(element2[0].firstChild);
    }
    tempTeamName1 = document.createElement('th');
    tempTeamName1.setAttribute('scope', 'row');
    tempTeamName3 = document.createElement('img');
    tempTeamName3.setAttribute('src', './images/teamlogo_aries.jfif');
    tempTeamName3.setAttribute('alt', 'teamlogo1');
    tempTeamName3.setAttribute('class', 'w-70px');
    tempTeamName1.appendChild(tempTeamName3)
    tempTeamName2 = document.querySelectorAll('.contestResult1')
    tempTeamName2[0].appendChild(tempTeamName1);

    tempTeamName4 = document.createElement('th');
    tempTeamName4.setAttribute('scope', 'row');
    tempTeamName6 = document.createElement('img');
    tempTeamName6.setAttribute('src', './images/teamlogo_taurius.jfif');
    tempTeamName6.setAttribute('alt', 'teamlogo2');
    tempTeamName6.setAttribute('class', 'w-70px');
    tempTeamName4.appendChild(tempTeamName6)
    tempTeamName5 = document.querySelectorAll('.contestResult2')
    tempTeamName5[0].appendChild(tempTeamName4);
    for (var j = 0; j < 9; j++) {
        tempName = document.createElement('td');
        tempName.textContent = result[2 * j + 1];
        sumteam1 = sumteam1 + result[2 * j + 1];
        tempName1 = document.querySelectorAll('.contestResult1')
        tempName1[0].appendChild(tempName);
    }
    tempName = document.createElement('td');
    tempName.textContent = sumteam1;
    tempName1 = document.querySelectorAll('.contestResult1')
    tempName1[0].appendChild(tempName);
    for (var j = 0; j < 9; j++) {
        tempName = document.createElement('td');
        tempName.textContent = result[2 * j + 2];
        sumteam2 = sumteam2 + result[2 * j + 2];
        tempName1 = document.querySelectorAll('.contestResult2')
        tempName1[0].appendChild(tempName);
    }
    tempName = document.createElement('td');
    tempName.textContent = sumteam2;
    tempName1 = document.querySelectorAll('.contestResult2')
    tempName1[0].appendChild(tempName);
}