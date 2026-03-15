const generateBtn = document.getElementById('generate-btn');
const menuCard = document.getElementById('recommended-menu');
const categoryTag = document.getElementById('menu-category');

const menus = [
    { name: '김치찌개', category: 'korean', categoryName: '한식' },
    { name: '불고기', category: 'korean', categoryName: '한식' },
    { name: '비빔밥', category: 'korean', categoryName: '한식' },
    { name: '삼겹살', category: 'korean', categoryName: '한식' },
    { name: '된장찌개', category: 'korean', categoryName: '한식' },
    { name: '짜장면', category: 'chinese', categoryName: '중식' },
    { name: '짬뽕', category: 'chinese', categoryName: '중식' },
    { name: '탕수육', category: 'chinese', categoryName: '중식' },
    { name: '마라탕', category: 'chinese', categoryName: '중식' },
    { name: '초밥', category: 'japanese', categoryName: '일식' },
    { name: '돈카츠', category: 'japanese', categoryName: '일식' },
    { name: '라멘', category: 'japanese', categoryName: '일식' },
    { name: '우동', category: 'japanese', categoryName: '일식' },
    { name: '파스타', category: 'western', categoryName: '양식' },
    { name: '피자', category: 'western', categoryName: '양식' },
    { name: '스테이크', category: 'western', categoryName: '양식' },
    { name: '햄버거', category: 'western', categoryName: '양식' },
    { name: '떡볶이', category: 'snack', categoryName: '분식' },
    { name: '치킨', category: 'snack', categoryName: '분식' },
    { name: '족발', category: 'snack', categoryName: '분식' }
];

generateBtn.addEventListener('click', () => {
    // Disable button during animation
    generateBtn.disabled = true;
    
    // Shuffle effect
    let count = 0;
    const shuffleInterval = setInterval(() => {
        const randomMenu = menus[Math.floor(Math.random() * menus.length)];
        menuCard.textContent = randomMenu.name;
        count++;
        
        if (count > 10) {
            clearInterval(shuffleInterval);
            const finalMenu = menus[Math.floor(Math.random() * menus.length)];
            
            // Final result
            menuCard.textContent = finalMenu.name;
            categoryTag.textContent = `#${finalMenu.categoryName}`;
            
            // Apply animations and categories
            menuCard.classList.remove('active', 'korean', 'western', 'japanese', 'chinese', 'snack');
            
            // Trigger reflow
            void menuCard.offsetWidth;
            
            menuCard.classList.add('active', finalMenu.category);
            generateBtn.disabled = false;
        }
    }, 50);
});
