document.addEventListener("DOMContentLoaded", () => {
        //al hacer clic en el h1 del card debe cambiar el texto a otro texto
        const h1 = document.querySelector(".card h1");
        h1.addEventListener("click", () => {
            h1.innerText = "Sara Armoa";
        });
        //si se da clic en la primera img del #connections li img debe aumentar el contador del p "before-h2" si se da clic en la segunda img se debe restar el contador
        const beforeH2 = document.querySelector(".before-h2");
        const acceptImage = document.querySelectorAll('#connections li img[src="./icons/accept-circle.png"]');
        const closeImage = document.querySelectorAll(
            '#connections li img[src="./icons/close-circle.png"]'
        );
        if (acceptImage) {
            acceptImage.forEach((element) => {
                element.addEventListener("click", (ev) => {
                    let elemento = ev.target.parentElement;
                    console.log("click", elemento);
                    elemento.remove();
                    beforeH2.innerText++;
                });  
            })
        }
        if (closeImage) {

            closeImage.forEach((element) => {
                element.addEventListener("click", (ev) => {
                    let elemento = ev.target.parentElement;
                    beforeH2.innerText--;
                    elemento.remove();
                });                
            })

        }
    });

