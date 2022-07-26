function save() {
    const my = {
        myName: document.getElementById('name').value,
        myAddr: document.getElementById('addr').value,
        myLike: {
            first: document.getElementById('like1').value,
            second: document.getElementById('like2').value,
            third: document.getElementById('like3').value,
        },
        myEmail: document.getElementById('email').value,
        myPet: document.getElementById('pet').value,
        myWant: document.getElementById('want').value
    };
    /* console.log(my.myName);
    console.log(my.myAddr);
    console.log(my.myLike.first);
    console.log(my.myLike.second);
    console.log(my.myLike.third);
    console.log(my.myEmail);
    console.log(my.myPet);
    console.log(my.myWant); */
    return `<li>이름: ${my.myName}</li><li>거주지:${my.myAddr}</li><li>좋아하는 리스트<ul><li>1.${my.myLike.first}</li><li>2.${my.myLike.second}</li>
    <li>3.${my.myLike.third}</li></ul></li><li>이메일:${my.myEmail}</li><li>pet 소유 여부:${my.myPet}</li><li>지금 가장 원하는 것:${my.myWant}</li>`;
}
/* function list() {
    //console.log(save());
    let list = document.getElementById('list');
    list.innerHTML = save();
} */