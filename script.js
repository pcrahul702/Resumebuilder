function addnewlink(){
//  console.log("adding new fielda");
let newnode=document.createElement('input');
newnode.classList.add('form-control');
newnode.classList.add('my-2');
newnode.classList.add('linkfield');

newnode.setAttribute("placeholder","Enter here");
let linkadd=document.getElementById("linkadd")
let laddbtn=document.getElementById("laddbtn")
linkadd.insertBefore(newnode,laddbtn);

}
function education(){
    //  console.log("adding new fielda");
    let newnode=document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('mt-3');
    newnode.classList.add('efield');
    
    newnode.setAttribute("placeholder","Enter here");
    let education=document.getElementById("education")
    let eaddbtn=document.getElementById("eaddbtn")
    education.insertBefore(newnode,eaddbtn);
    

    }
    function experiance(){
        //  console.log("adding new fielda");
        let newnode=document.createElement('textarea');
        newnode.classList.add('form-control');
        newnode.classList.add('mt-3');
        newnode.classList.add('wefield');
        
        newnode.setAttribute("placeholder","Enter here");
        let we=document.getElementById("we")
        let weaddbtn=document.getElementById("weaddbtn")
        we.insertBefore(newnode,weaddbtn);
        
        }
        function project(){
            //  console.log("adding new fielda");
            let newnode=document.createElement('textarea');
            newnode.classList.add('form-control');
            newnode.classList.add('mt-3');
            newnode.classList.add('wefield');
            
            newnode.setAttribute("placeholder","Enter here");
            let project=document.getElementById("project")
            let paddbtn=document.getElementById("paddbtn")
            project.insertBefore(newnode,paddbtn);
            
            }
            function ac(){
                //  console.log("adding new fielda");
                let newnode=document.createElement('textarea');
                newnode.classList.add('form-control');
                newnode.classList.add('mt-3');
                newnode.classList.add('afield');
                
                newnode.setAttribute("placeholder","Enter here");
                let acment=document.getElementById("ach")
                let caddbtn=document.getElementById("caddbtn")
                acment.insertBefore(newnode,caddbtn);
                
                }