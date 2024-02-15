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
import FhcAlert from "../../../../../../js/plugin/FhcAlert.js";

// Create App:
// ==========
const app = Vue.createApp({
	methods: {
		alertSuccess(){
			this.$fhcAlert.alertSuccess('Success');
		},
		alertInfo(){
			this.$fhcAlert.alertInfo('Info');
		},
		alertWarning(){
			this.$fhcAlert.alertWarning('Warning message is sticky');
		},
		alertError(){
			this.$fhcAlert.alertError('Error message is sticky');
		},
		alertDefault(){
			this.$fhcAlert.alertDefault('info', 'My Custom Title', 'My message', true);
		},
		alertMultipleDefault(){
			let msgArr = [
				'Message A',
				'Message B',
				'Message C'
			]
			this.$fhcAlert.alertMultiple(msgArr);
		},
		alertMultipleCustom(){
			let msgArr = [
				'Message A',
				'Message B',
				'Message C'
			]
			this.$fhcAlert.alertMultiple(msgArr, 'success', 'Sticky success messages', true);
		},
		handleSystemMessage(){
			this.$fhcAlert.handleSystemMessage('My serverside implemented message to user');
		},
		handleSystemError(){
			this.$fhcAlert.handleSystemError('System Error Message');
		},
		async confirmDelete(){
			if (await this.$fhcAlert.confirmDelete() === false) return;
		}
	},
	template: `
	<div class="app-example-alerts-basic row gy-3">
		<div class="col-9">
			<pre class="border"><code class="language-js hljs language-javascript" data-highlighted="yes"><span class="hljs-variable language_">this</span>.<span class="hljs-property">$fhcAlert</span>.<span class="hljs-title function_">alertSuccess</span>(<span class="hljs-string">'Success'</span>);</code></pre>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100 w-100" @click="alertSuccess">Alert Success</button>
		</div>
		<div class="col-9">
			<pre class="border"><code class="language-js hljs language-javascript" data-highlighted="yes"><span class="hljs-variable language_">this</span>.<span class="hljs-property">$fhcAlert</span>.<span class="hljs-title function_">alertInfo</span>(<span class="hljs-string">'Info'</span>);</code></pre>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100 w-100" @click="alertInfo">Alert Info</button>
		</div>
		<div class="col-9">
			<pre class="border"><code class="language-js hljs language-javascript" data-highlighted="yes"><span class="hljs-variable language_">this</span>.<span class="hljs-property">$fhcAlert</span>.<span class="hljs-title function_">alertWarning</span>(<span class="hljs-string">'Warning message is sticky'</span>);</code></pre>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="alertWarning">Alert Warning</button>
		</div>
		<div class="col-9">
			<pre class="border"><code class="language-js hljs language-javascript" data-highlighted="yes"><span class="hljs-variable language_">this</span>.<span class="hljs-property">$fhcAlert</span>.<span class="hljs-title function_">alertError</span>(<span class="hljs-string">'Error message is sticky'</span>);</code></pre>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="alertError">Alert Error</button>
		</div>
		<div class="col-9">
			<pre class="border"><code class="language-js hljs language-javascript" data-highlighted="yes"><span class="hljs-variable language_">this</span>.<span class="hljs-property">$fhcAlert</span>.<span class="hljs-title function_">alertDefault</span>(<span class="hljs-string">'info'</span>, <span class="hljs-string">'Mein Custom Titel'</span>, <span class="hljs-string">'Meine Message'</span>, <span class="hljs-literal">true</span>);</code></pre>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="alertDefault">Alert Default (Custom)</button>
		</div>
		<div class="col-9">
			<pre class="border"><code class="language-js hljs language-javascript" data-highlighted="yes"><span class="hljs-variable language_">this</span>.<span class="hljs-property">$fhcAlert</span>.<span class="hljs-title function_">handleSystemMessage</span>(<span class="hljs-string">'My implemented message to user'</span>);</code></pre>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="handleSystemMessage">Handle System-Message</button>
		</div>
		<div class="col-9">
			<pre class="border"><code class="language-js hljs language-javascript" data-highlighted="yes"><span class="hljs-variable language_">this</span>.<span class="hljs-property">$fhcAlert</span>.<span class="hljs-title function_">handleSystemError</span>(<span class="hljs-string">'System Error Message'</span>);</code></pre>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="handleSystemError">Handle System-Error</button>
		</div>
		<div class="col-9">
			<pre class="border"><code class="language-js hljs language-javascript" data-highlighted="yes"><span class="hljs-keyword">async</span> <span class="hljs-title function_">confirmDelete</span>(<span class="hljs-params"></span>) {
	<span class="hljs-keyword">if</span> (<span class="hljs-keyword">await</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">$fhcAlert</span>.<span class="hljs-title function_">confirmDelete</span>() === <span class="hljs-literal">false</span>)
		<span class="hljs-keyword">return</span>;
}</code></pre>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="confirmDelete">Confirm Delete</button>
		</div>
		<div class="col-9">
			<pre class="border"><code class="language-js hljs language-javascript" data-highlighted="yes"><span class="hljs-keyword">let</span> msgArr = [
	<span class="hljs-string">'Message A'</span>,
	<span class="hljs-string">'Message B'</span>,
	<span class="hljs-string">'Message C'</span>
];

<span class="hljs-variable language_">this</span>.<span class="hljs-property">$fhcAlert</span>.<span class="hljs-title function_">alertMultiple</span>(msgArr);</code></pre>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="alertMultipleDefault">Alert Multiple Default</button>
		</div>
		<div class="col-9">
			<pre class="border"><code class="language-js hljs language-javascript" data-highlighted="yes"><span class="hljs-keyword">let</span> msgArr = [
	<span class="hljs-string">'Message A'</span>,
	<span class="hljs-string">'Message B'</span>,
	<span class="hljs-string">'Message C'</span>
];

<span class="hljs-variable language_">this</span>.<span class="hljs-property">$fhcAlert</span>.<span class="hljs-title function_">alertMultiple</span>(msgArr, <span class="hljs-string">'success'</span>, <span class="hljs-string">'Sticky success messages'</span>, <span class="hljs-literal">true</span>);</code></pre>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="alertMultipleCustom">Alert Multiple Custom</button>
		</div>
	</div>`
});

app
	// Use Plugins:
	// ===========
	// FhcAlert
	.use(FhcAlert)

	// Start the App:
	// =============
	.mount('#example-alert-basic');
