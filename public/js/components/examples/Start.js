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
import {BaseLayout} from "../Layout/BaseLayout.js";
import {docTabulatorFilter} from "../docs/docTabulatorFilter.js";
import {docTabulatorFilterParentCmpt} from "../docs/docTabulatorFilterParentCmpt.js";
import {docTabulatorFilterDataset} from "../docs/docTabulatorFilterDataset.js";
import {docTabulatorFilterFiltersupdate} from "../docs/docTabulatorFilterFiltersupdate.js";

export const Start = {
	components: {
		BaseLayout,
		docTabulatorFilter,
		docTabulatorFilterParentCmpt,
		docTabulatorFilterDataset,
		docTabulatorFilterFiltersupdate

	},
	data: () => {
		return {
			appTitle: "Title",
			appSubtitle: "Subtitle",
			mainCols: [9],
			asideCols: [3]
		}
	},
	template: `
	<h2 class="h3">Starter Template</h2>
	<p class="lead">Quick Start</p>
	

	<div class="row-cols my-5">
		<h3 class="h4">Starter Template Example</h3>
		<!-- Documentation -->
		<doc-tabulator-filter-parent-cmpt></doc-tabulator-filter-parent-cmpt>
		<doc-tabulator-filter></doc-tabulator-filter>
		<doc-tabulator-filter-dataset></doc-tabulator-filter-dataset>
		<doc-tabulator-filter-filtersupdate></doc-tabulator-filter-filtersupdate>
	</div>
`
};