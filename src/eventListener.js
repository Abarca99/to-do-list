import newProject from "./newProject";
import allContent from "./allContent";
import completedContent from "./completedContent";
import importantContent from "./importantContent";
import todayContent from "./todayContent";
import weekContent from "./weekContent";

export default function listenForClicks(){
    const button = document.querySelectorAll("button");

    button.forEach((item)=>{
        item.addEventListener("click",()=>{
            let className = item.getAttribute("class");

            switch(className){
                case "all":
                    allContent();
                    break;
                case "today":
                    todayContent();
                    break;
                case "week":
                    weekContent();
                    break;
                case "important":
                    importantContent();
                    break;
                case "completed":
                    completedContent();
                    break;
                case "newProjectButton":
                    newProject();
                    break;
                case "completed":
                    completedContent();
                    break;
            }
        })
    })
}