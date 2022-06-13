let _ = require('lodash')
let sortStr = require('./sortStr.js')

class line {
    constructor(name, reason, length) {
        this.name = sortStr(name).toUpperCase()
        this.length = length || null
        this.reason = reason
    }
}

class angle {
    constructor(name, reason, degrees) {
        this.vertice = name.split('')[1].toUpperCase()
        this.degrees = degrees || null
        this.reason = reason
        this.name = sortStr([name.split('')[0], name.split('')[2]].join('')).toUpperCase().split('')
        this.name[2] = this.name[1]; this.name[1] = this.vertice; this.name = this.name.join('')
    }
}



//todo add triangles and rectangles.
//todo add heights, medians, angles bisectors, alternate angles and corresponding angles as extended classes