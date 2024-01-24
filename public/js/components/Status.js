export const Status = {
	props: {
		statusText: {
			type: String,
			default: 'Neu'
		},
		statusClass: {
			type: String,
			default: 'info'
		},
		showStatusIcon: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		statusIcon() {
			if (this.showStatusIcon)
			{
				switch(this.statusClass)
				{
					case 'success':
						return 'fa fa-circle-check text-success me-2';
					case 'danger':
						return 'fa fa-circle-exclamation text-danger me-2';
					default:
						return 'd-none';
				}
			}
			else
			{
				return 'd-none';
			}
		}
	},
	template: `
	<div class="row">
		<div class="col-md-12">
			<div :class="'alert alert-' + statusClass" class="fw-bold" role="alert">
				<i :class="statusIcon"></i>{{ statusText }}
			</div>
		</div>
	</div>		
	`
};