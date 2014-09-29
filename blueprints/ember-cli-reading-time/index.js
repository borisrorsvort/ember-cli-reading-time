module.exports = {
  afterInstall: function() {
    return this.addBowerPackageToProject('reading-time');
  }
};
