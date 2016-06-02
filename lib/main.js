
/*
var r = require('rethinkdb');
var connection = null;
/*
r.connect( {host: '163.187.162.93', port: 28015}).then((result) => {
  connection = result;
  r.db('test').tableCreate('chat').run(connection, function(err, result) {
      if (err) throw err;
      console.log(JSON.stringify(result, null, 2));
  })
  r.table('chat').changes().run(connection).then(function(cursor) {
      cursor.each(function(err, row) {
          app.messagesUpdate(row.new_val)
      });
  });
 });
*/
require("tabris-js-node");
var r = require('rethinkdb');

var page = new tabris.Page({
  topLevel: true,
  title: "chat app"
});
new tabris.TextView({
  layoutData: {centerX: 0, centerY: 0},
  text: "My First Tabris chat app"
}).appendTo(page);
page.open();
