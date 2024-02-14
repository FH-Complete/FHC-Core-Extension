import FhcForm from "../../../../../js/components/Form/Form.js";
import FormInput from "../../../../../js/components/Form/Input.js";
import FormValidation from "../../../../../js/components/Form/Validation.js";

export default {
	components: {
		FhcForm,
		FormInput,
		FormValidation
	},
	data() {
		return {
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
		}
	},
	template: `
	<div class="app-example-form-1">
		<fhc-form ref="form" @submit.prevent="sendForm">
			<form-validation></form-validation>
			<div class="row row-cols-3">
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
				<div class="col">
					<form-input
						type="textarea"
						v-model="formData.mytext"
						name="mytext"
						label="MyText"
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
			</div>
			<button type="submit" class="btn btn-primary">Send Form</button>
		</fhc-form>
	</div>`
}