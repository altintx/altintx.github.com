Ext.define('MyApp.view.Channels', {
	extend: 'Ext.dataview.NestedList',

	config: {
		store: "Stations",
		listConfig: {
			variableHeights: true
		}
	},
	getItemTextTpl: function() {
		return '<tpl if="channel"><div class="channel"><div class="number">{channel}</div><div class="description">{text}<br/><small>{name}</small></div></div><tpl else>{text}</tpl>';
	},
	getTitleTextTpl: function() {
		return '{text} Channels';
	}
});