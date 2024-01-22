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

export const Alerts = {
	componentName: 'Alerts',
	methods: {
		testSuccessAlert(){
			this.$fhcAlert.alertSuccess('Gelöscht!');
		},
		testFailureAlert(){
			this.$fhcAlert.alertSystemMessage('Rückmeldung an User');
		},
		testFatalErrorAlert(){
			this.$fhcAlert.handleSystemError('Errormessage goes here');
		},
		async testConfirmDeleteAlert(){
			if (await this.$fhcAlert.confirmDelete() === false) return;
		}
	},
	template: `
	<button class="btn btn-outline-secondary" @click="testSuccessAlert">Test Success Alert</button><br><br>
	<button class="btn btn-outline-secondary" @click="testFailureAlert">Test Failure Alert</button><br><br>
	<button class="btn btn-outline-secondary" @click="testFatalErrorAlert">Test Fatal Error Alert</button><br><br>
	<button class="btn btn-outline-secondary" @click="testConfirmDeleteAlert">Test Confirm Delete Alert</button><br><br>
`
};