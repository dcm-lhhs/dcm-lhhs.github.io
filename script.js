function download() {
	if (
		confirm(
			"You will need to type UCI commands manually to use the executable file. Are you sure you wish to continue?"
		)
	) {
		window.open(
			"https://nbed-my.sharepoint.com/:u:/g/personal/davcab32906_nbss_nbed_nb_ca/EaT6l4sIy4VEkqFV_8YHMi0Bd4z2_LsJpc6FR3vk9dXpeA?e=KYB8ke"
		),
			"_blank";
	}
}

let instructionsTitle = document.getElementById("instructions-title");
let instructionsContent = document.getElementById("instructions-content");
let lichessInstructionsBtn = document.getElementById(
	"lichess-instructions-btn"
);
let githubInstructionsBtn = document.getElementById("github-instructions-btn");
let exeInstructionsBtn = document.getElementById("exe-instructions-btn");

function changeInstructionsToLichess() {
	instructionsTitle.innerHTML = "Lichess instructions";
	instructionsContent.innerHTML = `<p id="instructions-text">
	It's really easy to play MasterMindAI in
	<a href="https://lichess.org" target="_blank"
		>lichess.org</a
	>! Just create an account
	<a href="https://lichess.org/signup" target="_blank"
		>here</a
	>
	if you don't have one already. Log in, go to the
	<a
		href="https://lichess.org/@/MasterMindAI"
		target="_blank"
		>MasterMindAI lichess profile</a
	>, press the challenge button, set a time and a color
	and you're good to go!
</p>

<div class="img-container">
	<img
		src="./static/lichess1.JPG"
		alt="Instructions screenshot 1"
		height="50"
		width="300"
	/>
</div>
<div class="img-container">
	<img
		src="./static/lichess2.JPG"
		alt="Instructions screenshot 2"
		height="410"
		width="300"
	/>
</div>`;
}

function changeInstructionsToGitHub() {
	instructionsTitle.innerHTML = "GitHub instructions";
	instructionsContent.innerHTML = `<p id="instructions-text">
	MasterMindAI is completely open source, and you can see
	and contribute to the source code in the
	<a href="https://github.com/davidcm-dev/MasterMindAI" target="_blank"
		>GitHub repository</a
	>. Just
	<a href="https://github.com/signup" target="_blank"
		>create an account</a
	>
	and read
	<a
		href="https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project"
		target="_blank"
		>this article</a
	>
	if you don't know how to contribute to a public GitHub
	repository.
</p>

<div class="img-container">
	<img
		src="./static/github.JPG"
		alt="Instructions screenshot 1"
		height="340"
		width="750"
	/>
</div>`;
}

function changeInstructionsToExe() {
	instructionsTitle.innerHTML = "Executable instructions";
	instructionsContent.innerHTML = `<p id="instructions-text">
	MasterMindAI currently doesn't support its use for
	analysis in chess GUIs like Fritz or ChessBase (feel
	free to contribute to the
	<a href="https://github.com/davidcm-dev/MasterMindAI" target="_blank"
		>source code</a
	>
	to make it possible!) If you want to use the executable
	(.exe) version, you will need to directly type UCI
	commands into the console. You can learn about the UCI
	chess protocol
	<a
		href="https://backscattering.de/chess/uci/"
		target="_blank"
		>here</a
	>.
</p>

<div class="img-container">
	<img
		src="./static/uci.png"
		alt="Instructions screenshot 1"
		height="340"
		width="600"
	/>
</div>`;
}

lichessInstructionsBtn.addEventListener("click", changeInstructionsToLichess);
githubInstructionsBtn.addEventListener("click", changeInstructionsToGitHub);
exeInstructionsBtn.addEventListener("click", changeInstructionsToExe);

function copyEmail() {
	navigator.clipboard.writeText("davcab32906@nbss.nbed.nb.ca");
	alert("Email address copied to clipboard.");
}

function copyUrl() {
	navigator.clipboard.writeText("https://dcm-lhhs.github.io");
	alert("Website URL copied to clipboard");
}
