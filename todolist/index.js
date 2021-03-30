const taskForm=document.querySelector('form');
const taskContainer=document.querySelector('.tasks');

taskForm.addEventListener('submit',(event)=>{
    let taskData= new FormData(taskForm);

    console.log(taskData.get('task'));

    let taskHTML=`
            <li class="task">
                <p>${taskData.get('task')} <span><input type="checkbox" name="complete"></p>
            </li>

    `

    taskContainer.innerHTML+=taskHTML;

    taskForm.reset();

    event.preventDefault();
})