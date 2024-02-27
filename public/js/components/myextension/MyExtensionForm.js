import CoreForm from "../../../../../js/components/Form/Form.js";
import CoreFormInput from "../../../../../js/components/Form/Input.js";
import CoreFormValidation from "../../../../../js/components/Form/Validation.js";
import CoreBsModal from '../../../../../js/components/Bootstrap/Modal.js';
import {CoreRESTClient} from '../../../../../../public/js/RESTClient.js';

export default {
	components: {
		CoreForm,
		CoreFormInput,
		CoreFormValidation,
		CoreBsModal
	},
	props: {
		examplestatusList: []
	},
	emit: ['dataSaved'],
	data() {
		return {
			modalTitel: '',
			formData: {
				uid: '',
				stringval: '',
				integerval: 0,
				textval: '',
				examplestatus_kurzbz: '',
				booleanval: false,
				dateval: null
			}
		};
	},
	methods: {
		sendForm() {
			if (this.$refs.form) // We can only send when $refs is ready
				this.$refs.form
					.post('extensions/FHC-Core-Extension/components/MyExtensionAPI/saveExampledata', this.formData)
					.then(result => {
						this.$emit('dataSaved', {...this.formData, ...{'exampledata_id': result.data}});
						this.$fhcAlert.alertSuccess(this.$p.t('ui', 'gespeichert'));
						this.$refs.modalContainer.hide();
					})
					.catch(this.$fhcAlert.handleSystemError);
		},
		openModal(exampledata_id = null) {
			// When editing Dataset
			if (exampledata_id !== null)
			{
				this.prefillFormdata(exampledata_id);
				this.modalTitel = this.$p.t('global', 'datensatzBearbeiten');
			}
			// When adding new Dataset
			else
			{
				this.formData = { ...this.$options.data().formData };	// Reset form
				this.modalTitel = this.$p.t('global', 'datensatzAnlegen');
			}

			this.$refs.form.clearValidation();
			this.$refs.modalContainer.show();
		},
		prefillFormdata(exampledata_id){
			CoreRESTClient
				.get('/extensions/FHC-Core-Extension/MyExtension/getExampledata', { exampledata_id: exampledata_id })
				.then(result => result.data)
				.then(result => { this.formData = CoreRESTClient.getData(result)[0];})
				.catch(error => {
					this.$fhcAlert.handleSystemError(error);
				});
		},
	},
	template: `
	<div class="app-example-form-1">
		<core-form ref="form" @submit.prevent="sendForm">
			<core-bs-modal ref="modalContainer" class="bootstrap-prompt" dialog-class="modal-lg">
				<template #title>{{ modalTitel }}</template>
				<template #default>
					<!-- Formular -->
					<core-form-validation></core-form-validation>
					<input v-if="formData.exampledata_id !== null" type="hidden" name="exampledata_id" value="formData.exampledata_id">
					<div class="row row-cols-2">
						<div class="col">
							<core-form-input
								v-model="formData.uid"
								name="uid"
								label="UID *"
								>
							</core-form-input>
							<div class="form-text">Hilfetext</div>
						</div>
						<div class="col">
							<core-form-input
								v-model="formData.stringval"
								name="stringval"
								label="String"
								>
							</core-form-input>
						</div>
						<div class="col">
							<core-form-input
								type="number"
								v-model="formData.integerval"
								name="integerval"
								label="Integer"
								>
							</core-form-input>
						</div>
						<div class="col">
							<core-form-input
								type="textarea"
								v-model="formData.textval"
								name="textval"
								:label="$p.t('global', 'anmerkung')"
								>
							</core-form-input>
							<div class="form-text text-end" :class="{'text-danger': formData.textval.length > 10}">{{formData.textval.length}}/10</div>
						</div>
						<div class="col">
							<core-form-input
								type="select"
								v-model="formData.examplestatus_kurzbz"
								name="examplestatus_kurzbz"
								label="Liste *"
								>
								<option v-for="(bezeichnung, kurzbz) in examplestatusList" :key="kurzbz" :value="kurzbz">{{ bezeichnung }}</option>
							</core-form-input>
						</div>
						<div class="col">
							<div>Boolean</div>
							<core-form-input
								type="checkbox"
								v-model="formData.booleanval"
								name="booleanval"
								label="Boolean"
								value=""
								>
							</core-form-input>
						</div>
						<div class="col">
							<core-form-input
								type="datepicker"
								v-model="formData.dateval"
								name="dateval"
								:label="$p.t('global', 'datum')"
								>
							</core-form-input>
						</div>
					</div>
				</template>
				<template #footer>
					<button type="button" class="btn btn-primary" @click="sendForm">{{ $p.t('ui', 'speichern') }}</button>
				</template>
			</core-bs-modal>

		</core-form>
	</div>`
}