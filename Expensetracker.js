var amount=document.getElementById('amount');;
var description=document.getElementById('description');
var category=document.getElementById('Category');
var form=document.getElementById('my-form');
var list = document.getElementById('users');
form.addEventListener('submit', submitoperation)

function submitoperation(e){
 e.preventDefault();
 var li=document.createElement('li');
 li.append(document.createTextNode(`${amount.value} ${description.value} ${category.value}`))
 var editButton = document.createElement('button');
    editButton.className = 'btn btn-primary btn-sm float-right js-button edit';
    editButton.textContent = 'edit';
    li.appendChild(editButton);
    
    var newButton = document.createElement('button');
    newButton.className = 'btn btn-primary btn-sm float-right js-button delete';
    newButton.textContent = 'delete';
    li.appendChild(newButton);

 list.appendChild(li)
 document.querySelector('.container').appendChild(list);

 document.getElementById('amount').value = '';
            document.getElementById('description').value = '';
            document.getElementById('Category').value = 'Movie';
}
userList.addEventListener('click', function(e) {
    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        var textContent = li.firstChild.textContent.trim();
        var values = textContent.split(' ');

        amount.value = values[0];
        description.value = values[1];
        category.value = values[2];
        list.removeChild(li); // Remove the old entry for editing
    } else if (e.target.classList.contains('delete')) {
        if (confirm('Sure?')) {
            var li = e.target.parentElement;
            list.removeChild(li);
        }
    }
});