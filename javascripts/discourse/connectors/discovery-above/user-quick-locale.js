export default {
  setupComponent(attrs, component) {
    const siteSettings = component.siteSettings;
    const currentUser = component.currentUser;
    const availableLocales = JSON.parse(this.siteSettings.available_locales)

    component.set('availableLocales', availableLocales);
  },
  
  actions: {
    updateCurrentLocale(value) {
      console.log(value);
      // set user local here
    }
  }
}