function Out(str) {
    document.getElementById("consol").innerHTML += str + "<br>";
}

function ClearOut() {
    document.getElementById("consol").innerHTML = "";
}


//Написать функцию, которая принимает 2 числа и возвращает
// -1, если первое меньше, чем второе;
// 1 – если первое больше, чем второе; 
//и 0 – если числа равны.

function func1(num1, num2) {
    switch (true) {
        case num1 > num2: return 1;
        case num1 < num2: return -1;
        case num1 == num2: return 0;

        default:
            break;
    }
}

function task1() {
    Out("Task 1:");

    let num1 = Number(prompt("Please enter first number:"));
    let num2 = Number(prompt("Please enter second number:"));

    switch (func1(num1, num2)) {
        case 1:
            Out(`${num1} is bigger than ${num2}`);
            break;
        case -1:
            Out(`${num2} is bigger than ${num1}`);
            break;
        case 1:
            Out(`${num1} is equal to ${num2}`);
            break;
        default:
            break;
    }

}

// Написать функцию, которая вычисляет факториал переданного ей числа.

function func2(num) {
    if (num == 1) {
        return 1;
    } else if (num > 1) {
        return num * func2(num - 1);
    } else {
        return null;
    }
}

function task2() {
    Out("Task 2:");
    let num = Number(prompt("Please enter number:"));
    Out("Result = " + func2(num));

}

// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 
//Например: цифры 1, 4, 9 превратятся в число 149.

function func3(num1, num2, num3) {
    return Number("" + num1 + num2 + num3);
}

function task3() {
    Out("Task 3:");
    let num1 = Number(prompt("Please enter first number:"));
    let num2 = Number(prompt("Please enter second number:"));
    let num3 = Number(prompt("Please enter third number:"));

    Out(`${num1} + ${num2} + ${num3} = ` + func3(num1, num2, num3));

}

// Написать функцию, которая принимает длину и ширину прямоугольника
// и вычисляет его площадь. 
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function func4(length, width) {
    if (width != undefined) {
        return length * width;
    } else {
        return length * length;
    }

}

function task4() {
    Out("Task 4:");

    let num1 = Number(prompt("Please enter length of rectangle:"));
    let num2 = Number(prompt("Please enter width of rectangle:"));

    Out(`Rectangle with length ${num1} and width ${num2} has area ` + func4(num1, num2));

}

// Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
// Совершенное число – это число, равное сумме всех своих собственных делителей.

function func5(num) {
    let divisionsSum = 0;

    for (let i = num - 1; i > 0; i--) {
        if (!(num % i)) {
            divisionsSum += i;
        }

    }

    return divisionsSum == num;

}

function task5() {
    Out("Task 5:");
    num = Number(prompt("Please enter number:"));

    if (func5(num)) {
        Out(`${num} is perfect`);
    }
    else {
        Out(`${num} isn't perfect`);
    }
}

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
//и выводит только те числа из диапазона, которые являются совершенными. 
//Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

function func6(min, max) {

    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }

    let counter = 0;

    for (let i = min; i < max; i++) {
        if (func5(i)) {
            Out(i);
            counter++;
        }
    }

    if (!counter) {
        Out("No fitting numbers found");
    }
}


function task6() {
    Out("Task 6:");

    let num1 = Number(prompt("Please enter first number:"));
    let num2 = Number(prompt("Please enter second number:"));

    func6(num1, num2)

}

// Написать функцию, которая принимает время (часы, минуты, секунды) 
//и выводит его на экран в формате «чч:мм:сс».
//Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function getTimeStr(hour, minute, second) {
    let time = '"';

    if (hour != undefined) {
        time += hour + ":";
    } else {
        time += "00:";
    }

    if (minute != undefined) {
        time += minute + ":";
    } else {
        time += "00:";
    }

    if (second != undefined) {
        time += second + '"';
    } else {
        time += "00:";
    }

    return time;
}

function func7(hour, minute, second) {
    Out(getTimeStr(hour, minute, second));
}

function task7() {
    Out("Task 7:");

    let hour = prompt("Please enter hour");
    let minute = prompt("Please enter minute");
    let second = prompt("Please enter second");

    func7(hour, minute, second);

}

// Написать функцию, которая принимает часы, минуты и секунды 
// и возвращает это время в секундах.

function func8(hour, minute, second) {
    return (hour * 3600) + (minute * 60) + second;
}

function task8() {
    Out("Task 8:");

    let hour = Number(prompt("Please enter hour"));
    let minute = Number(prompt("Please enter minute"));
    let second = Number(prompt("Please enter second"));

    Out(func8(hour, minute, second));

}

// Написать функцию, которая принимает количество секунд, 
//переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function func9(seconds) {
    let hours = 0, minutes = 0;

    while (((hours + 1) * 3600) < seconds) {
        hours++;
    }
    seconds = seconds - (hours * 3600);

    while (((minutes + 1) * 60) < seconds) {
        minutes++;
    }
    seconds = seconds - (minutes * 60);

    return getTimeStr(hours, minutes, seconds);
}

function task9() {
    Out("Task 9:");

    let time = Number(prompt("Please enter time in seconds"));
    Out("The time is " + func9(time));

}

// Написать функцию, которая считает разницу между датами. 
//Функция принимает 6 параметров, которые описывают 2 даты, 
//и возвращает результат в виде строки «чч:мм:сс». 
//При выполнении задания используйте функции из предыдущих 2-х заданий: 
//сначала обе даты переведите в секунды, узнайте разницу в секундах, 
//а потом разницу переведите обратно в «чч:мм:сс»

function func10(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    return func9(Math.abs(func8(hours1, minutes1, seconds1) - func8(hours2, minutes2, seconds2)));
}


function task10() {
    Out("Task 10:");

    let hours1 = Number(prompt("Please enter hours for first date"));
    let minutes1 = Number(prompt("Please enter minutes for first date"));
    let seconds1 = Number(prompt("Please enter seconds for first date"));
    let hours2 = Number(prompt("Please enter hours for second date"));
    let minutes2 = Number(prompt("Please enter minutes for second date"));
    let seconds2 = Number(prompt("Please enter seconds for second date"));

    Out("Time difference is: " + func10(hours1, minutes1, seconds1, hours2, minutes2, seconds2));


}