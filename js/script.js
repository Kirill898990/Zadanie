// Функция для открытия модального окна
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    resetForm();
}

// Функция для сброса формы
function resetForm() {
    document.getElementById('student-name').value = '';
    document.getElementById('student-answer').value = '';
}

// Функция для сохранения ответа
function saveAnswer() {
    const name = document.getElementById('student-name').value.trim();
    const answer = document.getElementById('student-answer').value.trim();
    
    if (!name || !answer) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
    
    const answersList = document.getElementById('answers-list');
    const newAnswer = document.createElement('div');
    newAnswer.classList.add('answer-item');
    
    newAnswer.innerHTML = `
        <strong>Имя:</strong> ${name}<br>
        <strong>Ответ:</strong> ${answer}
    `;
    
    answersList.appendChild(newAnswer);
    
    // Очищаем форму после сохранения
    resetForm();
}

// Обработка загрузки файлов
document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('student-file');
    
    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            document.getElementById('file-info').textContent = `Загружен файл: ${file.name}`;
        }
    });
});
