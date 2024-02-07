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
			'public/extensions/FHC-Core-Extension/js/apps/examples/Form1.js'
		]
	];
	$this->load->view('templates/FHC-Header', $includesArray);
?>

	<div id="main">
		<div id="nav">
			<core-navigation-cmpt :add-side-menu-entries="menu"></core-navigation-cmpt>
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
					<a href="#formcomponent" class="list-group-item list-group-item-action">Form component</a>
				</div>
			</aside>
			<main class="col-lg-9">
				<h2 id="inputcomponent" class="h3 mb-0">
					Input component
				</h2>
				<p class="lead">/public/js/components/Form/Input.js</p>
				<p>
					The Input component handles validation for about any input field.
				</p>

				<h3 id="inputcomponent-props" class="h4">Properties</h3>
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

				<h3 id="inputcomponent-methods" class="h4">Methods</h3>
				<!-- TODO(chris): better style for method reference -->
				<table class="table">
					<thead>
						<tr>
							<th>Method</th>
							<th>Parameters</th>
							<th>Return</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>setFeedback</code></td>
							<td>
								<dl>
									<dt>valid <code>boolean</code></dt>
									<dd><code>true</code> for success or <code>false</code> for an error.</dd>
									<dt>feedback <code>string | array</code> <span class="text-muted">optional</span></dt>
									<dd>The feedback message.</dd>
								</dl>
							</td>
							<td><code>void</code></td>
							<td>Set the input to valid or invald state and optionally display a feedback message.</td>
						</tr>
						<tr>
							<td><code>clearValidation</code></td>
							<td>none</td>
							<td><code>void</code></td>
							<td>
								Clears the input of all validations.
							</td>
						</tr>
					</tbody>
				</table>

				<h3 id="inputcomponent-manualvalidation" class="h4">Manual validating input</h3>
				<p>
					To show validation for an input field just call the <var>setFeedback()</var> function of the component 
					or call the <var>clearValidation()</var> to clear all validations on this component.
				</p>
				<div class="d-flex justify-content-between">
					<h6>Example:</h6>
					<a href="#" title="FHC-Core-Extension/public/js/apps/examples/Form/Input.js" data-bs-toggle="tooltip" data-bs-placement="left">
						<i class="fa-solid fa-circle-info"></i>
					</a>
				</div>
				<section class="border p-3 mb-3">
					<div id="example-form-input"></div>
				</section>


				<h2 id="validationcomponent" class="h3 mb-0">
					Validation component
				</h2>
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
				<p class="alert alert-danger">TODO(chris): function reference</p>
				<div class="d-flex justify-content-between">
					<h6>Example:</h6>
					<a href="#" title="FHC-Core-Extension/public/js/apps/examples/Form/Validation.js" data-bs-toggle="tooltip" data-bs-placement="left">
						<i class="fa-solid fa-circle-info"></i>
					</a>
				</div>
				<section class="border p-3 mb-3">
					<div id="example-form-validation"></div>
				</section>


				<h2 id="formcomponent" class="h3 mb-0">
					Form component
				</h2>
				<p class="lead">/public/js/components/Form/Form.js</p>
				<p>
					If you want to handle validation for multiple Input and Validation components in one go, you can use the From component.
				</p>



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
	<script>hljs.highlightAll();</script>

<?php $this->load->view('templates/FHC-Footer', $includesArray); ?>

