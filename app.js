Ext.application({
    name: 'Sencha',

    launch: function() {
        Ext.create("Ext.tab.Panel", {
            fullscreen: true,
            tabBarPosition: 'bottom',

            items: [
				{
					xtype: 'panel',
					title: 'home',
					iconCls: 'star',
					items: [
						{
							docked: 'top',
            				xtype: 'titlebar',
            				title: 'Colophone'	
						},
						{
							xtype: 'panel',
							html: [
								'test'
							]
						}	
					]
				},
				{
                    xtype: 'panel',
                    title: 'Ask',
                    iconCls: 'compose',
					html: [
						'This will be the camera page'
					]
                    
                },
				{
                    xtype: 'panel',
                    title: 'Profile',
                    iconCls: 'user',
					html: [
						'Your profile will be here'
					]
                    
                }
            ]
        });
    }
});


