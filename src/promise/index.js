const somethingWillHappen = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('hey!!!');
        }else{
            reject('uuups!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject) =>{
        if (true) {
            setTimeout(() =>{
            resolve('si sucedio que era cierto');
            }, 5000)
        } else {
            const error = new Error('algo salió mal');
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log('Hola, hola'))
    .catch(er => console.log(er));