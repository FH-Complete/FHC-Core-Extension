export const Faqs = {
		props: {
			faqs: {
				type: Array,
				default: () => [
					{
						title: '',
						text: ''
					}
				]
			}
		},
	template: `
	<div class="row mb-3">
		<div class="col-md-12">
			<div class="card">
			<div class="card-header"><h5>FAQs</h5></div>
				<div class="accordion accordion-flush" id="accordionFlushExample">
					<div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
						<h2 class="accordion-header" :id="'flush-heading' + index">
					  	<button 
					  		class="accordion-button collapsed"
					  		type="button" 
					  		data-bs-toggle="collapse"
					  		:data-bs-target="'#flush-collapse' + index"
					  		aria-expanded="false"
					  		:aria-controls="'flush-collapse' + index">
							{{ faq.title }}
					  	</button>
						</h2>
						<div 
							:id="'flush-collapse' + index"
							class="accordion-collapse collapse"
							:aria-labelledby="'flush-heading' + index"
							data-bs-parent="#accordionFlushExample">
						  	<div class="accordion-body">{{ faq.text }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>		
	`
};