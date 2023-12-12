const tittle=document.getElementById("tittle");
const des=document.getElementById("description");
const form=document.querySelector("form");
const container=document.querySelector(".container");

const arr=localStorage.getItem('arr') ?JSON.parse( localStorage.getItem('arr')):[];
showAll();
function showAll(){
    arr.forEach((value,index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","record");

        const innerDiv=document.createElement("div");
        div.append(innerDiv);

        const p=document.createElement("p");
        p.innerText=value.tittle;
        innerDiv.append(p);
        const sp=document.createElement("span");
        sp.innerText=value.description;
        innerDiv.append(sp);

        const btn=document.createElement("button");
        btn.setAttribute("class","d-btn");
        btn.innerText="-";
        btn.addEventListener("click",()=>{
            remov();            
            arr.splice(index,1);
            localStorage.setItem("arr",JSON.stringify(arr));
            showAll();
        })
        div.append(btn);
        container.append(div);

    })
}

function remov(){
    arr.forEach(()=>{
        const div=document.querySelector(".record");
        div.remove();
    })
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    remov();
    arr.push({
        tittle:tittle.value,
        description:des.value
    })
    localStorage.setItem("arr",JSON.stringify(arr));
    console.log(arr);
    showAll();
})