function newImage(url,left,bottom){
    let object = document.createElement('img');
    object.src = url;
    object.style.position = 'fixed';
    object.style.left = left;
    object.style.bottom = bottom;
    document.body.append(object);
    return object
}
newImage('assets/green-character.gif','100px','100px');
newImage('assets/pine-tree.png','450px','200px');
newImage('assets/boulder.png','200px','300px');
newImage('assets/pillar.png','350px','100px');
newImage('assets/crate.png','150px','200px');
newImage('assets/well.png','500px','425px');



/*sword.addEventListener('click', function(){
    sword.remove()
})*/

function newItem(url,left,bottom){
    let item = document.createElement('img');
    item.src= url;
    item.style.position='fixed';
    item.style.left = left;
    item.style.bottom = bottom;
    document.body.append(item);
    item.addEventListener ('dblclick', function(){
        item.remove()
    })
    return item
}
newItem('assets/sword.png','500px','405px');
newItem('assets/sheild.png','165px','185px');
newItem('assets/staff.png','600px','100px');