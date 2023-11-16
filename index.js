
const goodbye = (userName) => {
    document.querySelector(".email__closing").textContent = `S pozdravem ${userName}`
}

goodbye("Pavel Ovesný")

const fillSubject = (subject) => {
    document.querySelector(".email__subject").textContent = subject
}

fillSubject("Nová zpráva")

const fillBody = (body, name) => {
    document.querySelector(".email__body").textContent = body
    goodbye(name)
}

fillBody("Toto je tělo emailu.", "Dana H.")


