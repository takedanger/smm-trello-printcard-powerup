TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/60/60577.png',
      text: 'Print Card',
      callback: function(t) {
        return t.modal({
          url: 'settings.html',   // your modal content
          args: { cardId: t.getContext().card },
          accentColor: '#0079BF',
          height: 600,            // <- adjust this number to make it taller
          fullscreen: false,
          title: 'Print Card'
        });
      }
    }];
  }
});