<script setup lang="ts">
import {NuxtApp} from "#app";
import Route from "~/enums/Route";
import Button from "~/components/UI/Button.vue";
import Color from "~/enums/Color";

const {$router, $user}: NuxtApp = useNuxtApp();

const signOutHandler = () => {
  $user.logout();
  $router.push(Route.AUTH_SIGNIN);
};

</script>

<template>
  <header>
	<div class="logo">
	  <h2>BIRQSIL</h2>
	</div>
	<div class="profile">
	  <p v-if="!$user.isGuest">User: {{ $user.identity.email }}</p>
	  <div class="submit-button-container">
		<Button
			@click="signOutHandler"
			:color="Color.PRIMARY"
			:large="true"
		>
		  {{ $t('Logout') }}
		</Button>
	  </div>
	</div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .3rem 0;
  
  .profile {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
  }
}
</style>