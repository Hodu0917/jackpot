const items = ["7️⃣","💎","🍒","⭐","🍀","🔥"];

function rand(){
    return items[Math.floor(Math.random()*items.length)];
}

function spin(){

    const result =
    document.getElementById("result");

    result.classList.remove("jackpot");
    result.textContent = "";

    const slots = [
        document.getElementById("s1"),
        document.getElementById("s2"),
        document.getElementById("s3")
    ];

    const finalResult = [
        rand(),
        rand(),
        rand()
    ];

    /* 슬롯 각각 돌아가는 인터벌 저장 */
    const intervals = [];

    /* 모두 회전 시작 */
    for(let i = 0; i < 3; i++){

        intervals[i] = setInterval(()=>{

            slots[i].textContent = rand();

        },80);
    }

    /* 오른쪽부터 하나씩 멈춤 */

    setTimeout(()=>{

        clearInterval(intervals[2]);
        slots[2].textContent = finalResult[2];

    },1200);

    setTimeout(()=>{

        clearInterval(intervals[1]);
        slots[1].textContent = finalResult[1];

    },1900);

    setTimeout(()=>{

        clearInterval(intervals[0]);
        slots[0].textContent = finalResult[0];

        /* 결과 판정 */

        if(
            finalResult[0] === finalResult[1] &&
            finalResult[1] === finalResult[2]
        ){

            result.textContent =
            "🎉 JACKPOT SUCCESS 🎉";

            result.classList.add("jackpot");

        }else{

            result.textContent =
            "TRY AGAIN";
        }

    },2600);
}

/* 시계 */

function updateClock(){

    const now = new Date();

    const h =
    String(now.getHours()).padStart(2,"0");

    const m =
    String(now.getMinutes()).padStart(2,"0");

    const s =
    String(now.getSeconds()).padStart(2,"0");

    document.getElementById("clock").textContent =
    `${h}:${m}:${s}`;
}

setInterval(updateClock,1000);

updateClock();

/* 잭팟 숫자 증가 */

let money = 14059958.95;

setInterval(()=>{

    money += Math.random() * 30;

    document.getElementById("money").textContent =
    money.toLocaleString(undefined,{
        minimumFractionDigits:2,
        maximumFractionDigits:2
    });

},1200);