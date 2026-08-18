<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar } from '@ionic/vue';
</script>

<template>
	<ion-page>
		<ion-header class="site-header">
			<ion-toolbar class="site-toolbar">
				<div class="site-nav">
					<router-link class="site-brand" to="/" aria-label="Ionic Flask home">
						<span class="site-brand__mark">IF</span>
						<span>Ionic Flask</span>
					</router-link>

					<nav class="desktop-nav" aria-label="Primary navigation">
						<router-link to="/">Home</router-link>
						<router-link to="/#features">Features</router-link>
						<router-link to="/about">About</router-link>
					</nav>

					<div class="site-nav__actions">
						<ion-button class="desktop-nav__cta" size="small" router-link="/about">Explore starter</ion-button>
						<ion-menu-button class="mobile-menu-button" menu="site-menu" aria-label="Open navigation menu" />
					</div>
				</div>
			</ion-toolbar>
		</ion-header>
		<ion-content class="site-content">
			<slot></slot>
		</ion-content>
	</ion-page>
</template>
