const language = () => {
    const h1 = document.querySelector('#h1'),
        btnChangeLangoage = document.querySelector('#changeLanguageToUa'),
        pMain = document.querySelector('#pMain'),
        showForm = document.querySelector('.showForm'),
        btn = document.querySelector('.btn'),
        clear = document.querySelector('.clear'),
        message = document.querySelector('.message'),
        overlayParagraph = document.querySelector('.overlay__paragraph'),
        yes = document.querySelector('.yes'),
        no = document.querySelector('.no'),
        overlayYesParagraph = document.querySelector('.overlay__yes__paragraph'),
        overlayNoTasksParagraph = document.querySelector('.overlay__noTasks__paragraph'),
        btnMyBad = document.querySelector('.btnMyBad'),
        magickBtn = document.querySelector('.showForm'),
        input = document.querySelector('[name="text"]'),
        parrent = document.querySelector('.tasks');
    
    const changeLanguageToUs = document.querySelector('#changeLanguageToUs');

    let counterOfBtn = 0;


    changeLanguageToUs.addEventListener('click', () => {
        localStorage.setItem(`language`, 0);
        changeUs();
    });

    btnChangeLangoage.addEventListener('click', () => {
        localStorage.setItem(`language`, 1);
        changUa();
    });

    if (localStorage.getItem(`language`) == 1) {
        changUa();
    }

    try {
        magickBtn.addEventListener('click', () => counterOfBtn = 1);
    }catch(e){}

    
    function changeUs() {
        if (counterOfBtn == 0) {
            pMain.textContent = 'My first pet project';
        }
        if (counterOfBtn == 1 || parrent.childNodes.length > 0) {
            pMain.textContent = 'Here you can writh your tasks';
        }
        input.setAttribute('placeholder', 'input your task');
        try {
            h1.textContent = 'Hi, it`s simple To Do web app';
            showForm.style.cssText = 'font-size: 25px;';
            showForm.textContent = `let's start`;
        } catch (e) {}
        clear.style.cssText = 'font-size: 25px;';
        clear.textContent = 'Clear All';
        btn.style.cssText = 'font-size: 25px;';
        btn.textContent = 'Add task';
        message.textContent = 'There is nothing to submit, please write your task';
        overlayParagraph.textContent = 'You are sure you want to delete all tasks ?';
        yes.textContent = 'Yes';
        no.textContent = 'Noooooo';
        overlayYesParagraph.textContent = 'All tasks are cleared';
        overlayNoTasksParagraph.textContent = 'There is no tasks yeat. So i`ts nothing to delete.';
        btnMyBad.textContent = 'Ok, my bad';
    }
    
    function changUa() {
        
        if (counterOfBtn == 0) {
            pMain.textContent = 'Мій перший пет проект';
        }
        if (counterOfBtn == 1 || parrent.childNodes.length > 0) {
            pMain.textContent = 'Тут ви можете писати ваші нотатки';
        }
        try {
            h1.textContent = 'Привіт, це простий записник';
            showForm.style.cssText = 'font-size: 20px;';
            showForm.textContent = 'Розпочнімо';
        } catch (e) {}
        input.setAttribute('placeholder', 'введіть текст') ;
        clear.style.cssText = 'font-size: 19px;';
        clear.textContent = 'Видалити все';
        btn.style.cssText = 'font-size: 19px;';
        btn.textContent = 'Додати нотатку';
        message.textContent = 'Поки що нотаток немає, будь ласка спочатку напишіть щось';
        overlayParagraph.textContent = 'Ви впевнені що хочете видалити всі записи?';
        yes.textContent = 'Так';
        no.textContent = 'Нііііі';
        overlayYesParagraph.textContent = 'Всі записи видалено';
        overlayNoTasksParagraph.textContent = 'Поки що немає записів. Нічого видаляти.';
        btnMyBad.textContent = 'Зрозуміло';
    }


        
};

export default language;