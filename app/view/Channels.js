Ext.define('MyApp.view.Channels', {
	extend: 'Ext.dataview.NestedList',

	config: {
		store: "Stations",
		listConfig: {
			variableHeights: true
		},
		backButtonText: "Back",
		useTitleAsBackText: false
	},
	getItemTextTpl: function() {
		return '<tpl if="channel"><div class="channel<tpl if="channel &gt; 100"> wide</tpl>"><div class="number">{channel}</div><div class="description">{text}<br/><small>{name}</small></div></div><tpl else>{text}</tpl>';
	},
	getTitleTextTpl: function() {
		return '{text} Channels';
	}
});