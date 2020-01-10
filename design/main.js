const itemsOpen = false
toggler = () =>{
    const toggle = document.getElementById("container")
    toggle.classList.toggle("active")
    if(this.itemsOpen){
        this.itemsActive();
    }
}

itemsActive = () =>{
    const toggle = document.getElementById("itemsProjects")
    toggle.classList.toggle("items-active")
    this.itemsOpen = !this.itemsOpen
}