const menu = [
    {
        id: 1,
        title: "Blueberry pancake",
        category: "Breakfast",
        price: 10,
        img: "images/menu/Breakfast/pancake.jpg",
        desc: "Curabitur sodales turpis sapien, quis commodo ipsum porttitor eu. Donec fringilla orci et condimentum pellentesque.",
    },
    {
        id: 2,
        title: "Eggs & ham",
        category: "Breakfast",
        price: 14,
        img: "./images/menu/Breakfast/eggsham.jpg",
        desc: "Curabitur sit amet tincidunt odio. Nulla semper ornare mollis. Donec vitae enim sit amet tellus sodales mattis malesuada in dui.",
    },
    {
        id: 3,
        title: "Scrambled eggs",
        category: "Breakfast",
        price: 15,
        img: "./images/menu/Breakfast/eggscrl.jpg",
        desc: "Phasellus eleifend mollis mauris, bibendum bibendum nisl fermentum at. Curabitur consequat quam eu facilisis vulputate. Quisque eu efficitur purus.",
    },
    {
        id: 4,
        title: "Poached eggs",
        category: "Breakfast",
        price: 11,
        img: "./images/menu/Breakfast/eggpoa.jpg",
        desc: "Maecenas suscipit ante vitae nibh gravida tincidunt. Phasellus sit amet risus eget felis pulvinar pulvinar sed et turpis. Nulla pretium efficitur justo et luctus.",
    },
    {
        id: 5,
        title: "Yogurt with strawberries & blueberry",
        category: "Breakfast",
        price: 7,
        img: "./images/menu/Breakfast/yogurt.jpg",
        desc: ""
    },
    {
        id: 6,
        title: "English breakfast",
        category: "Breakfast",
        price: 21,
        img: "./images/menu/Breakfast/englbrkfst.jpg",
        desc: "Proin nec scelerisque odio, ut sagittis nulla. Duis at finibus magna, quis hendrerit nunc. Aenean nibh erat, malesuada sit amet consequat a, pellentesque in erat. In eget turpis vel est efficitur varius et et sapien.",
    },
    {
        id: 7,
        title: "Croissant ",
        category: "Breakfast",
        price: 3,
        img: "./images/menu/Breakfast/croissant.jpg",
        desc: "Nam ex leo, tincidunt ultricies faucibus at, iaculis sit amet tortor.",
    },
    {
        id: 8,
        title: "Vegetable noodles",
        category: "Lunch",
        price: 15,
        img: "./images/menu/Luch/vgnoodles.jpg",
        desc: "Nulla ac libero sapien. Fusce non nulla vel orci ullamcorper condimentum. Nam in purus eu lacus sagittis lobortis.",
    },
    {
        id: 9,
        title: "Pesto pasta",
        category: "Lunch",
        price: 10,
        img: "./images/menu/Luch/pesto.jpg",
        desc: "Aenean sit amet congue velit. Quisque vitae dapibus sem. Nullam molestie et lorem quis porta.",
    },
    {
        id: 10,
        title: "Orange chicken",
        category: "Lunch",
        price: 18,
        img: "./images/menu/Luch/orangeckn.jpg",
        desc: "Morbi egestas metus in condimentum euismod. Suspendisse non sagittis nulla. Duis nunc libero, venenatis sed augue quis, mollis congue odio.",
    },
    {
        id: 11,
        title: "Noodles rice with chicken salad",
        category: "Lunch",
        price: 16,
        img: "./images/menu/Luch/cknnoodles.jpg",
        desc: "Mauris non interdum arcu. Aenean eu sagittis mi, vitae imperdiet leo. Vivamus porta accumsan neque. Duis gravida interdum tristique.",
    },
    {
        id: 12,
        title: "Lunch",
        category: "chicken wing",
        price: 15,
        img: "./images/menu/Luch/cknwing.jpg",
        desc: "Morbi finibus, nisl volutpat imperdiet porttitor, ipsum leo sagittis purus, at rutrum urna lectus quis purus. Morbi sed pellentesque elit, ut facilisis enim.",
    },
    {
        id: 13,
        title: "Sushi rice",
        category: "Lunch",
        price: 10,
        img: "./images/menu/Luch/sushirice.jpg",
        desc: "Aliquam scelerisque felis sed elit laoreet, nec scelerisque elit volutpat. Fusce venenatis dictum ante, vel pharetra nunc.",
    },
    {
        id: 14,
        title: "curry rice",
        category: "Lunch",
        price: 9,
        img: "./images/menu/Luch/cryrice.jpg",
        desc: "Aenean dapibus sapien ac elementum viverra. ",
    },
    {
        id: 15,
        title: "strawberry shake",
        category: "Shakes",
        price: 5,
        img: "./images/menu/Shakes/stw.jpg",
        desc: "Donec malesuada, nulla in sagittis aliquet, enim sem euismod neque, a ultrices augue massa non mauris.",
    },
    {
        id: 16,
        title: "milkshake ",
        category: "Shakes",
        price: 6,
        img: "./images/menu/Shakes/mlk.jpg",
        desc: "Nulla commodo volutpat turpis in sagittis.",
    },
    {
        id: 17,
        title: "red smoothie",
        category: "Shakes",
        price: 5,
        img: "./images/menu/Shakes/red.jpg",
        desc: "Sed felis nulla, varius et ultrices non, tempus at elit.",
    }
];

const sectionMenu = document.querySelector('.menu-container');
const btns = document.querySelectorAll('.btns-menu>a');

const brkItems = getCategoryItems(menu,'Breakfast');
const lnkItems = getCategoryItems(menu, 'Lunch');
const shkItems = getCategoryItems(menu, 'Shakes');

const srv_items = document.querySelectorAll('.services-item');
const points = document.querySelectorAll('.point');
const select = (idx, elements) =>{
    elements.forEach((e)=>{
        e.classList.remove('active');
    });

    elements[idx].classList.add('active');
};

window.addEventListener('DOMContentLoaded', ()=>{
    displayManuItems(menu);
    select(0, points);
    select(0, srv_items);
});

for(let i = 0; i< points.length; i++){
        points[i].addEventListener('click', ()=>{
            select(i, points);
            select(i, srv_items);
    });
}

btns.forEach((btn)=>{
    btn.addEventListener('click', (b)=>{

        btns.forEach(btnX => btnX.classList.remove('active'));

        const ev = b.currentTarget.classList;
        if(ev.contains('btn-brk')){
            displayManuItems(brkItems);
        } else if(ev.contains('btn-lnc')){
            displayManuItems(lnkItems);
        } else if(ev.contains('btn-shk')){
            displayManuItems(shkItems);
        } else {
            displayManuItems(menu);
        }

       b.currentTarget.classList.add('active');
    });
    
});


function getCategoryItems(menus, categories){
    let categoryItems = [];

    for (let ctg of menus){
        if(ctg.category === categories){
            categoryItems.push(ctg);
        }
    }  
    
    return categoryItems;
}

function displayManuItems(menuItems){
    let displayMenu = menuItems.map((item)=> {
        return `<article class="menu-item">
                        <img src=${item.img}/>
                        <div>
                            <div class="item-info">
                                <h3 class="title">${item.title}</h3>
                                <h3 class="price">$${item.price}</h3>
                            </div>
                            <hr/>
                            <p class="desc">${item.desc}</p>
                        </div>
                    </article>`;
    });

    displayMenu = displayMenu.join("");
    sectionMenu.innerHTML = displayMenu;
}





    
