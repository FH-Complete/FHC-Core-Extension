/**
 * Copyright (C) 2023 fhcomplete.org
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

export const Icons = {
	componentName: 'Icons',
	data: function() {
		return {
			interactionIcons : [
				{ iconDescription: 'speichern', iconClass: 'fa fa-save'},
				{ iconDescription: 'bearbeiten', iconClass: 'fa fa-edit'},
				{ iconDescription: 'kopieren in clipboard', iconClass:'fa fa-clipboard' },
				{ iconDescription: 'downloaden', iconClass:'fa fa-download' },
				{ iconDescription: 'uploaden', iconClass:'fa fa-upload' },
				{ iconDescription: 'warten / pausieren / parken', iconClass:'fa  fa-hourglass-half' },
				{ iconDescription: 'pdf icon', iconClass:'fa fa-file-pdf' },
				{ iconDescription: 'csv icon', iconClass:'fa fa-file-csv' },
				{ iconDescription: 'xsl icon', iconClass:'fa fa-file-excel' },
				{ iconDescription: 'doc icon', iconClass:'fa fa-file-word' },
				{ iconDescription: 'Dokument icon - generell', iconClass:'fa fa-file' },
				{ iconDescription: 'löschen - endgültig', iconClass:'fa fa-times' },
				{ iconDescription: 'löschen - rückgängig machen', iconClass:'fa fa-trash' },
				{ iconDescription: 'link zu neuer Seite', iconClass:'fa fa-external-link' },
				{ iconDescription: 'refresh', iconClass:'fa fa-refresh' },
				{ iconDescription: 'suchen', iconClass:'fa fa-search' },
				{ iconDescription: 'Zeile hinzufügen', iconClass:'fa fa-plus' },
				{ iconDescription: 'Zeile löschen', iconClass:'fa fa-times' },
				// { iconDescription: 'sichtbar / nicht sichtbar', iconClass:'fa fa-eye"></i> / <i class="fa fa-eye-slash' },
		// {
		// 			iconDescription: 'Details</td><td><a href="#">Details</a></td><td><em>Details als link ausschreiben. Kein fa-eye!</em></td></tr>
		//  		{ iconDescription: 'Info', iconClass:'fa fa-info-circle"></i> / <i class="fa fa-info' },
				{ iconDescription: 'User', iconClass:'fa fa-user' },
				{ iconDescription: 'Mehrere User', iconClass:'fa fa-users' },
				{ iconDescription: 'Hilfe', iconClass:'fa fa-circle-question'},
				{ iconDescription: 'Favoriten', iconClass:'fa fa-star'},
				{ iconDescription: 'login', iconClass:'fa fa-right-to-bracket'},
				{ iconDescription: 'logout', iconClass:'fa fa-right-from-bracket'},
				{ iconDescription: 'Spalten', iconClass:'fa fa-table-columns' },
				{ iconDescription: 'Filter', iconClass:'fa fa-filter' },
				{ iconDescription: 'Setting', iconClass:'fa fa-gear' },
				{ iconDescription: 'Sortieren', iconClass:'fa fa-sort' },
				{ iconDescription: 'Dashboard', iconClass:'fa fa-gauge' },
				{ iconDescription: 'Aufklappen', iconClass:'fa fa-chevron-down' },
				{ iconDescription: 'Zuklappen', iconClass:'fa fa-chevron-up' },
				{ iconDescription: 'Vor', iconClass:'fa fa-chevron-right' },
				{ iconDescription: 'Zurück', iconClass:'fa fa-chevron-left' },
				{ iconDescription: 'Kalender', iconClass:'fa fa-calendar' },
				{ iconDescription: 'Uhr', iconClass:'fa fa-clock' },
				{ iconDescription: 'Statistik', iconClass:'fa fa-chart-line' },
				// { iconDescription: 'Chart', iconClass:'fa fa-chart-pie"></i> / <i class="fa fa-chart-simple' },
				{ iconDescription: 'Pivot', iconClass:'fa fa-table-cells' },
				{ iconDescription: 'Report', iconClass:'fa fa-file' },
				{ iconDescription: 'Synchronisieren zwischen Systemen', iconClass:'fa fa-exchange' }

			],
			statusIcons: [
			   	{ iconDescription: 'done / check / ja ', iconClass:'fa fa-check' },
				{ iconDescription: 'undone / unchecked / nein', iconClass:'fa fa-xmark' },
	      // {
			// iconDescription: 'aktiv</td><td></td><td>Ich bin aktiv</td></tr>
			//     {
			// 		iconDescription: 'inaktiv</td><td></td><td><span class="text-muted">Ich bin inaktiv</span></td></tr>
				{ iconDescription: 'success (in alert message)', iconClass:'fa fa-circle-check text-success' },
				{ iconDescription: 'info (in alert message)', iconClass:'fa fa-circle-info text-info' },
				{ iconDescription: 'warning (in alert message)', iconClass:'fa fa-triangle-exclamation text-warning' },
				{ iconDescription: 'danger (in alert message)', iconClass:'fa fa-circle-exclamation text-danger' },
				{ iconDescription: 'von System gesperrt', iconClass:'fa fa-ban text-danger' },
				{ iconDescription: 'selbst sperren / entsperren', iconClass:'fa fa-lock"></i> / <i class="fa fa-unlock' },
			],
			communicationIcons: [
				{ iconDescription: 'Telefon', iconClass:'fa fa-phone' },
				{ iconDescription: 'Raum / Adresse', iconClass:'fa fa-location-dot' },
				{ iconDescription: 'Mail', iconClass:'fa  fa-envelope' },
				{ iconDescription: 'Message', iconClass:'fa  fa-message' },
				{ iconDescription: 'Notiz', iconClass:'fa  fa-note-sticky' },
			]
		}
	},
	methods: {
		copyToClipboard(el){
			const clipIcon = el.innerText;

			// Copy the icon to clipboard
			navigator.clipboard.writeText(clipIcon)
				.then(() => {
					this.$fhcAlert.alertSuccess('Im Clipboard gespeichert');
				})
				.catch((error) => {
					console.error('Unable to copy to clipboard', error);
				});
		}
	},
	template: `
<!--    <div class="card card-body mb-5">-->
<!--        <ul>-->
<!--            <li>Fontawsome 6.2.1</li>-->
<!--            <li>Free icons (solid, regular). <b>Default: solid.</b></li>-->
<!--            <ul>-->
<!--                <li>solid: fa fa-save</li>-->
<!--                <li>regular: fa fa-copy</li>-->
<!--            </ul>-->
<!--            <li>Sizing <b>Default: relativ.</b></li>-->
<!--            <ul>-->
<!--                <li>relativ: fa-lg, fa-xl,... -> generell für Tabellen, im Text. Skalierbar, lässt sich in Textfluss gut einbinden.</li>-->
<!--                <li>literal: fa-2x, fa-3x,... -> für stand-alone eye-catcher. Bsp als 'Grafikicon' in cards.</li>-->
<!--            </ul>-->
<!--        </ul>-->
<!--    </div>-->
	<h2 class="h4">Interactions</h2>
    <table class="table table-condensed table-bordered mt-4">
    	<thead><tr><th style="width: 300px">Beschreibung</th><th>Icon</th><th>HTML Shortcut</th></tr></thead>
        <tbody>
			<tr v-for="icon in interactionIcons" :key="icon">
				<td>{{ icon.iconDescription }}</td>
				<td><i class="fa-lg" :class="icon.iconClass"></i></td>
				<td>
					<code 
						@click="copyToClipboard($event.target)" 
						class="cursor-pointer" 
						data-bs-toggle="tooltip" title="Copy to Clipboard">
						&lt;i class="{{icon.iconClass}}"&gt;&lt;/i&gt;
					</code>
				</td>
			</tr>
        </tbody>
   	</table>

   <h2 class="h4">Status</h2>
    <table class="table table-condensed table-bordered mt-4">
    	<thead><tr><th style="width: 300px">Beschreibung</th><th>Icon</th><th>HTML Shortcut</th></tr></thead>
        <tbody>
			<tr v-for="icon in statusIcons" :key="icon">
				<td>{{ icon.iconDescription }}</td>
				<td><i class="fa-lg" :class="icon.iconClass"></i></td>
				<td>
					<code 
						@click="copyToClipboard($event.target)" 
						class="cursor-pointer" 
						data-bs-toggle="tooltip" title="Copy to Clipboard">
						&lt;i class="{{icon.iconClass}}"&gt;&lt;/i&gt;
					</code>
				</td>
			</tr>
        </tbody>
   	</table>
   <h2 class="h4">Communication</h2>
    <table class="table table-condensed table-bordered mt-4">
    	<thead><tr><th style="width: 300px">Beschreibung</th><th>Icon</th><th>HTML Shortcut</th></tr></thead>
        <tbody>
			<tr v-for="icon in communicationIcons" :key="icon">
				<td>{{ icon.iconDescription }}</td>
				<td><i class="fa-lg" :class="icon.iconClass"></i></td>
				<td>
					<code 
						@click="copyToClipboard($event.target)" 
						class="cursor-pointer" 
						data-bs-toggle="tooltip" title="Copy to Clipboard">
						&lt;i class="{{icon.iconClass}}"&gt;&lt;/i&gt;
					</code>
				</td>
			</tr>
        </tbody>
   	</table>

`
};