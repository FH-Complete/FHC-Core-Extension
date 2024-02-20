/**
 * Copyright (C) 2024 fhcomplete.org
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

// Load Plugins:
// ============
import FhcApi from "../../../../../../js/plugin/FhcApi.js";

// Load Components:
// ===============
import FhcForm from "../../../../../../js/components/Form/Form.js";
import FormInput from "../../../../../../js/components/Form/Input.js";
import FormValidation from "../../../../../../js/components/Form/Validation.js";

// Create App:
// ==========
const app = Vue.createApp({
	components: {
		FhcForm,
		FormInput,
		FormValidation
	},
	data() {
		return {
			autocompleteAbortController: null,
			autocompleteSuggestions: [],
			formData: {
				mystring: '',
				mypassword: '',
				mynumber: 0,
				mytext: '',
				myselect: '',
				mysinglechoice: 'yes',
				mymultiplechoice: ['apple'],
				mycheckbox: false,
				myswitch: true,
				myrange: 10,
				mycolor: '#ff0000',
				myautocomplete: '',
				mydate: '',
				myfile: [],
				mydmsfiles: []
			}
		};
	},
	methods: {
		loadAutocompleteSuggestions(event) {
			if (event.query || !this.autocompleteSuggestions.length) {
				if (this.autocompleteAbortController)
					this.autocompleteAbortController.abort();
				this.autocompleteAbortController = new AbortController();

				this.$fhcApi
					.get(
						'extensions/FHC-Core-Extension/components/form/autocompleteSuggestions/' + encodeURIComponent(event.query),
						null,
						{
							signal: this.autocompleteAbortController.signal
						}
					)
					.then(result => this.autocompleteSuggestions = result.data)
					.catch(this.$fhcAlert.handleSystemError);
			}
		},
		sendForm() {
			// We can only send when $refs is ready
			if (this.$refs.form) {
				
				// copy the formData object to manipulate some data
				const formData = {...this.formData};

				// check if myautocomplete is an object and flatten it
				// down to the primary index because that's what the
				// endpoint expects.
				if (formData.myautocomplete.nation_code)
					formData.myautocomplete = formData.myautocomplete.nation_code;

				// send the data
				this.$refs.form
					.post(
						'extensions/FHC-Core-Extension/components/form/full',
						formData
					)
					.then(result => {
						this.$fhcAlert.alertSuccess('Form Successful sent');
					})
					.catch(this.$fhcAlert.handleSystemError);
			}
		}
	},
	template: `
	<div class="app-example-form-1">
		<fhc-form ref="form" @submit.prevent="sendForm">
			<form-validation></form-validation>
			<div class="row row-cols-3 g-3">
				<div class="col">
					<form-input
						v-model="formData.mystring"
						name="mystring"
						label="MyString*"
						>
					</form-input>
					<div class="form-text">A required String not containing an 'a'</div>
				</div>
				<div class="col">
					<form-input
						type="password"
						v-model="formData.mypassword"
						name="mypassword"
						label="MyPassword*"
						>
					</form-input>
					<div class="form-text">A required Password with at least 3 letters</div>
				</div>
				<div class="col">
					<form-input
						type="number"
						v-model="formData.mynumber"
						name="mynumber"
						label="MyNumber"
						>
					</form-input>
					<div class="form-text">A number less than 10</div>
				</div>
				<div class="col-8">
					<form-input
						type="textarea"
						v-model="formData.mytext"
						name="mytext"
						label="MyText"
						rows="4"
						>
					</form-input>
					<div class="form-text text-end" :class="{'text-danger': formData.mytext.length > 10}">{{formData.mytext.length}}/10</div>
				</div>
				<div class="col">
					<form-input
						type="select"
						v-model="formData.myselect"
						name="myselect"
						label="MySelect*"
						>
						<option value="">No Option</option>
						<option value="somevalue">Some Value</option>
						<option value="othervalue">Other Value</option>
					</form-input>
					<div class="form-text">Since 'No Option' has an empty string for a value and the 'required' rule is set in the backend, selecting it will give you an error.</div>
				</div>
				<div class="col">
					<div>MySingleChoice</div>
					<form-input
						type="radio"
						v-model="formData.mysinglechoice"
						name="mysinglechoice"
						label="Yes"
						value="yes"
						>
					</form-input>
					<form-input
						type="radio"
						v-model="formData.mysinglechoice"
						name="mysinglechoice"
						label="No"
						value="no"
						>
					</form-input>
					<form-input
						type="radio"
						v-model="formData.mysinglechoice"
						name="mysinglechoice"
						label="Maybe"
						value="maybe"
						>
					</form-input>
					<div class="form-text">Only 'Yes' or 'Maybe' are valid options.</div>
				</div>
				<div class="col">
					<div>MyMultipleChoice</div>
					<form-input
						type="checkbox"
						v-model="formData.mymultiplechoice"
						name="mymultiplechoice[]"
						label="Orange"
						value="orange"
						>
					</form-input>
					<form-input
						type="checkbox"
						v-model="formData.mymultiplechoice"
						name="mymultiplechoice[]"
						label="Banana"
						value="banana"
						>
					</form-input>
					<form-input
						type="checkbox"
						v-model="formData.mymultiplechoice"
						name="mymultiplechoice[]"
						label="Apple"
						value="apple"
						>
					</form-input>
					<div class="form-text">Select at least two.</div>
				</div>
				<div class="col">
					<div>MyCheckbox*</div>
					<form-input
						type="checkbox"
						v-model="formData.mycheckbox"
						name="mycheckbox"
						label="I Agree"
						>
					</form-input>
				</div>
				<div class="col">
					<div>MySwitch*</div>
					<form-input
						type="checkbox"
						v-model="formData.myswitch"
						name="myswitch"
						label="Show Something"
						container-class="form-switch"
						>
					</form-input>
				</div>
				<div class="col-8">
					<form-input
						type="range"
						v-model="formData.myrange"
						name="myrange"
						label="MyRange"
						min="0"
						max="15"
						>
					</form-input>
				</div>
				<div class="col">
					<form-input
						type="color"
						v-model="formData.mycolor"
						name="mycolor"
						label="MyColor"
						>
					</form-input>
				</div>
				<div class="col">
					<form-input
						type="autocomplete"
						v-model="formData.myautocomplete"
						name="myautocomplete"
						label="MyAutocomplete*"
						dropdown
						:suggestions="autocompleteSuggestions"
						@complete="loadAutocompleteSuggestions"
						option-label="kurztext"
						>
					</form-input>
				</div>
				<div class="col">
					<form-input
						type="datepicker"
						v-model="formData.mydate"
						name="mydata"
						label="MyDate"
						>
					</form-input>
				</div>
				<div class="col-6">
					<form-input
						type="uploadfile"
						v-model="formData.myfile"
						name="myfile"
						label="MyFile"
						>
					</form-input>
				</div>
				<div class="col-6">
					<form-input
						type="uploaddms"
						v-model="formData.mydmsfiles"
						name="mydmsfiles"
						label="MyDmsFiles"
						multiple
						>
					</form-input>
				</div>
			</div>
			<div class="mt-3">
				<button type="submit" class="btn btn-primary">Send Form</button>
			</div>
		</fhc-form>
	</div>`
});

app
	// Use Plugins:
	// ===========
	// PrimeVue3
	.use(primevue.config.default, {
		zIndex: {
			overlay: 1100
		}
	})
	// FhcApi
	.use(FhcApi)

	// Start the App:
	// =============
	.mount('#example-form-full');
