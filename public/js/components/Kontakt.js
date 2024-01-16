export const Kontakt = {
	data: function () {
		return {
			kontakte: [
				{
					uid: 'uid',
					vorname: 'Vorname',
					nachname: 'Nachname',
					email: 'uid@technikum-wien.at',
					phone: '+43 1 333 40 77 - 0000',
					raum: 'F3.04'
				}
			]
		}
	},
	template: `
	<div class="row mb-3">
		<div class="col-md-12">
			<div class="card">
				<div class="card-header card-title"><h5>Kontakt</h5></div>
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