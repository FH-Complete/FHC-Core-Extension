import CoreVerticalsplit from '../../../../../../public/js/components/verticalsplit/verticalsplit.js';
import CoreTabs from '../../../../../../public/js/components/Tabs.js';
import MyExtensionContent from "./MyExtensionContent.js";

export default {
	components: {
		CoreVerticalsplit,
		CoreTabs,
		MyExtensionContent
	},
	data: () => {
		return {
			tabs : {
				tab1: { title: 'Tab 1', component: '../../extensions/FHC-Core-Extension/js/components/myextension/MyExtensionWidget.js'},
				tab2: { title: 'Tab 2', component: '../../extensions/FHC-Core-Extension/js/components/myextension/MyExtensionWidget.js'}
			}
		}
	},
	template: `	
		<!-- Vertical Split Component -->
		<core-verticalsplit>
			<!-- Top Content -->
			<template #top>
				<my-extension-content></my-extension-content>
			</template>
			<!-- Bottom Content -->
			<template #bottom>
				<!-- Tabs -->
				<core-tabs border="true" :config="tabs"></core-tabs>
			</template>
		</core-verticalsplit>
	`
};