IMP.init("imp54322068");

const button = document.querySelector("button");
const merchantUid = `ORD-${Date.now()}`;

const onClickPay = async () => {
    IMP.request_pay({
        pg: "kakaopay",
        pay_method: "card",
        amount: "100",
        name: "저는 님을 벗겨먹으러 온 사람입니다",
        merchant_uid: merchantUid,
    }, 
    function(response){
        if(response.success){
            alert("결제가 완료되었습니다!");
            window.location.href = `http://127.0.0.1:8000/payment/payment_success?paid_amount=${response.paid_amount}&merchant_uid=${response.merchant_uid}`;
        }
        else {
            alert("결제에 실패하였습니다.");
            window.location.href = "http://127.0.0.1:8000/payment/payment_failed";
        }

    });

};

document.getElementById("payButton").addEventListener("click", onClickPay);