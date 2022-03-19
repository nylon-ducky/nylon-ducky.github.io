window.onload = () => {
    let start = window.location.href.lastIndexOf("/");
    let end = window.location.href.length;
    let page = window.location.href.slice(start + 1, end);
    let trim = page.lastIndexOf(".");
    page = page.slice(0, trim);
    let x = "";
    let y = [];
    let z = [];
    let prev = 0;

    let history = document.getElementById("history");

    if (!sessionStorage.getItem("path")) {

        sessionStorage.setItem("path", page);
        console.log(sessionStorage.getItem("path"));
        console.log("session storage created and populated");
        


    }else {
        let ss = sessionStorage.getItem("path");
        x += ss + ",";
        x += page;

        sessionStorage.clear();
        sessionStorage.setItem("path", x)

        console.log("else \n" + ss + "\n x += \n" + x);

        for (let i = 0; i < x.length; i++) {
            if (x[i] == ",") {
                y.push(i);
            }
        }

        for (let j = 0; j <y.length; j++) {

            prev = j+1

            let clean = x.slice(y[j] + 1, y[prev]);
            if (clean == "Index" || clean == "index") {
                z.push(clean);

                let a = document.createElement("a")

                a.href = `${clean}.html`;
                a.innerText = `Home`;

                history.appendChild(a)

                let span = document.createElement("span");
                span.innerText = " > ";
                history.appendChild(span);

                
            }else if (clean == "Faq" || clean == "faq") {
                z.push(clean);

                let a = document.createElement("a")

                a.href = `${clean}.html`;
                a.innerText = `FAQ`;

                history.appendChild(a)

                let span = document.createElement("span");
                span.innerText = " > ";
                history.appendChild(span);

                
            }else {

                z.push(clean);

                let a = document.createElement("a")

                a.href = `${clean}.html`;
                a.innerText = `${clean}`;

                history.appendChild(a)

                let span = document.createElement("span");
                span.innerText = " > ";
                history.appendChild(span);
            }

        }
        console.log(x)
        console.log(y)
        console.log(z)
        

    }

    if (z[z.length - 1] == "Index") {
        z[z.length - 1] = "Home"
    }
    let cur = document.getElementById(z[z.length - 1]);
    console.log(cur)
    cur.style.borderBottom = "3px solid rgba(255, 68, 0, 0.5)";



}








