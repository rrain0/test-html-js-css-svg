
function switchTest(){
    {
        const b0 = false, b1 = true, b2 = true;

        // выберется b1 - он первый true
        switch(true){
            case b0: console.log("b0"); break;
            case b1: console.log("b1"); break;
            case b2: console.log("b2"); break;
        }

    }

    // если после case не поставить break, то программа продолжит выполнять код из следующих ниже case, пока не найдёт break
    // есть default: <код> который выполнится, если ни один case не подошёл

}