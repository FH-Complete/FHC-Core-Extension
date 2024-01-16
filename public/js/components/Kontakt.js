export const Kontakt = {
	data: function () {
		return {
			kontakte: [
				{
					uid: 'hainberg',
					vorname: 'Cristina',
					nachname: 'Hainberger',
					email: 'hainberg@technikum-wien.at',
					phone: '',
					raum: 'F3.04'
				},
				{
					uid: 'oesi',
					vorname: 'Andreas',
					nachname: 'Österreicher',
					email: 'oesi@technikum-wien.at',
					phone: '+43 1 333 40 77 - 8427',
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
					<li class="list-group-item" v-for="kontakt in kontakte" :key="kontakt">
						<div v-show="kontakt.nachname !== ''"><i class="fa fa-user me-3"></i>{{ kontakt.vorname }} {{ kontakt.nachname}}</div>
						<div v-show="kontakt.email !== ''"><i class="fa fa-envelope me-3"></i><a :href="'mailto:' + kontakt.email" class="text-reset">{{ kontakt.email }}</a></div>
						<div v-show="kontakt.phone !== ''"><i class="fa fa-phone me-3"></i>{{ kontakt.phone }}</div>
						<div v-show="kontakt.raum !== ''"><i class="fa fa-location-dot me-3"></i>{{ kontakt.raum }}</div>
					</li>
				</ul>
			</div>
		</div>
	</div>		
	`
};