import { createElement } from '../app/createElement.js';
import { render } from '../app/render.js';
// import { render } from './render.js';

<<<<<<< Updated upstream

export const NewsList = () => {
    return createElement('div', { class: 'news-container' },
        createElement('img', { src: '../../assets/icons/left-arrow-button.svg', alt: 'left arrow icon'}),
        createElement('div', { class: 'news-content-container'},
            createElement('div', { class: 'news-category-container'},
           createElement('categoryButton', {id: 0}, '종합/경제'),
           createElement('categoryButton', {id: 1}, '방송/통신'),
           createElement('categoryButton', {id: 2}, '영자지'),
           createElement('categoryButton', {id: 3}, '스포츠/연예'),
           createElement('categoryButton', {id: 4}, '매거진/전문지'),
           createElement('categoryButton', {id: 5}, '지역'),
            )
        ),

        createElement('img', { src: '../../assets/icons/right-arrow-button.svg', alt: 'right arrow icon'})
    )
};

// render(NewsList(), document.getElementById('app'));
=======
    function autoChangePress() {
        selectedId = `news-category-${selectedId}`;
        const selectedButton = element.querySelector(`#${selectedId}`);

        changeStyle(selectedButton)
    }

    function autoChangeCategory() {
        const currentId = parseInt(selectedId.split('-')[2]);
        const nextId = (currentId + 1) % 6;

        selectedId = `news-category-${nextId}`;
        const selectedButton = element.querySelector(`#${selectedId}`);
    
        changeStyle(selectedButton);
    }   

    function onClickEvent(event) {
        selectedId = event.target.id;
        const selectedButton = element.querySelector(`#${selectedId}`);
        changeStyle(selectedButton);
    }

    function changeStyle(selectedButton) {
        const buttons = element.querySelectorAll('.news-category-button');
        const progressButtons = element.querySelectorAll('.news-category-button-progress');
        const categoryCount = element.querySelector(`#category-count`);

        if (categoryCount) {
            categoryCount.remove();
        }

        buttons.forEach((button, index) => {
            progressButtons[index].style.width = 0;
            progressButtons[index].style.backgroundColor = 'transparent';
            button.style.backgroundColor = 'transparent'; 
            button.style.color = rootStyles.getPropertyValue('--color-text-weak');
        });

        selectedButton.style.backgroundColor = rootStyles.getPropertyValue('--color-surface-brand-alt');
        selectedButton.style.color = rootStyles.getPropertyValue('--color-text-white-default');

        setProgress(selectedButton)
        addCountElement(selectedButton)
    }

    function addCountElement(selectedButton) {
        const spanElement = document.createElement('span');
        spanElement.id = "category-count"
        spanElement.textContent = ' 1/81 ';
        
        selectedButton.appendChild(spanElement);
        selectedButton.style.width = 'max-content'
    }

    function setProgress(selectedButton) {
        if (progressInterval) {
            clearInterval(progressInterval);
        }

        const progressElement = selectedButton.querySelector('.news-category-button-progress');
        
        if (progressElement) {
            let progress = 0;
            progressInterval = setInterval(() => {
                progress += 1;
                progressElement.style.width = `${progress}%`;
                progressElement.style.backgroundColor = rootStyles.getPropertyValue('--color-surface-brand-default');
                
                if (progress >= 100) {
                    progressElement.style.width = 0;
                    progressElement.style.backgroundColor = 'transparent';
                    clearInterval(progressInterval);
                }
            }, 200);
        }
    }

    function render() {
        const html = `
            <img src="../../assets/icons/left-arrow-button.svg" alt="left arrow icon">
            <div class="news-content-container">
                <div class="news-category-container">
                    <button class="news-category-button" id="news-category-0"}>
                        <div class="news-category-button-progress" id="news-category-0"></div>
                        <span id="news-category-0">종합/경제</span>
                    </button>
                    <button class="news-category-button" id="news-category-1">
                        <div class="news-category-button-progress" id="news-category-1"></div>
                        <span id="news-category-1">방송/통신</span>
                    </button>
                    <button class="news-category-button" id="news-category-2">
                        <div class="news-category-button-progress id="news-category-2"></div>
                        <span id="news-category-2">영자지</span>
                    </button>
                    <button class="news-category-button" id="news-category-3">
                        <div class="news-category-button-progress" id="news-category-3"></div>
                        <span id="news-category-3">스포츠/연예</span>
                    </button>
                    <button class="news-category-button" id="news-category-4">
                        <div class="news-category-button-progress" id="news-category-4"></div>
                        <span id="news-category-4">매거진/전문지</span>
                    </button>
                    <button class="news-category-button" id="news-category-5">
                        <div class="news-category-button-progress" id="news-category-5"></div>
                        <span id="news-category-5">지역</span>
                    </button>
                </div>
            </div>
            <img src="../../assets/icons/right-arrow-button.svg" alt="right arrow icon">
        `;
        
        element.innerHTML = html;

        const buttons = element.querySelectorAll('.news-category-button');
        buttons.forEach(button => {
            button.addEventListener('click', onClickEvent);
        });

        const initiallySelectedButton = element.querySelector(`#${selectedId}`);
        if (initiallySelectedButton) {
            changeStyle(initiallySelectedButton)
        }
    }

    render();

    setInterval(autoChangeCategory, 20000);

    return {
        element
    };
}

export default NewsList;
>>>>>>> Stashed changes
