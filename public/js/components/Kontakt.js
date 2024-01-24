export const Kontakt = {
	props: {
		kontakte:  {
			type: Array,
			default: () => [
				{
					uid: '',
					vorname: '',
					nachname: '',
					email: '',
					phone: '',
					raum: ''
				}
			]
		}
	},
	template: `
	<div class="row mb-3">
		<div class="col-md-12">
			<div class="card">
				<div class="card-header"><h5>Kontakt</h5></div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item p-4" v-for="kontakt in kontakte" :key="kontakt">
						<div v-show="kontakt.nachname !== undefined && kontakt.nachname !== ''">
							<i class="fa fa-user me-4 mb-2"></i>{{ kontakt.vorname }} {{ kontakt.nachname}}
						</div>
						<div v-show="kontakt.email !== undefined && kontakt.email !== ''">
							<i class="fa fa-envelope me-4 mb-2"></i>
							<a :href="'mailto:' + kontakt.email" class="text-reset">{{ kontakt.email }}</a>
						</div>
						<div v-show="kontakt.phone !== undefined && kontakt.phone !== ''">
							<i class="fa fa-phone me-4 mb-2"></i>{{ kontakt.phone }}
						</div>
						<div v-show="kontakt.raum !== undefined && kontakt.raum !== ''">
							<i class="fa fa-location-dot me-4 mb-2"></i>{{ kontakt.raum }}
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>		
	`
};