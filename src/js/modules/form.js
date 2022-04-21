const form = (inputSelector, btnSelector, parrentSelector, formSelector) => {
    const input = document.querySelector(inputSelector),
        btn = document.querySelector(btnSelector),
        parrent = document.querySelector(parrentSelector),
        form = document.querySelector(formSelector),
        magicBtn = document.querySelector('.showForm'),
        clearBtn = document.querySelector('.clear'),
        yesBtn = document.querySelector('.yes'),
        noBtn = document.querySelector('.no'),
        overlay = document.querySelector('.overlay'),
        overlayYes = document.querySelector('.overlay__yes'),
        overlayNoTasks = document.querySelector('.overlay__noTasks'),
        btnMyBad = document.querySelector('.btnMyBad'),
        h1 = document.querySelector('#h1'),
        pMain = document.querySelector('#pMain'),
        btnCloseInfo = document.querySelector('.overlay__info-btn'),
        btnInfo = document.querySelector('.info'),
        infoOverlay = document.querySelector('.overlay__info'),
        infoText = document.querySelector('.overlay__info-text');

    
    
    let counter = 0;
    let counterOfBtn = 0;
    if (!localStorage.getItem(`language`)) {
        const lang = localStorage.setItem(`language`, 0);
    }
    // console.log(counterOfBtn);
    // console.log(counter);
    // console.log(closeBtn)

    // if (parrent.childNodes) {
    //     console.log('ok');
    //     console.log(parrent.childNodes);
    // }

    btnInfo.addEventListener('click', () => {
        infoOverlay.style.display = 'block';
        if (localStorage.getItem(`language`) == 0) {
            infoText.textContent = `
            The notes you make here will be saved after reloading the page and even after closing the browser. So you don't have to worry about something happening to your records. Unless you want to delete them yourself, you need to swipe the note to the left or click on the cross. There is also a 'Delete All' button that can delete all entries. But be careful removing them, they will not return. Also, this notebook can memorize the language you have chosen to use. So, I hope you enjoy this web application.
            `;
        } else {
            infoText.textContent = `
            Нотатки які ви зробите тут, збережуться  після перезавантаження сторінки та навіть після закриття брузеру. Тож ви можете не хвилюватись що з вашими записами щось трапиться. Хіба що ви самі захочете їх видалити, для цього потрібно просо свайпнути нотатку вліво, чи натиснути на хрестик. Є також кнопка 'Видалити все', яка зможе видалити всі записи. Але будь обережним видаливши їх, вони вже не повернуться. Також цей записник вміє замап'ятовувати мову яку ви вибрали для користування. Тож, я надіюсь вам сподобається цей веб застосунок, приємного користування.
            `;
        }
    });
    btnCloseInfo.addEventListener('click', () => {
        infoOverlay.style.display = 'none';
    });




    function addTask() {
        const task = document.createElement('div'),
            closeBtn = document.createElement('div');
            counter++;
            task.classList.add('task', 'animate__animated',  'animate__bounceIn');
            localStorage.setItem(`task${counter}`, input.value);
            console.log(localStorage.getItem(`task${counter}`));
            task.textContent = localStorage.getItem(`task${counter}`);
            closeBtn.classList.add('close');
            closeBtn.textContent = 'X';
        
            task.append(closeBtn);
        
            parrent.prepend(task);
            // console.log('clicked');
            input.value = '';
        console.log(counter);
        localStorage.setItem(`counter`, `${counter}`);
    }
    
    magicBtn.addEventListener('click', function(e){
        e.preventDefault();
        counterOfBtn = 1;
        // console.log(counterOfBtn);
        magicBtn.classList.add('animate__animated', 'animate__zoomOut');
        magicBtn.remove();
        form.classList.add('animate__animated', 'animate__flipInX');
        form.style.display = 'flex';
        h1.remove();
        pMain.classList.add('animate__animated', 'animate__fadeInDown');
        if (counterOfBtn == 1 && localStorage.getItem(`language`) == 0) {
            pMain.textContent = `Here you can writh your tasks`;
        }
        if (counterOfBtn == 1 && localStorage.getItem(`language`) == 1) {
            pMain.textContent = `Тут ви можете писати ваші нотатки`;
        }
        
        
    });
    
    
    clearBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (localStorage.getItem(`counter`) > 0) {
            overlay.style.display = 'block';
            overlay.classList.add('animate__animated',  'animate__bounceIn')
        }
        if (localStorage.getItem(`counter`) == 0) {
            overlayNoTasks.style.display = 'block';
        }

        
        
    });

    noBtn.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.style.display = 'none';
    });

    yesBtn.addEventListener('click', function (e) {
        e.preventDefault();
        parrent.textContent = '';
        for (let i = 1; i <= localStorage.getItem(`counter`); i++){
            if (localStorage.getItem(`counter`) > 0) {
            localStorage.removeItem(`task${i}`);
            }
        }
        localStorage.setItem(`counter`, 0);
        counter = 0;
        overlay.style.display = 'none';
        overlayYes.style.display = 'block';
        setTimeout(() => overlayYes.classList.add('animate__animated', 'animate__fadeOut') , 1000);
        setTimeout(() => overlayYes.style.display = 'none', 1500);

    });

    btnMyBad.addEventListener('click', () => {
        overlayNoTasks.style.display = 'none';
    });





    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value !== '') {
            document.querySelector('.message').style.display = 'none';
            addTask();
        } else {
            document.querySelector('.message').style.display = 'block';
            console.log('You dont write enithing yeat');
        }     
    });

    function showTasks() {
        for (let i = 1; i <= localStorage.getItem(`counter`); i++){
            if (localStorage.getItem(`counter`) > 0) {
            // console.log(`task ${i}`);
            const task = document.createElement('div'),
            closeBtn = document.createElement('div');
            task.classList.add('task', 'animate__animated',  'animate__bounceIn');
            task.textContent = localStorage.getItem(`task${i}`);
                // task.textContent = 'some text'
            closeBtn.classList.add('close');
            closeBtn.textContent = 'X';
            task.append(closeBtn);
            parrent.prepend(task);
            }
        }
    }
    
    
    function close() {
        parrent.addEventListener('click', function (e) {
            e.stopPropagation();
            if (e.target.classList.contains('close')) {
                localStorage.removeItem(`task${counter}`);
                // console.log(e.target);
                    counter--;
                    localStorage.setItem(`counter`, `${counter}`);

                        e.target.parentElement.classList.remove('animate__bounceIn');
                        e.target.parentElement.classList.add('animate__animated', 'animate__backOutLeft');


                    function delParrent() {
                        e.target.parentElement.remove();
                    }

                    setTimeout(function () {
                        delParrent();
                    }, 500);
           }
            
        });
    }
    

    function crossOutTheTask() {
        parrent.addEventListener('click', function (e) { 
            if (e.target.classList.contains('task')) {
                e.target.classList.toggle('done');
            }
        });
    }




    showTasks();
    crossOutTheTask();
    close();


    if (localStorage.getItem(`counter`) !== null) {
        counter = localStorage.getItem(`counter`);
    }



    if (parrent.childNodes.length > 0) {
        magicBtn.click();
        // console.log('yes');
    } else {
        // console.log('no');
    }
    // console.log(parrent.childNodes);
    // console.log(parrent.childNodes.length);


    let initialPoint;
let finalPoint;
document.addEventListener('touchstart', function(event) {
// event.preventDefault();
event.stopPropagation();
initialPoint=event.changedTouches[0];
}, false);
document.addEventListener('touchend', function(event) {
// event.preventDefault();
event.stopPropagation();
finalPoint=event.changedTouches[0];
const xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
const yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
if (xAbs > 20 || yAbs > 20) {
if (xAbs > yAbs) {
    if (finalPoint.pageX < initialPoint.pageX) {
    if (event.target.classList.contains('task')) {
                localStorage.removeItem(`task${counter}`);

                    counter--;
                    localStorage.setItem(`counter`, `${counter}`);

                        event.target.classList.remove('animate__bounceIn');
                        event.target.classList.add('animate__animated', 'animate__backOutLeft');
                    function delParrent() {
                        event.target.remove();
                    }

                    setTimeout(function () {
                        delParrent();
                    }, 500);
           }
/*СВАЙП ВЛЕВО*/}
else {
/*СВАЙП ВПРАВО*/}
}
else {
if (finalPoint.pageY < initialPoint.pageY){
/*СВАЙП ВВЕРХ*/}
else{
/*СВАЙП ВНИЗ*/}
}
}
}, false);
};

export default form;