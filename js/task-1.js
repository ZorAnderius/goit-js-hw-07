const categories = document.getElementById("categories");

const items = categories.children;
console.log('Number of categories: ', items.length);

// for (const item of items) {
//     const itemChildren = item.children;
//     console.log("Category:", itemChildren[0].textContent);
//     console.log("Elements:", itemChildren[1].children.length);
// }

[...items].forEach(({children : item}) => {
    console.log("Category:", item[0].textContent);
    console.log("Elements:", item[1].children.length);
});
