<template>
  <footer>
		<img class="qr-name-card" :src="`../assets/Blinq-QR.png`" alt="QR Name Card"/>
		<div class="footer-information">
			<i class="fa-regular fa-copyright fa-sm"></i>
			<strong style="margin-left: 5px;">Trystan Loke 2023</strong>
			<div class="footer-link">
				<a href="https://www.linkedin.com/in/mun-hou-loke/">
					<i class="fa-brands fa-linkedin-in fa-xl"></i>
				</a>
				<a href="https://github.com/trystan-loke">
					<i class="fa-brands fa-github fa-xl"></i>
				</a>
				<a href="mailto:loke1118@hotmail.com">
					<i class="fa-solid fa-envelope fa-xl"></i>
				</a>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
footer {
	display: flex;
	justify-content: center;
  margin-top: auto;
  width: 100%;
  padding: 20px 0px;
  background-color: #EFEFEF;
  color: black;
}

.qr-name-card {
	width: 50px;
}

.footer-information {
	margin-left: 15px;
}

.footer-link {
  margin-top: 5px;
}

.footer-link a{
  margin: 10px 10px 10px 14px;
  color: black;
}
</style>
