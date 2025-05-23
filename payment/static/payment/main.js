IMP.init("imp54322068");

const button = document.querySelector("button");

const onClickPay = async () => {
    IMP.request_pay({
        pg: "kakaopay",
        pay_method: "card",
        amount: "9999999",
        name: "저는 님을 벗겨먹으러 왔습니다",
        merchant_uid: "ORD20250523-000003"
    });

};

document.getElementById("payButton").addEventListener("click", onClickPay);