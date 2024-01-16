export const BaseLayout = {
	props: {
		title: '',
		subtitle: '',
		mainCols: [],
		asideCols: [],
		alignToCoreNav: false,
	},
	computed: {
		mainGridCols() {
			return this.mainCols.length > 0 ? `col-md-${this.mainCols[0]}` : "col-md-12";
		},
		asideGridCols() {
			return this.asideCols.length > 0 ? `col-md-${this.asideCols[0]}` : "";
		},
		customAlign() {
			return this.alignToCoreNav ? 'align-to-coreNav' : '';
		}
	},
	template: `
	<div class="overflow-hidden" :class="customAlign">
		<header v-if="title">
			<h1 class="h2 mb-5">{{ title }}<span class="fhc-subtitle">{{ subtitle }}</span></h1>
		</header>
		<div class="row gx-5">
			<main :class="mainGridCols">
				<slot name="main">{{ mainGridCols }}</slot>
			</main>
			<aside v-if="asideCols.length > 0" :class="asideGridCols">
				<slot name="aside">{{ asideGridCols }}</slot>
			</aside>
		</div>
	</div>
	`
};