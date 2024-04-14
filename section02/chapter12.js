// 음식을 주문하는 상황
function orderFood(calllback) {
    setTimeout(() => {
        const food = "떡볶이";
        calllback(food);
    }, 3000)
}

function cooldownFood(food, calllback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        calllback(cooldownedFood);
    }, 2000)
}

function freezeFood(food, calllback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        calllback(freezedFood);
    }, 1500)
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood)

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        })
    }
    )
})