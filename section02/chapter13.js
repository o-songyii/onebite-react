function add10(num) {
    const promise = new Promise((resolve, reject) => {
        //비동기 작업 실행하는 함수 (executor)

        setTimeout(() => {
            // resolve("안녕");
            // reject("왜 실패했는지 이유")
            if (typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다")
            }
        }, 2000);
    })

    return promise;
}

const p = add10(0);
p.then((result) => {
    console.log(result)
    return add10(result);
})
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .catch((error) => {
        console.log(error);
    })


// console.log(promise) //pending
// setTimeout(() => {
//     console.log(promise) //fulfilled or rejected
// }, 3000)
