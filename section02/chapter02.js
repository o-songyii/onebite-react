//단락평가
function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}

console.log(returnFalse() && returnTrue())

// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "persion의 값이 없음");
}

printName();
printName({ name: "sally" });