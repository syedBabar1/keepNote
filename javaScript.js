const addButton = document.querySelector("#btn");

const updateLSData=()=>{
    const textAreaData=document.querySelectorAll('textarea');
    const notes=[];
    console.log(textAreaData);
    textAreaData.forEach((note)=>{
        return notes.push(note.value);
    })
    console.log(notes);
    localStorage.setItem('notes',JSON.stringify(notes));
}


function addNote(text = " ") {

    const parent = document.createElement("div");
    parent.classList.add('p');

    const htmlData = `<div class="child">
    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-sharp fa-solid fa-eraser"></i></button>
</div>
<div class="main ${text ? " " :"hidden" } "></div>
<textarea class=" ${ text ? "hidden" :"" }"></textarea> `;

    parent.insertAdjacentHTML('afterbegin', htmlData);
    const editButton=parent.querySelector('.edit');
    const deleteButton=parent.querySelector('.delete');
    const mainDiv=parent.querySelector('.main');
    const textareaa=parent.querySelector('textarea');

    //delete txt area

    function divRemove(){
        parent.remove();
    }

    //edit button
    textareaa.value=text;
    mainDiv.innerHTML=text;
    function edit(){
        mainDiv.classList.toggle('hidden');
        textareaa.classList.toggle('hidden');
    }
    textareaa.addEventListener('change',( event)=>{
        const value=event.target.value;
        mainDiv.innerHTML=value;

        updateLSData();
        
    })
    editButton.addEventListener('click',edit);
    deleteButton.addEventListener('click',divRemove);
    document.body.appendChild(parent);

}
const notes=JSON.parse(localStorage.getItem('notes'));
if(notes){ notes.forEach((note)=>addNote(note))};



addButton.addEventListener('click', addNote);