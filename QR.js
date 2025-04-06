function generateQRCode() {
    let url = document.getElementById('urlInput').value.trim()
    if (!url) {
        url = "https://ennah123.github.io/QR/"
    }
    const errorText = document.getElementById('error')
    const print = document.getElementById('print')
    if (!url || !/^https?:\/\//i.test(url)) {
        errorText.innerText = 'Please enter a valid URL (e.g., http:// or https://)'
        return
    }

    document.getElementById('qrCode').innerHTML = ''

    const canvas = document.createElement('canvas')
    document.getElementById('qrCode').appendChild(canvas)

    QRCode.toCanvas(canvas, url, function (error) {
        if (error) {
            console.error(error)
            errorText.innerText = 'Error generating QR code'
        } else {
            console.log('QR code generated successfully!')
            errorText.innerText = ''
            print.style.display = 'block'
        }
    })
}

function hundelPrint() {
    print()
}

window.onload = function () {
    generateQRCode()
}