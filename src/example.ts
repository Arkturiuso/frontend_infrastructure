const age: number = "twenty";

// Ошибка 2: У функции нет возвращаемого значения
function add(a: number, b: number): number {
    return "result"; // Строка вместо числа
}

// Ошибка 3: Несуществующее свойство
interface User {
    name: string;
}

const user: User = { name: "Alex", age: 25 }; // age нет в интерфейсе
