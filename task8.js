let motocycle = new Map();
motocycle.set("Kawasaki" , "KX250");
motocycle.set('Suzuki' , 'RM250z');
motocycle.set('Yamaha' , 'YF250');

for (let name of motocycle.keys()){
    console.log(`ключ - ${name} , значение - ${motocycle.get(name)}`);
}