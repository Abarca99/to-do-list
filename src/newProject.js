export default function newProject(){
    const labelWrapper1 = document.createElement("div");
    labelWrapper1.setAttribute("class","wrapper1");
    const labelWrapper2 = document.createElement("div");
    labelWrapper2.setAttribute("class","wrapper2");


    const newProjectOverlay = document.createElement("div");
    newProjectOverlay.setAttribute("class","newProjectOverlay");

    const newTaskFieldset = document.createElement("fieldset");
    const newTaskLegend = document.createElement("legend");
    newTaskLegend.textContent = "New Project"
    const newTaskForm = document.createElement("form");

    const newTaskLable1 = document.createElement("label");
    newTaskLable1.setAttribute("for","title");
    newTaskLable1.textContent = "Title"
    const newTaskInput1 = document.createElement("input");
    newTaskInput1.setAttribute("type","text");
    newTaskInput1.setAttribute("id","title");
    newTaskInput1.setAttribute("name","title");
    newTaskInput1.required = true;
    labelWrapper1.appendChild(newTaskLable1);
    labelWrapper1.appendChild(newTaskInput1);

    const newTaskLable2 = document.createElement("label");
    newTaskLable2.setAttribute("for","date");
    newTaskLable2.textContent = "Due Date"
    const newTaskInput2 = document.createElement("input");
    newTaskInput2.setAttribute("type","date");
    newTaskInput2.setAttribute("id","date");
    newTaskInput2.setAttribute("name","date");
    labelWrapper2.appendChild(newTaskLable2);
    labelWrapper2.appendChild(newTaskInput2);
    newTaskInput2.required = true;

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type","submit");
    submitButton.textContent = "SUBMIT" 
    submitButton.setAttribute("class","submitForm");

    newTaskForm.appendChild(labelWrapper1);
    newTaskForm.appendChild(labelWrapper2);
    newTaskForm.appendChild(submitButton);


    newTaskFieldset.appendChild(newTaskLegend);
    newTaskFieldset.appendChild(newTaskForm);

    newProjectOverlay.appendChild(newTaskFieldset);
    document.querySelector(".mainWindow").appendChild(newProjectOverlay);
    }