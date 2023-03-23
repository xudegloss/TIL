// 1. 전체 선택 및 해제 기능 추가하기.
// 1-1. 전체 체크 선택과 개별적인 체크 선택을 모두 가져오기.
// 1-2. 전체 체크를 선택하였을 때, 개별적인 체크 선택 모두 체크하기.
// 1-3. 전체 체크를 없앴을 때, 개별적인 체크 선택 모두 없애주기.

const isChecked = function(){
    const checkAll=document.getElementById("check__all");
    const checkItem=document.querySelectorAll(".check__item");
    
    // checkAll.checked : true (체크 박스가 선택되었을 때)
    // checkAll.checked : false (체크 박스가 선택되지 않았을 때)
    if(checkAll.checked){
        for(let idx=0; idx<checkItem.length; idx++){
            checkItem[idx].checked=true
        }
    }else{
        for(let idx=0; idx<checkItem.length; idx++){
            checkItem[idx].checked=false;
        }
    }
}
