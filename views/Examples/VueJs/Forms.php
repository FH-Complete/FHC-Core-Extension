<?php
	$includesArray = [
		'title' => 'My Extension - VueJs Examples - Forms',
		'vue3' => true,
		'axios027' => true,
		'bootstrap5' => true,
		'fontawesome6' => true,
		'primevue3' => true,
		'navigationcomponent' => true,
		'filtercomponent' => true,
		'customCSSs' => [
			'public/extensions/FHC-Core-Extension/css/VueJs.css',
			'public/css/components/vue-datepicker.css',
			'public/css/components/primevue.css'
		],
		'customJSModules' => [
			// Load Vue Apps
			'public/extensions/FHC-Core-Extension/js/apps/Examples.js',
			'public/extensions/FHC-Core-Extension/js/apps/examples/Form/Input.js',
			'public/extensions/FHC-Core-Extension/js/apps/examples/Form/Validation.js',
			'public/extensions/FHC-Core-Extension/js/apps/examples/Form/Form.js',
			'public/extensions/FHC-Core-Extension/js/apps/examples/Form/Modal.js',
			'public/extensions/FHC-Core-Extension/js/apps/examples/Form1.js'
		]
	];
	$this->load->view('templates/FHC-Header', $includesArray);
?>

	<div id="main">
		<div id="nav">
			<core-navigation-cmpt></core-navigation-cmpt>
		</div>

		<div id="content" class="row flex-row-reverse">
			<header class="fhc-header">
				<h1>VueJs Examples<small>Forms</small></h1>
			</header>
			<aside class="col-lg-3">
				<div id="sidenav" class="list-group sticky-lg-top">
					<a href="#inputcomponent" class="list-group-item list-group-item-action">Input component</a>
					<a href="#inputcomponent-props" class="list-group-item list-group-item-action">- Properties</a>
					<a href="#inputcomponent-methods" class="list-group-item list-group-item-action">- Methods</a>
					<a href="#inputcomponent-manualvalidation" class="list-group-item list-group-item-action">- Manual validating input</a>
					<a href="#validationcomponent" class="list-group-item list-group-item-action">Validation component</a>
					<a href="#validationcomponent-methods" class="list-group-item list-group-item-action">- Methods</a>
					<a href="#formcomponent" class="list-group-item list-group-item-action">Form component</a>
					<a href="#formcomponent-props" class="list-group-item list-group-item-action">- Properties</a>
					<a href="#formcomponent-methods" class="list-group-item list-group-item-action">- Methods</a>
					<a href="#formcomponent-factory" class="list-group-item list-group-item-action">- API Factory</a>
					<a href="#formcomponent-modal" class="list-group-item list-group-item-action">- Use in Modal</a>
				</div>
			</aside>
			<main class="col-lg-9">
				<h2 id="inputcomponent" class="h3 mb-0">Input component</h2>
				<p class="lead">/public/js/components/Form/Input.js</p>
				<p>
					The Input component handles validation for about any input field.
				</p>

				<h3 id="inputcomponent-props" class="h4 mt-5">Properties</h3>
				<table class="table">
					<thead>
						<tr>
							<th>Property</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>type</code></td>
							<td>string</td>
							<td><code>'text'</code></td>
							<td>
								Possible values are:
								text, password, email, number, color, range, radio, checkbox, textarea, 
								select, datepicker, autocomplete, uploadfile, uploadimage, uploaddms
							</td>
						</tr>
						<tr>
							<td><code>v-model</code></td>
							<td>mixed</td>
							<td><code>null</code></td>
							<td>Depending on the the type this can be a string, a number, an array or even an object.</td>
						</tr>
						<tr>
							<td><code>name</code></td>
							<td>string</td>
							<td><code>''</code></td>
							<td>This sets the name of the input field. Useful if you plan to send the data via a HTML form.</td>
						</tr>
						<tr>
							<td><code>id</code></td>
							<td>string</td>
							<td><code>''</code></td>
							<td>
								<p>
									Sets the <code>id</code> attribute of the input field 
									and the <code>for</code> attribute of the label if specified. 
									If it's empty and a label is specified an id will be auto generated.
								</p>
								<p class="text-danger mb-0">
									<i class="fa-solid fa-triangle-exclamation"></i> 
									If the type is set to <code>datepicker</code> this will be overwritten with the <code>uid</code> attribute.
								</p>
							</td>
						</tr>
						<tr>
							<td><code>label</code></td>
							<td>string</td>
							<td><code>''</code></td>
							<td>The label for the input field. If not set no label will be rendered.</td>
						</tr>
						<tr>
							<td><code>input-group</code></td>
							<td>boolean</td>
							<td><code>false</code></td>
							<td>
								Set this to true if the input is part of an input group.
							</td>
						</tr>
						<tr>
							<td><code>bs-feedback</code></td>
							<td>boolean</td>
							<td><code>false</code></td>
							<td>
								On default the component will use the 
								<a href="https://getbootstrap.com/docs/5.0/forms/validation/#tooltips" target="_blank">
								Bootstrap tooltip classes</a> to display validation. Set this to true to use the Bootstrap standard feedback classes.
							</td>
						</tr>
						<tr>
							<td><code>no-feedback</code></td>
							<td>boolean</td>
							<td><code>false</code></td>
							<td>
								If this is set to true no feedback messages will be displayed. 
								Only the <i>is_valid</i> / <i>is_invalid</i> classes will be used.
							</td>
						</tr>
						<tr>
							<td><code>no-auto-class</code></td>
							<td>boolean</td>
							<td><code>false</code></td>
							<td>Disables auto generated CSS classes.</td>
						</tr>
						<tr>
							<td><code>container-class</code></td>
							<td>string | array | object</td>
							<td><code>''</code></td>
							<td>
								<p>
									If <code>bs-feedback</code> is set to <code>false</code> 
									and <code>type</code> is not <code>checkbox</code> or <code>radio</code> 
									there will be a container <code>div</code> element around the input (and possibly the label). 
									This property adds to the <code>class</code> attribute of this container.
								</p>
								<p class="text-danger mb-0">
									<i class="fa-solid fa-triangle-exclamation"></i> 
									If this is set a container <code>div</code> will be rendered regardless of other properties.
								</p>
							</td>
						</tr>
					</tbody>
				</table>

				<h3 id="inputcomponent-methods" class="h4 mt-5">Methods</h3>
				<ul class="list-group mb-3">
					<li class="list-group-item list-group-item-primary">
						setFeedback
					</li>
					<li class="list-group-item">
						Set the input to valid or invald state and optionally display a feedback message.
					</li>
					<li class="list-group-item">
						<samp class="d-block">setFeedback(valid)</samp>
						<samp class="d-block">setFeedback(valid, feedback)</samp>
					</li>
					<li class="list-group-item">
						<table class="table table-sm">
							<thead class="">
								<tr>
									<th>Parameter</th>
									<th>Type</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><code>valid</code></td>
									<td>boolean</td>
									<td><code>true</code> for success or <code>false</code> for an error.</td>
								</tr>
								<tr>
									<td><code>feedback</code></td>
									<td>string | array</td>
									<td>The feedback message(s).</td>
								</tr>
							</tbody>
						</table>
					</li>
				</ul>
				<ul class="list-group mb-3">
					<li class="list-group-item list-group-item-primary">
						clearValidation
					</li>
					<li class="list-group-item">
						Clears the input of all validations.
					</li>
					<li class="list-group-item">
						<samp class="d-block">clearValidation()</samp>
					</li>
				</ul>

				<h3 id="inputcomponent-manualvalidation" class="h4 mt-5">Manual validating input</h3>
				<p>
					To show validation for an input field just call the <var>setFeedback()</var> function of the component 
					or call the <var>clearValidation()</var> to clear all validations on this component.
				</p>
				<div class="d-flex justify-content-between">
					<h6>Example:</h6>
					<a
						href="#"
						onclick="event.preventDefault()"
						data-bs-files="FHC-Core-Extension
						public/js/apps/examples/Form/Input.js" data-bs-toggle="tooltip"
						data-bs-placement="left"
						data-bs-html="true"
						data-bs-custom-class="filelist"
						>
						<i class="fa-solid fa-circle-info"></i>
					</a>
				</div>
				<section class="border p-3 mb-3">
					<div id="example-form-input"></div>
				</section>


				<h2 id="validationcomponent" class="h3 mt-5 mb-0">Validation component</h2>
				<p class="lead">/public/js/components/Form/Validation.js</p>
				<p>
					The Validation component handles validation if no appropriate Input component is available.
				</p>
				<p>
					It is basically a <a href="https://getbootstrap.com/docs/5.0/components/alerts/">Bootstrap Alert</a>.
				</p>
				<p>
					Other than the Input component it can take success and error messages at the same time.
				</p>

				<h3 id="validationcomponent-methods" class="h4 mt-5">Methods</h3>
				<ul class="list-group mb-3">
					<li class="list-group-item list-group-item-primary">
						setFeedback
					</li>
					<li class="list-group-item">
						Set error or success messages. When error messages are set, success messages are not removed and vice versa.
					</li>
					<li class="list-group-item">
						<samp class="d-block">setFeedback(valid, feedback)</samp>
					</li>
					<li class="list-group-item">
						<table class="table table-sm">
							<thead class="">
								<tr>
									<th>Parameter</th>
									<th>Type</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><code>valid</code></td>
									<td>boolean</td>
									<td><code>true</code> for setting success messages or <code>false</code> for error messages.</td>
								</tr>
								<tr>
									<td><code>feedback</code></td>
									<td>string | array</td>
									<td>The feedback message(s).</td>
								</tr>
							</tbody>
						</table>
					</li>
				</ul>
				<ul class="list-group mb-3">
					<li class="list-group-item list-group-item-primary">
						clearValidation
					</li>
					<li class="list-group-item">
						Clears the validation of all messages.
					</li>
					<li class="list-group-item">
						<samp class="d-block">clearValidation()</samp>
					</li>
				</ul>
				<div class="d-flex justify-content-between">
					<h6>Example:</h6>
					<a
						href="#"
						onclick="event.preventDefault()"
						data-bs-files="FHC-Core-Extension/public/js/apps/examples/Form/Validation.js"
						data-bs-toggle="tooltip"
						data-bs-placement="left"
						data-bs-html="true"
						data-bs-custom-class="filelist"
						>
						<i class="fa-solid fa-circle-info"></i>
					</a>
				</div>
				<section class="border p-3 mb-3">
					<div id="example-form-validation"></div>
				</section>


				<h2 id="formcomponent" class="h3 mt-5 mb-0">Form component</h2>
				<p class="lead">/public/js/components/Form/Form.js</p>
				<p>
					If you want to handle validation for multiple Input and Validation components in one go, you can use the From component.
				</p>
				
				<h3 id="formcomponent-props" class="h4 mt-5">Properties</h3>
				<table class="table">
					<thead>
						<tr>
							<th>Property</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>tag</code></td>
							<td>string</td>
							<td><code>'form'</code></td>
							<td>
								Change the HTML tag.
							</td>
						</tr>
					</tbody>
				</table>
				
				<h3 id="formcomponent-methods" class="h4 mt-5">Methods</h3>
				<ul class="list-group mb-3">
					<li class="list-group-item list-group-item-primary">
						setFeedback
					</li>
					<li class="list-group-item">
						Set feedback for Input and Validation components inside this Form.<br><br>
						Returns: an <code>array</code> of not handled feedback messages (only possible if <code>$fhcAlert</code> is not available) 
						or <code>null</code>
					</li>
					<li class="list-group-item">
						<samp class="d-block">setFeedback(valid, feedback)</samp>
					</li>
					<li class="list-group-item">
						<table class="table table-sm">
							<thead class="">
								<tr>
									<th>Parameter</th>
									<th>Type</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><code>valid</code></td>
									<td>boolean</td>
									<td><code>true</code> for setting success messages or <code>false</code> for error messages.</td>
								</tr>
								<tr>
									<td><code>feedback</code></td>
									<td>string | array | object</td>
									<td>
										The feedback message(s).<br>
										If a <code>string</code> or an <code>array</code> are given 
										they will be displayed on Validation components or Input components without a <code>name</code> property.<br>
										An object must be an associative array 
										where the keys correspond to the Input components <code>name</code> property.
										If none such Input component is found 
										it will be displayed on Validation components or Input components without a <code>name</code> property.<br>
										If there is no component available to display the message, it will either be send to <code>$fhcAlert</code> 
										or added to the return value.
									</td>
								</tr>
							</tbody>
						</table>
					</li>
				</ul>
				<ul class="list-group mb-3">
					<li class="list-group-item list-group-item-primary">
						clearValidation
					</li>
					<li class="list-group-item">
						Clears the validation of all messages.
					</li>
					<li class="list-group-item">
						<samp class="d-block">clearValidation()</samp>
					</li>
				</ul>
				<ul class="list-group mb-3">
					<li class="list-group-item list-group-item-primary">
						get
					</li>
					<li class="list-group-item">
						This will make an axios get call with added error handling and automated validation handling for this form.
						For form validation it will use the <code>name</code> properties of the Input components.
						If no Input component is found the validation will be displayed in the Validation components 
						or if none is available as fhcAlert.<br><br>
						Returns: <code>Promise</code>
					</li>
					<li class="list-group-item">
						<samp class="d-block">get(config)</samp>
						<samp class="d-block">get(uri, params)</samp>
						<samp class="d-block">get(uri, params, config)</samp>
					</li>
					<li class="list-group-item">
						<table class="table table-sm">
							<thead class="">
								<tr>
									<th>Parameter</th>
									<th>Type</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><code>uri</code></td>
									<td>string</td>
									<td>An absolute URL or one relative to the codeigniter router path</td>
								</tr>
								<tr>
									<td><code>params</code></td>
									<td>URLSearchParams | object</td>
									<td>The GET parameters</td>
								</tr>
								<tr>
									<td><code>config</code></td>
									<td>object</td>
									<td>
										An axios config object.<br>
										If <code>uri</code> and <code>params</code> are not set they must be defined in here.<br>
										You can disable automatic validation by setting an <code>errorHandling</code> parameter here.
										Possible values for <code>errorHandling</code> are:<br>
										<code>true</code><span class="text-muted">(default)</span>, 
										<code>false</code>, 
										<code>'off'</code>, 
										<code>'fail'</code> or 
										<code>'success'</code>.
									</td>
								</tr>
							</tbody>
						</table>
					</li>
				</ul>
				<ul class="list-group mb-3">
					<li class="list-group-item list-group-item-primary">
						post
					</li>
					<li class="list-group-item">
						This will make an axios post call with added error handling and automated validation handling for this form.
						For form validation it will use the <code>name</code> properties of the Input components.
						If no Input component is found the validation will be displayed in the Validation components 
						or if none is available as fhcAlert.<br><br>
						Returns: <code>Promise</code>
					</li>
					<li class="list-group-item">
						<samp class="d-block">post(config)</samp>
						<samp class="d-block">post(uri)</samp>
						<samp class="d-block">post(uri, data)</samp>
						<samp class="d-block">post(uri, data, config)</samp>
					</li>
					<li class="list-group-item">
						<table class="table table-sm">
							<thead class="">
								<tr>
									<th>Parameter</th>
									<th>Type</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><code>uri</code></td>
									<td>string</td>
									<td>An absolute URL or one relative to the codeigniter router path</td>
								</tr>
								<tr>
									<td><code>params</code></td>
									<td>URLSearchParams | object</td>
									<td>The POST parameters</td>
								</tr>
								<tr>
									<td><code>config</code></td>
									<td>object</td>
									<td>
										An axios config object.<br>
										If <code>uri</code> and <code>data</code> are not set they must be defined in here.<br>
										You can disable automatic validation by setting an <code>errorHandling</code> parameter here.
										Possible values for <code>errorHandling</code> are:<br>
										<code>true</code><span class="text-muted">(default)</span>, 
										<code>false</code>, 
										<code>'off'</code>, 
										<code>'fail'</code> or 
										<code>'success'</code>.
									</td>
								</tr>
							</tbody>
						</table>
					</li>
				</ul>
				<div class="d-flex justify-content-between">
					<h6>Example:</h6>
					<a
						href="#"
						onclick="event.preventDefault()"
						data-bs-files="FHC-Core-Extension
						public/js/apps/examples/Form/Form.js" data-bs-toggle="tooltip"
						data-bs-placement="left"
						data-bs-html="true"
						data-bs-custom-class="filelist"
						>
						<i class="fa-solid fa-circle-info"></i>
					</a>
				</div>
				<section class="border p-3 mb-3">
					<div id="example-form-form"></div>
				</section>

				<h3 id="formcomponent-factory" class="h4 mt-5">API Factory</h3>
				<p>
					The Form component also exposes a <code>factory</code> object. There you will find all apifactory-endpoints...
				</p>
				<div class="alert alert-danger">TODO(chris): factory</div>
				
				<h3 id="formcomponent-modal" class="h4 mt-5">Use in Modal</h3>
				<p>
					To use a Form inside a Modal you can wrap the Form component around the Modal component and place Input and Validation components inside the Modal.
					This ensures that if the <code>submit buttom</code> is in the footer section of the modal it will still be inside the Form component and will trigger the submit event.
				</p>
				<pre class="border border-bottom-0 mb-0"><code class="language-js"><?= htmlentities(
					'import CoreForm from ".../public/js/components/Form/Form.js";' . "\n" .
					'import FormInput from ".../public/js/components/Form/Input.js";' . "\n" .
					'import BsModal from ".../public/js/components/Bootstrap/Modal.js";' . "\n" .
					"\n" .
					'export default {' . "\n" .
					'	...' . "\n" .
					'	methods: {' . "\n" .
					'		...' . "\n" .
					'		openModal() {' . "\n" .
					'			this.$refs.myModal.show()' . "\n" .
					'		},' . "\n" .
					'		sendData() {' . "\n" .
					'			this.$refs.myForm' . "\n" .
					'				// send data' . "\n" .
					'				.factory.my.end.point(this.formData)' . "\n" .
					'				.then(result => {' . "\n" .
					'					// do something with the result' . "\n" .
					'					// e.g: post a success message' . "\n" .
					'					this.$fhcAlert.alertSuccess(result.data)' . "\n" .
					'					// close modal' . "\n" .
					'					this.$refs.myModal.hide()' . "\n" .
					'				});' . "\n" .
					'		}' . "\n" .
					'	},' . "\n" .
					'	...' . "\n" .
					'}'
				); ?></code></pre>
				<pre class="border"><code class="language-html"><?= htmlentities(
					'<button class="..." @click="openModal">Open the modal</button>' . "\n" .
					"\n" .
					'<core-form ref="myForm">' . "\n" .
					'	<bs-modal ref="myModal">' . "\n" .
					'		<template #default>' . "\n" .
					'			<form-input v-model="formData.input1" name="input1"></form-input>' . "\n" .
					'			...' . "\n" .
					'		</template>' . "\n" .
					'		<template #footer>' . "\n" .
					'			<button type="submit" class="...">Send</button>' . "\n" .
					'		</template>' . "\n" .
					'	</bs-modal>' . "\n" .
					'</core-form>'
				); ?></code></pre>
				<div class="d-flex justify-content-between">
					<h6>Example:</h6>
					<a
						href="#"
						onclick="event.preventDefault()"
						data-bs-files="FHC-Core-Extension
						public/js/apps/examples/Form/Modal.js, FHC-Core-Extension/controllers/components/Form.php::modal()" data-bs-toggle="tooltip"
						data-bs-placement="left"
						data-bs-html="true"
						data-bs-custom-class="filelist"
						>
						<i class="fa-solid fa-circle-info"></i>
					</a>
				</div>
				<section class="border p-3 mb-3">
					<div id="example-form-modal"></div>
				</section>
				TODO(chris): examples


				<h6 class="text-muted text-end">public/js/apps/examples/Form1.js</h6>
				<section class="border p-3">
					<div id="example-form-1"></div>
				</section>
				<pre class="border border-top-0"><code class="language-html"><?= htmlentities('<div class="test">testy</div>'); ?></code></pre>
			</main>
		</div>
	</div>

	<style type="text/css">
		@import url("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css");
	</style>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
	<script>hljs.configure({cssSelector:'pre code:not([data-highlighted="yes"])'});hljs.highlightAll();</script>

<?php $this->load->view('templates/FHC-Footer', $includesArray); ?>
