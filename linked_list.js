
const create_node = function() {
    let value = null
    let next = null

    return {value, next}
}

const create_list = function() {
    let first = null

    const append = function(value) {
        let node = create_node()
        node.value = value

        if (first === null) {
            first = node
        }
        else {
            let aux = first
            while (aux.next !== null) {
                aux = aux.next
            }
            aux.next = node
        }
    }

    const prepend = function(value) {
        let node = create_node()
        node.value = value

        let aux = first.next
        first.next = node
        node.next = aux
    }

    const size = function() {
        let aux = first
        let i = 0
        while (aux.next !== null) {
            aux = aux.next
            i++
        }

        return i
    }

    const head = function() {
        return first
    }

    const tail = function() {
        let aux = first
        while (aux.next !== null) {
            aux = aux.next
        }
        return aux
    }

    const at = function(index) {
        let aux = first
        let i = 0
        while (aux.next !== null && i !== index) {
            aux = aux.next
            i++
        }
        return aux
    }

    const pop = function () {
        let aux = first

        if (first.next === null) {
            let result = first
            first = null
            return result
        }

        while (aux.next.next !== null) {
            aux = aux.next
        }

        let result = aux.next
        aux.next = null
        return result
    }

    const contains = function (value) {
        let aux = first
        while (aux.next !== null) {
            aux = aux.next
            if (aux.value === value) {
                return true
            }
        }
        return false
    }

    const find = function(value) {
        let aux = first
        let i = 0
        while (aux.next !== null) {
            aux = aux.next
            if (aux.value === value) {
                return i
            }
            i++
        }
        return null
    }

    const toString = function() {
        let aux = first
        let str = ""
        while (aux.next !== null) {
            str += "(" + aux.value + ") -> "
            aux = aux.next
        }

        return str + "null"
    }

    const insertAt = function(value, index) {
        let aux = first
        let i = 0
        while (aux.next !== null && i !== index-1) {
            aux = aux.next
            i++
        }
        let node = create_node(value)
        let prev = aux.next
        aux.next = node
        node.next = prev
    }

    const removeAt = function (index) {
        let aux = first
        let i = 0
        while (aux.next !== null && i !== index-1) {
            aux = aux.next
            i++
        }
        if (aux.next === null) {
            return
        }
        aux.next = aux.next.next
    }

    return {append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt}
}