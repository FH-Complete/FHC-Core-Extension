import CoreForm from "../../../../../js/components/Form/Form.js";
import CoreFormInput from "../../../../../js/components/Form/Input.js";
import CoreFormValidation from "../../../../../js/components/Form/Validation.js";
import CoreBsModal from '../../../../../js/components/Bootstrap/Modal.js';

export default {
	components: {
		CoreForm,
		CoreFormInput,
		CoreFormValidation,
		CoreBsModal
	},
	data() {
		return {
			modalTitel: '',
			formData: {
				mystring: '',
				mypassword: '',
				mynumber: 0,
				mytext: '',
				myselect: '',
				mysinglechoice: 'yes',
				mymultiplechoice: ['apple']
			}
		};
	},
	methods: {
		sendForm() {
			if (this.$refs.form) // We can only send when $refs is ready
				this.$refs.form
					.post(
						'extensions/FHC-Core-Extension/components/form/form1',
						this.formData
					)
					.then(result => {
						this.$fhcAlert.alertSuccess('Form Successful sent');
					})
					.catch(this.$fhcAlert.handleSystemError);
		},
		openModal(modalTitel) {
			this.modalTitel = modalTitel;
			this.$refs.form.clearValidation();
			this.$refs.modalContainer.show();
		}
	},
	template: `
	<div class="app-example-form-1">
		<core-form ref="form" @submit.prevent="sendForm">
			<core-bs-modal ref="modalContainer" class="bootstrap-prompt">
				<template #title>{{ modalTitel }}</template>
				<template #default>
					<!-- Formular -->
					<core-form-validation></core-form-validation>
					<div class="row row-cols-3">
				<div class="col">
					<core-form-input
						v-model="formData.mystring"
						name="mystring"
						label="MyString*"
						>
					</core-form-input>
					<div class="form-text">A required String not containing an 'a'</div>
				</div>
				<div class="col">
					<core-form-input
						type="password"
						v-model="formData.mypassword"
						name="mypassword"
						label="MyPassword*"
						>
					</core-form-input>
					<div class="form-text">A required Password with at least 3 letters</div>
				</div>
				<div class="col">
					<core-form-input
						type="number"
						v-model="formData.mynumber"
						name="mynumber"
						label="MyNumber"
						>
					</core-form-input>
					<div class="form-text">A number less than 10</div>
				</div>
				<div class="col">
					<core-form-input
						type="textarea"
						v-model="formData.mytext"
						name="mytext"
						label="MyText"
						>
					</core-form-input>
					<div class="form-text text-end" :class="{'text-danger': formData.mytext.length > 10}">{{formData.mytext.length}}/10</div>
				</div>
				<div class="col">
					<core-form-input
						type="select"
						v-model="formData.myselect"
						name="myselect"
						label="MySelect*"
						>
						<option value="">No Option</option>
						<option value="somevalue">Some Value</option>
						<option value="othervalue">Other Value</option>
					</core-form-input>
					<div class="form-text">Since 'No Option' has an empty string for a value and the 'required' rule is set in the backend, selecting it will give you an error.</div>
				</div>
				<div class="col">
					<div>MySingleChoice</div>
					<core-form-input
						type="radio"
						v-model="formData.mysinglechoice"
						name="mysinglechoice"
						label="Yes"
						value="yes"
						>
					</core-form-input>
					<core-form-input
						type="radio"
						v-model="formData.mysinglechoice"
						name="mysinglechoice"
						label="No"
						value="no"
						>
					</core-form-input>
					<core-form-input
						type="radio"
						v-model="formData.mysinglechoice"
						name="mysinglechoice"
						label="Maybe"
						value="maybe"
						>
					</core-form-input>
					<div class="form-text">Only 'Yes' or 'Maybe' are valid options.</div>
				</div>
				<div class="col">
					<div>MyMultipleChoice</div>
					<core-form-input
						type="checkbox"
						v-model="formData.mymultiplechoice"
						name="mymultiplechoice[]"
						label="Orange"
						value="orange"
						>
					</core-form-input>
					<core-form-input
						type="checkbox"
						v-model="formData.mymultiplechoice"
						name="mymultiplechoice[]"
						label="Banana"
						value="banana"
						>
					</core-form-input>
					<core-form-input
						type="checkbox"
						v-model="formData.mymultiplechoice"
						name="mymultiplechoice[]"
						label="Apple"
						value="apple"
						>
					</core-form-input>
					<div class="form-text">Select at least two.</div>
				</div>
			</div>
					
				</template>
				<template #footer>
					<button type="button" class="btn btn-primary" @click="sendForm">{{ modalTitel }}</button>
				</template>
			</core-bs-modal>

		</core-form>
	</div>`
}