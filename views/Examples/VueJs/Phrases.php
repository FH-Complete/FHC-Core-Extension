<?php
	$includesArray = [
		'title' => 'My Extension - VueJs Examples - Phrases',
		'vue3' => true,
		'axios027' => true,
		'bootstrap5' => true,
		'fontawesome6' => true,
		'primevue3' => true,
		'navigationcomponent' => true,
		'filtercomponent' => true,
		'customCSSs' => [
			'public/extensions/FHC-Core-Extension/css/VueJs.css'
		],
		'customJSModules' => [
			// Load Vue Apps
			'public/extensions/FHC-Core-Extension/js/apps/Examples.js',
			'public/extensions/FHC-Core-Extension/js/apps/examples/Phrases/Dynamic.js',
			'public/extensions/FHC-Core-Extension/js/apps/examples/Phrases/Preload.js'
		]
	];
	$this->load->view('templates/FHC-Header', $includesArray);
?>

	<div id="main" data-bs-spy="scroll" data-bs-target="#sidenav">
		<div id="nav">
			<core-navigation-cmpt></core-navigation-cmpt>
		</div>

		<div id="content" class="row flex-row-reverse">
			<header class="fhc-header">
				<h1>VueJs Examples<small>Phrases</small></h1>
			</header>
			<aside class="col-lg-3">
				<div id="sidenav" class="list-group sticky-lg-top">
					<a href="#app" class="list-group-item list-group-item-action">Phrasen plugin</a>
					<a href="#translating" class="list-group-item list-group-item-action">Translating</a>
					<a href="#translating-component" class="list-group-item list-group-item-action">- Inside the component</a>
					<a href="#translating-template" class="list-group-item list-group-item-action">- In the template</a>
					<a href="#dynamicphrases" class="list-group-item list-group-item-action">Dynamic phrases</a>
					<a href="#preloadcategories" class="list-group-item list-group-item-action">Preload categories</a>
				</div>
			</aside>
			<main class="col-lg-9">
				<h2 id="app" class="h3 mb-0">Phrasen plugin</h2>
				<p class="lead">/public/js/plugin/Phrasen.js</p>
				<p>
					To use Phrases in Vue you need to add the Plugin to the app.
				</p>
				<pre class="border"><code class="language-javascript"><?= htmlentities(
					'...' . "\n" .
					"import Phrasen from '.../js/plugin/Phrasen.js';" . "\n" .
					'...' . "\n" .
					'const app = Vue.createApp(...);' . "\n" .
					'app.use(Phrasen);' . "\n" .
					'...'
				); ?></code></pre>
				<p>Then you have access to the global <code>$p</code> variable in each component.</p>
				
				
				<h2 id="translating" class="h3">Translating</h2>
				<p>Then you can use the Translate function <code>$p.t()</code> to translate phrases.</p>
				<p class="alert alert-danger">TODO(chris): function reference</p>

				<h3 id="translating-component" class="h4">Inside the component</h3>
				<pre class="border"><code class="language-javascript"><?= htmlentities(
					'// Separated by slash' . "\n" .
					'let variable = this.$p.t(\'category/phrase\');' . "\n" .
					'let variable_with_parameter = this.$p.t(\'category/phrase\', {param: \'value\'});' . "\n" .
					"\n" .
					'// Two strings' . "\n" .
					'let variable = this.$p.t(\'category\', \'phrase\');' . "\n" .
					'let variable_with_parameter = this.$p.t(\'category\', \'phrase\', {param: \'value\'});' . "\n" .
					"\n" .
					'// As array' . "\n" .
					'let variable = this.$p.t([\'category\', \'phrase\']);' . "\n" .
					'let variable_with_parameter = this.$p.t([\'category\', \'phrase\'], {param: \'value\'});'
				); ?></code></pre>
				
				<h3 id="translating-template" class="h4">In the template</h3>
				<pre class="border"><code class="language-html"><?= htmlentities(
					'<!-- Phrase as Text Element -->' . "\n" .
					'<button type="submit" class="...">' . "\n" .
					'	{{ $p.t(\'category/phrase\') }}' . "\n" .
					'</button>' . "\n" .
					"\n" .
					'<!-- Phrase in Attribute -->' . "\n" .
					'<input type="submit" class="..." :value="$p.t(\'category/phrase\')">'
				); ?></code></pre>

				
				<h2 id="dynamicphrases" class="h3">Dynamic phrases</h2>
				<p>
					Phrases are reactive. If the arguments in the translate function changes so does the phrase.
				</p>
				<div class="d-flex justify-content-between">
					<h6>Example:</h6>
					<a href="#" title="FHC-Core-Extension/public/js/apps/examples/Phrases/Dynamic.js" data-bs-toggle="tooltip" data-bs-placement="left">
						<i class="fa-solid fa-circle-info"></i>
					</a>
				</div>
				<section class="border p-3 mb-3">
					<div id="example-phrases-dynamic"></div>
				</section>

				
				<h2 id="preloadcategories" class="h3">Preload categories</h2>
				<p>
					Phrases get loaded asynchronous, but sometimes it's needed that a phrase is present before some tasks are executed.
					In this case you can call <code>$p.loadCategory</code> which returns a <code>Promise</code> after which you can execute the code.
				</p>
				<p class="alert alert-danger">TODO(chris): function reference</p>
				<pre class="border"><code class="language-javascript"><?= htmlentities(
					'// Preload one category' . "\n" .
					'this.$p.loadCategory(\'category\').then(() => {' . "\n" .
					'	let phrase = this.$p.t(\'category/phrase\');' . "\n" .
					'	...' . "\n" .
					'});' . "\n" .
					"\n" .
					'// Preload multiple categories' . "\n" .
					'this.$p.loadCategory([\'category1\', \'category2\']).then(() => {' . "\n" .
					'	let phrase1 = this.$p.t(\'category1/phrase\');' . "\n" .
					'	let phrase2 = this.$p.t(\'category2/phrase\');' . "\n" .
					'	...' . "\n" .
					'});'
				); ?></code></pre>
				<div class="d-flex justify-content-between">
					<h6>Example:</h6>
					<a href="#" title="FHC-Core-Extension/public/js/apps/examples/Phrases/Preload.js" data-bs-toggle="tooltip" data-bs-placement="left">
						<i class="fa-solid fa-circle-info"></i>
					</a>
				</div>
				<section class="border p-3 mb-3">
					<div id="example-phrases-preload"></div>
				</section>
			</main>
		</div>
	</div>

	<style type="text/css">
		@import url("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css");
	</style>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
	<script>hljs.highlightAll();</script>

<?php $this->load->view('templates/FHC-Footer', $includesArray); ?>

