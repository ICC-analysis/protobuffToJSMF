'use strict'

const peg = require('pegjs')
const fs = require('fs')
const JSMF = require('jsmf-core')

var parser = peg.generate(fs.readFileSync('./grammar.pegjs','utf-8'))

var model = parser.parse(fs.readFileSync('./ic3data.proto','utf-8'),
                     JSMF)

console.log(model);

