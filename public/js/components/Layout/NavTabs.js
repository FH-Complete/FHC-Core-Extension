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

// Import Tab Sites
import {Layout} from "../../components/examples/Layout.js";
import {Tabulator} from "../../components/examples/Tabulator.js";
import {Alerts} from "../../components/examples/Alerts.js";
import {Icons} from "../../components/examples/Icons.js";

export const NavTabs = {
	components: {
		Layout,
		Tabulator,
		Alerts,
		Icons
	},
	data: function() {
		return {
			currentTab: 'Tabulator',
			tabs: [
				'Layout',
				'Tabulator',
				'Alerts',
				'Icons'
			]
		}
	},
	methods: {
		changeTab(tab){
			this.currentTab = tab;
		}
	},
	template: `
	<div class="row">
		<div class="col-md-12">
			<div id="navTabs">
				<ul class="nav nav-tabs" class="mb-5">
					<li class="nav-item" v-for="tab in tabs" :key="tab">
						<a :class="['nav-link', { active: currentTab === tab }]" class="cursor-pointer" @click="changeTab(tab)">{{ tab }}</a>
					</li>
				</ul>
				<component :is="currentTab"></component>
			</div>	
  		</div>
  	</div>
	`
};