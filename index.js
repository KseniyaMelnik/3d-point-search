// Создаем рандомную точку с координатами (x, y, z)
const x = Math.floor(Math.random() * 101); 
const y = Math.floor(Math.random() * 101); 
const z = Math.floor(Math.random() * 101); 

const r = { x, y, z }; 

document.getElementById("random-point").innerText = `(x: ${x}, y: ${y}, z: ${z})`; //Выводим созданную точку на страницу


const getDistanceBetweenPoints = (s) => {
    return Math.sqrt((r.x-s.x)**2 + (r.y-s.y)**2 + (r.z-s.z)**2) 
} // Возвращает расстояние между 2 точками

const findRandomPoint = () => {
    //Любую точку можно гарантированно найти за 3 вызова функции getDistanceBetweenPoints. 
    //Для простоты вычислений возьмем точки с координатами (0, 0, 0) , (0, 0, 100) и (0, 100, 0). 
    //Подставляя координаты данных точек в уравнение находжения дистанции, решаем систему из 3 уравнений и находим координаты z и y. 
    //Затем, подставляя найденные z и y в то же уравнение, находим x. 
    
    const distanse1 = getDistanceBetweenPoints({x:0, y:0, z:0})
    const distanse2 = getDistanceBetweenPoints({x:0, y:0, z:100})
    const distanse3 = getDistanceBetweenPoints({x:0, y:100, z:0})

    const z = Math.round((distanse1**2-distanse2**2 + 10000)/200)
    const y = Math.round((distanse1**2-distanse3**2 + 10000)/200)
    const x = Math.round(Math.sqrt(distanse1**2 - y**2 - z**2))
    
    document.getElementById("calls").innerText = "Number of calls: 3";
    document.getElementById("find-point").innerText = `(x: ${x}, y: ${y}, z: ${z})`; //Выводим найденную точку на страницу


    return {
        "result": {
            "random_point": {"x": x, "y": y, "z": z},
            "search_points": [{"x": 0, "y": 0, "z": 0}, {"x": 0, "y": 0, "z": 100}, {"x": 0, "y": 100, "z": 0}],
            "calls": 3
            }
    }

}

