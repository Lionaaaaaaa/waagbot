const pertanyaan = document.getElementById ('pertanyaan')
const jawaban = document.getElementById ('jawaban')

let init = 0

const botSay = (data) => {
    return ["Halo, nama aku waagbot. Nama kamu siapa?", `salam kenal yaa ${data?.nama}, kalo boleh tau umur kamu berapa??`, `ohh ${data?.usia} tohh,kalo hobi??, hobi kamu apa??`, `wahh ${data?.hobi},, kerenn. eh btw btw kamu udah punya pacar belumm?? hehee`, `owalahh ${data?.pacar} tohh, yaudah dengg` ]
}

pertanyaan.textContent = botSay () [0]

let usersData = []

function botStart () {
    init++
    if (init === 1) {
        console.log ({nama: jawaban.value})
        botDelay ({nama: jawaban.value})
    } else if (init === 2) {
        console.log ({usia: jawaban.value})
        botDelay ({usia: jawaban.value})
    } else if (init === 3) {
        console.log ({hobi: jawaban.value})
        botDelay ({hobi: jawaban.value})
    } else if (init === 4) {
        console.log ({pacar: jawaban.value})
        botDelay ({pacar: jawaban.value})
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay (jawabanUser) {
    console.log ({usersData: usersData })
    setTimeout(() => {
        pertanyaan.textContent = botSay (jawabanUser) [init]
     }, [1000])
     usersData.push(jawaban.value)
     jawaban.value = ""
}

function finishing() {
    console.log("finishing...")
    pertanyaan.textContent = `Thnk u ${usersData [0]} udh mampir ke waagbot!, semoga hari mu menyenangkan😊, nanti kita ${usersData [2]} bareng yahh😎✌️`
    jawaban.value = "sip thanks juga!"
}

function botEnd () {
    console.log ("bot end...")
    window.location.reload() 
}

  