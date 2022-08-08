const hotel = [];
hotelInitialize(5, 10);

document.getElementById('reset').addEventListener('click', () => {
    for(let i=0; i<hotel.length; i++) {
        for(let j=0; j<hotel[i].length; j++) {
            let room = hotel[i][j];
            room.checkIn = '';
            room.checkOut = '';
            room.occupied = false;
          }
    }
    document.getElementById('roomStatus').innerHTML = '<h1>모든 방 초기화 완료</h1>';
});

document.getElementById('checkOut').addEventListener('click', () => {
    let roomNum = document.getElementById('roomInput').value;
    // let floorIdx = parseInt(roomNum[0]-1);
    // let roomIdx = parseInt(roomNum.substring(1))-1;
    // const room = hotel[floorIdx][roomIdx];
    const room = getRoomObject(roomNum);

    if(room.occupied) {
        room.occupied = true;
        room.checkIn = '';
        room.checkOut = new Date();
        document.getElementById('roomStatus').innerHTML = `<h1>${roomNum}퇴실을 완료했습니다</h1>`;
    } else {
        document.getElementById('roomStatus').innerHTML = '<h1>빈 방입니다</h1>';
    }
});

document.getElementById('checkIn').addEventListener('click', () => {
    let roomNum = document.getElementById('roomInput').value;
    // let floorIdx = parseInt(roomNum[0]-1);
    // let roomIdx = parseInt(roomNum.substring(1))-1;
    // const room = hotel[floorIdx][roomIdx];
    const room = getRoomObject(roomNum);

    if(room.occupied) {
        document.getElementById('roomStatus').innerHTML = '<h1>사용 중인 방입니다</h1>';
    } else {
        room.occupied = true;
        room.checkIn = new Date();
        room.checkOut = '';
        document.getElementById('roomStatus').innerHTML = `<h1>${roomNum}입실을 완료했습니다</h1>`;
    }
});

document.getElementById('status').addEventListener('click', () => {
    let table = '<table border="1">';
    for(let i=hotel.length-1; i>=0; i--) {
        table += '<tr>';
        for(let j=0; j<hotel[i].length; j++) {
            table += `<td>`;
            table += `<ul>`;
            table += `<li>방번호: ${hotel[i][j].rn}</li>`;
            table += `<li>입실시간: ${hotel[i][j].checkIn}</li>`;
            table += `<li>퇴실시간: ${hotel[i][j].checkOut}</li>`;
            table += `<li>${hotel[i][j].occupied ? '사용중' : '빈방'}</li>`;
            table += `</ul>`;
            table += `</td>`;
        }
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('roomStatus').innerHTML = table;
});

function getRoomObject(roomNum) {
    let floorIdx = parseInt(roomNum[0]-1);
    let roomIdx = parseInt(roomNum.substring(1))-1;
    return hotel[floorIdx][roomIdx];
}

function hotelInitialize(floor, rooms) {
    for(let i=0; i<floor; i++) {
        let floors = [];

        for(let j=0; j<rooms; j++) {
            let room = {};
            room.rn = `${i+1}${j < 9 ? '0' : ''}${j+1}`;
            room.checkIn = '';
            room.checkOut = '';
            room.occupied = false;
            floors.push(room);
          }
          hotel.push(floors);
    }
}