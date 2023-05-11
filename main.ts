radio.onReceivedValue(function (name, value) {
    if (name == "X") {
        valor_x = value
    } else if (name == "Y") {
        valor_y = value
    }
})
let m_dir = 0
let m_esq = 0
let valor_y = 0
let valor_x = 0
radio.setGroup(1)
basic.forever(function () {
    m_esq = valor_y + valor_x
    m_dir = valor_y - valor_x
    if (m_esq > 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, m_esq)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Math.abs(m_esq))
    }
    if (m_dir > 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, m_dir)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Math.abs(m_dir))
    }
})
