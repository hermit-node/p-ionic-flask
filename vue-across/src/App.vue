<script setup lang="ts">
import {
	IonApp,
	IonContent,
	IonHeader,
	IonItem,
	IonLabel,
	IonList,
	IonMenu,
	IonMenuToggle,
	IonRouterOutlet,
	IonTitle,
	IonToolbar
} from '@ionic/vue';
import { hoistRouter } from 'pages/router';
import { onBeforeUnmount, onMounted, ref } from 'vue';

hoistRouter();

const mobileMenuEnabled = ref(false);
let mobileQuery: MediaQueryList | undefined;

const syncMobileMenu = (event: MediaQueryList | MediaQueryListEvent) => {
	mobileMenuEnabled.value = event.matches;
};

onMounted(() => {
	mobileQuery = window.matchMedia('(max-width: 900px)');
	syncMobileMenu(mobileQuery);
	mobileQuery.addEventListener('change', syncMobileMenu);
});

onBeforeUnmount(() => {
	mobileQuery?.removeEventListener('change', syncMobileMenu);
});
</script>

<template>
	<ion-app>
		<ion-menu id="site-menu" content-id="main-content" side="end" type="overlay" :disabled="!mobileMenuEnabled">
			<ion-header>
				<ion-toolbar>
					<ion-title>Ionic Flask</ion-title>
				</ion-toolbar>
			</ion-header>

			<ion-content class="mobile-drawer">
				<p class="mobile-drawer__eyebrow">Navigate</p>
				<ion-list lines="none">
					<ion-menu-toggle :auto-hide="false">
						<ion-item router-link="/" router-direction="root" :detail="false">
							<ion-label>Home</ion-label>
						</ion-item>
					</ion-menu-toggle>
					<ion-menu-toggle :auto-hide="false">
						<ion-item router-link="/about" router-direction="forward" :detail="false">
							<ion-label>About</ion-label>
						</ion-item>
					</ion-menu-toggle>
					<ion-menu-toggle :auto-hide="false">
						<ion-item router-link="/#features" router-direction="root" :detail="false">
							<ion-label>Features</ion-label>
						</ion-item>
					</ion-menu-toggle>
				</ion-list>

				<div class="mobile-drawer__footer">
					<span>Vue · Ionic · Flask</span>
					<strong>One foundation, every screen.</strong>
				</div>
			</ion-content>
		</ion-menu>

		<ion-router-outlet id="main-content" />
	</ion-app>
</template>
