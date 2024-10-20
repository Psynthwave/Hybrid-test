window.onload = () => {
    function miniGame() {

        const game = document.getElementById('game');
        game.classList.add('game-container');
        
        // Создание элементов мини-игры
        
        // Счетчик
        const gameCounter = document.createElement('div');
        gameCounter.classList.add('game-counter');
        
        // Текст счетчика
        const gameCounterText = document.createElement('span');
        gameCounterText.classList.add('game-counter__text');
        gameCounterText.textContent = 'ГОТОВНОСТЬ';
        
        // Значение счетчика
        const gameCounterMeaning = document.createElement('span');
        gameCounterMeaning.classList.add('game-counter__meaning');
        gameCounterMeaning.textContent = '0/5';
        
        //Предметы для игры
        const gameItems = document.createElement('div');
        gameItems.classList.add('game-items');
        
        // Nintendo
        const nintendo = document.createElement('div');
        nintendo.classList.add('nintendo-img', 'school-item');
        
        // Карандаш
        const pencil = document.createElement('div');
        pencil.classList.add('pencil-img', 'school-item');
        
        // USB
        const usb = document.createElement('div');
        usb.classList.add('usb-img', 'school-item');
        
        // Тетрадь
        const notebook = document.createElement('div');
        notebook.classList.add('notebook-img', 'school-item');
        
        // Ручка
        const pen = document.createElement('div');
        pen.classList.add('pen-img', 'school-item');
        
        // Текст задания
        const taskText = document.createElement('div');
        taskText.classList.add('task-img');
        
        // Рюкзак
        const backpack = document.createElement('div');
        backpack.classList.add('backpack-img');
        
        // Блики
        const blick1 = document.createElement('div');
        const blick2 = document.createElement('div');
        const blick3 = document.createElement('div');
        blick1.classList.add('blick1-img');
        blick2.classList.add('blick2-img');
        blick3.classList.add('blick3-img');
        
        // Кнопка рестарта
        const restartButton = document.createElement('button');
        restartButton.classList.add('restart-btn');
        restartButton.textContent = 'Попробуй еще';
        
        // Отрисовка
        game.append(gameCounter);
        gameCounter.append(gameCounterText);
        gameCounter.append(gameCounterMeaning);
        game.append(gameItems);
        gameItems.append(nintendo);
        gameItems.append(pencil);
        gameItems.append(usb);
        gameItems.append(notebook);
        gameItems.append(pen);
        gameItems.append(taskText);
        gameItems.append(blick1);
        gameItems.append(blick2);
        gameItems.append(blick3);
        game.append(backpack);
        
            // Логика игры: при клике на предметы, прибавляем значение счетчика;
            // в конце, когда счетчик достигает нужного значения, добавляем текст и кнопку рестарта;
            // кнопка рестарта скорее всего должна вести на сторонний ресурс, но в данном случае через нее перезапускаем интерактив.
        
            const itemsCollection = document.querySelectorAll(".school-item");
            let count = gameCounterMeaning.textContent.charAt(0);
            
            itemsCollection.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.add('clicked-item');
                    count++;
                    gameCounterMeaning.textContent = count + '/5';
        
                    if (count == 5) {
                        
                        gameCounter.classList.toggle('hidden');
                        gameItems.classList.toggle('hidden');
                        taskText.classList.toggle('hidden');
                        blick1.classList.toggle('hidden');
                        blick2.classList.toggle('hidden');
                        blick3.classList.toggle('hidden');
                        backpack.classList.remove('backpack-img');
                        backpack.classList.add('backpack-img__reverse');
        
                        setTimeout(() => {
                            
                            gameCounter.classList.remove('game-counter', 'hidden');
                            gameCounter.classList.add('endgame-text');
                            gameCounter.textContent = 'ТЕПЕРЬ ТЫ\u00A0ГОТОВ!';
        
                            game.append(restartButton);
                            
                            let tryAgain = document.querySelector('.restart-btn');
                            tryAgain.addEventListener("click", () => {
                                game.innerHTML = '';
                                count = 0;
                                miniGame();
                            })
                        }, 500);
                    }
            });
            });
        }
        miniGame();
  };