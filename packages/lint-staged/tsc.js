module.exports = {
  ...require('./base'),
  '*.ts?(x)': () => 'tsc --noEmit',
}
